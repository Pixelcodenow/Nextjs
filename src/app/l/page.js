"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError("Your email or password was incorrect.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Login</h1>
        <p className="mb-6 text-center text-sm text-gray-600">Login to access your dashboard.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          {error && (
            <div className="text-center text-sm text-red-500">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 p-3 text-white transition duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don`t have an account?{' '}
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}