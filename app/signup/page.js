import React from "react";
import SignupForm from "@components/signupPage/signupForm";

export const metadata = {
  title:
    "Join Egolap.com - Create Your Account for Exclusive Deals and Personalized Shopping",
  description:
    "Sign up for Egolap.com and unlock a world of exclusive deals, personalized recommendations, and seamless shopping. Join our community and experience the convenience of Egolap.com!",
  image: "/seo_signup.jpg",

  twitter: {
    card: "Join the Egolap.com community for exclusive deals and personalized shopping experiences. Sign up today and unlock a world of convenience. Your journey to smart shopping starts here! #Egolap #SignUp #ExclusiveDeals",
    site: "@Egolap1",
  },
};

const SignUp = () => {
  return <SignupForm />;
};

export default SignUp;
