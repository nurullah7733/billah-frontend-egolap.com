"use client";
import { useCallback, useEffect, useState } from "react";
import Accordion from "../accordion/accordion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getBrandsRequest } from "../../../APIRequest/brand/brandApi";
import capitalizeFLetter from "../../../utils/capitalizedFirstWord/capitalizedFirstWord";

const Brand = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allBrand, setAllBrand] = useState([]);
  const [checkboxIndex, setCheckboxIndex] = useState("");

  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [searchParams]
  // );

  const handleChange = (e, index) => {
    console.log(pathname, "pathname");
    console.log(searchParams.getAll("brand"), "searchParams");
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
