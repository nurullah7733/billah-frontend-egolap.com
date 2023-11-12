"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginRequest } from "../../APIRequest/user/userApi";
import Cookies from "js-cookie";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      let data = { email, password };
      let result = await loginRequest(data);

      Cookies.set("token2", result?.token);
      if (Object.keys(result?.data).length > 0) {
        Cookies.set("token2", result?.token);
        window.history.go(-1);
        window.location.reload();
      }
    },
  });
  const { errors, touched, values, handleBlur, handleChange, handleSubmit } =
    formik;

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

          <div className="mb-4">
            <input
              type="password"
              className="block w-full p-2 border rounded outline-none"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur("password")}
            />
            {errors.password && touched.password && (
              <span className="text-sm text-red-600">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 my-1 text-sm text-center text-white uppercase rounded bg-green bg-primary hover:bg-green-dark focus:outline-none dark:bg-gray-800"
          >
            log in
          </button>
        </form>

        <div className="py-1 text-center ">
          <Link href="/forget-password/verify-email" legacyBehavior>
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
