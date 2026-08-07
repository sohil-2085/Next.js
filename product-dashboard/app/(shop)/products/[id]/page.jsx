import Image from "next/image";
import React from "react";

async function getIndProducts(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  } catch (error) {
    throw new Error(`Failed to fetch ${id} product`, error);
  }
}

const productIdPage = async (props) => {
  const product = await props.params;
  const indProduct = await getIndProducts(product.id);

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
