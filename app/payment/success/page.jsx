import Image from "next/image";

function SuccessPage() {
  return (
    <div className=" flex items-center justify-center my-5">
      <div className="min-w-[320px]  bg-gray-200 dark:bg-gray-600 rounded-lg">
        <div className=" p-5">
          <div>
            <div className="flex justify-center">
              <Image width={50} height={50} src={"/assets/icons/success.svg"} />
            </div>
            <div className="py-3">
              <h1
                className="text-center font-bold text-[#25AE88]
               text-xl"
              >
                Payment Successful
              </h1>
              <p className="py-3 text-center font-semibold text-slate-500 dark:text-white">
                We received your purchase request; we'll be in touch shortly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
