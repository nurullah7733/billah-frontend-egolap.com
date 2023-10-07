"use client";
import Link from "next/link";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops, something went wrong!</h1>
      <p>Sorry, it looks like there was an error. Please try again later.</p>
      <Link href="/">Go back to the homepage</Link>
    </div>
  );
};

export default Error;
