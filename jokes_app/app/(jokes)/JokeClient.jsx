"use client";
import React, { useState } from "react";
import { joke } from "./api";

const JokeClient = ({ initialJoke }) => {
  const [jokes, setJokes] = useState(initialJoke);
  const [show, setShow] = useState(false);
  const fetchJoke = async () => {
    const nextJoke = await joke();
    setJokes(nextJoke);
  };


  return (
    <>
      <h3>{jokes.setup}</h3>
      {show ? (
        <div>
          <h1>{jokes.punchline}</h1>
          <button onClick={() => setShow(!show)}>Hide the Punch Line</button>
        </div>
      ) : (
        <button onClick={() => setShow(!show)}>Show Punch Line</button>
      )}
      <button onClick={() => fetchJoke()}>Next Joke</button>
    </>
  );
};

export default JokeClient;
