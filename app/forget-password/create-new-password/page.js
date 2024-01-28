"use client";
import React, { useRef, useState } from "react";
import { getEmail, getOtp } from "../../../utils/sessionHelper/sessionHelper";
import {
  ErrorToast,
  SuccessToast,
} from "../../../utils/notificationAlert/notificationAlert";
import { CreateNewPasswordRequest } from "../../../APIRequest/user/userApi";

const CreateNewPassword = () => {
  let passwordRef,
    confirmPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    let password = passwordRef.value;
    let confirmPassword = confirmPasswordRef.value;
    if (!password) {
      ErrorToast("Please provide a valid password");
    } else if (password !== confirmPassword) {
      ErrorToast("Password does not match");
    } else {
      let data = {
        email: getEmail(),
        otpCode: getOtp(),
        password: password,
      };
      setLoading(true);
      let result = await CreateNewPasswordRequest(data);
      setLoading(false);
      if (result) {
        SuccessToast("Password Changed Successfully");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    }
  };
  return (
    <div className="container py-14 mx-auto !max-w-lg px-3">
      <div className="bg-white py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3 dark:bg-gray-700">
        <h2 className=" mb-6 text-3xl md:text-xl font-semibold text-center">
          Create New Password
        </h2>
        <div>
          <div className="mb-4">
            <input
              type="email"
              className="block w-full p-2 border rounded outline-none"
              name="email"
              placeholder="Enter Your Email"
              defaultValue={getEmail()}
              disabled
            />
          </div>
          <div className="mb-4">
            <input
              ref={(input) => (passwordRef = input)}
              type="password"
              className="block w-full p-2 border rounded outline-none"
              name="password"
              placeholder="Enter New Password"
            />
          </div>
          <div className="mb-4">
            <input
              ref={(input) => (confirmPasswordRef = input)}
              type="password"
              className="block w-full p-2 border rounded outline-none"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex justify-center gap-2 px-4 py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800"
            >
              {loading && <img src="/assets/icons/spinner.svg" width={22} />}{" "}
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
