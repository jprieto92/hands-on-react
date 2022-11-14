class HelloWorld extends React.Component {
    render() {
      return <div className="container">Hello Class Component</div>;
    }
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