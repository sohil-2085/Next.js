"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <h2>Something went wrong.</h2>
      <p>Please try again.</p>
      <button
        type="button"
        className="bg-amber-50 text-black rounded-full p-2 m-2 cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
