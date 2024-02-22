import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";

import {
  getAllWebSettings,
  teamParagraphRequest,
} from "../../../APIRequest/webSettings/webSettingsApi";
import parse from "html-react-parser";
import { Suspense } from "react";
import Paragraph from "./paragraph/paragraph";

export const metadata = {
  title:
    "Meet the Egolap.com Team - Dedicated to Enhancing Your Shopping Experience",
  description:
    "Get to know the faces behind Egolap.com! Meet our dedicated team working to provide you with an exceptional and enjoyable shopping journey. Discover the people shaping your experience.",
  image: "/seo_team.jpg",

  twitter: {
    card: "Behind every great shopping experience is a great team! Meet the faces behind Egolap.com dedicated to enhancing your journey. #Egolap #MeetTheTeam #ShoppingExperience",
    site: "@Egolap1",
  },
};

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let teamParagraphPromise = teamParagraphRequest();
  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"Team image"}
        imagePath={data[0]?.teamImgBanner?.slice(-1)[0]?.secure_url}
        headerInImage={"Team"}
      />
      <HelpPageMenubar />
      <div className="container px-3 mx-auto pb-14 pt-8">
        <div>
          <div className="pb-8">
            <Suspense fallback={<div>Loading...</div>}>
              <Paragraph teamParagraphPromise={teamParagraphPromise} />
            </Suspense>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16  grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {data[0]?.teamImgs?.map((item, index) => {
              return (
                <div class=" items-center  bg-gray-50 rounded-lg shadow   dark:bg-gray-900 dark:border-gray-700">
                  <Image
                    width={300}
                    height={300}
                    class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={item?.secure_url}
                    alt={item?.name}
                  />

                  <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>{item?.name}</p>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">
                      {item?.position}
                    </span>

                    <ul class="flex space-x-4 sm:mt-0 pt-5 pb-1">
                      {item?.facebook && (
                        <li>
                          <a
                            href={item?.facebook}
                            target="_blank"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <img
                              class="w-[17px] h-[17px]"
                              src="/assets/icons/facebook.svg"
                            />
                          </a>
                        </li>
                      )}

                      {item?.twitter && (
                        <li>
                          <a
                            href={item?.twitter}
                            target="_blank"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <img
                              class="w-5 h-5"
                              src="/assets/icons/twitter.svg"
                            />
                          </a>
                        </li>
                      )}
                      {item?.linkedin && (
                        <li>
                          <a
                            href={item?.linkedin}
                            target="_blank"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <img
                              class="w-5 h-5"
                              src="/assets/icons/linkedin.svg"
                            />
                          </a>
                        </li>
                      )}
                      {item?.whatsapp && (
                        <li>
                          <a
                            href={item?.whatsapp}
                            target="_blank"
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <img
                              class="w-5 h-5"
                              src="/assets/icons/whatsapp.svg"
                            />
                          </a>
                        </li>
                      )}
                    </ul>

                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      {item?.description}
                    </p>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      {item?.descriptionTwo}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
