import { NavLink } from "@components/common/navLink/navLink";
import Na from "next/link";

const HelpPageMenubar = () => {
  return (
    <div className="flex justify-center gap-5 py-1 bg-primary dark:bg-gray-900">
      <NavLink href="/help/faq" exact className="text-sm text-white">
        FAQ
      </NavLink>
      <NavLink href="/help/contact-us" exact className="text-sm text-white">
        Contact Us
      </NavLink>
      <NavLink href="/help/privacy-policy" exact className="text-sm text-white">
        Privacy Policy
      </NavLink>
      <NavLink href="/help/terms-of-use" exact className="text-sm text-white">
        Terms of Use
      </NavLink>
    </div>
  );
};

export default HelpPageMenubar;
