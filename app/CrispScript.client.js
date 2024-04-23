"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("424fd849-5273-4291-b187-fcfed7805238");
  });

  return null;
};

export default CrispChat;
