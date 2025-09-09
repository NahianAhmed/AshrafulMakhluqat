import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AppError } from '../../types';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: AppError;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: AppError): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: AppError, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-4">
            <div className="text-center">
              <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Please refresh the page to try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}