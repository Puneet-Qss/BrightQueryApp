import React, { useEffect, useState } from "react";
import "./tablecontainer.css";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import RisizableDiv from "../ShowMapContainer/RisizableDiv";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import ReactPaginate from "react-paginate";

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = sortedData.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="side-content">
        <div className="table-container">
          <table>
            <thead className="firstHead">
              <tr>
                <th onClick={() => handleSort("Company")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  &nbsp; Company
                </th>
                <th onClick={() => handleSort("Status")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  &nbsp; Status
                </th>
                <th onClick={() => handleSort("Revenue")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  &nbsp; Revenue
                </th>
                <th onClick={() => handleSort("Headcount")}>
                  <i
                    className="fa-solid fa-sort"
                    style={{ color: "#a3a3a3" }}
                  ></i>
                  &nbsp; Headcount
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
          <div
            style={{ minWidth: "350px", marginTop: "10px", marginLeft: "450px" }}
          >
            <Pagination
              currentPage={currentPage}
              totalSize={data.length}
              sizePerPage={itemsPerPage}
              changeCurrentPage={handlePageChange}
              numberOfPagesNextToActivePage={2}
            />
          </div>
        </div>
      </div>

      {/* MAP DATA  */}
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
