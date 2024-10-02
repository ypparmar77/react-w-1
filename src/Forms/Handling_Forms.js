import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Handling_Forms() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [anser, setanser] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (inputs.email == "" || inputs.password == "") {
      alert("Enter email , password");
    } else {
      e.preventDefault();
      console.log(inputs);
      // document.write(inputs);
      setanser(`Email: ${inputs.email} , Password: ${inputs.password}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your email : </label>
        <input
          type="email"
          name="email"
          value={inputs.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Enter your password: </label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
      <p>{anser}</p>
    </>
  );
}
