import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getIndProducts(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return null;
  }

  try {
    const product = await res.json();

    if (!product || Object.keys(product).length === 0) {
      return null;
    }

    return product;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getIndProducts(id);
  return {
    title: product?.title ?? "Product Not Found",
  };
}

const productIdPage = async ({ params }) => {
  const { id } = await params;
  const indProduct = await getIndProducts(id);

  if (!indProduct) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col p-8 gap-8">
        <div>
          <Image
            src={indProduct.image}
            width={250}
            height={250}
            alt="product image"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2>Title : {indProduct.title}</h2>
          <h2>Price : {indProduct.price}</h2>
          <h2>{indProduct.description}</h2>
          <h2>Category : {indProduct.category}</h2>
          <h2>Rating : {indProduct.rating.rate}</h2>
        </div>
      </div>
    </>
  );
};

export default productIdPage;
