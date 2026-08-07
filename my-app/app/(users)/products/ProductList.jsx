"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const searchParams = useSearchParams();
  console.log("inside", searchParams);

  const pages = searchParams.get("page");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  return (
    <>
      <h1>
        inside {pages}, {category}, {sort}
      </h1> 
    </>
  );
};

export default ProductList;
