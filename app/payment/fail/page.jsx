import Image from "next/image";

export const metadata = {
  title: "Thank You for Shopping with Egolap.com!",
  description:
    "Thank you for choosing Egolap.com.We're preparing to deliver your favorite items. Enjoy a seamless shopping experience with Egolap.com!",
  image: "/seo_payment.jpg",

  twitter: {
    card: "Your payment on Egolap.com was a breeze. We're on our way to delivering joy. Shop smart, shop Egolap.com! #Egolap #PaymentSuccess #HappyShopping",
    site: "@Egolap1",
  },
};

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
