import Product from "../../common/product/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

let hi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
let item = {
  productName: "Provisional Bazar best sales of the year",
  price: 1547,
  unitPrice: 1030,
  available: 4,
  percentegeOfPrice: "-23%",
  weight: "3pcs",
  ratting: 4,
  showAddToCardBtn: 0,
};

const KachaBazar = () => {
  return (
    <div className="block px-3 py-5 mt-3 ">
      <div className="container mx-auto">
        <div className="px-2 py-6 border border-gray-200 shadow dark:border-gray-600 dark:bg-gray-700">
          <h1 className="pb-5 text-4xl font-semibold text-center capitalize text-primary">
            Provisional Bazar
          </h1>
          {/* banner */}
          <div className="pb-4">
            <Link href="#">
              <Image
                src="/assets/img/banner/3.jpg"
                width={1536}
                height={200}
                alt="3"
              />
            </Link>
          </div>
          {/* products */}
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
          <div className="pt-4 text-center">
            <button className="px-2 py-1 capitalize bg-gray-200 rounded hover:bg-primary hover:text-white">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KachaBazar;
