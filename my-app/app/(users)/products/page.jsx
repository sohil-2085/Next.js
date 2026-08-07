import React from "react";

const products = async ({ searchParams }) => {
  const searchParam = await searchParams;

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;
  console.log(searchParam)
  return (
    <h1>
      {category}, {sort}, {page}
    </h1>
  );
};

export default products;
