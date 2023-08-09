import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
                <div className="flex pt-1.5 space-x-2">
                  <img
                    src="/assets/img/logo/trade.png"
                    width="25"
                    height="30"
                  />
                  <p className="text-base text-white">Cash on delivery</p>
                </div>
              </div>
              <div className="flex gap-x-2 md:pt-3">
                <p className="text-base text-white">Pay with</p>
                <img
                  src="/assets/img/logo/american.png"
                  width="35"
                  height="20"
                />
                <img src="/assets/img/logo/cash.png" width="35" height="20" />
                <img src="/assets/img/logo/bkash.png" width="35" height="20" />
                <img src="/assets/img/logo/nagad.png" width="35" height="20" />
                <img src="/assets/img/logo/rocket.png" width="35" height="20" />
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
                  <img src="/logo.png" alt="" width="100" height="80" />
                </Link>
              </div>
              <p className="text-justify text-white">
                E-golap.com is an online shop available in Dhaka, Chattogram,
                Jashore, Khulna and Narayanganj. We believe time is valuable to
                our fellow residents, and that they should not have to waste
                hours in traffic, brave bad weather and wait in line just to buy
                basic necessities like eggs! This is why Chaldal delivers
                everything you need right at your door-step and at no additional
                cost.
              </p>
              {/* social icons */}
              <div className="flex gap-2 pt-3">
                <p>
                  <a href="#" target="_blank">
                    <FaFacebook size={23} color="fff" />
                  </a>
                </p>
                <p>
                  <a href="#" target="_blank">
                    <FaYoutube size={23} color="fff" />
                  </a>
                </p>
                <p>
                  <a href="#" target="_blank">
                    <FaTwitter size={23} color="fff" />
                  </a>
                </p>
                <p>
                  <a href="#" target="_blank">
                    <FaInstagram size={23} color="fff" />
                  </a>
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
