// components/ResponsiveLayout.tsx
"use client";

import { useEffect, useState } from "react";
import PCLayout from "./PCLayout";
import MobileLayout from "./MobileLayout";

export default function ResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile ? <MobileLayout /> : <PCLayout />;
}
