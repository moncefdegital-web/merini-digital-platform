import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("MERINI DIGITAL runtime error", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-white px-6 py-24 text-center text-[#111111]">
          <div className="mx-auto max-w-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#12B8C4]">
              MERINI DIGITAL
            </p>
            <h1 className="mb-4 text-3xl font-bold">Something went wrong.</h1>
            <p className="mb-8 text-gray-600">Please reload the page to continue.</p>
            <button
              type="button"
              onClick={this.handleReload}
              className="rounded-xl bg-[#050505] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#12B8C4]"
            >
              Reload
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
