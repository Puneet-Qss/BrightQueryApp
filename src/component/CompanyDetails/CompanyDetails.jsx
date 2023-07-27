import React from "react";
import "./companydetails.css";
import TestContainer from "./TestContainer";

function CompanyDetails({ props, index, BQID }) {
  return (
    <>
      <div className="modal-component">
        <p
          className="company-name"
          data-toggle="modal"
          data-target={`#exampleModalCenter${index}`}
        >
          {props?.fields?.bq_legal_entity_name}
        </p>

        <div
          className="modal fade modal-xl"
          id={`exampleModalCenter${index}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {props?.fields?.bq_legal_entity_name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* BODY  */}

              <div className="modal-body modal-xl">
                <div className="left-content">
                  {/* ORGANIZATION  */}
                  <div className="organization">
                    <p>Organization Firgonomics</p>
                    <div className="name">
                      <p className="company-name">COMPANY NAME:</p>
                      <br />
                      <p className="data">
                        {props?.fields?.bq_legal_entity_name}
                      </p>
                    </div>
                    <div className="bq-ID">
                      <p className="company-name">BQ ID:</p>
                      <br />
                      <p className="data"> {BQID} </p>
                    </div>
                    <div className="address">
                      <p className="company-name">ADDRESS:</p>
                      <br />
                      <p className=""> </p>
                      {props?.fields?.bq_organization_address1_city},
                      {props?.fields?.bq_organization_address1_state_name}
                      <br />
                      {props?.fields?.bq_organization_address1_country}
                    </div>
                    <div className="revenue">
                      <p className="company-name">REVENUE:</p>
                      <br />
                      {props?.fields?.bq_current_employees_plan_mr}
                    </div>
                    <div className="head-count">
                      <p className="company-name">HEAD COUNT:</p>
                      <br />
                      {props?.fields?.bq_current_employees_plan_mr}
                    </div>
                    <div className="status">
                      <p className="company-name">COMPANY STATUS:</p>
                      <br />
                      {props?.fields?.bq_organization_is_public}
                    </div>
                    <div className="status">
                      <p className="company-name">PUBLIC OR PRIVATE:</p>
                      <br />
                      {props?.fields?.bq_organization_isactive}
                    </div>
                    <div className="year">
                      <p className="company-name">YEAR FOUNDED:</p>
                      <br />
                      {props?.fields?.bq_organization_year_founded}
                    </div>
                    <div className="webiste">
                      <p className="company-name">COMPANY WEBSITE:</p>
                      <br />
                      {props?.fields?.bq_organization_isactive}
                    </div>
                    <div className="webiste">
                      <p className="company-name">BQ SCORE:</p>
                      <br />
                      {props?.fields?.bq_score}
                    </div>
                    <div className="webiste">
                      <p className="company-name">
                        NAICS SECTOR(NAICS SECTOR CODE):
                      </p>
                      <br />
                      {props?.fields?.bq_organization_naics_name},(
                      {props?.fields?.bq_organization_naics_sector_code})
                    </div>
                    <div className="webiste">
                      <p className="company-name">
                        NAICS INDUSTRY(NAICS INDUSTRY CODE):
                      </p>
                      <br />
                      {props?.fields?.bq_organization_industry_name},(
                      {props?.fields?.bq_organization_naics_code})
                    </div>
                    <div className="webiste">
                      <p className="company-name">IRS SECTOR </p>
                      <br />
                      {props?.fields?.bq_organization_naics_name}
                    </div>
                    <div className="webiste">
                      <p className="company-name">TICKER </p>
                      <br />
                      {props?.fields?.bq_organization_ticker}
                    </div>
                  </div>

                  {/* LEGAL ENTITY  */}
                  <div className="legal">
                    <p>Legal Entity</p>

                    <div className="entity-ID">
                      <p className="company-name">BQ LEGAL ENTITY ID:</p>
                      <br />
                      {BQID}
                    </div>
                    <div className="entity-ID">
                      <p className="company-name"> COMPANY LEGAL STRUCTURE:</p>
                      <br />
                      {props?.fields?.bq_organization_structure}
                    </div>

                    <div className="entity-ID">
                      <p className="company-name">COMPANY TYPE:</p>
                      <br />
                      {props?.fields?.bq_organization_company_type}
                    </div>
                    <div className="legal-form">
                      <p className="company-name">COMPANY LEGAL FORM:</p>
                      <br />
                      {props?.fields?.bq_organization_lfo}
                    </div>
                    <div className="EIN">
                      <p className="company-name">EIN:</p>
                      <br />
                      {props?.fields?.bq_organization_ein}
                    </div>
                  </div>
                </div>
                {/* latitude={23.565446}
                    longitude={22.53534} */}
                    
                <div className="right">
                  <TestContainer
                    latitude={
                      props?.fields?.bq_organization_address1_location?.lat
                    }
                    longitude={
                      props?.fields?.bq_organization_address1_location?.lng
                    }
                  />
                </div>
              </div>

              {/* FOOTER  */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;
