"use client";
import React, { useEffect, useState } from "react";
import Accordion from "../accordion/accordion";
import { getCategoriesRequest } from "../../../APIRequest/categories/categoriesApi";
import capitalizeFLetter from "../../../utils/capitalizedFirstWord/capitalizedFirstWord";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Category = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allCategories, setAllCategories] = useState([]);
  const [checkboxIndex, setCheckboxIndex] = useState("");

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  // const value = e.target.value.trim();

  const handleChange = (e, index) => {
    setCheckboxIndex(index);

    if (!e.target.checked) {
      setCheckboxIndex("");
      current.delete("category");
    } else {
      current.set("category", e.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  useEffect(() => {
    (async () => {
      let data = await getCategoriesRequest();
      setAllCategories(data);
    })();
  }, []);
  let content = (
    <>
      {allCategories.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index}>
          <label className="dark:text-white sm:text-[14px]  flex items-center">
            <input
              className="w-4 sm:w-3 h-4 mr-2 accent-[#ff007f]"
              name={item?.name}
              onChange={(e) => handleChange(e, index + 1)}
              type="checkbox"
              value={item?.name}
              checked={checkboxIndex == index + 1}
            />
            {capitalizeFLetter(item?.name)}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 bg-white rounded-lg shadow card w-96 bg-base-100 dark:bg-gray-700">
      <Accordion title={"Category"} content={content} />
    </div>
  );
};

export default Category;
