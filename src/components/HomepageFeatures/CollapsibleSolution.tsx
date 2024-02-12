function CollapsibleSolution ({ children }) {
    return (
      <details>
        <summary>Solution</summary>
        {children}
      </details>
    );
  };
  
  export default CollapsibleSolution;