import React from "react";

const categoryPage = async (props) => {
  const category = await props.params;
  return (
    <>
      <h1 className="p-4">{category.category} category page </h1>
    </>
  );
};

export default categoryPage;
