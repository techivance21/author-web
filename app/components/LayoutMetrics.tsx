"use client";

import { usePathname } from "next/navigation";
import MetricsSection from "./MetricsSection";

export default function LayoutMetrics() {
  const router = { pathname: usePathname() };
  return router.pathname === "/" && <MetricsSection />;
}

