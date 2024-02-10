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

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let contactUsParagraphPromise = contactUsParagraphRequest();
  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"contact us image"}
        imagePath={data[0]?.contactUsImg?.slice(-1)[0]?.secure_url}
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
