import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import store from "../../../redux/store";
import {
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  deleteAddToCartProduct,
  setTotalProductsPrice,
} from "../../../redux/features/addToCart/addToCartSlice";

const CartProducts = ({ items, products }) => {
  const IncreateAddToCartProduct = (productId) => {
    store.dispatch(IncreaseProductQuantity({ id: productId, count: 1 }));
    store.dispatch(setTotalProductsPrice());
  };
  const DecreaseAddToCartProduct = (productId) => {
    store.dispatch(DecreaseProductQuantity({ id: productId, count: 1 }));
    store.dispatch(setTotalProductsPrice());
  };
  const removeFromCart = (productId) => {
    store.dispatch(deleteAddToCartProduct(productId));
    store.dispatch(setTotalProductsPrice());
  };
  return (
    <div>
      <div className="flex justify-between -mt-6 py-7">
        <h1 className="pt-4 text-2xl font-semibold md:text-xl">
          Shopping Cart ({products?.length} items)
        </h1>
      </div>

      {/* header */}
      {products?.length > 0 ? (
        <>
          {/* products */}
          {products?.map((item, i) => (
            <div key={i}>
              <div className="p-5 mb-3 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div className="flex justify-end pb-2">
                  <button onClick={() => removeFromCart(item?._id)}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-1 md:grid-cols-2">
                  <div className="col-span-1">
                    <Image
                      src={item?.img[0]?.secure_url}
                      alt={item?.name}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>

                  <div className="col-span-3">
                    <div className="mb-1">
                      <h1 className="text-sm font-bold md:text-sm">
                        {item?.name}
                      </h1>
                    </div>

                    <p className="mb-1 text-sm">
                      Available:{" "}
                      <span className="text-sm font-semibold">
                        {item?.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </p>

                    <div>
                      {item?.customerChoiceProductSize?.length > 0 ? (
                        <p className="mb-1 text-sm">
                          Size:{" "}
                          <span className="text-sm font-semibold">
                            {item?.customerChoiceProductSize}
                          </span>
                        </p>
                      ) : (
                        <p className="mb-1 text-sm">
                          Weight:{" "}
                          <span className="text-sm font-semibold">
                            {item?.weight}
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between !w-full border-t border-white py-3">
                      <div className="flex flex-1 w-full gap-1 ">
                        <p className="px-1 text-[16px]">Qty:</p>
                        <div className="flex items-center ">
                          <button
                            onClick={() => DecreaseAddToCartProduct(item?._id)}
                            className={`border border-primary-100 dark:border-gray-600 px-[2px] text-[13px] disabled:bg-primary-100  text-white dark:bg-gray-500 border-e-[1px]  flex items-center rounded-l-lg  bg-primary hover:dark:bg-gray-700`}
                          >
                            &ndash;
                          </button>
                          <p className="bg-primary dark:bg-gray-500 text-white   min-w-[40px] text-center text-[13px]">
                            {item?.customerChoiceProductQuantity}
                          </p>
                          <button
                            onClick={() => IncreateAddToCartProduct(item?._id)}
                            className={`border border-primary-100 dark:border-gray-600 px-[2px] text-[13px] disabled:bg-primary-100 text-white dark:bg-gray-500 border-s-[1px]   flex items-center rounded-r-lg bg-primary hover:dark:bg-gray-700`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="w-1/3 sm:pl-6 md:pl-[70px] flex items-center  ">
                        <p>৳</p>
                        <span className="text-sm font-semibold text-center ">
                          {item?.finalPrice}
                        </span>
                      </div>

                      <div className="w-1/3 sm:pl-6 md:pl-[70px] flex items-center   ">
                        <p>৳</p>
                        <span className="text-sm font-semibold text-center ">
                          {item?.finalPrice *
                            item?.customerChoiceProductQuantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2 className="p-5 text-2xl font-bold text-center"> Cart is Empty</h2>
      )}
    </div>
  );
};

export default CartProducts;
