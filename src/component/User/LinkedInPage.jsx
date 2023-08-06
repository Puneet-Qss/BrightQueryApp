import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";
import "./LinkedInPage.css";
import axios from "axios";
import logo from "../../assets/Logo.svg";

function LinkedInPage({ onSignInStatusChange }) {
  const navigate = useNavigate();

  const { linkedInLogin } = useLinkedIn({
    clientId: "788bxzadw543vg",
    redirectUri: `http://localhost:3000/linkedin`,

    onSuccess: async (response) => {
      console.log(response);
      const { code, state } = response;
      console.log("LinkedIn OAuth Response:", response);
      const token = state;
     
      localStorage.setItem("isSignedIn", "true");
      localStorage.setItem("token", token);

    onSignInStatusChange(true); 
    navigate("/home");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log("LinkedIn OAuth Error:", error);
    },
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.querySelector("#inputEmail").value;
    const password = e.target.querySelector("#inputPassword").value;
    const userData = { username: email, password };
    
    try {
      const response = await axios.post("http://localhost:8080/users", userData);
      console.log(response.status);
  
      if (response.status === 200) {
        console.log("Signup Successful!");
        navigate("/");
        onSignInStatusChange(true);
  
        // Assuming the response contains the token
        const token = response.data.token;
        localStorage.setItem("token", token);
      } else {
        alert("User Already Exists");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("User Already Exists");
    }
  };
  

  return (
    <>
      <div className="text-center">
        <form className="form-signin" onSubmit={onSubmitHandler}>
          <img src={logo}  alt="logo" height={'100px'}/>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />

          <button className="btn  btn-outline-primary " type="submit"style={{ maxWidth: "200px", cursor: "pointer", marginLeft:'90px' }}>
            Sign Up
          </button>
         
          <Wrapper>
            <img
              onClick={linkedInLogin}
              src={linkedin}
              alt="Log in with Linked In"
              style={{ maxWidth: "200px", cursor: "pointer", marginLeft:'70px' }}
            />
          </Wrapper>
        </form>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default LinkedInPage;
