"use client";

import { QueryProvider } from "@/features/providers/query-provider";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Layout;
