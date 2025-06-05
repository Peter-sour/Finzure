
import { useState } from 'react';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
    const handleLoginSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
        const userData = jwtDecode(credentialResponse.credential);
        console.log("User data:", userData);
        alert(`Welcome, ${userData.name}`);
      } else {
        console.error("Credential is missing in response:", credentialResponse);
        alert("Login gagal: credential tidak ditemukan.");
      }
    };


    const handleLoginError = () => {
      console.log("Login failed");
      alert("Google login failed");
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      // Simulate loading
      setTimeout(() => setIsLoading(false), 2000);
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-8 h-8 border-2 border-white/20 rotate-45 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-16 w-4 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 border border-white/20 rounded-full animate-spin"></div>

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glass Morphism Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">

          {/* Logo Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Finzure
            </h1>
            <p className="text-blue-100/70">Sign in to your account</p>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-200/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-blue-100 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-200/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                isLoading
                  ? 'bg-blue-500/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-6">
            <a href="#" className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-200">
              Forgot your password?
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-blue-200/80">or continue with</span>
            </div>
          </div>

          {/* Google Login Button */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Login success:", credentialResponse);
              handleLoginSuccess(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
              handleLoginError();
            }}
          />
          {/* Sign Up Link */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-blue-200/70 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-blue-200 hover:text-white font-semibold transition-colors duration-200">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;