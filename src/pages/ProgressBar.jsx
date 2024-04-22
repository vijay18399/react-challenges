import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #FFFFFF;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  flex-direction: column;
`
const ProgressBarContainer = styled.div`
   position: relative;
   width: 760px;
   height: 40px;
   background: #e0e0e0;
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   color: white;
   @media (max-width: 760px) {
        width: 95%;
    }

`;

const ProgressBarInnerContainer = styled.div`
   width: ${(props) => props.$progressValue}%;
   background: ${(props) =>
   props.$progressValue >= 100 ? "#4caf50" : props.$progressValue >= 50 ? "#ff9800" : "#f44336"};
   border-radius: 5px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: width  0.2s ease-in-out;
   span {
      position: absolute;
      left: 50%;
      top: 10%;
      font-size: 22px;
      font-weight: 700;
   }
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 200px;
    margin-bottom: 10px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default function ProgressBar(){
   const [progressValue, setProgressValue] = useState(10);
   const setValue = (currentValue) => {
      if(currentValue){
         currentValue = Number(currentValue);
         if (currentValue >= 0 && currentValue <= 100) {
           setProgressValue(currentValue);
         } else if (currentValue > 100) {
           setProgressValue(100);
         } else {
           setProgressValue(0);
         }
      }else{
         setProgressValue("");
      }
     
    };
   return  <Wrapper>
      <ProgressBarContainer>
          <ProgressBarInnerContainer $progressValue={progressValue}>
            { progressValue &&  <span>{progressValue}%</span> }
          </ProgressBarInnerContainer>
      </ProgressBarContainer>
       <Form>
          <label htmlFor="progress">Input Percentage:</label>
          <input  min="0"  max="100" value={progressValue} type="text" name="progress"  onChange={(e)=> setValue(e.target.value)} />
        </Form>
    </Wrapper>
}