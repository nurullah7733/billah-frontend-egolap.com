import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";

const Page = () => {
  return (
    <div>
      <HelpPageTopImage
        altName={"faq image"}
        imagePath={"/assets/img/faq3.webp"}
        headerInImage={"Faq"}
      />
      <HelpPageMenubar />

      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="container px-3 m-auto mb-2">
          <div className="p-2">
            <Accordion
              content={
                "A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. "
              }
              title={"Q. How does the site work? "}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="container px-3 m-auto mb-2">
          <div className="p-2">
            <Accordion
              isOpen={false}
              content={
                "A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. "
              }
              title={"Q. How does the site work? "}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="container px-3 m-auto mb-2">
          <div className="p-2">
            <Accordion
              isOpen={false}
              content={
                "A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. "
              }
              title={"Q. How does the site work? "}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="container px-3 m-auto mb-2">
          <div className="p-2">
            <Accordion
              isOpen={false}
              content={
                "A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. "
              }
              title={"Q. How does the site work? "}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="container px-3 m-auto mb-2">
          <div className="p-2">
            <Accordion
              isOpen={false}
              content={
                "A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. "
              }
              title={"Q. How does the site work? "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
