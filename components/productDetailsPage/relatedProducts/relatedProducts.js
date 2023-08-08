"use client";
import React from "react";
import Product from "@components/common/product/product";

let hi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
let item = {
  productName: "best sales of the year",
  price: 500,
  unitPrice: 430,
  available: 3,
  percentegeOfPrice: "-28%",
  weight: "500gm",
  ratting: 3,
  showAddToCardBtn: 1,
};

const RelatedProducts = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:bg-gray-700">
        <div>
          <h1 className="pb-5 text-4xl font-semibold text-center capitalize text-primary">
            Related Products
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
          {hi.map((it, index) => {
            return (
              <Product
                key={index}
                index={index + 25}
                name={item.productName}
                price={item.price}
                unitPrice={item.unitPrice}
                available={item.available}
                weight={item.weight}
                percentegeOfPrice={item.percentegeOfPrice}
                ratting={item.ratting}
                showAddToCardBtn={item.showAddToCardBtn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
