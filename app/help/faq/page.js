import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import {
  faqRequest,
  getAllWebSettings,
} from "../../../APIRequest/webSettings/webSettingsApi";
import Paragraph from "./paragraph/paragraph";
import { Suspense } from "react";

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let faqPromise = faqRequest();

  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"faq image"}
        imagePath={data[0]?.faqImg?.slice(-1)[0]?.secure_url}
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
