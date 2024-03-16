"use client";
import { useEffect, useState } from "react";
import { NavLink } from "@components/common/navLink/navLink";

import { RiDashboardFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdCancelScheduleSend } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import useWindowSize from "../../utils/windowResize/useWindowResize";
import { getUserData } from "../../utils/sessionHelper/sessionHelper";
import ClientOnly from "@components/clientOnly/clientOnly";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import Image from "next/image";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const windowSize = useWindowSize();
  useEffect(() => {
    windowSize.width < 768 ? setOpen(false) : setOpen(true);
  }, [windowSize.width]);
  return (
    <div className="flex">
      <div
        className={` ${open ? "w-64" : "w-20"} ${
          open ? "pt-[9px]" : "pt-2.5"
        } bg-primary dark:bg-gray-700  p-5 min-h-[500px]  relative duration-300`}
      >
        <img
          src="/assets/icons/control.png"
          className={`absolute   cursor-pointer -right-3 top-5 w-7  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-2">
          {open ? (
            <ClientOnly>
              <div>
                <img
                  src={
                    getItemWithExpiry("userData2")?.photo?.length > 0
                      ? getItemWithExpiry("userData2")?.photo?.[0]?.secure_url
                      : null
                  }
                  className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 ${
                    !open && "hidden"
                  }`}
                />
              </div>
            </ClientOnly>
          ) : (
            <Image
              alt="user"
              width={56}
              height={56}
              src={
                getItemWithExpiry("userData2")?.photo?.length > 0
                  ? getItemWithExpiry("userData2")?.photo?.[0]?.secure_url
                  : null
              }
              className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 `}
            />
          )}
          <ClientOnly>
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              {getItemWithExpiry("userData2")?.firstName +
                " " +
                getItemWithExpiry("userData2")?.lastName}
            </h1>
          </ClientOnly>
        </div>
        <ul className="pt-6">
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard">
              <RiDashboardFill size={20} />
            </Link>
            <NavLink
              href="/user-dashboard"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Dashobard
            </NavLink>
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard/edit-profile">
              <FaUserEdit size={20} />
            </Link>
            <NavLink
              href="/user-dashboard/edit-profile"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Edit Profile
            </NavLink>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard/orders/running-orders">
              <TbTruckDelivery size={20} />
            </Link>
            <NavLink
              href="/user-dashboard/orders/running-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Running orders
            </NavLink>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard/orders/delivery-orders">
              <BsFillCartCheckFill size={20} />
            </Link>
            <NavLink
              href="/user-dashboard/orders/delivery-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Delivery orders
            </NavLink>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard/orders/return-orders">
              <GiReturnArrow size={20} />
            </Link>
            <NavLink
              href="/user-dashboard/orders/return-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Return Orders
            </NavLink>
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-gray-800 text-white text-md items-center gap-x-4`}
          >
            <Link href="/user-dashboard/orders/cancel-orders">
              <MdCancelScheduleSend size={20} />
            </Link>
            <NavLink
              href="/user-dashboard/orders/cancel-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Cancelled Orders
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 ">{children}</div>
    </div>
  );
};

export default Layout;
