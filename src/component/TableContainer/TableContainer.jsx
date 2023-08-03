import React, { useEffect, useState } from "react";
import "./tablecontainer.css";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import RisizableDiv from "../ShowMapContainer/RisizableDiv";

function TableContainer({ results, index, BQID }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("Company");
  const [selectedRowIndex, setSelectedRowIndex] = useState(true);
  const [mapData, setMapData] = useState({});
  const [showMe, setShowMe] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const data = results?.root?.children;

  const customSort = (a, b) => {
    const fieldA = a.fields.bq_organization_name.toLowerCase();
    const fieldB = b.fields.bq_organization_name.toLowerCase();

    if (sortOrder === "asc") {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  };

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort(customSort);

  const BQ_ID = (str) => {
    const delimiter = "::";
    const startIndex = str.indexOf(delimiter) + delimiter.length;
    const number = str.slice(startIndex);
    return number;
  };

  const handleMapClick = (index) => {
    const clickedData = data[index];
    console.log("Clicked", clickedData);
    const latitude =
      clickedData?.fields?.bq_organization_address1_location?.lat;
    const longitude =
      clickedData?.fields?.bq_organization_address1_location?.lng;
    console.log("Lat", latitude, longitude);
    setSelectedRowIndex(!selectedRowIndex);
    setShowMe(!showMe);
    setMapData({ latitude, longitude });
    setShowMap(!showMap);
  };

  useEffect(() => {
    console.log("Map Data ", mapData);
  }, [showMap, mapData]);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the index of the first and last items to display on the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = sortedData.slice(firstIndex, lastIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="side-content">
        <div className="table-wrapper">
          <table>
            <thead className="firstHead">
              <tr>
                <th onClick={() => handleSort("Company")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  Company
                </th>
                <th onClick={() => handleSort("Status")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  Status
                </th>
                <th onClick={() => handleSort("Revenue")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  Revenue
                </th>
                <th onClick={() => handleSort("Headcount")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  Headcount
                </th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((data, index) => {
                return (
                  <tr key={index} className="first-row">
                    <td className="firstData">
                      <div className="row-details">
                        <div className="icon">
                          <i class="fa-regular fa-building companyIcon fa-md "></i>
                          <i
                            class="fa-solid fa-location-dot mapicon fa-md "
                            onClick={() => handleMapClick(index)}
                            style={{ cursor: "pointer" }}
                          ></i>
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
                          {data?.fields?.bq_organization_address1_city},{" "}
                          {data?.fields?.bq_organization_address1_country}
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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {Array.from({
              length: Math.ceil(sortedData.length / itemsPerPage),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === Math.ceil(sortedData.length / itemsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bootstrap Pagination component */}

      {showMap ? (
        <div className="map-wrapper" style={{ width: "50vw" }}>
          <RisizableDiv mapData={mapData} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TableContainer;
