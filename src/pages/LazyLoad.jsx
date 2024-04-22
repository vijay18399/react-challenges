import React, { Suspense } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";

// Lazy load the ShowHide component
const LazyShowHide = React.lazy(() => {
    // Simulate a delay of 5 seconds before loading the component
    return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
        import("./ShowHide")
    );
});

// Styled header
const Header = styled.h1`
  position: absolute;
  width: 100%;
  margin: 100px auto;
`;

function LazyLoad() {
  return (
    <>
      {/* Header indicating lazy loading */}
      <Header>Below Component will be Lazy Loaded</Header>

      {/* Suspense component to handle loading */}
      <Suspense maxDuration={300} fallback={<Loader />}>
        {/* Lazy loaded ShowHide component */}
        <LazyShowHide />
      </Suspense>
    </>
  );
}

export default LazyLoad;
