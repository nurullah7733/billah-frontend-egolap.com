"use client";
import { useEffect, useState } from "react";
import { getUserData } from "../../../utils/sessionHelper/sessionHelper";
import useWindowSize from "../../../utils/windowResize/useWindowResize";
import {
  IsEmpty,
  IsMobileNumber,
  getBase64,
} from "../../../utils/formValidation/formValidation";
import { ErrorToast } from "../../../utils/notificationAlert/notificationAlert";

const EditProfile = () => {
  const windowSize = useWindowSize();
  let [img, setImg] = useState("");
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");

  const handleImg = async (e) => {
    if (!e.target.files[0].type.includes("image/")) {
      ErrorToast("Only images file supported");
    } else if (e.target.files[0].size > 600000) {
      ErrorToast("Image size up to 600kb ");
    } else {
      let base64files = await getBase64(e.target.files[0]);
      setImg(base64files);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mobile);
    if (!IsEmpty(name)) {
      ErrorToast("Name is required");
    } else if (!IsEmpty(mobile)) {
      ErrorToast("Mobile number is required");
    } else if (!IsMobileNumber(mobile)) {
      ErrorToast("Invalid mobile number");
    } else {
    }
  };

  useEffect(() => {
    setImg(getUserData()?.photo);
    setName(getUserData()?.firstName + " " + getUserData()?.lastName);
    setMobile(getUserData()?.mobile);
    setEmail(getUserData()?.email);
  }, []);

  return (
    <div>
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        Edit Profile
      </h1>
      <div
        className={`grid  gap-4 px-5 py-8   ${
          windowSize.width > 1100 ? "grid-cols-3" : "grid-rows-2"
        }`}
      >
        <div className="col-span-2 bg-white dark:bg-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="name"
                className="block w-full p-2 border rounded outline-none "
                name="fullName"
                placeholder="Full Name"
                defaultValue={name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="block w-full p-2 border rounded outline-none"
                name="email"
                placeholder="Email"
                defaultValue={email}
                disabled
              />
            </div>

            <div className="mb-4">
              <input
                type="mobile"
                className="block w-full p-2 border rounded outline-none"
                name="mobile"
                placeholder="Mobile"
                defaultValue={mobile}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 my-1 text-sm text-center text-white uppercase rounded dark:bg-gray-700 bg-green bg-primary hover:bg-green-dark focus:outline-none"
            >
              Update
            </button>
          </form>
        </div>

        <div
          className={`col-span-1 ${windowSize.width > 1100 ? " " : "-order-1"}`}
        >
          <div>
            <img src={img} className="w-40 h-40 rounded-sm" />
          </div>
          <input type="file" className="w-full pt-5" onChange={handleImg} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
