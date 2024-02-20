import React from "react";
import LoginForm from "@components/loginPage/loginForm";

export const metadata = {
  title:
    "Secure Login - Access Your Egolap.com Account for Hassle-Free Shopping",
  description:
    "Log in securely to your Egolap.com account. Enjoy a seamless shopping experience with easy access to your order history, saved items, and personalized recommendations. Shop smart with Egolap.com!",
  image: "/seo_login.jpg",

  twitter: {
    card: "Securely access your Egolap.com account for a seamless shopping journey. Log in with confidence and explore personalized recommendations, order history, and more. Shop smart with Egolap.com! #Egolap #SecureLogin #ShopSmart",
    site: "@Egolap1",
  },
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
