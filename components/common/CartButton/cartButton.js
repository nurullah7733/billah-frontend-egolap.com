"use client";
import React from "react";
import store from "../../../redux/store";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
  setAddToCartProduct,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  setTotalProductsPrice,
} from "../../../redux/features/addToCart/addToCartSlice";
import { useSelector } from "react-redux";
import { deleteItem } from "../../../utils/deleteAlert";

const AddToCardBtn = ({ product }) => {
  // if (product?.size?.length > 0) {
  // }

  // Add to Cart product
  const handleClickAddToCart = async () => {
    // User Choose Product Size
    let selectedOption; // Initial selected option
    if (product?.size.length > 0) {
      const itemsList = document.createElement("select");
      itemsList.style.border = "1px solid #ff007f";
      product?.size?.forEach((size) => {
        const listItem = document.createElement("option");

        listItem.textContent = size;
        itemsList.appendChild(listItem);
      });
      let result = await deleteItem(itemsList);
      if (result.isConfirmed) {
        selectedOption = itemsList.value;

        product.customerChoiceProductSize = selectedOption;
        product.customerChoiceProductQuantity = 1;
        store.dispatch(setAddToCartProduct(product));
        store.dispatch(setTotalProductsPrice());
      }
    } else {
      product.customerChoiceProductQuantity = 1;
      store.dispatch(setAddToCartProduct(product));
      store.dispatch(setTotalProductsPrice());
    }
  };
  return (
    <button
      onClick={handleClickAddToCart}
      className="flex items-center justify-center w-full h-10 py-2 text-white rounded-lg md:h-8 gap-x-1 bg-primary dark:bg-gray-700 "
    >
      <MdOutlineAddShoppingCart size={20} />
      <p className="md:text-[14px]">Add to bag</p>
    </button>
  );
};

const NumberOrderCardBtn = ({
  productId,
  addToCartProductsFromUseSelector,
  btnHeight = "10",
}) => {
  let addToCartOneItem = addToCartProductsFromUseSelector?.find(
    (item) => item._id === productId
  );

  const IncreateAddToCartProduct = () => {
    store.dispatch(IncreaseProductQuantity({ id: productId, count: 1 }));
    store.dispatch(setTotalProductsPrice());
  };
  const DecreaseAddToCartProduct = () => {
    store.dispatch(DecreaseProductQuantity({ id: productId, count: 1 }));
    store.dispatch(setTotalProductsPrice());
  };

  return (
    <div
      className={`flex items-center justify-between h-${btnHeight} text-white rounded-lg bg-primary-100 dark:bg-gray-500`}
    >
      <button
        disabled={1 === addToCartOneItem?.customerChoiceProductQuantity}
        onClick={DecreaseAddToCartProduct}
        className={` disabled:bg-primary-100 px-2 py-2   border-e-[1px] h-${btnHeight}  flex items-center rounded-l-lg  bg-primary hover:dark:bg-gray-700`}
      >
        -
      </button>
      <p className="min-w-[72px] text-center">
        {addToCartOneItem?.customerChoiceProductQuantity} in bag
      </p>
      <button
        disabled={
          addToCartOneItem?.quantity ===
          addToCartOneItem?.customerChoiceProductQuantity
        }
        onClick={IncreateAddToCartProduct}
        className={` disabled:bg-primary-100 px-2 py-2   border-s-[1px] h-${btnHeight} flex items-center rounded-r-lg bg-primary hover:dark:bg-gray-700`}
      >
        +
      </button>
    </div>
  );
};

const CartButton = ({ product }) => {
  const addToCartProductsFromUseSelector = useSelector(
    (state) => state.addToCartProducts.products
  );
  let exitsProducts = addToCartProductsFromUseSelector?.find(
    (prod) => prod?._id === product?._id
  );

  return (
    <>
      {exitsProducts === undefined ? (
        <AddToCardBtn product={product} />
      ) : (
        <NumberOrderCardBtn
          productId={product?._id}
          addToCartProductsFromUseSelector={addToCartProductsFromUseSelector}
        />
      )}
    </>
  );
};

export default CartButton;
