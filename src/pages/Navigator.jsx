import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InfoMessage = styled.div`
    display: flex;
    align-items: center;
    color: #2196f3;
    font-size: 24px;
    margin: 0px 10px;
    background: aliceblue;
    padding: 23px;
    border-radius: 24px;
  span{
    color: #0779AE;
    font-size: 28px;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 18px;
  }
`;

const DisplayMessage = () => {
    const { state } = useLocation();

  return (
    <CenteredDiv>
      <div>
        <InfoMessage>
          <FaCheck style={{ marginRight: "10px" }} />
          Thanks for submitting details  { state && state.fullName }, will connect you Soon
          <br />
          
        </InfoMessage>
      </div>
    </CenteredDiv>
  );
};
export default function Navigator() {
  const navigate = useNavigate();
  function handleSubmit(formData) {
    navigate("results", { state: formData });
  }
  return (
    <Routes>
      <Route index element={<ContactForm onSubmit={handleSubmit} />} />
      <Route path="results" element={<DisplayMessage />} />
    </Routes>
  );
}
