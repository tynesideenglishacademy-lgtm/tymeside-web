import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

type Props = { children: ReactNode };
type State = { hasError: boolean };

class StudentAreaErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Student area failed to load:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <>
        <Navigation />
        <main className="student-error-page">
          <div className="container student-error-panel" role="alert">
            <p className="student-access-kicker">Área de alumnos</p>
            <h1>No hemos podido abrir tu área.</h1>
            <p>Tu cuenta y tus datos siguen seguros. Vuelve a intentarlo o contacta con secretaría si el problema continúa.</p>
            <div>
              <button type="button" className="btn-editorial-primary" onClick={() => window.location.reload()}>Volver a intentar</button>
              <Link to="/recursos" className="text-link">Ver recursos públicos</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default StudentAreaErrorBoundary;
