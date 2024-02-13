import "./globals.css";
import "react-modern-drawer/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "sweetalert2/dist/sweetalert2.min.css";
import ReduxProvider from "../redux/Provider";
import NextThemeProvider from "../utils/provider/themeProvider";
import AppProgressbarProvider from "../utils/provider/appProgressbarProvider";
import { cookies } from "next/headers";

import Header from "@components/header/header";
import Footer from "../components/footer/footer";
import CategoriesSlider from "../components/categories/categories";
import Categories from "../components/categories/categories2";
import TopItemAndPrice from "../components/common/topItemAndPrice/topItemAndPrice";
import { getAllWebSettings } from "../APIRequest/webSettings/webSettingsApi";

export const metadata = {
  title:
    "Online Shopping in Bangladesh. Egolap Emporium: Elevate Your Shopping Experience",
  description:
    "Discover a world of limitless possibilities at Egolap.com, your ultimate destination for online shopping. Immerse yourself in a curated selection of provisial products, fashion-forward clothing, cutting-edge electronics, and luxurious cosmetics. Egolap.com brings you a seamless and secure shopping experience, where convenience meets quality. Explore a diverse range of products, unbeatable deals, and personalized recommendations. Elevate your online shopping journey with Egolap.com – where every click opens the door to endless choices. Shop smart, shop Egolap.com.",
  image: "/opengraph.jpg", // Path to your Open Graph image
  twitter: {
    card: "summary", // Twitter card type
    site: "@your_twitter_handle", // Your Twitter handle
  },
};

export default async function RootLayout({ children }) {
  let cookie = cookies();
  let token = cookie.get("token2")?.value;
  const getAllWebSettingsData = await getAllWebSettings();

  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NextThemeProvider attribute="class">
            <Header token={token} />
            <CategoriesSlider />
            {/* <Categories /> */}
            {children}
            <AppProgressbarProvider />
            <TopItemAndPrice />
            <Footer socialLink={getAllWebSettingsData[0]?.socialLink} />
          </NextThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
