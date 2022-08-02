import Link from "next/link";
import React from "react";

const Nav = ({ navActive }: any) => {
  if (navActive)
    return (
      <nav className="absolute top-full left-0 mt-4 bg-white z-10">
        <ul className="p-3">
          <li className="p-1">
            <Link href="/">About</Link>
          </li>
          <li className="p-1">
            <Link href="/">Advertises</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
        </ul>
      </nav>
    );
  else return null;
};

export default Nav;
