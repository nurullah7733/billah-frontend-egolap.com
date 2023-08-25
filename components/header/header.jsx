"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../common/dropdown/dropdown";
import DarkModeToggleButton from "../common/darkModeToggleButton/darkModeToggleButton";
import Filter from "../common/filter/filter";
import ProfileDropdown from "@components/common/dropdown/dropdownProfile";
import { getToken } from "../../utils/sessionHelper/sessionHelper";
import ClientOnly from "@components/clientOnly/clientOnly";

const Header = () => {
  let [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  let hangleIsOpenMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const dropdownMenus = [
    { menuName: "Dashboard", link: "/user-dashboard" },
    { menuName: "Edit profile", link: "/user-dashboard/edit-profile" },
    { menuName: "Orders", link: "#" },
  ];

  return (
    <header className="fixed z-10 w-full px-3 bg-primary dark:bg-gray-700 h-[57px] md:h-[130px]">
      <div className="container mx-auto">
        <div className="pt-2 text-white  md:h-[120px]">
          <div>
            {/* mobile header */}
            <div className="hidden md:block">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* logo */}
                    <div className="cursor-pointer">
                      <Link href="/">
                        <img src="/logo.png" alt="" width="80" height="50" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {/* our store */}
                    <div className="cursor-pointer">
                      <Link href="/store">
                        <p className="font-semibold ">Store</p>
                      </Link>
                    </div>
                    {/* darkMode toggle */}
                    <div className="flex items-center">
                      <DarkModeToggleButton />
                    </div>
                    {/* cart */}
                    <div className="flex items-center justify-center cursor-pointer">
                      <Link href="/cart">
                        <FaShoppingCart className="text-xl" />
                      </Link>
                    </div>
                    {/* login */}
                    <ClientOnly>
                      {getToken()?.length > 0 ? (
                        <ProfileDropdown dropdownMenus={dropdownMenus} />
                      ) : (
                        <div className="flex items-center justify-center w-20 h-10 font-semibold text-white rounded-md bg-primary-100 hover:bg-primary-200 md:w-16 dark:bg-gray-600 dark:hover:bg-gray-800">
                          <Link href={"/login"}>Login</Link>
                        </div>
                      )}
                    </ClientOnly>
                  </div>
                </div>
                {/* search */}
                <div className="pt-2 pb-4">
                  <div>
                    <div className="relative ">
                      <input
                        type="text"
                        className="w-full h-10 py-2 pl-4 pr-10 leading-tight text-black border border-gray-300 rounded-md shadow-sm focus:outline-none dark:text-white"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center px-7">
                        <div>
                          <AiOutlineSearch className="text-lg text-primary dark:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop header */}
            <div className="block md:hidden">
              <div className="flex items-center justify-between ">
                <div className="cursor-pointer ">
                  <Link href="/">
                    <img src="/logo.png" alt="" width="80" height="50" />
                  </Link>
                </div>
                {/* search */}
                <div>
                  <div className="relative w-96 md:w-60 ">
                    <input
                      type="text"
                      className="w-full h-10 py-2 pl-4 pr-10 leading-tight text-black border border-gray-300 rounded-md shadow-sm focus:outline-none dark:text-white"
                      placeholder="Search for products, brands and more..."
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                      <div>
                        <AiOutlineSearch className="text-lg text-primary dark:text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cursor-pointer ">
                  <Link href="/store" legacyBehavior>
                    <a className="ml-2 font-semibold text-md">Our Store</a>
                  </Link>
                </div>
                {/* cart */}
                <div>
                  <div className="flex items-center justify-center cursor-pointer ">
                    <Link href="/cart">
                      <FaShoppingCart className="text-xl" />
                    </Link>
                    <Link href="/cart">
                      <p className="ml-2 font-semibold text-md">Cart</p>
                    </Link>
                  </div>
                </div>
                {/* DarkMode Toggle Button */}
                <DarkModeToggleButton />
                {/* login */}
                <ClientOnly>
                  {getToken()?.length > 0 ? (
                    <ProfileDropdown dropdownMenus={dropdownMenus} />
                  ) : (
                    <div className="flex items-center justify-center w-20 h-10 font-semibold text-white rounded-md bg-primary-100 hover:bg-primary-200 md:w-16 dark:bg-gray-600 dark:hover:bg-gray-800">
                      <Link href={"/login"}>Login</Link>
                    </div>
                  )}
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
