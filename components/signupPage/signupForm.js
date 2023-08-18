"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registrationRequest } from "../../APIRequest/user/userApi";
import { useRouter } from "next/navigation";

const signupSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email(),
  mobile: Yup.string().required("Mobile is required").min(11).max(11),
  password: Yup.string().required("Password is required").min(6),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match!"
  ),
});

const SignupForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async ({ fullName, email, mobile, password }) => {
      var fullNames = fullName.split(" "),
        firstName = fullNames[0],
        lastName = fullNames[fullNames.length - 1];
      let data = { firstName, lastName, email, mobile, password };
      let result = await registrationRequest(data);
      if (result) {
        router.push("/login");
      }
    },
  });
  const { errors, touched, values, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <div className="container py-14 mx-auto !max-w-sm px-3">
      <div className="bg-white dark:bg-gray-700 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full px-3">
        <h1 className="pt-3 mb-6 text-3xl font-semibold text-center md:text-xl">
          Sign up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="name"
              className="block w-full p-2 border rounded outline-none "
              name="fullName"
              placeholder="Full Name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur("fullName")}
            />
            {errors.fullName && touched.fullName && (
              <span className="text-sm text-red-600">{errors.fullName}</span>
            )}
          </div>

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
              type="mobile"
              className="block w-full p-2 border rounded outline-none"
              name="mobile"
              placeholder="Mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur("mobile")}
            />
            {errors.email && touched.email && (
              <span className="text-sm text-red-600">{errors.mobile}</span>
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

          <div className="mb-4">
            <input
              type="password"
              className="block w-full p-2 border rounded outline-none"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur("confirmPassword")}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-sm text-red-600">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 my-1 text-sm text-center text-white uppercase rounded dark:bg-gray-800 bg-green bg-primary hover:bg-green-dark focus:outline-none"
          >
            Create Account
          </button>
        </form>

        <div className="py-3 text-center dark:text-gray-800">
          Already have an account?{" "}
          <Link href="login" legacyBehavior>
            <a className="text-primary text-blue dark:text-white">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
