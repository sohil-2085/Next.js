import React from "react";

const SingleProfile = async (props) => {
  console.log(props)
  const user = await props.params;
  console.log(user);
  return <div>username = {user.username}</div>;
};

export default SingleProfile;
