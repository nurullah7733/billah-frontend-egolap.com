import { getAllProductsRequest } from "../../APIRequest/products/productsApi";
import Product from "../../components/common/product/product";
import createParams from "../../utils/createParams/createParams";
import DrawerComponents from "./_components/drawer";
import Filter from "@components/common/filter/filter";
import SortByPrice from "./_components/sortBy/sortBy";

const Store = async ({ searchParams }) => {
  let allQueryParams = createParams(searchParams);
  let data = await getAllProductsRequest(allQueryParams);

  if (data?.total?.length < 1) {
    return (
      <div className="container">
        <h1 className="text-2xk">No products available</h1>
      </div>
    );
  }

  return (
    <div className="px-3 py-8 mx-auto ">
      <div className="w-full py-1.5 mb-2 bg-white border dark:border-none border-gray-200 rounded-lg shadow px-3 flex justify-between dark:bg-gray-700">
        <DrawerComponents />
        <div className="flex items-center gap-x-2">
          <p className="font-semibold text-[14px]">Sort By:</p>

          <SortByPrice />
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="lg:hidden">
          <Filter />
        </div>
        {/* products */}
        <div>
          <div className="grid grid-cols-5 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
            {data?.rows?.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
