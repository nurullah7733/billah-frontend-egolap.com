"use client";
import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  let [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (hasMounted) {
    return <div>{children}</div>;
  } else {
    return null;
  }
};

export default ClientOnly;
