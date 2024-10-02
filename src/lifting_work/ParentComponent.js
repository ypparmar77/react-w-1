import React, { useState } from "react";
import Child1 from "./Child1";

export default function Parent() {
  const [lifting, setlifting] = useState("");

  const parentStyle = {
    backgroundColor: "skyblue",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={parentStyle}>
      <Child1 onChange={setlifting} value={lifting} />
    </div>
  );
}
