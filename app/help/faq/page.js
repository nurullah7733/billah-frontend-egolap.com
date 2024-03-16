import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import {
  faqRequest,
  getAllWebSettings,
} from "../../../APIRequest/webSettings/webSettingsApi";
import Paragraph from "./paragraph/paragraph";
import { Suspense } from "react";

export const metadata = {
  title: "Egolap.com FAQs - Answers to Your Common Questions",
  description:
    "Explore the Egolap.com FAQs to find answers to common questions about our products, services, and policies. Get the information you need for a smooth and informed shopping experience.",
  image: "/seo_faq.jpg",

  twitter: {
    card: "Got questions? We've got answers! Explore the Egolap.com FAQs to find information on products, services, and more. Your guide to a seamless shopping journey. #Egolap #FAQs #ShopSmart",
    site: "@Egolap1",
  },
};

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let faqPromise = faqRequest();

  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"faq image"}
        imagePath={data?.[0]?.faqImg?.slice(-1)?.[0]?.secure_url}
        headerInImage={"Faq"}
      />
      <HelpPageMenubar />

      <Suspense fallback={<div>Loading...</div>}>
        <Paragraph faqPromise={faqPromise} />
      </Suspense>
    </div>
  );
};

export default Page;
