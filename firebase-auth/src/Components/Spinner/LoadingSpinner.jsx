import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <Spinner animation="grow" />
    </div>
  );
};

export default LoadingSpinner;
