import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="md:hidden">
      <Link href="/">
        <strong className="text-2xl">Logo</strong>
      </Link>
    </div>
  );
};

export default Logo;
