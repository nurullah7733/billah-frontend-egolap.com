import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsFillBagCheckFill,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import numberWithCommas from "../../../utils/numberWithComma/numberWithComma";
import store from "../../../redux/store";
import {
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  deleteAddToCartProduct,
  setTotalProductsPrice,
} from "../../../redux/features/addToCart/addToCartSlice";
import { MustLoginModal } from "../../../utils/sweetAlert";
import { getItemWithExpiry } from "../../../utils/localStorageWithExpire/localStorageWithExpire";

const SideItemsFilter = ({ products, totalProductsPrice }) => {
  const router = useRouter();
  let [isOpenDiscountInput, setIsOpenDiscountInput] = useState(false);
  let handleOpenDiscountInput = () => {
    setIsOpenDiscountInput((prev) => !prev);
  };

  const handleOrderPlaceOrder = async () => {
    if (
      getItemWithExpiry("userData2") == null ||
      Object.values(getItemWithExpiry("userData2"))?.length < 1
    ) {
      let result = await MustLoginModal();
      if (result.isConfirmed === true) {
        router.push("/login");
      }
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div>
      {/* header */}
      <div className="sticky flex items-center justify-center w-full text-white bg-gray-700 dark:bg-gray-800 gap-x-3">
        <BsFillBagCheckFill />
        <p>
          {products?.length} {products?.length > 1 ? "Items" : "Item"}
        </p>
      </div>

      {/* content */}
      <div className="bg-white dark:bg-gray-700 pb-14">
        {products?.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 justify-between px-1 gap-y-1">
              <div className="flex flex-col items-center justify-start">
                <button
                  className="disabled:opacity-20"
                  disabled={
                    item?.quantity == item?.customerChoiceProductQuantity
                  }
                  onClick={() => {
                    store.dispatch(
                      IncreaseProductQuantity({ id: item?._id, count: 1 })
                    );
                    store.dispatch(setTotalProductsPrice());
                  }}
                >
                  <MdOutlineKeyboardArrowUp />
                </button>
                <p>{item?.customerChoiceProductQuantity}</p>
                <button
                  className="disabled:opacity-20"
                  disabled={item?.customerChoiceProductQuantity <= 1}
                  onClick={() => {
                    store.dispatch(
                      DecreaseProductQuantity({ id: item?._id, count: 1 })
                    );
                    store.dispatch(setTotalProductsPrice());
                  }}
                >
                  <MdOutlineKeyboardArrowDown />
                </button>
              </div>
              <div>
                <img
                  className="object-contain	"
                  width={"40px"}
                  height={"40px"}
                  src={item?.img[0]?.secure_url}
                  alt="bag"
                />
              </div>
              <div>
                <p className="text-[13px] text-black dark:text-white">
                  {item?.name?.length > 36
                    ? item?.name.substr(0, 35) + "..."
                    : item?.name}
                </p>
                <p className="text-[11px] text-black dark:text-white">
                  pcs: 1kg
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[13px] dark:text-white text-white">
                  ৳{item?.finalPrice * item?.customerChoiceProductQuantity}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    store.dispatch(deleteAddToCartProduct(item?._id))
                  }
                >
                  <AiOutlineClose size={13} />
                </button>
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
            <span className="pr-1">
              {isOpenDiscountInput === true ? (
                <BsArrowDownCircle size={13} />
              ) : (
                <BsArrowUpCircle size={13} />
              )}
            </span>
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
        <div className="flex px-2 pt-2 pb-2    border-t-2 border-gray-300 dark:border-gray-400">
          <button
            onClick={handleOrderPlaceOrder}
            className="text-white w-full py-1.5 bg-primary dark:bg-gray-700 text-[15px]"
          >
            Place order
          </button>
        </div>
        <button className="text-white w-full  py-1.5 dark:bg-gray-500 bg-primary-100 text-[15px]">
          ৳{totalProductsPrice.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default SideItemsFilter;
