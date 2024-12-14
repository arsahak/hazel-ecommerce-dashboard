"use client";
import { doCredentialLogin } from "@/app/action/userAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff, LuLock, LuUsers } from "react-icons/lu";

const UserSignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);

      if (response?.error) {
        console.error(response.error);
        setError(mapError(response.error.message));
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  function mapError(message: string): string {
    const errorMap: Record<string, string> = {
      "Invalid credentials": "The email or password you entered is incorrect.",
      "User not found": "No account found with this email.",
    };

    // Use the errorMap to find a matching message or return a default error
    return errorMap[message] || "An unknown error occurred.";
  }

  return (
    <div className="max-w- mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="font-semibold text-3xl text-primary mb-6">
        Sign in to your account
      </h2>
      <form className="w-f" onSubmit={onSubmit}>
        <div className="py-3">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-normal text-gray-900"
          >
            Email<span className="text-primary">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LuUsers className="text-primary text-lg" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 py-2 placeholder-gray-400 outline-none"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="py-3">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-normal text-gray-900"
          >
            Password<span className="text-primary">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LuLock className="text-primary text-lg" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 py-2 placeholder-gray-400 outline-none"
              placeholder="*********"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <LuEye className="text-primary text-lg" />
              ) : (
                <LuEyeOff className="text-primary text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Links and Error Message */}
        <div className="flex items-center justify-between mt-3 mb-4">
          <span className="text-lg font-normal text-gray-900">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-primary">
              Sign up
            </Link>
          </span>
          <Link
            href="/forget-password"
            className="text-lg font-normal text-primary"
          >
            Forgot your password?
          </Link>
        </div>
        {error && <p className="text-lg text-red-400 mb-4">{error}</p>}

        {/* Submit Button */}
        <div className="py-3">
          <button
            type="submit"
            disabled={loading}
            className="text-white font-medium rounded-lg text-lg px-5 py-3 w-full bg-primary hover:bg-primary-dark disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSignInForm;
