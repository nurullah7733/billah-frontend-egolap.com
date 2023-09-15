"use client";
import { BiFilter } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import Filter from "../../../components/common/filter/filter";
import { useState } from "react";

const DrawerComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="lg:flex hidden  dark:bg-gray-800 dark:text-white justify-center items-center gap-x-1 w-[80px] rounded-lg text-black bg-[#f1f3f5] p-1 h-8 text-[16px]"
        type="button"
      >
        <BiFilter />
        <p>Filter</p>
      </button>

      {/* Drawer  */}
      <Drawer
        style={{
          padding: "20px 10px",
          overflowY: "scroll",
          background: "gray",
        }}
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="31zz0px"
      >
        <Filter />
      </Drawer>
    </div>
  );
};

export default DrawerComponents;
