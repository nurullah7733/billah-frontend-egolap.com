"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  SuccessToast,
} from "../../utils/notificationAlert/notificationAlert";
import { setEmail } from "../../utils/sessionHelper/sessionHelper";
import { VerifyEmailRequest } from "../../APIRequest/user/userApi";

export const metadata = {
  title: "Forgot Your Password? Reset it Easily with Egolap.com",
  description:
    "Reset your Egolap.com password effortlessly. Follow the simple steps to regain access to your account and continue enjoying a secure and personalized shopping experience. Your security matters at Egolap.com!",
  image: "/seoseo_forget.jpg",

  twitter: {
    card: "Lost your password? No worries! Easily reset it on Egolap.com and regain access to your account. Your security is our priority. Experience hassle-free shopping with Egolap.com! #Egolap #PasswordReset #SecureShopping",
    site: "@Egolap1",
  },
};

const ForgetPassword = () => {
  const router = useRouter();
  let emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    let email = emailRef.value;
    if (!email) {
      ErrorToast("Please provide your email");
    } else {
      setLoading(true);
      let result = await VerifyEmailRequest(email);
      setLoading(false);
      if (result) {
        setEmail(email);
        SuccessToast(`OTP Sent To "${email}"`);
        router.push(`/forget-password/verify-otp`);
      }
    }
  };
  return (
    <div className="container py-14 mx-auto !max-w-lg px-3">
      <div className="bg-white py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3 dark:bg-gray-700">
        <h2 className=" mb-2 text-3xl md:text-xl font-semibold text-center">
          Forget Password
        </h2>
        <p className="mb-4 text-center text-sm">
          Enter Your Email to reset your password
        </p>
        <div>
          <div className="mb-4">
            <input
              ref={(input) => (emailRef = input)}
              type="email"
              className="block w-full p-2 border rounded outline-none"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex justify-center gap-2 px-4 py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800"
            >
              {loading && <img src="/assets/icons/spinner.svg" width={22} />}{" "}
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
