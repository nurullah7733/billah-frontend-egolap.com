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

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let privacyPolicyParagraphPromise = privacyPolicyParagraphRequest();
  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"privacy-policy image"}
        imagePath={data[0]?.privacyPolicyImg?.slice(-1)[0]?.secure_url}
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
