"use client";
import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  SuccessToast,
} from "../../../utils/notificationAlert/notificationAlert";

import { getEmail, setOtp } from "../../../utils/sessionHelper/sessionHelper";
import { VerifyOTPRequest } from "../../../APIRequest/user/userApi";

const VerifyOTP = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [otp, setOtpCode] = useState("");
  const handleSubmit = async () => {
    let email = getEmail();
    if (otp.length < 6) {
      ErrorToast("Please provide a valid OTP code");
    } else {
      setLoading(true);
      let result = await VerifyOTPRequest(email, otp);
      setLoading(false);
      if (result) {
        setOtp(otp);
        SuccessToast(`OTP Verified`);
        router.push(`/forget-password/create-new-password`);
      }
    }
  };
  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "40px",
    borderRadius: "3px",
    height: "40px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey",
  };

  return (
    <div className="container py-14 mx-auto !max-w-lg px-3">
      <div className="bg-white py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3 dark:bg-gray-700">
        <h2 className=" mb-2 text-3xl md:text-xl font-semibold text-center">
          Verify OTP
        </h2>
        <p className="mb-4 text-center text-sm">
          A 6 Digit verification code has been sent to your email address.
        </p>
        <div>
          <div className="mb-4 flex justify-center">
            <ReactCodeInput
              inputStyle={defaultInputStyle}
              fields={6}
              onChange={(value) => setOtpCode(value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex justify-center gap-2 px-4 py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800"
            >
              {loading && <img src="/assets/icons/spinner.svg" width={22} />}{" "}
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
