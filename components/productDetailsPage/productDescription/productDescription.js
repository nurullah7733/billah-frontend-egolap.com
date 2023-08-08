"use client";
import React from "react";
import moment from "moment";
import StarRatingComponent from "react-star-rating-component";

let arr = [1, 2];
const ProductDescription = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap py-14">
        <div className="w-full py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-gray-700 bg-white">
          <ul
            className="flex flex-row flex-wrap gap-3 px-3 pt-3 pb-4 mb-0 list-none"
            role="tablist"
          >
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-primary dark:bg-gray-500"
                    : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Product Details
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-primary dark:bg-gray-500"
                    : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                review (2)
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-primary dark:bg-gray-500"
                    : "text-black dark:text-white  bg-gray-200 dark:bg-gray-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Shipping & delivery
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded dark:bg-gray-700 ">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <div className="flex mb-1">
                      <p className="w-[100px] font-semibold text-[14px] text-black dark:text-white">
                        Brand:
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        Koria
                      </p>
                    </div>

                    <div className="flex mb-1">
                      <p className="w-[100px] text-[14px] font-semibold">
                        Made:
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        Made in Koria
                      </p>
                    </div>

                    <div className="flex mb-1">
                      <p className="w-[100px]  font-semibold text-[14px] text-black dark:text-white">
                        Skin Type:
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        All types of skin
                      </p>
                    </div>

                    <div className="flex mb-1">
                      <p className="w-[100px] text-[14px] font-semibold text-black dark:text-white">
                        Size:
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        106g
                      </p>
                    </div>
                    {/* sub decription */}
                    <div className="mt-5">
                      <p className="text-[14px] text-black dark:text-white">
                        এই ক্লিঞ্জিং বারটি যে শুধু ফেইসে ইউজ করা যায়, তা নয়।
                        এটি বডিতে ইউজের জন্যও বেশ ভালো একটি সোপ হিসেবে কাজ করে।
                        এটি বডি একনে, ব্লেমিশ ট্রিট করে, রাফ স্কিন টেক্সচার সফট
                        করে এবং ফেইসের একনে ব্রেকআউট কমাতে হেল্প করে। আবার হেভি
                        মেকাপ ক্লিন করতেও এই ক্লিঞ্জিং বারটি বেশ ভালো কাজ করে।এই
                        ক্লিঞ্জিং বারটি সাধারন সোপ এর তুলনায় আলাদা কারন এতে
                        কোনো ক্ষতিকর কেমিক্যাল ও artifical oil নেই। এতে আছে
                        Argan oil ও Olive oil এর মতো হেলদি ইনগ্রেডিয়েন্ট যা
                        স্কিনকে একদমই রুক্ষ করেনা। এতে আরো আছে Centella Asiatica
                        Extract ও Fresh Mint Extract, যা স্কিনকে ডিটক্সিফাই করে
                        এবং স্কিনকে নারিশড রাখে।
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="mb-1 text-[14px] font-semibold text-black dark:text-white">
                        ব্যবহারবিধিঃ
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        ক্লিঞ্জিং বারটি পানিতে ভিজিয়ে ফোম তৈরী করে নিন এবং
                        স্কিনে সার্কুলার মোশনে ইউজ করুন এরপর ক্লিন করে ফেলুন
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="mb-1 font-semibold text-[14px] text-black dark:text-white">
                        Ingredients:
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        Lauric Acid, Sodium Stearate, Saponified Palm Oil,
                        Sodium Laurate, Sodium Myristate, Stearic Acid,
                        Glycerin, Sorbitol, Lauramidopropyl Betaine, Sodium
                        Hyaluronate, Niacinamide, Chlorella Vulgaris
                        (Dermochlorella Algae) Powder, Triticum Vulgare (Wheat)
                        Sprout Powder, Melaleuca Alternifolia (Tea Tree)
                        Extract, Houttuynia Cordata Extract, Glycyrrhiza Glabra
                        (Licorice) Root Extract, etc.
                      </p>
                    </div>
                    {/* সতর্কতাঃ */}
                    <div className="mt-5">
                      <p className="mb-1 font-semibold text-[14px] text-black dark:text-white">
                        সতর্কতাঃ
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        অ্যাপ্লাই করার আগে অবশ্যই প্যাচ টেস্ট করে নেবেন।
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="">
                    <div>
                      {arr.map((item, index) => (
                        <div className="mb-5" key={index}>
                          <div className="flex items-center gap-x-2">
                            <img
                              src="/profile.jpg"
                              alt=""
                              width="35"
                              height="35"
                              className="rounded-full"
                            />
                            <div>
                              <p className="font-semibold text-[15px]">
                                Your Name
                              </p>
                              <p>{moment(new Date().getDate()).format()}</p>
                            </div>
                          </div>

                          <StarRatingComponent
                            name="rate1"
                            size={24}
                            className={"text-[20px]"}
                            starCount={5}
                            value={4}
                            // onStarClick={this.onStarClick.bind(this)}
                          />

                          {/* ratting desc */}
                          <div>
                            <p className="text-[14px] text-black dark:text-white">
                              This skimmer was not designed to be used with my
                              above-ground pool, but a visit to my nearby
                              hardware store enabled me to adapt it nonetheless.
                              What impressed me was its performance. The
                              included plastic clamps that secure this skimmer
                              to my pools support rails worked perfectly as did
                              the adjustable vertical plastic mounting bar that
                              enabled me to easily adjust this skimmer height to
                              match the
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div>
                    <div className="mb-5">
                      <p className="text-[14px] mb-1 font-semibold text-black dark:text-white">
                        প্রোডাক্ট নষ্ট কিংবা ভাঙা হলে
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        প্রোডাক্ট ডেলিভারি করার সময় যদি ভাঙা কিংবা ড্যামেজ
                        অবস্থায় পেয়ে থাকেন তাহলে অবশ্যই ডেলিভারিম্যান সামনে থাকা
                        অবস্থায় আমাদেরকে কল করে জানাতে হবে। আমাদেরকে কল করতে
                        পারেন 01790 270066 এই নাম্বার এ । কোন কারণে আপনি নিজে
                        প্রোডাক্ট রিসিভ না করতে পারলে যিনি আপনার পরিবর্তে
                        প্রোডাক্ট টি বুঝে নিবেন তাকে অবশ্যই এই ব্যাপারে অবহিত
                        করবেন । ডেলিভারি ম্যান চলে যাবার পর এই ধরনের কোন অভিযোগ
                        গ্রহণযোগ্য হবে না ।
                      </p>
                    </div>
                    <div className="mb-5">
                      <p className="text-[14px] mb-1 font-semibold text-black dark:text-white">
                        ভুল প্রোডাক্ট কিংবা সংখ্যা ঠিক না হলে
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        প্রোডাক্ট রিসিভ করার সময় যদি আপনার অর্ডারকৃত অর্ডার
                        সংখ্যা এবং রিসিভ করা প্রোডাক্ট এক না হয় তাহলে আমাদেরকে
                        কল করে জানাতে হবে ডেলিভারিম্যান সামনে থাকা অবস্থায় ।
                        আমরা মিসিং প্রোডাক্ট গুলো ৪৮-৭২ ঘন্টার মধ্যে আপনাকে
                        পৌঁছে দেবো এবং এর জন্য আপনাকে অতিরিক্ত কোন ও ডেলিভারি
                        চার্জ দিতে হবে না ।
                      </p>
                    </div>

                    <div className="mb-5">
                      <p className="text-[14px] mb-1 font-semibold text-black dark:text-white">
                        প্রোডাক্ট রিটার্ন করতে চাইলে
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        প্রোডাক্ট রিসিভ করার সর্বোচ্চ ৭২ ঘন্টার মধ্যে
                        প্রোডাক্টটি রিটার্ন করতে পারবেন যদি প্রোডাক্টে কোনও ফল্ট
                        থাকে । সে ক্ষেত্রে আমাদেরকে অবশ্যই প্রোডাক্টটি ব্যবহারের
                        ভিডিও কিংবা পিকচার পাঠাতে হবে।আপনার অভিযোগ গ্রহনের ১-২
                        কর্মদিবসের মধ্যে আমরা আপনার সাথে যোগাযোগ করবো এবং
                        প্রোডাক্ট রিটার্ন, রিপ্লেসমেন্ট কিংবা টাকা ফেরত দেয়ার
                        ব্যবস্থা নেব।
                      </p>
                    </div>

                    <div>
                      <p className="text-[14px] mb-1 font-semibold text-black dark:text-white">
                        প্রোডাক্ট অর্ডার করার পর ক্যান্সেল করতে চাইলে
                      </p>
                      <p className="text-[14px] text-black dark:text-white">
                        প্রোডাক্ট অর্ডার করার পর ক্যান্সেল করতে চাইলে, যেদিন
                        অর্ডার করেছেন সেদিন বিকাল ৫ টার পূর্বে আমাদের কে জানাতে
                        হবে। প্রোডাক্ট আপনার এরিয়া কিংবা বাসায় নিচে গিয়ে
                        ডেলিভারি ম্যান কল করার পর ক্যান্সেল করতে চাইলে সে
                        ক্ষেত্রে ক্যান্সেলেশন চার্জ দিয়ে দিতে হবে । ( ঢাকার
                        মধ্যে ৯০ টাকা, ঢাকার বাইরে ১২০ টাকা)।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
