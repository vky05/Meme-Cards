import React from "react";

const Header = () => {
  return (
    <div className="text-2xl font-bold py-5 bg-orange-300 text-blue-600 text-center">
      Welcome Vicky..Keep Learning!
      <nav>
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/team">Team </a>
      </nav>
    </div>
  );
};

export default Header;
