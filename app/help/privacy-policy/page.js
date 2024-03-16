import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import Link from "next/link";
import Paragraph from "./paragraph/paragraph";
import {
  getAllWebSettings,
  privacyPolicyParagraphRequest,
} from "../../../APIRequest/webSettings/webSettingsApi";
import { Suspense } from "react";

export const metadata = {
  title: "Egolap.com Privacy Policy - Your Data, Your Privacy, Our Commitment",
  description:
    "Read the Egolap.com Privacy Policy to learn how we protect your data and prioritize your privacy. Your trust is important to us, and we're committed to safeguarding your personal information.",
  image: "/seo_privacy.jpg",

  twitter: {
    card: "Your privacy matters. Read the Egolap.com Privacy Policy to understand how we protect your data. Trust us for a secure shopping experience. #Egolap #PrivacyPolicy #DataProtection",
    site: "@Egolap1",
  },
};

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let privacyPolicyParagraphPromise = privacyPolicyParagraphRequest();
  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"privacy-policy image"}
        imagePath={data?.[0]?.privacyPolicyImg?.slice(-1)?.[0]?.secure_url}
        headerInImage={"privacy-policy"}
      />
      <HelpPageMenubar />
      <div className="container px-3 mx-auto py-14">
        <Suspense fallback={<div>Loading...</div>}>
          <Paragraph
            privacyPolicyParagraphPromise={privacyPolicyParagraphPromise}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
