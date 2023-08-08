import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import {
//   BsArrowDownCircle,
//   BsArrowUpCircle,
//   BsFillBagCheckFill,
// } from "react-icons/bs";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons";

let arr = Array.from(Array(5).keys());

const SideItemsFilter = () => {
  let [isOpenDiscountInput, setIsOpenDiscountInput] = useState(false);
  let handleOpenDiscountInput = () => {
    setIsOpenDiscountInput((prev) => !prev);
  };
  return (
    <div>
      {/* header */}
      <div className="sticky flex items-center justify-center w-full text-white bg-gray-700 dark:bg-gray-800 gap-x-3">
        {/* <BsFillBagCheckFill /> */}
        <p>{21} items</p>
      </div>

      {/* content */}
      <div className="bg-white dark:bg-gray-700 pb-14">
        {arr.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between px-1 gap-y-1">
              <div className="flex flex-col items-center justify-start">
                <button>{/* <MdOutlineKeyboardArrowUp /> */}</button>
                <p>{2}</p>
                <button>{/* <MdOutlineKeyboardArrowDown /> */}</button>
              </div>
              <div>
                <img
                  width={"30px"}
                  height={"30px"}
                  src="assets/img/products/1.webp"
                  alt="bag"
                />
              </div>
              <div>
                <p className="text-[13px] text-black dark:text-white">
                  Products Names
                </p>
                <p className="text-[11px] text-black dark:text-white">
                  pcs: 1kg
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[13px] dark:text-white text-white">৳ 256</p>
                <del className="text-[11px] text-gray-500 ">৳ 256</del>
              </div>
              <div>
                <button>{/* <AiOutlineClose /> */}</button>
              </div>
            </div>
            <hr className=" h-[1.5px] my-0.5  border-t-0 bg-gray-100 " />
          </div>
        ))}
      </div>
      {/* footer */}

      <div className="sticky bottom-0 bg-slate-50 dark:bg-gray-800">
        <div className="bg-gray-200 dark:bg-gray-400">
          <h5
            className="flex items-center justify-center cursor-pointer text-[15px]  "
            onClick={handleOpenDiscountInput}
          >
            {/* <span className="pr-1">
              {isOpenDiscountInput === true ? (
                <BsArrowDownCircle size={13} />
              ) : (
                <BsArrowUpCircle size={13} />
              )}
            </span> */}
            Have a spacial code?
          </h5>
          {/* Refferal/Discount code */}
          {isOpenDiscountInput && (
            <div className="flex justify-between p-2 gap-x-2">
              <div className="">
                <input
                  className="bg-gray-300 w-[150px] rounded-sm p-0.5 border-none outline-none text-black"
                  type="text"
                  placeholder="Discount code"
                />
              </div>
              <div className="flex text-white gap-x-1">
                <button className="px-1 rounded-sm bg-primary dark:bg-gray-700 text-[14px]">
                  Go
                </button>
                <button
                  className="text-black rounded-sm  text-[14px]"
                  onClick={handleOpenDiscountInput}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-2 pt-2 pb-2 border-t-2 border-gray-300 dark:border-gray-400">
          <button className="text-white w-full py-1.5 bg-primary dark:bg-gray-700 text-[15px]">
            Place order
          </button>
          <button className="text-white w-full py-1.5 dark:bg-gray-500 bg-primary-100 text-[15px]">
            ৳9,3250
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideItemsFilter;
