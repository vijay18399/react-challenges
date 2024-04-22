import React from 'react';
import styled from 'styled-components';
import { useWindowDimensions } from '../customHooks';

const WindowDimension = () => {
  const { width, height } = useWindowDimensions();

  const getColors = (deviceWidth) => {
    if (deviceWidth <= 420) {
      return { bgColor: 'lightcoral', textColor: 'black' };
    } else if (deviceWidth <= 780) {
      return { bgColor: 'lightblue', textColor: 'black' };
    } else {
      return { bgColor: 'lightgreen', textColor: 'black' };
    }
  };

  const colors = getColors(width);

  const Container = styled.div`
    background-color: ${colors.bgColor};
    color: ${colors.textColor};
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    margin-top: 50px;
    margin: 15px 5%;
    height: 90vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Container>
      <h1>Background color changes based on window size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </Container>
  );
};

export default WindowDimension;
