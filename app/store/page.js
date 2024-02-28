import baseUrl from "../../utils/config/baseUrl";
import { getAllProductsRequest } from "../../APIRequest/products/productsApi";
import Product from "../../components/common/product/product";
import createParams from "../../utils/createParams/createParams";
import DrawerComponents from "./_components/drawer";
import Filter from "@components/common/filter/filter";
import SortByPrice from "./_components/sortBy/sortBy";
import Image from "next/image";
import LoadMore from "@components/common/loadMore/loadMore";
import { cookies } from "next/headers";
import LoadMoreQueryProducts from "@components/common/loadMore/loadMoreForQueryProducts";

export async function generateMetadata({ params }) {
  const products = await fetch(
    `${baseUrl}/list-product-global/?pageNo=1&perPage=30&searchKeyword=0`
  ).then((res) => res.json());

  return {
    title:
      "Explore the Egolap.com Store - Your Gateway to Diverse and Quality Products",
    description:
      "Dive into the Egolap.com Store and discover a treasure trove of diverse and quality products. From fresh fruits to cutting-edge electronics, trendy clothing, and luxurious cosmetics - find everything you need for a smart shopping experience.",
    openGraph: {
      image: products?.data[0]?.rows[0]?.img[0]?.secure_url,
    },
  };
}

const Store = async ({ searchParams }) => {
  let cookie = cookies();
  let token = cookie.get("token2")?.value;

  let allQueryParams = createParams(searchParams);
  let pageNo = searchParams?.pageNo ?? 1;
  let { products, total } = await getAllProductsRequest(allQueryParams, pageNo);

  return (
    <div className="px-3 py-3 mx-auto container">
      <div className="w-full py-1.5 mb-2 bg-white border dark:border-none border-gray-200 rounded-lg shadow px-3 flex justify-between dark:bg-gray-700">
        <DrawerComponents />
        <div className="flex items-center gap-x-2">
          <p className="font-semibold text-[14px]">Sort By:</p>

          <SortByPrice />
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="lg:hidden">
          <Filter token={token} />
        </div>
        {/* products */}
        {total === 0 || total === undefined ? (
          <div className="h-[100vh] w-full bg-primary-100 dark:bg-gray-700 rounded-md">
            <center>
              <Image
                alt="sorry, we couldn't find any result"
                src="/assets/icons/sorry.png"
                width={300}
                height={300}
              />
              <h1 className="px-5 md:text-base text-2xl  bg-primary max-w-lg rounded-md text-white dark:bg-gray-800">
                Sorry, we couldn't find any result
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
            {/* when user products query search then LoadMoreQueryProducts */}
            {Object.keys(searchParams).length === 3 &&
            searchParams.searchKeyword == "0" ? (
              <LoadMore storePageTotal={total} />
            ) : (
              <LoadMoreQueryProducts storePageTotal={total} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
