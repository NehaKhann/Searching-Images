import React, { useState } from "react";
import Result from "./Result";

const Search = () => {
  let [value, setvalue] = useState("");
  const Updated = (event) => {
    setvalue(event.target.value);
  };
  return (
    <div class="form">
      <label style={{ textAlign: "center" }}>
        <input
          type="search"
          onChange={Updated}
          value={value}
          placeholder="Search Anything.."
          autoComplete="off"
        />
        {value === "" ? null : <Result name={value} />}
      </label>
    </div>
  );
};

export default Search;
