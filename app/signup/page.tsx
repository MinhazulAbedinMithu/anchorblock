import AuthHeading from "@/components/auth/AuthHeading";
import Link from "next/link";

const boxShadow =
  "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)";
const SignUp: React.FC = () => {
  return (
    <div className="w-full pt-[100px]">
      <div
        className={`w-full max-w-[444px] mx-auto px-4 lg:px-12 py-11 rounded-2xl border border-[#EEE] shadow-[${boxShadow}]`}
      >
        <AuthHeading helpText="Sign up to join with Stack" />
        <form className="space-y-7">
          <div className="flex flex-col space-y-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-red-300 rounded px-3 py-2 w-full focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              id="email"
              placeholder="Enter Email"
              type="email"
            />
            <p className="text-xs text-red-500">This field is required</p>
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6941C6] text-white text-[16px] font-semibold leading-6 px-4 py-[10px] rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm font-medium text-[#B0B7C3]">
          Already have an account?{" "}
          <Link className="hover:underline" href="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
