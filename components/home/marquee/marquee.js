import React from "react";
import Marquee from "react-fast-marquee";
import { getAllDealerBrandLogoRequest } from "../../../APIRequest/dearlerBrand/dealerBrandApi";

const MarqueeComponent = async () => {
  const data = await getAllDealerBrandLogoRequest();
  return (
    <div className="container py-10 mx-auto">
      <Marquee gradient={true} gradientColor={[255, 255, 255]}>
        <div className="flex items-center gap-x-10">
          {data?.map((logo, index) => {
            return (
              <div key={index}>
                <img
                  src={logo?.img?.slice(-1)?.[0]?.secure_url}
                  alt="company logo"
                  width="200"
                  height="100"
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
