"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const AppProgressbarProvider = () => {
  return (
    <ProgressBar
      height="4px"
      color="#fff"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default AppProgressbarProvider;
