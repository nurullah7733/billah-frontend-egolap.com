"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import createParams from "../../../utils/createParams/createParams";

import { getAllProductsRequest } from "../../../APIRequest/products/productsApi";
import Product from "../../common/product/product";
import {} from "next/router";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function LoadMore() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const [data, setData] = useState([]);
  const [total, setTotal] = useState([0]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(2);

  const delay = 500;
  const perPage = 10;
  const allQueryParams = searchParams.toString();
  useEffect(() => {
    if (inView && data.length + perPage !== total) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds

      const timeoutId = setTimeout(async () => {
        let { products, total } = await getAllProductsRequest(
          allQueryParams,
          pageNo
        );
        setData([...data, ...products]);
        setTotal(total);
        setPageNo(pageNo + 1);
        setIsLoading(false);
      }, delay);

      //   Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading, pageNo, total, allQueryParams]);

  return (
    <div className="pt-4">
      <div className="grid grid-cols-5 gap-4 xs:gap-2 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
        {data?.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>

      <div className=" flex items-center justify-center pt-5">
        <div ref={ref}>
          {inView && isLoading && data.length + perPage !== total && (
            <Image
              src="/assets/icons/spinner.svg"
              alt="spinner"
              width={40}
              height={40}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoadMore;
