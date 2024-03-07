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
import TopItemAndPrice from "../components/common/topItemAndPrice/topItemAndPrice";
import { getAllWebSettings } from "../APIRequest/webSettings/webSettingsApi";
import { getCategoriesRequest } from "../APIRequest/categories/categoriesApi";

export const metadata = {
  title:
    "Egolap.com - Your One-Stop Bangladeshi Ecommerce Destination for Provisional Bazar, Electronics, Cosmetics, and More!",
  description:
    "Discover a world of convenience at Egolap.com! Explore a diverse range of products, from Provisional Bazar essentials to cutting-edge electronics, trendy cosmetics, and stylish clothing. Shop hassle-free for all your needs in one place. Quality, variety, and convenience – experience it all with Egolap.com.",
  image: "/seo1.jpg",

  twitter: {
    card: "Explore a world of variety at Egolap.com! 🌐 From fresh fruits 🍎 to cutting-edge electronics 📱, trendy clothing 👗, and luxurious cosmetics 💄 – find it all in one place. Your go-to destination for quality and convenience. Shop smart at Egolap.com! #Egolap #Shopping #DiversityInProducts",
    site: "@Egolap1",
  },
};

export default async function RootLayout({ children }) {
  let cookie = cookies();
  let token = cookie.get("token2")?.value || cookie.get("token")?.value;
  const getAllWebSettingsData = await getAllWebSettings();
  let categories = await getCategoriesRequest();

  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NextThemeProvider attribute="class">
            <Header token={token} />
            <CategoriesSlider categories={categories[0]?.rows} />
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
