import { getAllProductsRequest } from "../../APIRequest/products/productsApi";
import Product from "../../components/common/product/product";
import DrawerComponents from "./_components/drawer";
import Filter from "@components/common/filter/filter";

const Store = async ({ searchParams }) => {
  const search = searchParams.search || "0";

  const data = await getAllProductsRequest(1, 100, search);

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

          <select
            id="countries"
            className="outline-none  flex justify-center items-center gap-x-1 w-[120px] text-[16px] rounded-lg text-black bg-[#f1f3f5] dark:bg-gray-800 dark:text-white p-1 h-8  "
          >
            <option selected>Default</option>
            <option value="US">Price {`(High > low)`}</option>
            <option value="US">Price {`(Low < high)`}</option>
          </select>
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
              return (
                <Product
                  key={index}
                  name={product?.name}
                  price={product?.price}
                  finalPrice={product?.finalPrice}
                  weight={product?.weight}
                  img={product?.img[0]?.secure_url}
                  discount={product?.discount}
                  totalRatting={product?.totalRating}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
