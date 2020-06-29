import React from 'react';

import { useErrorBoundary } from "use-error-boundary";

const ComponentWithError = () => {
  throw new Error("💥");
};

const TextBox = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      {didCatch ? (
        <p>An error has been caught: {error.message}</p>
      ) : (
        <ErrorBoundary>
          <ComponentWithError />
        </ErrorBoundary>
      )}
    </>
  );
};

export default TextBox;