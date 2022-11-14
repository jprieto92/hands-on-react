function HelloWorld() {
    return <div className="container">Hello Function Component</div>;
  }
  
  function App() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);