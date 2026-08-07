import React from "react";

const SingleProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <div>
      <h1>username = {user.username}</h1>
      <h1>userid = {user.postid}</h1>
    </div>
  );
};

export default SingleProfilePost;
