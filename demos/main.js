const rootElement = document.getElementById("root");

const element = React.createElement(
    "div",
    {
        className: "container",
            children: ['Hello World', 'Goodbye World'],
    },
);

console.log(element);
ReactDOM.createRoot(rootElement).render(element);