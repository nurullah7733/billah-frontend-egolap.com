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

const Page = async () => {
  let getAllWebSettingsPromise = getAllWebSettings();
  let termOfUseParagraphPromise = termOfUseParagraphRequest();
  let data = await getAllWebSettingsPromise;

  return (
    <div>
      <HelpPageTopImage
        altName={"Terms-of-use image"}
        imagePath={data[0]?.teamImgBanner?.slice(-1)[0]?.secure_url}
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
