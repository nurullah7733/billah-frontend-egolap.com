import React from "react";
import Product from "@components/common/product/product";
import { getRelatedProductsRequest } from "../../../../APIRequest/products/productsApi";

const RelatedProducts = async ({ subcategory }) => {
  const data = await getRelatedProductsRequest(subcategory);

  return (
    <div className="container mx-auto py-14">
      <div className="py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:bg-gray-700">
        <div>
          <h1 className="pb-5 text-4xl font-semibold text-center capitalize text-primary">
            Related Products
          </h1>
        </div>

        {data?.rows?.length > 0 ? (
          <div className="grid grid-cols-6 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
            {data?.rows?.map((prod, index) => {
              return <Product key={index} product={prod} />;
            })}
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-center">No Related Products Found!</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
