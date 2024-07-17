"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import parse from "html-react-parser";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import {
  getTotalProductsPrice,
  getUserAddToCartInLocalStorage,
  getUserTotalProductsPriceWithoutDiscountInLocalStorage,
} from "../../utils/sessionHelper/sessionHelper";
import store from "../../redux/store";
import { setAddToCartProductFromLocalStorage } from "../../redux/features/addToCart/addToCartSlice";
import { aboutUsFooterParagraphRequest } from "../../APIRequest/webSettings/webSettingsApi";

const Footer = ({ socialLinks }) => {
  let [footerPara, setFooterPara] = React.useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let addToCartItemsTolocalStorage = getUserAddToCartInLocalStorage();
      let totalAmoutAddToCartItemsTolocalStorage = getTotalProductsPrice();
      let allProductsPriceWithoutDiscount =
        getUserTotalProductsPriceWithoutDiscountInLocalStorage();
      if (addToCartItemsTolocalStorage?.length > 0) {
        store.dispatch(
          setAddToCartProductFromLocalStorage({
            products: addToCartItemsTolocalStorage,
            allProductsSubTotal: allProductsPriceWithoutDiscount,
            totalProductsPrice: totalAmoutAddToCartItemsTolocalStorage,
          })
        );
      }
    }
  }, []);

  useEffect(() => {
    (async () => {
      let footerParagraph = await aboutUsFooterParagraphRequest();
      setFooterPara(footerParagraph);
    })();
  }, []);

  return (
    <footer className=" bg-primary dark:bg-gray-700">
      <div className="">
        {/* footer top */}
        <div className="h-[57px] md:h-[125px] py-3 bg-primary-100 dark:bg-gray-600 ">
          <div className="container px-3 mx-auto">
            <div className="flex justify-between md:flex-col md:items-center">
              <div className="flex items-center justify-between gap-x-8">
                <div className="flex space-x-2">
                  <Image
                    src="/assets/img/logo/food.png"
                    width="0"
                    height="0"
                    alt="food"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <p className="text-base text-white">30 minutes delivery</p>
                </div>
                <div className="flex pt-1.5 space-x-2 items-center">
                  <img
                    src="/assets/img/logo/trade.png"
                    width="25"
                    height="30"
                  />
                  <p className="text-base text-white">Cash on delivery</p>
                </div>
              </div>
              <div className="flex gap-x-2 md:pt-3 items-center">
                <p className="text-base text-white">Pay with</p>
                <div className="w-[40px]    ">
                  <img src="/assets/img/logo/american.png" />
                </div>
                <div className="w-[40px]  ">
                  <img src="/assets/img/logo/cash.png" />
                </div>
                <div className="w-[40px]    ">
                  <img src="/assets/img/logo/bkash.png" />
                </div>
                <div className="w-[40px]   ">
                  <img src="/assets/img/logo/nagad.png" />
                </div>
                <div className="w-[40px]    ">
                  <img src="/assets/img/logo/rocket.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer middle */}
        <div className="container px-3 mx-auto">
          <div className="flex gap-8 py-7 lg:flex-col">
            <div className="max-w-[50%] lg:max-w-none">
              <div className="pb-1">
                <Link href="/">
                  <Image src="/logo.png" alt="" width="70" height="70" />
                </Link>
              </div>

              <div className="text-justify text-white">
                {footerPara.length > 0 &&
                  parse(footerPara?.slice(-1)?.[0]?.aboutUs)}
              </div>
              {/* social icons */}

              <div className="flex gap-2 pt-3">
                {socialLinks?.map((item, index) => {
                  if (item.name.toLowerCase() === "facebook") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaFacebook size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "youtube") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaYoutube size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "twitter") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaTwitter size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "instagram") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaInstagram size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "whatsapp") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaWhatsapp size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "linkedin") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaLinkedin size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "wechat") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <BsWechat size={23} color="fff" />
                        </a>
                      </p>
                    );
                  } else if (item.name.toLowerCase() === "tiktok") {
                    return (
                      <p>
                        <a href={item?.socialLink} target="_blank">
                          <FaTiktok size={23} color="fff" />
                        </a>
                      </p>
                    );
                  }
                })}
              </div>
            </div>
            <div className="max-w-[25%] lg:max-w-none">
              <h2 className="pb-1 text-3xl text-white">Customer Service</h2>
              <p>
                <Link href="/help/contact-us" legacyBehavior>
                  <a className="text-white transition-all hover:tracking-wider">
                    Contact Us
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/help/faq" legacyBehavior>
                  <a className="text-white transition-all hover:tracking-wider">
                    FAQ
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/help/team" legacyBehavior>
                  <a className="text-white transition-all hover:tracking-wider">
                    Team
                  </a>
                </Link>
              </p>
              <div className="pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.egolap.egolap"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/google-play-badge-logo.png"
                    width={150}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div className="max-w-[25%] lg:max-w-none">
              <h2 className="pb-1 text-3xl text-white">About E-golap</h2>
              <p>
                <Link href="/help/privacy-policy" legacyBehavior>
                  <a className="text-white transition-all hover:tracking-wider">
                    Privacy Policy
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/help/terms-of-use" legacyBehavior>
                  <a className="text-white transition-all hover:tracking-wider">
                    Terms of Use
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="min-h-[57px]   py-4 bg-primary-100 dark:bg-gray-600  ">
          <div className="container px-3 mx-auto">
            <div className="text-center ">
              <p className="text-white">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="font-semibold">
                  <Link href="/" legacyBehavior>
                    <a>E-golap </a>
                  </Link>
                </span>
                - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
