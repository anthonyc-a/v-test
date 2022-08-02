import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="hidden md:flex">
        <li className="mr-8">About</li>
        <li className="mr-8">Advertises</li>
        <li>Partners</li>
      </ul>
    </nav>
  );
};

export default Navbar;
