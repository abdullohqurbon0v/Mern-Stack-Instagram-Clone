/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { ChildProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const layout = ({ children }: ChildProps) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, []);
  return <div>{children}</div>;
};

export default layout;
