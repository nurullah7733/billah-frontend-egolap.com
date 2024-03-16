"use client";
import { useState, useRef, useEffect } from "react";
import Images from "next/image";
import ReactImageMagnify from "react-image-magnify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getItemWithExpiry } from "../../../../utils/localStorageWithExpire/localStorageWithExpire";
import { userAddToCartOrUpdateRequest } from "../../../../APIRequest/user/userApi";
import { useSelector } from "react-redux";

const ImgSliderAndZoom = ({ product, images, token }) => {
  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );
  const [img, setImg] = useState(images?.[0]?.secure_url);

  const refs = useRef([]);

  const srcSet = () => {
    return images
      ?.map((image) => {
        return `${imageBaseUrl}${image.name} ${image.vw}`;
      })
      .join(", ");
  };

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

  useEffect(() => {
    // when store page unmounted then localstorage cart item save to database.
    return async () => {
      if (token !== undefined && addToCartProducts?.length > 0) {
        let id = getItemWithExpiry("userData2")?.id;
        let cart = addToCartProducts;

        await userAddToCartOrUpdateRequest(id, cart);
      }
    };
  });

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
          {images?.map((img, index) => (
            <div className="mx-auto " key={index}>
              <div>
                <img src={img?.secure_url} className="!rounded-lg" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* sliderAndZoom for desktop */}
      <div className="block left md:hidden">
        <div className="left_1">
          {images?.map((image, i) => (
            <div
              className={
                i == 0 ? `img_wrap product_zoom_active ` : `img_wrap  `
              }
              key={i}
              onMouseOver={() => hoverHandler(image?.secure_url, i)}
              ref={addRefs}
            >
              <Images
                src={image?.secure_url}
                alt={product?.name}
                width={300}
                height={400}
                className="!rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="left_2 ">
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: "/y9qao3n63ihrgcncm4ri.jpg",
                width: "1500",
                height: "1500",
              },
              isHintEnabled: true,
            }}
          /> */}
          <Images
            src={img}
            alt=""
            width={600}
            height={600}
            className="!rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgSliderAndZoom;
