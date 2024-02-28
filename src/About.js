import React from "react";
import { LANG } from "./util/langConst";
const About = ({ lang }) => {
  console.log("lang", lang);
  const data = LANG[lang];
  return (
    <div>
      {data.title}
      <p>{data.description}</p>
    </div>
  );
};

export default About;
