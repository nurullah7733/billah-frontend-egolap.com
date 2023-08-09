import Accordion from "@components/common/accordion/accordion";
import HelpPageMenubar from "@components/common/helpPage/helpPageMenubar/helpPageMenubar";
import HelpPageTopImage from "@components/common/helpPage/helpPageTopImage/helpPageTopImage";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <HelpPageTopImage
        altName={"faq image"}
        imagePath={"/assets/img/terms2.webp"}
        headerInImage={"Terms-of-use"}
      />
      <HelpPageMenubar />
      <div className="container px-3 mx-auto py-14">
        <p>
          When you use our Website, we collect and store your personal
          information which is provided by you from time to time. Our primary
          goal in doing so is to provide you a safe, efficient, smooth and
          customized experience. This allows us to provide services and features
          that most likely meet your needs, and to customize our website to make
          your experience safer and easier. More importantly, while doing so, we
          collect personal information from you that we consider necessary for
          achieving this purpose.
        </p>
        <div>
          <p className="text-[18px] py-4">
            Below are some of the ways in which we collect and store your
            information:
          </p>
          <ul>
            <li className="py-1 text-sm">
              &nabla; We receive and store any information you enter on our
              website or give us in any other way. We use the information that
              you provide for such purposes as responding to your requests,
              customizing future shopping for you, improving our stores, and
              communicating with you.
            </li>
            <li className="py-1 text-sm">
              &nabla; We also store certain types of information whenever you
              interact with us. For example, like many websites, we use
              &quot;cookies,&quot; and we obtain certain types of information
              when your web browser accesses Chaldal.com or advertisements and
              other content served by or on behalf of Chaldal.com on other
              websites.
            </li>
            <li className="py-1 text-sm">
              &nabla; When signing up via Facebook, we collect your Name and
              Email (provided by Facebook) as part of your Chaldal account
              Information.
            </li>
            <li className="py-1 text-sm">
              &nabla; To help us make e-mails more useful and interesting, we
              often receive a confirmation when you open e-mail from Chaldal if
              your computer supports such capabilities.
            </li>
          </ul>
          <div>
            <p className="text-[18px] py-4">Changes To Your Information:</p>
            <p className="text-[17px] pb-3">
              The information you provide us isn’t set in stone. You may review,
              update, correct or delete the personal information in your profile
              at any time.
            </p>
            <ul>
              <li className="py-1 text-sm">
                &nabla; If you would like us to remove your information from our
                records, please create a request at the
                <Link href={"/help/contact-us"} className="font-bold">
                  {" "}
                  Contact Us{" "}
                </Link>
                page.
              </li>
              <li className="py-1 text-sm">
                &nabla; To Delete your Facebook login, visit the
                <Link href={"/help/contact-us"} className="font-bold">
                  {" "}
                  Contact Us{" "}
                </Link>{" "}
                page while logged in via Facebook. You should see a
                &ldquo;Delete Facebook Login&ldquo; option to create a request
                to remove Facebook login from your account.
              </li>
            </ul>
          </div>
          <div>
            <p className="pt-3 text-base ">
              Information about our customers is an important part of our
              business, and we are not in the business of selling it to others.
            </p>
            <p className="pt-3 text-base">
              We release account and other personal information when we believe
              release is appropriate to comply with the law; enforce or apply
              our Terms of Use and other agreements; or protect the rights,
              property, or safety of Chaldal.com, our users, or others. This
              includes exchanging information with other companies and
              organizations for fraud protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
