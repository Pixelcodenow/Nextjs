"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/Products" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">
          Sign in with your Google account to continue
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-3 rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-700 font-medium shadow hover:shadow-md transition duration-300 hover:bg-gray-50"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8c0-17.8-1.6-35-4.6-51.6H249v97.8h135.6c-5.9 32-23.7 59-50.3 77.2v64.4h81.1c47.6-43.9 74.6-108.6 74.6-187.8z"
            />
            <path
              fill="currentColor"
              d="M249 492c67.5 0 124.1-22.4 165.5-60.9l-81.1-64.4c-22.6 15.2-51.2 24.1-84.3 24.1-64.9 0-119.8-43.7-139.5-102.3H27.7v64.8C68.5 435.1 151.7 492 249 492z"
            />
            <path
              fill="currentColor"
              d="M109.5 288.5c-4.5-13.2-7-27.3-7-41.5s2.5-28.3 7-41.5V141H27.7C10.1 176.2 0 215.3 0 256s10.1 79.8 27.7 115l81.8-64.5z"
            />
            <path
              fill="currentColor"
              d="M249 97.9c35.9 0 68.1 12.3 93.4 36.4l70-70C373.1 24.1 316.5 0 249 0 151.7 0 68.5 56.9 27.7 141l81.8 64.5c19.7-58.6 74.6-102.3 139.5-102.3z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>

        <div className="text-center text-gray-400 text-sm">
          By signing in, you agree to our{" "}
          <a href="#" className="text-cyan-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-cyan-600 hover:underline">
            Privacy Policy
          </a>.
        </div>
      </div>
    </main>
  );
}
