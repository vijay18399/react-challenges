import React from "react";
import styled from "styled-components";
import { TbAlertTriangleFilled } from "react-icons/tb";

const Fallback = React.memo(styled(() => (
  <div className="error-boundary">
    <TbAlertTriangleFilled  color="orange" size={48} />
    <span>Something went wrong</span>
  </div>
))`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;

  span {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.25rem;
    color: #333;
  }
`);

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
