/**
 * The shape of the one table this site is allowed to touch.
 *
 * Hand-written rather than generated. The CRM shares this database and its
 * schema is large and private; this repo is public, so only the slice the
 * public site actually writes belongs in here.
 *
 * Typing the client is the point: it turns a stray column into a build error
 * instead of a silent 400 at runtime. Three of the four marketing forms sent
 * a `course` field that this table has never had, so every submission to them
 * failed and the visitor got the error screen. Nothing caught it because
 * `createClient` without this generic accepts any object at all.
 */
export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          name: string;
          email: string | null;
          phone: string | null;
          status: string | null;
          notes: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email?: string | null;
          phone?: string | null;
          status?: string | null;
          notes?: string | null;
          created_at?: string | null;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
