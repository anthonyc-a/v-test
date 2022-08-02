import React from "react";

const NavButton = ({ setNavActive, navActive }: any) => {
  return (
    <div
      className="mr-4 cursor-pointer md:hidden"
      onClick={() => {
        setNavActive(!navActive);
      }}
    >
      Nav
    </div>
  );
};

export default NavButton;
