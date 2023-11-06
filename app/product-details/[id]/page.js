import ProductInfo from "../_components/productInfo/productInfo";
import ImgSliderAndZoom from "../_components/ImgSliderAndZoom/ImgSliderAndZoom";
import ProductDescription from "../_components/productDescription/productDescription";
import RelatedProducts from "../_components/relatedProducts/relatedProducts";
import {
  getProductsPrivacyPolicyRequest,
  getSingleProductsRequest,
} from "../../../APIRequest/products/productsApi";

const ProductDetails = async ({ params }) => {
  let product = await getSingleProductsRequest(params.id);
  const productPrivacyPolicy = await getProductsPrivacyPolicyRequest();

  return (
    <div className="container px-4 mx-auto py-14 md:py-8">
      <div className="flex gap-5 py-4 md:gap-0 md:flex-col">
        <ImgSliderAndZoom images={product?.img} />
        <ProductInfo product={product} />
      </div>
      <ProductDescription
        product={product}
        productPrivacyPolicy={productPrivacyPolicy}
      />
      <RelatedProducts subcategory={product?.subCategory[0]?.name} />
    </div>
  );
};

export default ProductDetails;
