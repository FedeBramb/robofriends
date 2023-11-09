import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'; /*If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default . If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.*/



ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <React.StrictMode>
        <CardList robots={robots}/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

