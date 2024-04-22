import React from "react";
import styled, { keyframes } from "styled-components";

const bulging = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoaderBall = styled.span`
  display: inline-block;
  margin: auto 0.25rem;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background: #06c;
  animation: ${bulging} 2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.4s;
  }
  &:nth-child(2) {
    animation-delay: -0.2s;
  }
`;

const Loader = React.memo(() => (
  <LoaderContainer className="loader">
    <LoaderBall className="loader__ball" />
    <LoaderBall className="loader__ball" />
    <LoaderBall className="loader__ball" />
  </LoaderContainer>
));

export default Loader;
