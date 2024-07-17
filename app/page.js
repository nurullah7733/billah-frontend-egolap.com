import MainSlider from "../components/mainSlider/mainSlider";
import BestSales from "../components/home/bestSales/bestSales";
import KachaBazar from "../components/home/kachaBazar/kachaBazar";
import Electronics from "../components/home/electronics/electronics";
import MarqueeComponent from "../components/home/marquee/marquee";
import TopProducts from "@components/home/topProducts/topProducts";
import PopularProducts from "@components/home/popularProducts/popularProducts";
import SpecialProducts from "@components/home/specialProducts/specialProducts";
import TrendingProducts from "@components/home/trendingProducts/trendingProducts";
import NewProducts from "@components/home/newProducts/newProducts";

import { cookies } from "next/headers";

export default async function Home() {
  let cookie = cookies();
  let token = cookie.get("token2")?.value || cookie.get("token")?.value;

  return (
    <>
      <main>
        {/* Main Slider */}
        <MainSlider token={token} />
        {/* Best sales */}
        <BestSales />
        {/* kacha bazar */}
        <KachaBazar />
        {/* TopProducts */}
        <TopProducts />
        {/* PopularProducts */}
        <PopularProducts />
        {/* Marquee */}
        <MarqueeComponent />
        {/* Best of Electronics*/}
        <Electronics />
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
