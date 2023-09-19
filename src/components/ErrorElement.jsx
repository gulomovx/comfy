import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div>
      <h1 className="font-bold text-6xl text-red-600 text-center mt-16 min-h-screen">
        There is an error !
      </h1>
    </div>
  );
};

export default ErrorElement;
