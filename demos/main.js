const rootElement = document.getElementById('root');
const logo = {
    name: "React Logo",
    title: "React Logo",
    path: "./images/react-logo.png",
  };
const element = <img src={logo.path} alt={logo.name} title={logo.title} />;

ReactDOM.createRoot(rootElement).render(element);