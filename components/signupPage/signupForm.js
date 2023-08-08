import Link from "next/link";
import React from "react";

const SignupForm = () => {
  return (
    <div className="container py-14 mx-auto !max-w-sm px-3">
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3">
        <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
          Sign up
        </h1>
        <input
          type="text"
          className="block w-full p-2 mb-4 border rounded outline-none "
          name="fullname"
          placeholder="Full Name"
        />

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
        <input
          type="password"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="confirm_password"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="w-full py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none"
        >
          Create Account
        </button>

        <div className="py-3 text-center ">
          Already have an account?{" "}
          <Link href="login" legacyBehavior>
            <a className="text-primary text-blue">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
