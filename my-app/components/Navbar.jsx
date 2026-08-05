import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <header className="p-4 flex justify-between">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
