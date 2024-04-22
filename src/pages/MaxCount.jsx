import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

const WrapperDiv = styled.div`
 background-color: var(--toastify-color-warning);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    flex-direction: column;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 4em;
`;

const Timer = styled.span`
  font-size: 2.2em;
`;

const Button = styled.button`
  background-color: white;
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-left: 10px;
  }
`;

export default function MaxCount() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t === 0) {
          clearInterval(interval);
          return 0;
        } else {
          console.log(t);
          return t - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WrapperDiv>
      <Container>
        <Heading>{counter}</Heading>
        <Timer>Time left: {timer} left</Timer>
        {timer > 0 && (
          <Button onClick={() => setCounter((n) => n + 1)}>
           Increment Counter  <span><IoIosAddCircle /></span> 
          </Button>
        )}
      </Container>
    </WrapperDiv>
  );
}
