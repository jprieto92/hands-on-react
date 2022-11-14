function HelloWorld() {
    return <div className="container">Hello Function Component</div>;
  }
  const rootElement = document.getElementById("root");
  const element = <HelloWorld />;
  ReactDOM.createRoot(rootElement).render(element);