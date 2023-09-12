import "./globals.css";
import "react-modern-drawer/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from "../redux/Provider";
import NextThemeProvider from "../utils/provider/themeProvider";
import AppProgressbarProvider from "../utils/provider/appProgressbarProvider";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CategoriesSlider from "../components/categories/categories";
import TopItemAndPrice from "../components/common/topItemAndPrice/topItemAndPrice";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NextThemeProvider attribute="class">
            <Header />
            <CategoriesSlider />
            {children}
            <AppProgressbarProvider />
            <TopItemAndPrice />
            <Footer />
          </NextThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
