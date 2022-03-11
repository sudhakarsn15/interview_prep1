import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState("");
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(data);
  });
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((result) => {});
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>1. Fucntion to Fetch data from given URL </h2>
    </div>
  );
}
