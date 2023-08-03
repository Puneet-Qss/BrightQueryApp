import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";
import "./LinkedInPage.css";

function LinkedInPage({ onSignInStatusChange }) {
  const navigate = useNavigate();

  const { linkedInLogin } = useLinkedIn({
    clientId: "788bxzadw543vg",
    redirectUri: `http://localhost:3000/linkedin`,
    onSuccess: (code) => {
      console.log(code);
      navigate("/");
      onSignInStatusChange(true); // Notify the parent component about the sign-in
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="text-center">
        <form className="form-signin">
          {/* <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          /> */}
          <h1 >BQ</h1>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
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
         
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <Wrapper>
            <img
              onClick={linkedInLogin}
              src={linkedin}
              alt="Log in with Linked In"
              style={{ maxWidth: "150px", cursor: "pointer",  }}
            />
         
          </Wrapper>
        </form>
        
      </div>

      {/* <div>
         
        </div> */}
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
