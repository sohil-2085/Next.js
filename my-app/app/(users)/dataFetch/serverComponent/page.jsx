import React from "react";

const page = async (props) => {
  const searchParams = await props.searchParams;
  const { name } = await searchParams;
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await res.json();
  console.log(data);

  return <div>Data - {data.name}</div>;
};

export default page;
