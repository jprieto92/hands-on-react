const rootElement = document.getElementById('root');
const element = (
    <><p>123</p><ul>
        <li>
            <a href="">a</a>
        </li>
        <li>
            <a href="">b</a>
        </li>
        <li>
            <a href="">c</a>
        </li>
    </ul></>
  );

ReactDOM.createRoot(rootElement).render(element);