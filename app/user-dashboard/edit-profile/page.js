"use client";
import { useState } from "react";
import { getUserData } from "../../../utils/sessionHelper/sessionHelper";
import useWindowSize from "../../../utils/windowResize/useWindowResize";
import { getBase64 } from "../../../utils/formValidation/formValidation";

const EditProfile = () => {
  const windowSize = useWindowSize();
  let [img, setImg] = useState(null);

  const handleImg = (e) => {
    console.log(e.target.files);
    // getBase64()
  };

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
          <form>
            <div className="mb-4">
              <input
                type="name"
                className="block w-full p-2 border rounded outline-none "
                name="fullName"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="block w-full p-2 border rounded outline-none"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <input
                type="mobile"
                className="block w-full p-2 border rounded outline-none"
                name="mobile"
                placeholder="Mobile"
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
          className={`col-span-1    ${
            windowSize.width > 1100 ? " " : "-order-1"
          }`}
        >
          <div>
            <img
              src={typeof window !== "undefined" ? getUserData()?.photo : ""}
              className="w-40 h-40 rounded-sm"
            />
          </div>
          <input type="file" className="w-full pt-5" onChange={handleImg} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
