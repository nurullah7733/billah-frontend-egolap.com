const Loading = () => {
  let products = Array.from(Array(10).keys());
  let brands = Array.from(Array(7).keys());
  let category = Array.from(Array(10).keys());
  let subcategory = Array.from(Array(15).keys());
  return (
    <div className="px-3 py-[14px] container mx-auto">
      <div className="animate-pulse ">
        {/* sortby */}
        <div className="w-full h-[45px] flex items-center justify-between mb-[10px] bg-gray-300 rounded-md px-5">
          <div className="">
            <div className="  w-[80px] h-[25px]  bg-gray-400/80 rounded-md lg:block hidden"></div>
          </div>
          <div className="  w-[80px] h-[25px]  bg-gray-400/80 rounded-md "></div>
        </div>
        <div className="flex  gap-[15px]">
          {/* filter */}
          <div className="max-w-[275px] w-full lg:hidden">
            {/* Pricing range */}
            <div className="border-2 max-w-[275px] p-5 rounded-md">
              <div className="text-xl font-medium sm:pb-6 sm:text-base">
                {/*  */}
                <div className="w-full mb-[25px]  h-[25px] rounded-md bg-gray-300"></div>
                {/*  */}
                <div className="w-full mb-[20px] h-[18px] rounded-md bg-gray-300"></div>
                <div className="flex justify-between">
                  <div className="w-[80px] rounded-[2px] mt-[10px] h-[22px]  bg-gray-300"></div>
                  <div className="w-[80px] rounded-[2px] mt-[10px] h-[22px]  bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* avaibility */}
            <div className="border-2 max-w-[275px] p-5 mt-3 rounded-md">
              <div className="text-xl font-medium sm:pb-6 sm:text-base">
                {/*  */}
                <div className="w-full mb-[15px]  h-[25px] rounded-md bg-gray-300"></div>

                {/*  */}
                <div className="flex gap-[5px]">
                  <div className="w-[18px] mt-[10px] h-[18px] rounded-sm bg-gray-300"></div>
                  <div className="w-[100px] mt-[10px] h-[18px] rounded-md bg-gray-300"></div>
                </div>
                {/*  */}
                <div className="flex gap-[5px]">
                  <div className="w-[18px] mt-[10px] h-[18px] rounded-sm bg-gray-300"></div>
                  <div className="w-[100px] mt-[10px] h-[18px] rounded-md bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="border-2 max-w-[275px] p-5 mt-3 rounded-md">
              <div className="text-xl font-medium sm:pb-6 sm:text-base">
                {/*  */}
                <div className="w-full mb-[15px]  h-[25px] rounded-md bg-gray-300"></div>

                {/*  */}
                {brands.map((item, index) => (
                  <div className="flex gap-[5px]" key={index}>
                    <div className="w-[18px] mt-[10px] h-[18px] rounded-sm bg-gray-300"></div>
                    <div className="w-[100px] mt-[10px] h-[18px] rounded-md bg-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* category */}
            <div className="border-2 max-w-[275px] p-5 mt-3 rounded-md">
              <div className="text-xl font-medium sm:pb-6 sm:text-base">
                {/*  */}
                <div className="w-full mb-[15px]  h-[25px] rounded-md bg-gray-300"></div>

                {/*  */}
                {category.map((item, index) => (
                  <div className="flex gap-[5px]" key={index}>
                    <div className="w-[18px] mt-[10px] h-[18px] rounded-sm bg-gray-300"></div>
                    <div className="w-[100px] mt-[10px] h-[18px] rounded-md bg-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* sub category */}
            <div className="border-2 max-w-[275px] p-5 mt-3 rounded-md">
              <div className="text-xl font-medium sm:pb-6 sm:text-base">
                {/*  */}
                <div className="w-full mb-[15px]  h-[25px] rounded-md bg-gray-300"></div>

                {/*  */}
                {subcategory.map((item, index) => (
                  <div className="flex gap-[5px]" key={index}>
                    <div className="w-[18px] mt-[10px] h-[18px] rounded-sm bg-gray-300"></div>
                    <div className="w-[100px] mt-[10px] h-[18px] rounded-md bg-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* start products*/}
          <div className="grid w-full grid-cols-5 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 h-[700px] lg:h-[1000px] md:min-h-[1800px]">
            {products.map((item, index) => (
              <div key={index} className="max-h-[340px]">
                <div className="border-2 rounded-md ">
                  {/* img */}
                  <div className="w-full h-[200px] bg-gray-300 "></div>
                  <div className="p-[5px]">
                    {/* title */}
                    <div className="w-full h-[15px] mt-[5px] bg-gray-300 rounded-md "></div>
                    <div className="w-[70%] h-[15px] mt-[5px] bg-gray-300 rounded-md "></div>
                    {/* star */}

                    {/* price */}
                    <div className="max-w-[160px] h-[12px] mt-[10px] bg-gray-300 rounded-md "></div>

                    {/* button */}
                    <div className="  w-full h-[40px] mt-[10px] mb-[6px] bg-gray-300 rounded-md "></div>
                  </div>
                </div>
              </div>
            ))}

            {/* end start */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
