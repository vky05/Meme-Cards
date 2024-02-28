import React, { useState } from "react";

const Header = () => {
  const [lang, setLang] = useState("en");
  return (
    <div className="text-2xl font-bold py-5 bg-orange-300 text-blue-600 text-center">
      Welcome Vicky..Keep Learning!
      <nav>
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/team">Team </a>
      </nav>
      <select value={lang} onChange={(e)=> e.target.value}>
        <option value='en'>English</option>
        <option value='Hi'>Hindi</option>
        <option value='Ru'>Russian</option>
      </select>
    </div>
  );
};

export default Header;
