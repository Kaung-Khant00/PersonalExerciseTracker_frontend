import { FaShieldAlt } from "react-icons/fa";

function AuthLoading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Icon */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse"></div>
          <div className="relative p-6 rounded-full bg-base-100 shadow-xl">
            <FaShieldAlt className="text-5xl text-primary" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-wide">
            Authenticating
          </h1>
          <p className="mt-2 text-sm text-base-content/70">
            Verifying your identity and preparing your workspace
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64">
          <progress className="progress progress-primary w-full"></progress>
        </div>

        {/* Footer hint */}
        <span className="text-xs text-base-content/50">
          Personal Tracker • Secure Session
        </span>
      </div>
    </div>
  );
}

export default AuthLoading;
