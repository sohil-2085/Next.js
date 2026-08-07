import Link from "next/link";
import React from "react";

const notFound = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>

      <Link href="/" className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
        Go Home
      </Link>
    </div>
  );
};

export default notFound;
