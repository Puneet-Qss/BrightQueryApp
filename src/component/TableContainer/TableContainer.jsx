import React from "react";
import "./tablecontainer.css";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
function TableContainer({ results, index, BQID }) {
  console.log("Result from Search", results);

  // Extrscting fields from the Data.
  const data = results?.root?.children;

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
              <th>
                <i class="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
                Company
              </th>
              <th>
                <i class="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
                Status
              </th>
              <th>
                <i class="fa-solid fa-sort" style={{ color: "#a3a3a3" }}></i>{" "}
                Revenue
              </th>
              <th>
                {" "}
                <i
                  class="fa-solid fa-sort"
                  style={{ color: "#a3a3a3" }}
                ></i>{" "}
                Headcount
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((data, index) => {
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
