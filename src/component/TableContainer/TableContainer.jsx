import React, { useState } from "react";
import "./tablecontainer.css";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

function TableContainer({ results, index, BQID }) {
  console.log("Result from Search", results);

  // Extracting fields from the Data.
  const data = results?.root?.children;

  // Define the state to keep track of the sorting order and column
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("Company");

  // Custom sorting function to sort the data based on the "Company" column
  const customSort = (a, b) => {
    const fieldA = a.fields.bq_organization_name.toLowerCase();
    const fieldB = b.fields.bq_organization_name.toLowerCase();

    if (sortOrder === "asc") {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  };

  // Function to handle sorting when the header is clicked
  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      // If the same column is clicked again, reverse the sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, set the new column and default sorting order to "asc"
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  // Sort the data based on the selected column and order
  const sortedData = [...data].sort(customSort);

  const BQ_ID = (str) => {
    const delimiter = "::";
    const startIndex = str.indexOf(delimiter) + delimiter.length;
    const number = str.slice(startIndex);
    return number;
  };

  return (
    <>
      <div className="side-content">
        <div className="top-headers">
          <p>1661 results of google</p>
          <p>search Results with filter</p>
          <div className="bottom-header">
            <p>Displaying 20 of 133 results on page </p>
            <p>Previous</p>
            <p>Next</p>
          </div>
        </div>

        {/* TABLE  */}

        <table>
        <thead className="firstHead">
          <tr>
            <th onClick={() => handleSort("Company")}>
              <i className="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
              Company
            </th>
            <th onClick={() => handleSort("Status")}>
              <i className="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
              Status
            </th>
            <th onClick={() => handleSort("Revenue")}>
              <i className="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
              Revenue
            </th>
            <th onClick={() => handleSort("Headcount")}>
              {" "}
              <i className="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
              Headcount
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((data, index) => {
            return (
              <tr key={index} className="first-row">
                  <td className="firstData">
                    <div className="row-details">
                      <div className="icon">
                        <i class="fa-regular fa-building"></i>
                      </div>

                      <p className="CompanyName">
                        <CompanyDetails
                          props={data}
                          index={index}
                          BQID={BQ_ID(data.id)}
                        />
                      </p>

                      <p>
                        {data?.fields?.bq_organization_irs_sector_name} <br />
                        BQ ID: {BQ_ID(data.id)} <br />
                        YEAR FOUNDED:
                        {data?.fields?.bq_organization_year_founded}
                        <br />
                        Website :
                        <a href={`${data?.fields?.bq_organization_website}`}>
                          {data?.fields?.bq_organization_website}
                        </a>
                        <br />
                        Address:
                         {data?.fields?.bq_organization_address1_city}, {data?.fields?.bq_organization_address1_country}
                      </p>
                    </div>
                  </td>
                  <td>
                    {data?.fields?.bq_organization_isactive
                      ? "Active"
                      : "Inactive"}
                  </td>
                  <td>{data?.fields?.bq_revenue_mr}</td>
                  <td>{data?.fields?.bq_current_employees_plan_mr}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableContainer;
