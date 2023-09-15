"use client";
import React, { useEffect, useState } from "react";
import Accordion from "../accordion/accordion";
import { useRouter } from "next/navigation";
import { getBrandsRequest } from "../../../APIRequest/brand/brandApi";
import capitalizeFLetter from "../../../utils/capitalizedFirstWord/capitalizedFirstWord";

const Brand = () => {
  const router = useRouter();
  const [allBrand, setAllBrand] = useState([]);
  const [checkboxIndex, setCheckboxIndex] = useState("");

  const handleChange = (e, index) => {
    setCheckboxIndex(index);
    if (e.target.checked === false) {
      e.target.value = "0";
      setCheckboxIndex(0);
    }
    router.push(`/store/?search=${e.target.value}`);
  };

  useEffect(() => {
    (async () => {
      let data = await getBrandsRequest();
      setAllBrand(data);
    })();
  }, []);

  let content = (
    <>
      {allBrand?.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index}>
          <label className="dark:text-white sm:text-[14px] flex items-center">
            <input
              className="w-4 sm:w-3 h-4 mr-2 accent-[#ff007f]"
              name={item?.name}
              onChange={(e) => handleChange(e, index + 1)}
              checked={index + 1 === checkboxIndex}
              type="checkbox"
              value={item?.name}
            />
            {capitalizeFLetter(item?.name)}
          </label>
        </div>
      ))}
    </>
  );

  return (
    <div className=" max-w-[275px] px-5 border border-gray-200 rounded-lg shadow card w-96 bg-base-100 bg-white dark:bg-gray-700">
      <Accordion title={"Brand"} content={content} />
    </div>
  );
};

export default Brand;
