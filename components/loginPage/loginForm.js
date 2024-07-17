"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  loginRequest,
  userAddToCartOrUpdateRequest,
} from "../../APIRequest/user/userApi";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { getItemWithExpiry } from "../../utils/localStorageWithExpire/localStorageWithExpire";
import { SuccessToast } from "../../utils/notificationAlert/notificationAlert";
import store from "../../redux/store";
import {
  setAddToCartProductFromUserDatabaseAfterLogin,
  setTotalProductsPrice,
} from "../../redux/features/addToCart/addToCartSlice";
import { useState } from "react";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  let [loading, setLoading] = useState(false);
  let [
    whenConcatAddToCartProductsAndUseSelectorCards,
    setWhenConcatAddToCartProductsAndUseSelectorCards,
  ] = useState(false);

  let addToCartProducts = useSelector(
    (state) => state.addToCartProducts.products
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      setLoading(true);
      let loginData = { email, password };
      let { result, data } = await loginRequest(loginData);
      setLoading(false);
      if (result) {
        if (process.env.NODE_ENV === "development") {
          Cookies.set("token2", data?.token, { expires: 30 });
        }
        // user add to cart in useState from user database.
        store.dispatch(
          setAddToCartProductFromUserDatabaseAfterLogin(data?.data?.cart)
        );
        store.dispatch(setTotalProductsPrice());
        setWhenConcatAddToCartProductsAndUseSelectorCards(true);

        SuccessToast("Login success!");
        window.location.href = "/";
      }
    },
  });
  const { errors, touched, values, handleBlur, handleChange, handleSubmit } =
    formik;
  if (whenConcatAddToCartProductsAndUseSelectorCards) {
    // when user login then localstorage cart item save to database.
    let id = getItemWithExpiry("userData2")?.id;
    (async () => {
      await userAddToCartOrUpdateRequest(id, addToCartProducts);
    })();
  }
  return (
    <div className="container py-14 mx-auto !max-w-sm px-3">
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3 dark:bg-gray-700">
        <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="block w-full p-2 border rounded outline-none"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur("email")}
            />
            {errors.email && touched.email && (
              <span className="text-sm text-red-600">{errors.email}</span>
            )}
          </div>

          <div className="mb-4 ">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full p-2 border rounded outline-none"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {formik.errors.password && formik.touched.password && (
              <span className="text-sm text-red-600">
                {formik.errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex justify-center gap-2 w-full py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none dark:bg-gray-800 disabled:bg-primary-100/75 dark:disabled:bg-gray-800/10 dark:disabled:text-gray-800"
          >
            {loading && <img src="/assets/icons/spinner.svg" width={22} />} log
            in
          </button>
        </form>

        <div className="py-1 text-center ">
          <Link href="/forget-password" legacyBehavior>
            <a className=" text-blue text-primary dark:text-white">
              Forget password
            </a>
          </Link>
        </div>

        <div className="py-1 pb-3 text-center dark:text-gray-800">
          Create a new account?{" "}
          <Link href="/signup" legacyBehavior>
            <a className=" text-blue text-primary dark:text-white">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
