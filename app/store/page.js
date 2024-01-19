import { getAllProductsRequest } from "../../APIRequest/products/productsApi";
import Product from "../../components/common/product/product";
import createParams from "../../utils/createParams/createParams";
import DrawerComponents from "./_components/drawer";
import Filter from "@components/common/filter/filter";
import SortByPrice from "./_components/sortBy/sortBy";
import Image from "next/image";
import LoadMore from "@components/common/loadMore/loadMore";

const Store = async ({ searchParams }) => {
  let allQueryParams = createParams(searchParams);

  let pageNo = searchParams?.pageNo ?? 1;
  let { products, total } = await getAllProductsRequest(allQueryParams, pageNo);

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
        {total < 1 ? (
          <div className="h-[100vh] w-full bg-primary-100 dark:bg-gray-700 rounded-md">
            <center>
              <Image
                alt="sorry, we couldn't find any result"
                src="/assets/icons/sorry.png"
                width={300}
                height={300}
              />
              <h1 className="px-5 md:text-base text-2xl  bg-primary max-w-lg rounded-md text-white dark:bg-gray-800">
                Sorry, we coundn't find any result
              </h1>
            </center>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
              {products?.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </div>
            <LoadMore />
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
