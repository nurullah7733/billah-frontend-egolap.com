import parse from "html-react-parser";

const TabContentThree = ({ productPrivacyPolicy }) => {
  return (
    <div>
      <div className="mb-5">
        {productPrivacyPolicy?.length > 0 &&
          parse(productPrivacyPolicy?.productsPrivacyPolicy)}
      </div>
    </div>
  );
};

export default TabContentThree;
