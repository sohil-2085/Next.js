"use client";
import React, { useEffect, useState } from "react";

const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState(null);
  const [show, setShow] = useState(true);
  const url = "http://www.official-joke-api.appspot.com/random_joke";
  const fetchRandomJokes = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(randomJokes);
    setRandomJokes(data);
  };
  useEffect(() => {
    fetchRandomJokes();
  }, []);

  if (!randomJokes) return null;

  return (
    <>
      <h2>{randomJokes.setup}</h2>
      {show ? (
        <button onClick={() => setShow(!show)}>Reveal</button>
      ) : (
        <div>
          <h1>{randomJokes.punchline}</h1>
          <button onClick={() => setShow(!show)}>Hide Punch Line</button>
        </div>
      )}
      <button onClick={() => fetchRandomJokes()}>Next</button>
    </>
  );
};

export default RandomJokes;
