import React from "react";
import { useState } from "react";

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [num, setnum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formvalues", name, code, num);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Employee Code:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="number"
          value={num}
          onChange={(e) => setnum(e.target.value)}
        />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};
export default AddEmployee;
