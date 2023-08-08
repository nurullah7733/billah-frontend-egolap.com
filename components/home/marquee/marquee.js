import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="container py-10 mx-auto">
      <Marquee gradient={true} gradientColor={[255, 255, 255]}>
        <div className="flex items-center gap-x-10">
          <div>
            <img
              src="/assets/img/company-logo/1.png"
              alt="1"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/2.png"
              alt="2"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/3.png"
              alt="3"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/4.png"
              alt="4"
              width="110"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/5.png"
              alt="5"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/6.png"
              alt="6"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/7.png"
              alt="7"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/8.png"
              alt="8"
              width="90"
              height="90"
            />
          </div>
          <div>
            <img
              src="/assets/img/company-logo/9.png"
              alt="8"
              width="90"
              height="90"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
