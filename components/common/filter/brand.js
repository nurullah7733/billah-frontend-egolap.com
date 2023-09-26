"use client";
import { useCallback, useEffect, useState } from "react";
import Accordion from "../accordion/accordion";
import { useQueryParams } from "../../../utils/updateQueryParams/queryParams";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { getBrandsRequest } from "../../../APIRequest/brand/brandApi";
import capitalizeFLetter from "../../../utils/capitalizedFirstWord/capitalizedFirstWord";

const Brand = () => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useQueryParams();
  const searchParams = useSearchParams();
  const [allBrand, setAllBrand] = useState([]);
  const newSearchParams = new URLSearchParams(searchParams);

  const handleChange = (e, index) => {
    newSearchParams.set("tab", "cami");

    setQueryParams(
      {
        ...queryParams,
        ...{
          page: 3,
        },
      },
      { replace: true }
    );
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
