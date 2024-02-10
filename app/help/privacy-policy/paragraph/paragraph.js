import React from "react";
import parse from "html-react-parser";

const Paragraph = async ({ privacyPolicyParagraphPromise }) => {
  let data = await privacyPolicyParagraphPromise;
  return <div>{parse(data?.slice(-1)[0].privacyPolicy)}</div>;
};

export default Paragraph;
