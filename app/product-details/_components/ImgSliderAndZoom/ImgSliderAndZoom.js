"use client";
import { useState, useRef } from "react";
import Images from "next/image";
import ReactImageMagnify from "react-image-magnify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImgSliderAndZoom = ({ images }) => {
  console.log(images, "iamges");
  const [img, setImg] = useState(images[0].secure_url);
  console.log(img, "state");

  const refs = useRef([]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i]?.classList.add("product_zoom_active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j]?.classList.remove("product_zoom_active");
      }
    }
  };

  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div>
      {/* slider for mobile */}

      <div className="max-w-[768px] mx-auto md:block hidden">
        <Carousel
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          {images.map((img, index) => (
            <div className="mx-auto " key={index}>
              <div className="">
                <img src={img?.secure_url} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* sliderAndZoom for desktop */}
      <div className="block left md:hidden">
        <div className="left_1">
          {images.map((image, i) => (
            <div
              className={i == 0 ? `img_wrap product_zoom_active` : `img_wrap`}
              key={i}
              onMouseOver={() => hoverHandler(image?.secure_url, i)}
              ref={addRefs}
            >
              <Images src={image?.secure_url} alt="" width={300} height={400} />
            </div>
          ))}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1400,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSliderAndZoom;
