import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";
import "../../assets/css/LinkedInPage.css";
import axios from "axios";
import Swal from "sweetalert2";
// import logo from "../../assets/Logo.svg";
import swal from "sweetalert";

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
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        onSignInStatusChange(true);
        if (response.data.exists) {
          swal("Oops!", "Already Existing User", "error");
          navigate("/login");
        } else {
          swal("Success!", "Verification email sent succesfully!", "success");
          navigate("/");
        }

        // navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error during signup",
      });
    }
  };

  return (
    <>
      <div className="text-center">
        <form className="form-signin" onSubmit={onSubmitHandler}>
          {/* <img src={logo}  alt="logo" height={'100px'}/> */}
          <h1>Welcome to BrightQuery</h1>
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

          <div className="button-section">
            <button
              className="btn btn-outline-primary w-100"
              type="submit"
              style={{ maxWidth: "200px", cursor: "pointer" }}
            >
              Sign Up
            </button>

            <Wrapper>
              <img
                onClick={linkedInLogin}
                src={linkedin}
                alt="Log in with Linked In"
                style={{ maxWidth: "200px", cursor: "pointer" }}
              />
            </Wrapper>
          </div>
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
