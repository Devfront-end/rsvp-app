import React from "react";

const AuthPopup = ({
  showSignup,
  showLogin,
  closePopups,
  setShowSignup,
  setShowLogin,
}) => {
  const handleGoogleSignIn = () => {
    // Implement the Google sign-in logic here
    // For example, you might redirect to your backend route that handles Google OAuth
    window.location.href = "http://localhost:3001/auth/google"; // Adjust this URL to your backend route
  };

  return (
    <div>
      {/* Signup Popup */}
      {showSignup && (
        <div className="popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="popup-content bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <span
              className="close absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={closePopups}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-6">Sign up for My App</h2>
            <form className="space-y-4">
              <div className="border-b pb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <div className="border-b pb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <div className="border-b pb-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <div className="border-b pb-2">
                <input
                  type="password"
                  placeholder="Confirmation"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full text-lg font-semibold"
              >
                Sign up
              </button>

              {/* Google Sign Up Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 mt-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={handleGoogleSignIn}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLogin && (
        <div className="popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="popup-content bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <span
              className="close absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={closePopups}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-6">Log in to My App</h2>
            <form className="space-y-4">
              <div className="border-b pb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <div className="border-b pb-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full border-none focus:ring-0 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full text-lg font-semibold"
              >
                Log In
              </button>

              {/* Google Login Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 mt-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={handleGoogleSignIn}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>

              <p className="text-center mt-4">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopup;
