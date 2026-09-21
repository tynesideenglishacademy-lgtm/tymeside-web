import { useCallback, useEffect, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';

export interface StudentProfile {
  id: string;
  name: string;
  surname: string | null;
  status: string | null;
}

type SessionState = {
  loading: boolean;
  session: Session | null;
  student: StudentProfile | null;
  error: string;
};

const initialState: SessionState = {
  loading: true,
  session: null,
  student: null,
  error: '',
};

export const useStudentSession = () => {
  const [state, setState] = useState<SessionState>(initialState);
  const lastSessionEvent = useRef<string | null>(null);
  // signOut() below fires onAuthStateChange (SIGNED_OUT), which schedules its
  // own resolveStudent(null) and would otherwise wipe the error message we're
  // setting in the same branch a tick later. Set before signOut() and
  // consumed once by the listener so that follow-up run is a no-op.
  const suppressNextAuthEvent = useRef(false);

  const resolveStudent = useCallback(async (session: Session | null) => {
    if (!session) {
      setState({ loading: false, session: null, student: null, error: '' });
      return;
    }

    const role = session.user.app_metadata?.role;
    if (role !== 'Student') {
      suppressNextAuthEvent.current = true;
      await supabase.auth.signOut();
      setState({
        loading: false,
        session: null,
        student: null,
        error: 'Esta área está reservada al alumnado. Las cuentas de familias y personal acceden desde el CRM.',
      });
      return;
    }

    const { data, error } = await supabase
      .from('students')
      .select('id, name, surname, status')
      .eq('auth_id', session.user.id)
      .maybeSingle();

    if (error || !data) {
      suppressNextAuthEvent.current = true;
      await supabase.auth.signOut();
      setState({
        loading: false,
        session: null,
        student: null,
        error: 'La cuenta es válida, pero todavía no está vinculada a una ficha de alumno. Contacta con secretaría.',
      });
      return;
    }

    setState({ loading: false, session, student: data as StudentProfile, error: '' });

    if (lastSessionEvent.current !== session.user.id) {
      lastSessionEvent.current = session.user.id;
      const { error: activityError } = await supabase.from('student_resource_activity').insert({
        student_id: data.id,
        auth_user_id: session.user.id,
        event_type: 'session_started',
        metadata: { surface: 'website' },
      });
      if (activityError) console.warn('Could not record student session activity', activityError.message);
    }
  }, []);

  useEffect(() => {
    let active = true;

    void supabase.auth.getSession().then(({ data }) => {
      if (active) void resolveStudent(data.session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (suppressNextAuthEvent.current) {
        suppressNextAuthEvent.current = false;
        return;
      }
      window.setTimeout(() => {
        if (active) void resolveStudent(session);
      }, 0);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, [resolveStudent]);

  const signIn = useCallback(async (email: string, password: string) => {
    setState((current) => ({ ...current, loading: true, error: '' }));
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error || !data.session) {
      setState({
        loading: false,
        session: null,
        student: null,
        error: 'No hemos podido iniciar sesión. Comprueba el correo y la contraseña.',
      });
      return false;
    }

    await resolveStudent(data.session);
    return data.user.app_metadata?.role === 'Student';
  }, [resolveStudent]);

  const signOut = useCallback(async () => {
    lastSessionEvent.current = null;
    await supabase.auth.signOut();
    setState({ loading: false, session: null, student: null, error: '' });
  }, []);

  const trackActivity = useCallback(async (event: {
    eventType: string;
    resourceKey?: string;
    resourceTitle?: string;
    resourceLevel?: string;
    metadata?: Record<string, unknown>;
  }) => {
    if (!state.session || !state.student) return;
    const { error } = await supabase.from('student_resource_activity').insert({
      student_id: state.student.id,
      auth_user_id: state.session.user.id,
      event_type: event.eventType,
      resource_key: event.resourceKey ?? null,
      resource_title: event.resourceTitle ?? null,
      resource_level: event.resourceLevel ?? null,
      metadata: event.metadata ?? {},
    });
    if (error) console.warn('Could not record student resource activity', error.message);
  }, [state.session, state.student]);

  return { ...state, signIn, signOut, trackActivity };
};
