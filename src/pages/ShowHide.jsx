import { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.$show ? "#bf4f74" : "#4CAF50")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => (props.$show ? "#a83e64" : "#3d8b40")};
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  border: 2px solid #bf4f74;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

export default function ShowHide() {
  const [show, setShow] = useState(true);
 
  function toggleDiv() {
    setShow(prevShow => !prevShow);
  }
  
  return (
    <Container>
      <ToggleButton  $show={show}  onClick={toggleDiv} >
        {show ? "Hide" : "Show"}
      </ToggleButton>
      {show && <ContentWrapper>This div should show/hide on button click</ContentWrapper>}
    </Container>
  );
}
