import Link from "next/link";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import {
  contactUsParagraphRequest,
  getAllWebSettings,
} from "../../../APIRequest/webSettings/webSettingsApi";
import Paragraph from "./paragraph/paragraph";
import { Suspense } from "react";
import ContactForm from "./contactForm/contactForm";
import { getContactUsBannerRequest } from "../../../APIRequest/banners/bannersApi";

export const metadata = {
  title: "Contact Egolap.com - We're Here to Assist You!",
  description:
    "Need assistance? Reach out to the Egolap.com team. Whether you have questions, feedback, or concerns, we're here to help. Contact us for a prompt and friendly response. Your satisfaction is our priority.",
  image: "/seo_contact.jpg",

  twitter: {
    card: "Have a question or need assistance? Reach out to the Egolap.com team! 🤝 Our support team is ready to assist you with any queries. Contact us for a seamless shopping experience. #Egolap #CustomerSupport #ContactUs",
    site: "@Egolap1",
  },
};

const Page = async () => {
  let contactUsParagraphPromise = contactUsParagraphRequest();
  let data = await getContactUsBannerRequest();

  return (
    <div>
      <HelpPageTopImage
        altName={"contact us image"}
        imagePath={data?.[0]?.img?.slice(-1)?.[0]?.secure_url}
        headerInImage={"contact us"}
      />
      <HelpPageMenubar />
      <div className="container px-3 m-auto py-14">
        <div className="pb-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Paragraph contactUsParagraphPromise={contactUsParagraphPromise} />
          </Suspense>
        </div>
        <div className="container mx-auto ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
