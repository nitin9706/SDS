import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiGithubFill, RiMailLine, RiLockPasswordLine } from "react-icons/ri";

// Login page component for user authentication
export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-blue-500/20 blur-3xl"></div>

      {/* Main login card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md bg-neutral-950 border border-gray-800 rounded-xl p-10 shadow-xl"
      >
        {/* Login form title and description */}
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-gray-400 text-center mb-8">
          Login to continue designing systems
        </p>

        {/* Login form with email and password fields */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>

            <div className="flex items-center gap-3 mt-2 border border-gray-800 rounded-lg px-4 py-3 focus-within:border-purple-500">
              <RiMailLine className="text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400">Password</label>

            <div className="flex items-center gap-3 mt-2 border border-gray-800 rounded-lg px-4 py-3 focus-within:border-purple-500">
              <RiLockPasswordLine className="text-gray-400 text-lg" />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition shadow-lg shadow-purple-600/30"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-800"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* Github Login */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-800 py-3 rounded-lg hover:bg-neutral-900 transition">
          <RiGithubFill className="text-xl" />
          Continue with GitHub
        </button>

        {/* Signup Link */}
        <p className="text-gray-400 text-sm text-center mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
