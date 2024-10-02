import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Frome_work() {
  const [work, setwork] = useState({ email: "", password: ""});

  const Changer = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setwork((v) => ({ ...v, [name]: value }));
    setwork((v) => ({ ...v, [name]: value}));
  }
  
  const Anser = (e) => {
    e.preventDefault();
    console.log(work);
  };

  return (
    <div>
      <form onSubmit={Anser} className="mx-3">
        <label htmlFor="text">email :</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={Changer}
          value={work.email}
        />
        <br />
        <br />
        <label htmlFor="text">password :</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={Changer}
          value={work.password}
        />
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
}
