import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <HelpPageTopImage
        altName={"contact us image"}
        imagePath={"/assets/img/contact2.webp"}
        headerInImage={"contact us"}
      />
      <HelpPageMenubar />
      <div className="container px-3 m-auto py-14">
        <h2 className="text-xl font-bold">
          Feel free to contact us anytime at 017xxxxxxx{" "}
        </h2>
        <p className="pt-3 pb-14">
          Or if you prefer, you can drop us a note using the form below.
          You&apos;ll always get a response from a real person — with a real
          name — within 48 hours.
        </p>
        <div className="container mx-auto ">
          <div className="bg-white dark:bg-gray-700 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3">
            <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
              Contact Us
            </h1>
            <input
              type="text"
              className="block w-full p-2 mb-4 border rounded outline-none "
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block w-full p-2 mb-4 border rounded outline-none"
              name="email"
              placeholder="Email"
            />

            <input
              type="mobile"
              className="block w-full p-2 mb-4 border rounded outline-none"
              name="mobile"
              placeholder="Mobile"
            />

            <textarea
              type="text"
              className="block w-full p-2 mb-4 border rounded outline-none"
              name="message"
              placeholder="Message"
              rows={3}
            />

            <button
              type="submit"
              className="w-full p-2 my-1 mb-5 text-sm text-center text-white uppercase rounded dark:bg-gray-800 bg-green bg-primary focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
