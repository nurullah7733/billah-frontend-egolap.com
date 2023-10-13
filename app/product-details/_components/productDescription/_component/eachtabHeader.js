"use client";
import { useSelector } from "react-redux";
import TabConentOne from "../_component/tabOne/TabContentOne";
import TabContentTwo from "../_component/tabTwo/TabContentTwo";
import TabContentThree from "../_component/tabThree/TabContentThree";

const EachTabContentHeader = ({ product }) => {
  const productReviewTab = useSelector(
    (state) => state.websiteSettings.productReviewTab
  );

  return (
    <>
      {/* products details */}
      <div className={productReviewTab === 1 ? "block" : "hidden"}>
        <TabConentOne product={product} />
      </div>
      {/* products review */}
      <div className={productReviewTab === 2 ? "block" : "hidden"}>
        <TabContentTwo product={product} />
      </div>
      {/* SHIPPING & DELIVERY information */}
      <div className={productReviewTab === 3 ? "block" : "hidden"}>
        <TabContentThree />
      </div>
    </>
  );
};

export default EachTabContentHeader;
