import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import file from '../../assets/file.png';
import folder from '../../assets/folder.png';
import user from '../../assets/user.png';
import "../../assets/css/home.css";

function Home() {
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);
  const [isHidden4, setIsHidden4] = useState(true);
 
  const toggleVisibility1 = () => {
    setIsHidden1(!isHidden1);
  };

  const toggleVisibility2 = () => {
    setIsHidden2(!isHidden2);
  };
  const toggleVisibility3 = () => {
    setIsHidden3(!isHidden3);
  };

  const toggleVisibility4 = () => {
    setIsHidden4(!isHidden4);
  };

  return (
    <>
      <Header />
      <div className="home-content">

        <div className="recent-questions">
          <div className="recent-head">
            <h3>Recent questions for BrightChat</h3>
            <div className="recentBtn">
              <button
                type="button"
                className="btn btn-md btn-outline-warning"
                style={{ color: "black" }}
              >
                Try BrightChat
              </button>
              <button
                type="button"
                className="hide-btn"
                onClick={toggleVisibility1}
              >
                {isHidden1 ? "Show" : "Hide"}
              </button>
            </div>
          </div>
          <div className="recentContent">
            {!isHidden1 && (
              <>
              <p>Last 7 days</p>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>


        <div className="recent-ques">
          <div className="recent-head">
            <h3>Report queue recent activities</h3>
            <div className="recentBtn">
              <button
                type="button"
                className="hide-btn"
                onClick={toggleVisibility2}
              >
                {isHidden2 ? "Show" : "Hide"}
              </button>
            </div>
          </div>
          <div className="recentContent">
            {
            !isHidden2 && (
              <>
              <p>Last 7 days</p>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        

        <div className="recent-questions">
          <div className="recent-head">
            <h3>Recent favorite</h3>
            <div className="recentBtn">
            
              <button
                type="button"
                className="hide-btn"
                onClick={toggleVisibility3}
              >
                {isHidden3 ? "Show" : "Hide"}
              </button>
            </div>
          </div>
          <div className="recentContent">
            {!isHidden3 && (
              <>
              <p>Last 7 days</p>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                  <li>
                    <p>?</p>
                    <p>What was Amazon's revenue last quarter?</p>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>


        <div className="recent-questions">
  <div className="recent-head">
    <h3>Recent My Drive activities</h3>
    <div className="recentBtn">
      <button type="button" className="hide-btn" onClick={toggleVisibility4}>
        {isHidden4 ? "Show" : "Hide"}
      </button>
    </div>
  </div>
  <div className="recentContent">
    {!isHidden4 && (
      <div className="my-drive-container">
        <ul className="my-drive">
          <li>
            <div>
              <img src={folder}  alt="" />
              <p>Los Angeles</p>
            </div>
          </li>
          <li>
            <div>
              <img src={file} alt="" />
              <p>Real Estate Competitors List</p>
            </div>
          </li>
          <li>
            <div>
              <img src={folder} alt="" />
              <p>Investment Portfolio 1</p>
            </div>
          </li>
          <li>
            <div>
              <img src={user} alt="" />
              <p>Big Real Estate Expansion for Q3 Project</p>
            </div>
          </li>
          <li>
            <div>
              <img src={user} alt="" height={'150px'} width={'150px'}/>
              <p>Sundar Pichai, Alphabet, Inc.</p>
            </div>
          </li>
        </ul>
      </div>
    )}
  </div>
</div>

      </div>
      <Footer />
    </>
  );
}

export default Home;
