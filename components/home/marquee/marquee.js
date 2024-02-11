import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ dealerBrandLogo }) => {
  console.log("dealerBrandLogo", dealerBrandLogo);
  return (
    <div className="container py-10 mx-auto">
      <Marquee gradient={true} gradientColor={[255, 255, 255]}>
        <div className="flex items-center gap-x-10">
          {dealerBrandLogo?.map((logo, index) => {
            return (
              <div key={index}>
                <img
                  src={logo?.secure_url}
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
