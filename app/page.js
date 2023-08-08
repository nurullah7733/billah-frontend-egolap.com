"use client";
import { Fragment } from "react";
import MainSlider from "../components/mainSlider/mainSlider";
import BestSales from "../components/home/bestSales/bestSales";
import KachaBazar from "../components/home/kachaBazar/kachaBazar";
import Electronics from "../components/home/electronics/electronics";
import MarqueeComponent from "../components/home/marquee/marquee";

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* Main Slider */}
        <MainSlider />
        {/* Best sales */}
        <BestSales />
        {/* kacha bazar */}
        <KachaBazar />
        {/* Marquee */}
        <MarqueeComponent />
        {/* Best of Electronics*/}
        <Electronics />
      </main>
    </Fragment>
  );
}
