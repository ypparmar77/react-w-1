import React from "react";

export default function Child1({ onChange, value }) {
  const inputStyle = {
    padding: "5px",
    marginBottom: "10px",
  };

  const textStyle = {
    color: "white",
    fontSize: "18px",
  };

  return (
    <>
    <label htmlFor="text">Enter your text : </label>
    <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="Enter text" style={inputStyle}/>
    <p style={textStyle}>{value}</p>
    </>
  );
}
