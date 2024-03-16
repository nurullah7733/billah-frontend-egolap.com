import MainSlider from "../components/mainSlider/mainSlider";
import BestSales from "../components/home/bestSales/bestSales";
import KachaBazar from "../components/home/kachaBazar/kachaBazar";
import Electronics from "../components/home/electronics/electronics";
import MarqueeComponent from "../components/home/marquee/marquee";
import { getAllWebSettings } from "../APIRequest/webSettings/webSettingsApi";
import TopProducts from "@components/home/topProducts/topProducts";
import PopularProducts from "@components/home/popularProducts/popularProducts";
import SpecialProducts from "@components/home/specialProducts/specialProducts";
import TrendingProducts from "@components/home/trendingProducts/trendingProducts";
import NewProducts from "@components/home/newProducts/newProducts";

import { cookies } from "next/headers";

export default async function Home() {
  let cookie = cookies();
  let token = cookie.get("token2")?.value || cookie.get("token")?.value;

  const getAllWebSettingsData = await getAllWebSettings();

  return (
    <>
      <main>
        {/* Main Slider */}
        <MainSlider
          slider={getAllWebSettingsData?.[0]?.mainSlider}
          token={token}
        />
        {/* Best sales */}
        <BestSales banner={getAllWebSettingsData?.[0]?.bestSales} />
        {/* kacha bazar */}
        <KachaBazar banner={getAllWebSettingsData?.[0]?.provisionalBazar} />
        {/* TopProducts */}
        <TopProducts />
        {/* PopularProducts */}
        <PopularProducts />
        {/* Marquee */}
        <MarqueeComponent
          dealerBrandLogo={getAllWebSettingsData?.[0]?.dealerBrandLogo}
        />
        {/* Best of Electronics*/}
        <Electronics banner={getAllWebSettingsData?.[0]?.bestOfElectronics} />
        {/* Special products*/}
        <SpecialProducts />
        {/* Trending Products  */}
        <TrendingProducts />
        {/* new Products    */}
        <NewProducts />
      </main>
    </>
  );
}
