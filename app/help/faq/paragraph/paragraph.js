import React from "react";
import AccordionForFaq from "../accordian/accordian";

const Paragraph = async ({ faqPromise }) => {
  let data = await faqPromise;
  return (
    <div>
      {data?.map((item) => (
        <div className="bg-gray-100 dark:bg-gray-700">
          <div className="container px-3 m-auto mb-2">
            <div className="p-2">
              <AccordionForFaq
                isOpen={false}
                title={item?.questions?.question}
                content={item?.questions?.answer}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Paragraph;
