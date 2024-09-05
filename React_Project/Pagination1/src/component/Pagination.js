import React, { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";
import axios from "axios";
function Pagination() {
  // * Creating the variable which stores the data -> which will be displayed as table
  const [tableData, setTableData] = useState();

  // * Defining the state variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // * Getting the current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // * Applying the splice method on the data retrieved from the API.
  const currentItems = tableData?.slice(indexOfFirstItem, indexOfLastItem);
  console.log(Array.isArray(currentItems));
  // * Calculating the total pages
  const totalPages = Math.ceil(tableData?.length / itemsPerPage);
  console.log(totalPages);

  // * Using the useEffect to give the call to the API from which data is fetch.
  // * we have added the dependedncy so that API call is done only once.
  useEffect(() => {
    fetchData();
  }, []);

  //* Defining the fuction for api call and calling it in useEffect for single time
  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=0");
    // * extracting the data from the response and setting it to the useState varaible
    const data = response?.data?.users;
    setTableData(data);
    console.log(data);
  };



  // * Creating a function to handle the number of items per page
  // const handleItemsPerPageChange = (e) => {
  //   setItemsPerPage(parseInt(e.target.value));
  //   setCurrentPage(1);
  // };




  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>DoB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            currentItems?.map((item, index)=> (
              <tr key={index}>
                <td>{item?.firstName}</td>
                <td>{item?.lastName}</td>
                <td>{item?.email}</td>
                <td>{item?.birthDate}</td>
                <td>{item?.gender}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Pagination;
