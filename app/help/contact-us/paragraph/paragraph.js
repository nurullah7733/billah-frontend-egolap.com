import React from "react";
import parse from "html-react-parser";

const Paragraph = async ({ contactUsParagraphPromise }) => {
  let data = await contactUsParagraphPromise;
  return <div>{parse(data?.slice(-1)?.[0].contactUs)}</div>;
};

export default Paragraph;
