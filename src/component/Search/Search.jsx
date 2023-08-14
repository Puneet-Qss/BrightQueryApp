import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "../../assets/css/search.css";
import Sidebar from "../Sidebar/Sidebar";
import TableContainer from "../TableContainer/TableContainer";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from '../Footer/Footer';

function Search() {
  const { query } = useParams();

  console.log(query);

  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://searchapi.brightquery.com/search",
          {
            params: {
              hits:300,
              query: query,
            },
          }
        );
        console.log(response);
        setSearchResults(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.8"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Header />
          <hr />
          <div className="main-container">
            <Sidebar />
            <TableContainer results={searchResults} search= {query}/>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Search;
