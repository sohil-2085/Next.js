import React from "react";
import ProductList from "./ProductList";

const products = async ({ searchParams }) => {
  const searchParam = await searchParams;

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;
  console.log(searchParam)
  return (
    <div>
      <ProductList />
      {category}, {sort}, {page}
    </div>
  );
};

export default products;
