import ProductInfo from "../_components/productInfo/productInfo";
import ImgSliderAndZoom from "../_components/ImgSliderAndZoom/ImgSliderAndZoom";
import ProductDescription from "../_components/productDescription/productDescription";
import RelatedProducts from "../_components/relatedProducts/relatedProducts";
import { getSingleProductsRequest } from "../../../APIRequest/products/productsApi";

const ProductDetails = async ({ params }) => {
  let product = await getSingleProductsRequest(params.id);

  return (
    <div className="container px-4 mx-auto py-14 md:py-8">
      <div className="flex gap-5 py-4 md:gap-0 md:flex-col">
        <ImgSliderAndZoom />
        <ProductInfo product={product} />
      </div>
      <ProductDescription product={product} />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
