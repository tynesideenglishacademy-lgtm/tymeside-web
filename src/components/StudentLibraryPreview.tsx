import StudentLibrary from './StudentLibrary'

// Development-only page for reviewing the student library without signing in.
// It is registered in App.tsx only when import.meta.env.DEV is true, so it is
// not part of the production build. Activity events are logged to the console.
export default function StudentLibraryPreview() {
  return (
    <main className="student-area" style={{ padding: '2rem 1rem' }}>
      <StudentLibrary trackActivity={(event) => { console.info('[preview] activity', event) }} />
    </main>
  )
}
