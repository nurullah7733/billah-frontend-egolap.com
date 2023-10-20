"use client";
import { useEffect, useState } from "react";
import {
  getUserData,
  setUserData,
} from "../../../utils/sessionHelper/sessionHelper";
import useWindowSize from "../../../utils/windowResize/useWindowResize";
import {
  IsEmpty,
  IsMobileNumber,
  getBase64,
} from "../../../utils/formValidation/formValidation";
import { ErrorToast } from "../../../utils/notificationAlert/notificationAlert";
import { userUpdateRequest } from "../../../APIRequest/user/userApi";
import {
  getItemWithExpiry,
  setItemWithExpiry,
} from "../../../utils/localStorageWithExpire/localStorageWithExpire";

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
    if (!IsEmpty(name)) {
      ErrorToast("Name is required");
    } else if (!IsEmpty(mobile)) {
      ErrorToast("Mobile number is required");
    } else if (!IsMobileNumber(mobile)) {
      ErrorToast("Invalid mobile number");
    } else {
      var fullName = name.split(" ");
      let firstName = fullName[0];
      let lastName = fullName[fullName.length - 1];

      let data = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        photo: img,
      };
      let result = await userUpdateRequest(
        data,
        getItemWithExpiry("userData2")?.id
      );
      if (result) {
        let pushDataToLocalStorage = {
          firstName,
          lastName,
          email,
          mobile,
          photo: img,
          id: getItemWithExpiry("userData2")?.id,
        };
        setItemWithExpiry("userData2", pushDataToLocalStorage, 2592000);
        window.location.href = "/user-dashboard/edit-profile";
      }
    }
  };

  useEffect(() => {
    setImg(getItemWithExpiry("userData2")?.photo);
    setName(
      getItemWithExpiry("userData2")?.firstName +
        " " +
        getItemWithExpiry("userData2")?.lastName
    );
    setMobile(getItemWithExpiry("userData2")?.mobile);
    setEmail(getItemWithExpiry("userData2")?.email);
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
