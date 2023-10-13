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
        <div className="mt-5">
          <p className="text-[14px] text-black dark:text-white">
            এই ক্লিঞ্জিং বারটি যে শুধু ফেইসে ইউজ করা যায়, তা নয়। এটি বডিতে
            ইউজের জন্যও বেশ ভালো একটি সোপ হিসেবে কাজ করে। এটি বডি একনে, ব্লেমিশ
            ট্রিট করে, রাফ স্কিন টেক্সচার সফট করে এবং ফেইসের একনে ব্রেকআউট কমাতে
            হেল্প করে। আবার হেভি মেকাপ ক্লিন করতেও এই ক্লিঞ্জিং বারটি বেশ ভালো
            কাজ করে।এই ক্লিঞ্জিং বারটি সাধারন সোপ এর তুলনায় আলাদা কারন এতে কোনো
            ক্ষতিকর কেমিক্যাল ও artifical oil নেই। এতে আছে Argan oil ও Olive oil
            এর মতো হেলদি ইনগ্রেডিয়েন্ট যা স্কিনকে একদমই রুক্ষ করেনা। এতে আরো
            আছে Centella Asiatica Extract ও Fresh Mint Extract, যা স্কিনকে
            ডিটক্সিফাই করে এবং স্কিনকে নারিশড রাখে।
          </p>
        </div>

        <div className="mt-5">
          <p className="mb-1 text-[14px] font-semibold text-black dark:text-white">
            ব্যবহারবিধিঃ
          </p>
          <p className="text-[14px] text-black dark:text-white">
            ক্লিঞ্জিং বারটি পানিতে ভিজিয়ে ফোম তৈরী করে নিন এবং স্কিনে সার্কুলার
            মোশনে ইউজ করুন এরপর ক্লিন করে ফেলুন
          </p>
        </div>

        <div className="mt-5">
          <p className="mb-1 font-semibold text-[14px] text-black dark:text-white">
            Ingredients:
          </p>
          <p className="text-[14px] text-black dark:text-white">
            Lauric Acid, Sodium Stearate, Saponified Palm Oil, Sodium Laurate,
            Sodium Myristate, Stearic Acid, Glycerin, Sorbitol, Lauramidopropyl
            Betaine, Sodium Hyaluronate, Niacinamide, Chlorella Vulgaris
            (Dermochlorella Algae) Powder, Triticum Vulgare (Wheat) Sprout
            Powder, Melaleuca Alternifolia (Tea Tree) Extract, Houttuynia
            Cordata Extract, Glycyrrhiza Glabra (Licorice) Root Extract, etc.
          </p>
        </div>
        {/* সতর্কতাঃ */}
        <div className="mt-5">
          <p className="mb-1 font-semibold text-[14px] text-black dark:text-white">
            সতর্কতাঃ
          </p>
          <p className="text-[14px] text-black dark:text-white">
            অ্যাপ্লাই করার আগে অবশ্যই প্যাচ টেস্ট করে নেবেন।
          </p>
        </div>
      </div>
    </>
  );
};

export default TabConentOne;
