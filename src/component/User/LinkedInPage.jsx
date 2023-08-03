import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";

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
    <Wrapper>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />
      {/* Pass the ref to the modal component */}
      <LinkedInModal />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default LinkedInPage;

// This is an example LinkedInModal component (replace it with the actual implementation)
const LinkedInModal = React.forwardRef((props, ref) => {
  // Implement your modal logic here
  return <div>LinkedIn Modal Content</div>;
});
