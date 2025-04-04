import { AiOutlineHeart } from "react-icons/ai";
import CartButton from "../../../../components/common/CartButton/cartButton";
import ReactStartRatingCompoent from "../reactStarRating/reactStarRating";
import BtnPlaceOrder from "@components/common/btnPlaceOrder/btnPlaceOrder";

const ProductInfo = ({ product }) => {
  let ratingAvg;
  if (product?.ratings?.length > 0) {
    const sum = product?.ratings?.reduce(
      (total, item) => total + item?.star,
      0
    );
    const average = sum / product?.ratings?.length;
    ratingAvg = average;
  }
  return (
    <div>
      <div className="md:pt-0 md:mt-0 lg:mt-[350px]">
        {/* title */}
        <h1 className="text-3xl font-semibold md:text-xl ">{product?.name}</h1>
        {/* rattings */}
        <div className="flex items-center gap-x-1 text-[15px] pt-2 relative -z-10">
          <ReactStartRatingCompoent totalRating={ratingAvg} />(
          {product?.totalRating}) &nbsp; | &nbsp; Ratings
        </div>
        {/* price */}
        <div className="py-5 mt-2 bg-gray-200 dark:bg-gray-700 md:py-2 px-7">
          <div className="flex items-center gap-4">
            <del className="text-primary-100 dark:text-white">
              ৳ {product?.price}{" "}
            </del>
            <p className="text-xl font-semibold text-primary dark:text-white">
              ৳ {product?.finalPrice}
            </p>
            <p className="p-1 md:p-0.5 text-sm text-white rounded-sm bg-primary dark:bg-gray-500">
              {product?.discount}% OFF
            </p>
          </div>
        </div>

        {/* description */}
        {product?.shortDescription?.length > 0 && (
          <div className="mt-3">
            <p className="text-base md:text-[15px]">
              {product?.shortDescription}
            </p>
          </div>
        )}

        {/* sub description */}
        <div className="mt-3">
          {product?.color?.length > 0 ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">Color:</p>
              <p>{product?.color}</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Stock:</p>
            <p>{product?.quantity}</p>
          </div>

          {product?.sku ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">SKU:</p>
              <p className="">{product?.sku}</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex mb-1">
            {product?.skinType?.length > 0 ? (
              <>
                <p className="w-[100px] text-[14px] font-semibold">
                  Skin type:
                </p>
                <p className="text-[14px] text-black dark:text-white">
                  {product?.skinType}
                </p>
              </>
            ) : (
              ""
            )}
          </div>

          {product?.size?.length > 0 ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">Size:</p>
              {product?.size?.map((s, i) => (
                <p key={i} className="mr-2 border-[1px] border-black px-1">
                  {s}
                </p>
              ))}
            </div>
          ) : (
            <>
              {product?.weight ? (
                <div className="flex mb-3">
                  <p className="w-32 font-semibold text-[14px]">Weight:</p>
                  <p>{product?.weight}</p>
                </div>
              ) : (
                ""
              )}
            </>
          )}

          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Sold:</p>
            <p>{product?.sold}</p>
          </div>

          {product?.madeIn?.length > 0 ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">Made in:</p>
              <p>{product?.madeIn}</p>
            </div>
          ) : (
            ""
          )}

          {product?.brand?.length > 0 ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">Brand:</p>
              <p>{product?.brand?.[0]?.name}</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex mb-3">
            <p className="w-32 font-semibold text-[14px]">Category:</p>
            <p>{product?.category?.[0]?.name}</p>
          </div>

          {product?.country?.length > 0 ? (
            <div className="flex mb-3">
              <p className="w-32 font-semibold text-[14px]">Country:</p>
              <p className="">{product?.country}</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex mb-3">
            <p className="w-36 xl:w-[170px] lg:w-[190px]  md:w-[165px] sm:w-[210px] font-semibold text-[14px]">
              Add:
            </p>
            <div className="flex w-full gap-4">
              <div className=" md:w-[150px]  w-[200px]">
                <CartButton product={product} />
              </div>
            </div>
          </div>
        </div>

        {/* wishlist button */}
        <div className="mt-3">
          <div className="px-2 py-2 bg-gray-200 dark:bg-gray-700  md:py-1 ">
            <div className="flex items-center gap-1 cursor-pointer">
              <AiOutlineHeart color="#ff007f" className="md:text-[15px]" />{" "}
              <button className="font-semibold text-[14px] dark:text-white  text-black">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
