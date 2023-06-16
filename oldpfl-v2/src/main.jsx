import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import Landing from "./pages/landing.jsx";
import About from "./pages/about.jsx";
import Labs from "./pages/labs.jsx";
import Work from "./pages/work.jsx";
import Works from "./pages/works.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/labs",
        element: <Labs />,
    },
    {
        path: "/work",
        element: <Work />,
    },
    {
        path: "/works",
        element: <Works />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <App router={router}/>
    // </React.StrictMode>,
)
