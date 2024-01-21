import Image from "next/image";

function SuccessPage({ searchParams }) {
  return (
    <div className=" flex items-center justify-center my-5">
      <div className="min-w-[320px]  bg-gray-200 dark:bg-gray-600 rounded-lg">
        <div className=" p-5">
          <div>
            <div className="flex justify-center">
              <Image
                width={50}
                height={50}
                src={"/assets/icons/cancel.svg"}
                alt="Payment Failed"
              />
            </div>
            <div className="py-3">
              <h1
                className="text-center font-bold text-red-600
             text-xl capitalize"
              >
                Payment {searchParams?.status}
              </h1>
              <p className="py-3 text-center font-semibold text-slate-500 dark:text-white">
                Please try again for Order!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
