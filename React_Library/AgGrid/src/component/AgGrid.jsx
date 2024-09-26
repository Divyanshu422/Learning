import React from 'react'

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';

function AgGrid() {

     // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make", checkboxSelection: true },
    { field: "model"},
    { field: "price" },
    { field: "electric" }
  ]);

  //* Default Column Definitions: These default settings will apply to all columns unless overridden.
  const defaultColDef = {
    sortable: true, // Allows columns to be sortable by clicking the header
    filter: true, // Enables filtering for the column
    editable: true, // Makes columns editable
    flex: 1, // Columns will grow and shrink equally to fit the grid
    floatingFilter: true, // Adds a filter box below the header for quick filtering
  }


  //* ----------------------- Sending the data or Exporting the data ------------------
 // Variable to store the Grid API, used for interacting with the grid programmatically.
 let gridApi;

 // Function that gets triggered when the grid is ready (onGridReady).
 const printingData = (params) => {
   // `params.api` provides access to Grid API, which allows interacting with the grid.
   gridApi = params.api;

   // `params.columnApi` provides access to Column API, which allows interacting with columns.
   const gridColumnApi = params.columnApi;
   
   // Example: You can perform operations on the grid here.
   console.log("Grid is ready, APIs are available now!");
 }

 // This function will be used to export the grid data as a CSV file.
 const handleExport = () => {
   // Using the Grid API to export data as a CSV
   gridApi.exportDataAsCsv({
     fileName: 'my-export.csv', // Name of the exported file
     columnSeparator: ',', // Separator used in the CSV file
     suppressQuotes: true, // If true, quotes will not be added around cell values
   });
 }

 // * ------------------------------------------------------------------------------------------------

  return (
    
    <div>
      {/* Button to trigger the CSV export */}
      <button onClick={handleExport}>Export</button>

      {/* The parent div with AG Grid's theme and size */}
      <div
        className="ag-theme-quartz" // Applying AG Grid theme (quartz in this case)
        style={{ height: 500 }} // Grid will take up 500px in height
      >
        {/* AG Grid React Component */}
        <AgGridReact
          rowData={rowData} // The data to display in rows
          columnDefs={colDefs} // The definitions for the grid columns
          defaultColDef={defaultColDef} // Default settings applied to all columns
          onGridReady={printingData} // Event handler triggered when the grid is fully initialized
        />
      </div>
    </div>
   
  )
}

export default AgGrid



