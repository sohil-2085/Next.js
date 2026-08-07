import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex gap-4">
          <li className="hover:underline transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline transition-all">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:underline transition-all">
            <Link href="/categories">Categories</Link>
          </li>
          <li className="hover:underline transition-all">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline transition-all">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
