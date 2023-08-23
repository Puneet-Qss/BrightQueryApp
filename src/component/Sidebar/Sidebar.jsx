import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import IRS_SECTOR from '../../constants/irsSector'
import countryCode from '../../constants/countryCodes';

import data from "../../constants/countryCodes";
import {MultiSelect} from "react-multi-select-component";
import Select, { components } from "react-select";
import countryCodes from "../../constants/countryCodes";


function Sidebar({ handleDropdownChange, handleSelectedOptions  }) {

  const [menuOpen, setMenuOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({}); 

  console.log("Sidebar Data", data.companyLegalStructure);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  const handleDropdownChangeWithLoading = (option, selectedValues) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      handleDropdownChange(option, selectedValues);

      setSelectedOptions((prevSelected) => ({
        ...prevSelected,
        [option]: selectedValues,
      }));
    }, 1000);
  };

  const handlePassSelectedOptions = () => {
    handleSelectedOptions(selectedOptions);
  };

  return (
    <div className={`sidebar ${!menuOpen ? "collapsed" : ""}`}>
      <div className="menu">
        <div className="top">
          <div
            className="menu-item1" 
            style={{ display: "flex", alignItems: "center" }}
            onClick={toggleMenu}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>{" "}
            <span>MENU</span>
            <i
              className="fa fa-arrow-left"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              aria-hidden="true"
            ></i>
          </div>
          <div className="menu-item">
            <span>
              <i className="fa fa-floppy-o" aria-hidden="true"></i> Save search
            </span>
          </div>
        </div>

        <div className="dropdown">
          {[
            "Location State",
            "Company Type",
            "IRS Sector",
            "IRS Sub Sector",
            "IRS Industry Name",
            "Year Founded",
            "Company status",
            "Headcount Range",
            "Entity Status",
            "Public or Private",        
            "Legal Jurisdiction State",
          
          ].map((option, index) => (
            <div key={index} className="select-container">
            
            {option === "Location State" && (
               <div className="multiselect-container">
                 <Select
                    isMulti
                    options={data.stateList.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Location State"
                    
                  />
               </div>
            )}


              {option === "Company Type" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={countryCode?.stateList.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}

                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Company Type"
                    checked={true}
                  />
                </div>
              )}

              {option === "IRS Sub Sector" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={IRS_SECTOR.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="IRS Sub SECTOR"
                  />
                </div>
              )}

              {option === "IRS Sector" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={IRS_SECTOR.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="IRS  SECTOR"
                  />
                </div>
              )}

              {option === "Industry Name" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.companyLegalStructure.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="IRS  SECTOR"
                  />
                </div>
              )}
                 
              {option === "Company Legal form" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.companyLegalStructure.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Company Legal Form"
                  />
                </div>
              )}
                    
              {option === "Year Founded" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.companyLegalStructure.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Year Founded"
                  />
                </div>
              )}
                    
              {option === "Company status" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.companyLegalStructure.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Company Status"
                  />
                </div>
              )}
              
              {option === "Headcount Range" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.companyLegalStructure.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Headcount Range"
                  />
                </div>
              )}

                 
              {option === "Public or Private" && (
                <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.PublicOrPrivate.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Public or Private"
                  />
                </div>
              )}
                 
                {
                  option === "Legal Jurisdiction State" && (
                    <div className="multiselect-container">
                  <Select
                    isMulti
                    options={data.JstateList.map((sector) => ({
                      label: sector.title,
                      value: sector.value,
                    }))}
                    value={selectedOptions[option] || []}
                    onChange={(selectedValues) =>
                      handleDropdownChangeWithLoading(option, selectedValues)
                    }
                    placeholder="Legal Jurisdiction state"
                  />
                </div>
                  )
                 }

            </div>
          ))}

          <div className="sidebar-footer">
            <button onClick={handlePassSelectedOptions}>Clear all filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
