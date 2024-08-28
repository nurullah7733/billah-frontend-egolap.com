import parse from "html-react-parser";
const TabConentOne = ({ product }) => {
  return (
    <>
      <div>
        {/* sub decription */}
        <div className="mt-5">
          {product?.description?.length && parse(product?.description)}
        </div>
      </div>
    </>
  );
};

export default TabConentOne;
