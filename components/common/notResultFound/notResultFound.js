import React from "react";
import Image from "next/image";

const NotResultFound = () => {
  return (
    <div className="h-[100vh] w-full bg-primary-100 dark:bg-gray-700 rounded-md">
      <center>
        <Image
          alt="sorry, we couldn't find any result"
          src="/assets/icons/sorry.png"
          width={300}
          height={300}
        />
        <h1 className="px-5 md:text-base text-2xl  bg-primary max-w-lg rounded-md text-white dark:bg-gray-800">
          Sorry, we couldn't find any result
        </h1>
      </center>
    </div>
  );
};

export default NotResultFound;
