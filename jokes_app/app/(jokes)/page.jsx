import React from "react";
import JokeClient from "./JokeClient";
import { joke } from "./api";

const page = async () => {
  const initialJoke = await joke();
  return (
    <>
      <JokeClient initialJoke={initialJoke} />
    </>
  );
};

export default page;
