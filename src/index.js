import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./GobalStyle";
import IndexPage from "./IndexPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle />
        <IndexPage />
        <App />
    </>
);
