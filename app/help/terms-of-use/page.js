import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import Link from "next/link";
import {
  getAllWebSettings,
  termOfUseParagraphRequest,
} from "../../../APIRequest/webSettings/webSettingsApi";
import Paragraph from "./paragraph/paragraph";
import { Suspense } from "react";
import { getTermOfUseBannerRequest } from "../../../APIRequest/banners/bannersApi";

export const metadata = {
  title: "Egolap.com Terms of Use - Your Guide to Responsible Shopping",
  description:
    "Review the Egolap.com Terms of Use to understand the guidelines and policies for a responsible and secure shopping experience. Know your rights and obligations as an Egolap.com user.",
  image: "/seo_terms-of-use.jpg",

  twitter: {
    card: "Responsible shopping starts with understanding our Terms of Use. Explore the Egolap.com guidelines for a secure and enjoyable shopping experience. #Egolap #TermsOfUse #ShopResponsibly",
    site: "@Egolap1",
  },
};

const Page = async () => {
  let termOfUseParagraphPromise = termOfUseParagraphRequest();
  let data = await getTermOfUseBannerRequest();

  return (
    <div>
      <HelpPageTopImage
        altName={"Terms-of-use image"}
        imagePath={data?.[0]?.img?.slice(-1)?.[0]?.secure_url}
        headerInImage={"Terms-of-use"}
      />
      <HelpPageMenubar />
      <div className="container px-3 mx-auto py-14">
        <Suspense fallback={<div>Loading...</div>}>
          <Paragraph termOfUseParagraphPromise={termOfUseParagraphPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
