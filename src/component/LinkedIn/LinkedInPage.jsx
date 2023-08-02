import React, { useRef } from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useNavigate } from "react-router-dom";

function LinkedInPage() {
  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
    clientId: "788bxzadw543vg",
    redirectUri: `http://localhost:3000/linkedin`, 
    // Redirect to your app's URL
    onSuccess: (code) => {
      console.log(code);
      closeModal();
      navigate("/");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
    },
  });

  // Ref to the modal component
  const modalRef = useRef(null);

  // Function to close the modal
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.closeModal();
    }
  };

  return (
    <Wrapper>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />
      {/* Pass the ref to the modal component */}
      <LinkedInModal ref={modalRef} />
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
