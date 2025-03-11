"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const MynaUILayout = (props: Props) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default MynaUILayout;
