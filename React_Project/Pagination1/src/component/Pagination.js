import React, { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";
import axios from "axios";
function Pagination() {
  // * Creating the variable which stores the data -> which will be displayed as table
  const [tableData, setTableData] = useState("");

  // * Using the useEffect to give the call to the API from which data is fetch
  useEffect(() => {
    fetchData();
  }, []);

  //* Definin the fuction for api call and calling it in useEffect for single time
  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=0");
    console.log(response);
  };
  return <div></div>;
}

export default Pagination;
