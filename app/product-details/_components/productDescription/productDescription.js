import ClickToAnotherTabHandle from "./_component/clickToAnotherTabHandle";
import EachTabContentHeader from "./_component/eachtabHeader";

const ProductDescription = ({ product, productPrivacyPolicy }) => {
  return (
    <>
      <div className="flex flex-wrap py-14">
        <div className="w-full py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-gray-700 bg-white">
          <ul
            className="flex flex-row flex-wrap gap-3 px-3 pt-3 pb-4 mb-0 list-none"
            role="tablist"
          >
            <ClickToAnotherTabHandle product={product} />
          </ul>
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded dark:bg-gray-700 ">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <EachTabContentHeader
                  product={product}
                  productPrivacyPolicy={productPrivacyPolicy}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
