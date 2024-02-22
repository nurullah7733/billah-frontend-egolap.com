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
} from "../../utils/sessionHelper/sessionHelper";
import store from "../../redux/store";
import {
  setAddToCartProductFromLocalStorage,
  setOtherCost,
  setShippingCost,
} from "../../redux/features/addToCart/addToCartSlice";
import { getShippingAndOtherCost } from "../../APIRequest/shippingCost/getShippingCost";
import { aboutUsFooterParagraphRequest } from "../../APIRequest/webSettings/webSettingsApi";

const Footer = ({ socialLink }) => {
  let [footerPara, setFooterPara] = React.useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let addToCartItemsTolocalStorage = getUserAddToCartInLocalStorage();
      let totalAmoutAddToCartItemsTolocalStorage = getTotalProductsPrice();
      if (addToCartItemsTolocalStorage?.length > 0) {
        store.dispatch(
          setAddToCartProductFromLocalStorage({
            products: addToCartItemsTolocalStorage,
            totalProductsPrice: totalAmoutAddToCartItemsTolocalStorage,
          })
        );
      }
    }
  }, []);

  useEffect(() => {
    (async () => {
      let result = await getShippingAndOtherCost();
      if (result?.data?.length > 0) {
        store.dispatch(setShippingCost(result?.data[0]?.shippingCost));
        store.dispatch(setOtherCost(result?.data[0]?.otherCost));
      }
    })();
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
              <div className="flex items-center gap-x-8 md:flex-col ">
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
                  parse(footerPara?.slice(-1)[0]?.aboutUs)}
              </div>
              {/* social icons */}
              <div className="flex gap-2 pt-3">
                <p>
                  {socialLink?.facebook.length > 3 ? (
                    <a href={socialLink?.facebook} target="_blank">
                      <FaFacebook size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.youtube.length > 3 ? (
                    <a href={socialLink?.youtube} target="_blank">
                      <FaYoutube size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.twitter.length > 3 ? (
                    <a href={socialLink?.twitter} target="_blank">
                      <FaTwitter size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.instagram.length > 3 ? (
                    <a href={socialLink?.instagram} target="_blank">
                      <FaInstagram size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.whatsapp.length > 3 ? (
                    <a href={socialLink?.whatsapp} target="_blank">
                      <FaWhatsapp size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.wechat.length > 3 ? (
                    <a href={socialLink?.wechat} target="_blank">
                      <BsWechat size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.tiktok.length > 3 ? (
                    <a href={socialLink?.tiktok} target="_blank">
                      <FaTiktok size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {socialLink?.linkedin.length > 3 ? (
                    <a href={socialLink?.linkedin} target="_blank">
                      <FaLinkedin size={23} color="fff" />
                    </a>
                  ) : (
                    ""
                  )}
                </p>
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
              <p className="text-white transition-all hover:tracking-wider">
                Support: +8801700000000
              </p>
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
