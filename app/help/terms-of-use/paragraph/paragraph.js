import React from "react";
import parse from "html-react-parser";

const Paragraph = async ({ termOfUseParagraphPromise }) => {
  let data = await termOfUseParagraphPromise;
  return (
    <div>
      {data?.slice(-1)?.[0]?.termOfUse &&
        parse(data?.slice(-1)?.[0]?.termOfUse)}
    </div>
  );
};

export default Paragraph;
