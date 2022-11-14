const rootElement = document.getElementById("root");

const element = React.createElement(
    "div",
    {
        className: "container",
    },
    "Hello World"
);

console.log(element);
ReactDOM.createRoot(rootElement).render(element);