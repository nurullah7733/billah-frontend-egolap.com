import ProductInfo from "../_components/productInfo/productInfo";
import ImgSliderAndZoom from "../_components/ImgSliderAndZoom/ImgSliderAndZoom";
import ProductDescription from "../_components/productDescription/productDescription";
import RelatedProducts from "../_components/relatedProducts/relatedProducts";
import { cookies } from "next/headers";
import {
  getProductsPrivacyPolicyRequest,
  getSingleProductsRequest,
} from "../../../APIRequest/products/productsApi";
import baseUrl from "../../../utils/config/baseUrl";

export async function generateMetadata({ params }) {
  let id = params.id;
  const products = await fetch(`${baseUrl}/product-details/${id}`).then((res) =>
    res.json()
  );

  return {
    title: products?.data[0]?.name,
    description:
      products?.data[0]?.sortDescription || products?.data[0]?.description,
    openGraph: {
      images: [products?.data[0]?.img[0]?.secure_url],
    },
  };
}

const ProductDetails = async ({ params }) => {
  let cookie = cookies();
  let token = cookie.get("token2")?.value || cookie.get("token")?.value;

  let product = await getSingleProductsRequest(params.id);
  const productPrivacyPolicy = await getProductsPrivacyPolicyRequest();

  return (
    <div className="container px-4 mx-auto py-14 md:py-8">
      <div className="flex gap-5    lg:flex-col  lg:pb-0 2xl:pb-44 pb-[180px] ">
        <ImgSliderAndZoom
          product={product}
          images={product?.img}
          token={token}
        />
        <ProductInfo product={product} />
      </div>
      <div className="">
        <ProductDescription
          token={token}
          product={product}
          productPrivacyPolicy={productPrivacyPolicy}
        />
      </div>
      <RelatedProducts subcategory={product?.subCategory[0]?.name} />
    </div>
  );
};

export default ProductDetails;
