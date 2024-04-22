import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useWindowDimensions, useEventListener } from "../customHooks";
import pencilCursor from "../assets/pencil.png";

const CanvasWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  flex-direction: column;
  position: relative;
`;

const Toolbar = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0px;
  left: 45%;
  background: #ffffff;
  padding: 12px;
  border-radius: 14px;
  border: 2px solid #f2f2f2;
`;

const ColorButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  margin-right: 5px;
  border: ${(props) => (props.$active ? "2px solid black" : "none")};
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export default function CanvasApp() {
  const colors = [
    "#2196F3",
    "#F44336",
    "#4CAF50",
    "#FF9800",
    "#9C27B0",
    "#00BCD4",
    "#FFEB3B",
  ];
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState(colors[0]);
  const [lineWidth, setLineWidth] = useState(5);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    setCtx(context);
  }, [width, height]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
    const rect = canvas.getBoundingClientRect();
    const pointX = e.clientX - rect.left;
    const pointY = e.clientY - rect.top;
    setPoints([{ x: pointX, y: pointY }]);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(pointX, pointY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const pointX = e.clientX - rect.left;
    const pointY = e.clientY - rect.top;
    setPoints((prevPoints) => [...prevPoints, { x: pointX, y: pointY }]);
    const length = points.length;

    if (length >= 2) {
      const p1 = points[length - 2];
      const p2 = points[length - 1];
      const midPoint = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const changeLineWidth = (newWidth) => {
    setLineWidth(newWidth);
  };

  useEventListener("mousedown", startDrawing, canvasRef.current);
  useEventListener("mousemove", draw, canvasRef.current);
  useEventListener("mouseup", stopDrawing);
  useEventListener("touchstart", startDrawing, canvasRef.current);
  useEventListener("touchmove", draw, canvasRef.current);
  useEventListener("touchend", stopDrawing);

  return (
    <CanvasWrapper>
      <Toolbar>
        {colors.map((c, index) => (
          <ColorButton
            key={index}
            color={c}
            $active={color === c}
            onClick={() => changeColor(c)}
          />
        ))}
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={(e) => changeLineWidth(e.target.value)}
        />
      </Toolbar>
      <canvas
        ref={canvasRef}
        style={{ cursor: `url(${pencilCursor}), auto` }}
      ></canvas>
    </CanvasWrapper>
  );
}
