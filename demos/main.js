const rootElement = document.getElementById('root');
const person = { first: 'Joe', last: 'Doe' };
const element = 
    <div className="container">
        Hello {person.first} {person.last}
    </div>;
ReactDOM.createRoot(rootElement).render(element);