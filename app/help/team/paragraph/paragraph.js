import React from "react";
import parse from "html-react-parser";

const Paragraph = async ({ teamParagraphPromise }) => {
  let data = await teamParagraphPromise;
  return (
    <div>{data?.slice(-1)?.[0].team && parse(data?.slice(-1)?.[0].team)}</div>
  );
};

export default Paragraph;
