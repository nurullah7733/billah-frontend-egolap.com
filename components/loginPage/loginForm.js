import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="container py-14 mx-auto !max-w-sm px-3">
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3">
        <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
          Login
        </h1>

        <input
          type="text"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="password"
          placeholder="Password"
        />

        <button
          type="submit"
          className="w-full py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none"
        >
          log in
        </button>

        <div className="py-1 text-center ">
          <Link href="/forget-password/verify-email" legacyBehavior>
            <a className=" text-blue text-primary">Forget password</a>
          </Link>
        </div>

        <div className="py-1 pb-3 text-center ">
          Create a new account?{" "}
          <Link href="/signup" legacyBehavior>
            <a className=" text-blue text-primary">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
