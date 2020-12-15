import React from "react";
import "./styles.css";

const Result = (props) => {
  const img = `https://source.unsplash.com/200x100/?${props.name}`;
  return <img src={img} alt="" className="center" />;
};
export default Result;
