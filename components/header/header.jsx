"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../common/dropdown/dropdown";
import DarkModeToggleButton from "../common/darkModeToggleButton/darkModeToggleButton";
import Filter from "../common/filter/filter";

const Header = () => {
  let [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  let hangleIsOpenMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const dropdownMenus = [
    { menuName: "Option One", link: "#" },
    { menuName: "Two One", link: "#" },
    { menuName: "Three One", link: "/faq" },
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
                    {/* <div className="dropdown">
                      <label className="btn btn-circle w-7 swap swap-rotate btn-ghost hover:bg-inherit">
                        <input
                          type="checkbox"
                          onClick={() => hangleIsOpenMobileMenu()}
                        />

                        <svg
                          className="fill-current swap-off"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 512 512"
                        >
                          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        <svg
                          className="fill-current swap-on"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 512 512"
                        >
                          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                      </label>
                      {isOpenMobileMenu && (
                        <ul className="absolute z-50 overflow-y-auto  text-black px-4 py-2 w-[200px] shadow-lg rounded-md">
                          <li>
                            <a>Homepage</a>
                          </li>
                          <li>
                            <a>Portfolio</a>
                          </li>
                          <li>
                            <a>About</a>
                          </li>
                        </ul>
                      )}
                    </div> */}
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
                    <div>
                      <button className="h-10 font-semibold text-white rounded-md bg-primary-100 hover:bg-primary-200 w-28 md:w-16 dark:bg-gray-600 dark:hover:bg-gray-800">
                        <Link href={"/login"}>Login</Link>
                      </button>
                    </div>
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
                {/* dropdown */}
                {/* <Dropdown dropdownMenus={dropdownMenus} /> */}
                <div className="cursor-pointer ">
                  <Link href="/store">
                    <p className="ml-2 font-semibold text-md">Our Store</p>
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
                <div>
                  <button className="h-10 font-semibold text-white rounded-md bg-primary-100 hover:bg-primary-200 w-28 md:w-24 dark:bg-gray-600 dark:hover:bg-gray-800">
                    <Link href={"/login"}>Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
