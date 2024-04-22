import React, { useState, useEffect } from "react";
import { FaPlay, FaStop, FaRedo } from "react-icons/fa";
import styled from "styled-components";

const Main = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  flex-direction: column;
`;

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: #FFFFFF;
  font-weight: bold;
`;

const TimerSpan = styled.span`
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.$color};
  color: white;
  font-size: 1rem;
  width: 55px;
  height: 55px;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  transition: background-color 0.3s ease;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? "0.65" : "1")};

  &:hover {
    opacity: ${(props) => (props.$disabled ? "1" : "0.85")};
  }
`;

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return (
    <Main>
      <TimerWrapper>
        <TimerSpan>{Math.trunc(seconds / 60)}</TimerSpan>
        <TimerSpan>:</TimerSpan>
        <TimerSpan>
          {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </TimerSpan>
      </TimerWrapper>
      <ButtonContainer>
        <StyledButton
          $color={isRunning ? "#E91E63" : "#4CAF50"}
          onClick={isRunning ? stop : start}
        >
          {isRunning ? <FaStop /> : <FaPlay />}
        </StyledButton>
        <StyledButton $color="#3F51B5" onClick={reset} $disabled={!seconds}>
          <FaRedo />
        </StyledButton>
      </ButtonContainer>
    </Main>
  );
};

export default Stopwatch;
