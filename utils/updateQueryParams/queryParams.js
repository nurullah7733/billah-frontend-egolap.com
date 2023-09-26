import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const prevQueryParamsRef = useRef({});

  const filterValues = (values, options) => {
    const newQueryParams = createSearchParams(
      Object.keys(values).reduce((acc, curr) => {
        if (
          (!Array.isArray(values[curr]) && values[curr]) ||
          (Array.isArray(values[curr]) && values[curr].length > 0)
        ) {
          acc[curr] = values[curr];
        }
        return acc;
      }, {})
    );

    setQueryParams(newQueryParams, {
      ...options,
      ...{
        state: options?.state || window.history.state,
      },
    });
  };

  const out = {};

  queryParams.forEach((v, k) => {
    out[k] = v;
  });

  useEffect(() => {
    prevQueryParamsRef.current = out;
  }, [out]);

  return [out, filterValues, prevQueryParamsRef.current];
};
