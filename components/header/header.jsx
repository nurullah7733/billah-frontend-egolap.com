"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import DarkModeToggleButton from "../common/darkModeToggleButton/darkModeToggleButton";
import ProfileDropdown from "@components/common/dropdown/dropdownProfile";
import ClientOnly from "@components/clientOnly/clientOnly";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";

const Header = ({ token }) => {
  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );

  const router = useRouter();
  const pathname = usePathname();
  let [searchValue, setSearchValue] = useState("0");
  let [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  let hangleIsOpenMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  // Debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        const searchParams = new URLSearchParams();
        searchParams.set("searchKeyword", value || "0");
        router.push(`/store?pageNo=1&perPage=30&${searchParams.toString()}`);
      }, 400),
    [router, pathname]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(searchValue);
  };

  const dropdownMenus = [
    { menuName: "Dashboard", link: "/user-dashboard" },
    { menuName: "Edit profile", link: "/user-dashboard/edit-profile" },
    { menuName: "Orders", link: "/user-dashboard/orders/running-orders" },
  ];

  return (
    <header
      className={`fixed z-10 w-full px-3 bg-primary dark:bg-gray-700 ${
        token !== undefined ? "h-[60px]" : "h-[57px]"
      }  md:h-[130px]`}
    >
      <div className="container mx-auto">
        <div className="!pt-[2px] text-white  md:h-[120px]">
          <div>
            {/* mobile header */}
            <div className="hidden md:block">
              <div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    {/* logo */}
                    <div className="cursor-pointer">
                      <Link href="/">
                        <Image
                          className="py-3"
                          src="/logo.png"
                          alt="egolap logo"
                          width="70"
                          height="70"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {/* our store */}
                    <div className="cursor-pointer">
                      <Link href="/store?pageNo=1&perPage=30&searchKeyword=0">
                        <p className="font-semibold ">Store</p>
                      </Link>
                    </div>
                    {/* darkMode toggle */}
                    <div className="flex items-center">
                      <DarkModeToggleButton />
                    </div>
                    {/* cart */}
                    <div className="flex items-center justify-center cursor-pointer relative">
                      <Link href="/cart">
                        {addToCartProducts?.length > 0 ? (
                          <p className="flex items-center absolute left-2 bottom-3 justify-center w-5 h-5 text-[12px]  rounded-full bg-red-600 font-semibold">
                            {addToCartProducts?.length}
                          </p>
                        ) : (
                          ""
                        )}
                        <FaShoppingCart className="text-xl" />
                      </Link>
                    </div>
                    {/* login */}
                    <ClientOnly>
                      {token !== undefined ? (
                        <ProfileDropdown
                          dropdownMenus={dropdownMenus}
                          token={token}
                        />
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
                    <form>
                      <div className="relative ">
                        <input
                          type="text"
                          className="w-full h-10 py-2 pl-4 pr-10 leading-tight text-black border border-gray-300 rounded-md shadow-sm focus:outline-none dark:text-white"
                          placeholder="Search"
                          onChange={handleChange}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-7">
                          <div onClick={handleSearch} type="submit">
                            <AiOutlineSearch className="text-lg text-primary dark:text-white" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop header */}
            <div className="block md:hidden">
              <div className="flex items-center justify-between pt-[6px] ">
                <div className="cursor-pointer ">
                  <Link href="/">
                    <Image
                      className="pt-[1px]"
                      src="/logo.png"
                      alt="egolap logo"
                      width="70"
                      height="70"
                    />
                  </Link>
                </div>
                {/* search */}
                <div>
                  <div className="relative w-96 md:w-60 ">
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="w-full h-10 py-2 pl-4 pr-10 leading-tight text-black border border-gray-300 rounded-md shadow-sm focus:outline-none dark:text-white"
                        placeholder="Search for products, brands and more..."
                      />
                      <div className="absolute right-0 flex items-center px-2 top-3">
                        <div>
                          <button type="submit">
                            <AiOutlineSearch className="text-lg text-primary dark:text-white" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="cursor-pointer ">
                  <Link
                    href="/store?pageNo=1&perPage=30&searchKeyword=0"
                    legacyBehavior
                  >
                    <a className="ml-2 font-semibold text-md">Store</a>
                  </Link>
                </div>
                {/* cart */}
                <div>
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <Link href="/cart">
                      {addToCartProducts?.length > 0 ? (
                        <p className="flex items-center absolute left-2 bottom-3 justify-center w-5 h-5 text-[12px]  rounded-full bg-red-600 font-semibold">
                          {addToCartProducts?.length}
                        </p>
                      ) : (
                        ""
                      )}
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
                  {token !== undefined ? (
                    <ProfileDropdown
                      dropdownMenus={dropdownMenus}
                      token={token}
                    />
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
