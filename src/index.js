import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Problematica from "./Problematica";
import Modelos from "./Modelos";
import Soluciones from "./Soluciones";
import Principal from "./Principal";

const router = createBrowserRouter([
    {
        path: "/Antecedentes",
        element: <App/>,
        errorElement: <h1>Error</h1>,
    },
    {
        path: "/Problematica",
        element: <Problematica/>,
        errorElement: <h1>Error</h1>,
    },
    {
        path: "Modelos",
        element: <Modelos/>,
        errorElement: <h1>Error</h1>,
    },
    {
        path: "/Soluciones",
        element: <Soluciones/>,
        errorElement: <h1>Error</h1>,
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <h1>Error</h1>
    }
    ]

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
