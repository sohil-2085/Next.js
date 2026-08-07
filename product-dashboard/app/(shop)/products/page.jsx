import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

const productPage = async ({ searchParams }) => {
  const searchParam = (await searchParams) ?? {};
  const products = await getProducts();

  const category = searchParam.category || "all";
  const price = searchParam.price || 2;

  return (
    <>
      <div className="p-4 flex flex-col gap-2">
        {/* <h1 className="">Products main page</h1>
        <Link
          href="/products/10"
          className="p-4 bg-white text-black w-fit inline-block"
        >
          go to 10th product
        </Link> */}
        {/* <h2>{category}</h2>
        <h2>{price}</h2> */}
        <div className="grid grid-cols-2 gap-8">
          {products.map((product) => (
            <Link href={`products/${product.id}`} key={product.id} className="flex flex-col gap-4">
              <Image
                src={product.image}
                alt="product"
                width={150}
                height={150}
              />
              <span>{product.title}</span>
              <span>{product.category}</span>
              <span>{product.price}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default productPage;
