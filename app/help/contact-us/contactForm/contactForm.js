"use client";
import React, { useState } from "react";
import {
  ErrorToast,
  SuccessToast,
} from "../../../../utils/notificationAlert/notificationAlert";
import { contactUsFormRequest } from "../../../../APIRequest/webSettings/webSettingsApi";

const ContactForm = () => {
  let [loading, setLoading] = useState(false);
  let [fromValue, setFromValue] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!fromValue.name) {
      ErrorToast("Please enter your name");
    } else if (!fromValue.email) {
      ErrorToast("Please enter your email");
    } else if (!fromValue.mobile) {
      ErrorToast("Please enter your mobile number");
    } else if (!fromValue.message) {
      ErrorToast("Please enter your message");
    } else {
      setLoading(true);
      let result = await contactUsFormRequest(fromValue);
      setLoading(false);
      if (result.accepted.length > 0) {
        SuccessToast("Your message has been sent successfully");
        setFromValue({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        ErrorToast("Message send fail. Please try again later");
      }
    }
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-700 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3">
        <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
          Contact Us
        </h1>
        <input
          onChange={(e) => setFromValue({ ...fromValue, name: e.target.value })}
          value={fromValue.name}
          type="text"
          className="block w-full p-2 mb-4 border rounded outline-none "
          name="fullname"
          placeholder="Full Name"
        />

        <input
          onChange={(e) =>
            setFromValue({ ...fromValue, email: e.target.value })
          }
          value={fromValue.email}
          type="text"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="email"
          placeholder="Email"
        />

        <input
          onChange={(e) =>
            setFromValue({ ...fromValue, mobile: e.target.value })
          }
          value={fromValue.mobile}
          type="mobile"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="mobile"
          placeholder="Mobile"
        />

        <textarea
          onChange={(e) =>
            setFromValue({ ...fromValue, message: e.target.value })
          }
          value={fromValue.message}
          type="text"
          className="block w-full p-2 mb-4 border rounded outline-none"
          name="message"
          placeholder="Message"
          rows={3}
        />

        <div className="!pb-2">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className=" bg-primary font-semibold     py-2 md:py-2 text-sm md:text-[12px] text-white uppercase w-full dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800 "
          >
            <p className="flex justify-center items-center gap-2">
              {loading && <img src="/assets/icons/spinner.svg" width={22} />}
              Send Message
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
