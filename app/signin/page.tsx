"use client";
import AuthHeading from "@/components/auth/AuthHeading";
import { useLoginMutation } from "@/store/slices/apiSlice";
import { setToken } from "@/store/slices/authSlice";
import { setError } from "@/store/slices/userSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const boxShadow =
  "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)";
const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { error } = useSelector((state: any) => state.user);
  const { token } = useSelector((state: any) => state.auth);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const { data, error }: any = await login({ email, password });
      if (data) {
        dispatch(setToken(data.token));
        dispatch(setError(null));
        router.push("/users");
      } else {
        dispatch(setError(error.data.error));
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/users");
    }
  }, [pathname]);

  return (
    <div className="w-full pt-[60px]">
      <div
        className={`w-full max-w-[444px] mx-auto px-4 lg:px-12 py-11 rounded-2xl border border-[#EEE] shadow-[${boxShadow}]`}
      >
        <AuthHeading helpText="Sign in to continue with Stack" />
        <form className="space-y-7" onSubmit={handleLogin}>
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`border border-purple-300 rounded px-3 py-2 w-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
              id="email"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-purple-300 rounded px-3 py-2 w-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#6941C6] text-white text-[16px] font-semibold leading-6 px-4 py-[10px] rounded-lg"
          >
            Sign In
          </button>
          <p className="text-xs text-red-500">{error}</p>
        </form>
        <p className="mt-4 text-sm font-medium text-[#B0B7C3]">
          Already have an account?{" "}
          <Link className="hover:underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
