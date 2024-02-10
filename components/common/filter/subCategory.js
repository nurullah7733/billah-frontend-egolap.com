import React, { useEffect, useState } from "react";
import Accordion from "../accordion/accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import capitalizeFLetter from "../../../utils/capitalizedFirstWord/capitalizedFirstWord";
import { getSubCategoriesRequest } from "../../../APIRequest/subCategory/subCategoriesApi";

const SubCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [checkboxIndex, setCheckboxIndex] = useState("");

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  // const value = e.target.value.trim();

  const handleChange = (e, index) => {
    setCheckboxIndex(index);

    if (!e.target.checked) {
      setCheckboxIndex("");
      current.delete("subcategory");
    } else {
      current.set("subcategory", e.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  useEffect(() => {
    (async () => {
      let data = await getSubCategoriesRequest();
      setAllSubCategories(data);
    })();
  }, []);
  let content = (
    <>
      {allSubCategories?.map((item, index) => (
        <div className="flex items-center gap-x-2" key={index}>
          <label className="dark:text-white sm:text-[14px]">
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
      <Accordion title={"Sub Category"} content={content} />
    </div>
  );
};

export default SubCategory;
