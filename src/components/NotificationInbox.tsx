import { useState, useEffect } from 'react';
import { Inbox } from '@novu/react';
import { supabase } from '../lib/supabaseClient';

function NotificationInbox() {
  const [subscriberId, setSubscriberId] = useState<string>('6a862cd6d65a21c4a9697574');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        setSubscriberId(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.id) {
        setSubscriberId(session.user.id);
      } else {
        setSubscriberId('6a862cd6d65a21c4a9697574');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const applicationIdentifier =
    import.meta.env.VITE_NOVU_APPLICATION_IDENTIFIER ||
    import.meta.env.REACT_APP_NOVU_APPLICATION_IDENTIFIER ||
    (typeof globalThis !== 'undefined' && (globalThis as Record<string, any>).process?.env?.REACT_APP_NOVU_APPLICATION_IDENTIFIER) ||
    'fZ5KO6oU9iTN';

  if (!applicationIdentifier) {
    console.error('REACT_APP_NOVU_APPLICATION_IDENTIFIER is not defined');
    return null;
  }

  return (
    <Inbox
      applicationIdentifier={applicationIdentifier}
      subscriberId={subscriberId}
      backendUrl={import.meta.env.VITE_NOVU_BACKEND_URL || 'https://eu.api.novu.co'}
      socketUrl={import.meta.env.VITE_NOVU_SOCKET_URL || 'https://eu.ws.novu.co'}
      appearance={{
        variables: {
          colorPrimary: '#C9A227',
          colorPrimaryForeground: '#1a1200',
          colorSecondary: '#1B3A5B',
          colorSecondaryForeground: '#F6F8FA',
          colorCounter: '#C9A227',
          colorCounterForeground: '#1a1200',
          colorBackground: '#12263A',
          colorRing: '#C9A227',
          colorForeground: '#F6F8FA',
          colorNeutral: '#9DB0C2',
          colorShadow: 'rgba(0, 0, 0, 0.28)',
          fontSize: '15px',
        },
        elements: {
          bellIcon: {
            color: '#F6F8FA',
          },
        },
      }}
    />
  );
}

export default NotificationInbox;
