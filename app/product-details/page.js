import React from "react";
import ProductInfo from "../../components/productDetailsPage/productInfo/productInfo";
import ImgSliderAndZoom from "../../components/productDetailsPage/ImgSliderAndZoom/ImgSliderAndZoom";
import ProductDescription from "../../components/productDetailsPage/productDescription/productDescription";
import RelatedProducts from "../../components/productDetailsPage/relatedProducts/relatedProducts";

const ProductDetails = () => {
  return (
    <div className="container px-4 mx-auto py-14 md:py-8">
      <div className="flex gap-5 py-4 md:gap-0 md:flex-col">
        <ImgSliderAndZoom />
        <ProductInfo />
      </div>
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
