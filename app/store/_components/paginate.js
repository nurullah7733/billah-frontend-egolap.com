"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useWindowSize from "../../../utils/windowResize/useWindowResize";

const Paginate = ({ total, perPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const handlePageClick = (e) => {
    console.log(e.selected);

    // if (e.target.value == "default") {
    //   current.delete("sortby");
    // } else {
    //   current.set("sortby", e.target.value);
    // }
    current.set("pageNo", e.selected + 1);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <div className=" pt-7 flex items-center justify-center">
      <ReactPaginate
        renderOnZeroPageCount={null}
        breakLabel="..."
        nextLabel={`${useWindowSize().width > 768 ? "Next >" : ">"}  `}
        containerClassName="flex gap-x-2"
        pageClassName="bg-white dark:bg-gray-800 p-1.5 border border-gray-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
        pageLinkClassName=""
        previousClassName="bg-white dark:bg-gray-800 p-1.5 border border-gray-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
        previousLinkClassName=""
        nextClassName="bg-white dark:bg-gray-800 p-1.5 border border-gray-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
        nextLinkClassName=""
        breakClassName="bg-white p-1.5 dark:bg-gray-800 border border-gray-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
        breakLinkClassName="page-link"
        activeClassName="!bg-primary-100 dark:!bg-gray-700 text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={Math.ceil(total / 50)}
        previousLabel={`${useWindowSize().width > 768 ? "< Previus  " : "<"}  `}
        forcePage={Number(current.get("pageNo")) - 1}
      />
    </div>
  );
};

export default Paginate;
