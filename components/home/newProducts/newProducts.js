import React from "react";
import { getNewProducts } from "../../../APIRequest/products/productsApi";
import Product from "@components/common/product/product";

const newProducts = async () => {
  const data = await getNewProducts();
  return (
    <div className="block px-3 py-5 mt-3 ">
      <div className="container mx-auto">
        <div className="px-2 py-6 border border-gray-200 shadow dark:border-gray-600 dark:bg-gray-700">
          <h1 className="pb-5 text-4xl font-semibold text-center capitalize text-primary">
            New Products
          </h1>
          {/* banner */}
          {/* <div className="pb-4">
            <Link href="#">
              <Image
                src={banner[0]?.secure_url}
                width={1536}
                height={200}
                alt="3"
              />
            </Link>
          </div> */}
          {/* products */}
          <div className="grid grid-cols-6 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
            {data.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
          {/* <div className="pt-4 text-center">
            <button className="px-2 py-1 capitalize bg-gray-200 rounded hover:bg-primary hover:text-white">
              See more
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default newProducts;
