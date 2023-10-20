"use client";
import ClientOnly from "@components/clientOnly/clientOnly";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";

const Page = () => {
  return (
    <div>
      <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-l text-white bg-primary">
        My Dashobard
      </h1>
      <div className="flex justify-between gap-5 px-5 py-8 md:flex-col">
        <div>
          <p className="text-sm">Full Name</p>
          <ClientOnly>
            <p className="text-lg">
              {getItemWithExpiry("userData2")?.firstName +
                " " +
                getItemWithExpiry("userData2")?.lastName}
            </p>
          </ClientOnly>
        </div>
        <div>
          <p className="text-sm">Email</p>
          <ClientOnly>
            <p className="text-lg">{getItemWithExpiry("userData2")?.email}</p>
          </ClientOnly>
        </div>
        <div>
          <p className="text-sm">Mobile</p>
          <ClientOnly>
            <p className="text-lg">{getItemWithExpiry("userData2")?.mobile}</p>
          </ClientOnly>
        </div>

        {/* <div>
          <p className="text-sm">Gender</p>
          <p className="text-lg">Male</p>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
