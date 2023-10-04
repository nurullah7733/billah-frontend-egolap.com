import React, { useState } from "react";
import Accordion from "../accordion/accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Avaibility = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [checkboxIndex, setCheckboxIndex] = useState("");

  const handleChange = (e, index) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // const value = e.target.value.trim();

    setCheckboxIndex(index);

    if (!e.target.checked) {
      setCheckboxIndex("");
      current.delete("inStock");
    } else {
      current.set("inStock", e.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  let content = (
    <>
      <div className="flex items-center gap-x-2 ">
        <label className="dark:text-white sm:text-[14px] flex items-center">
          <input
            type="checkbox"
            className="w-4 sm:w-3 h-4  mr-2 accent-[#ff007f]"
            onChange={(e) => handleChange(e, 1)}
            value={"true"}
            checked={checkboxIndex == 1}
          />
          In Stock
        </label>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="dark:text-white sm:text-[14px] flex items-center">
          <input
            type="checkbox"
            className="w-4 sm:w-3 h-4  mr-2 accent-[#ff007f]"
            onChange={(e) => handleChange(e, 2)}
            value={"false"}
            checked={checkboxIndex == 2}
          />
          Out of Stock
        </label>
      </div>
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 rounded-lg shadow card w-96 bg-base-100 bg-white dark:bg-gray-700">
      <Accordion title={"Availibility"} content={content} />
    </div>
  );
};

export default Avaibility;
