import parse from "html-react-parser";
const TabConentOne = ({ product }) => {
  return (
    <>
      <div>
        <div className="flex mb-1">
          <p className="w-[100px] font-semibold text-[14px] text-black dark:text-white">
            Brand:
          </p>
          <p className="text-[14px] text-black dark:text-white">
            {product?.brand[0]?.name}
          </p>
        </div>

        <div className="flex mb-1">
          {product?.made?.length > 0 ? (
            <>
              <p className="w-[100px] text-[14px] font-semibold">Made:</p>
              <p className="text-[14px] text-black dark:text-white">
                {product?.made}
              </p>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="flex mb-1">
          {product?.skinType?.length > 0 ? (
            <>
              <p className="w-[100px] text-[14px] font-semibold">Skin type:</p>
              <p className="text-[14px] text-black dark:text-white">
                {product?.skinType}
              </p>
            </>
          ) : (
            ""
          )}
        </div>

        {/* sub decription */}
        <div className="mt-5"> {parse(product?.description)}</div>
      </div>
    </>
  );
};

export default TabConentOne;
