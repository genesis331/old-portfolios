import {useState, useEffect, useRef} from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Splash from "./components/splash.jsx";
import Header from "./components/header.jsx";
import {RouterProvider} from "react-router-dom";
import Footer from "./components/footer.jsx";
import React from "react";
import Noise from "./components/noise.jsx";

function App(props) {
    const [loadPercent, setLoadPercent] = useState(0);
    const [loadState, setLoadState] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoadPercent(100);
        }, 1000);
        setTimeout(() => {
            setLoadState(false);
        }, 1700);
    }, []);

    return (
        <LocomotiveScrollProvider options={{
            reloadOnContextChange: true,
            smooth: true,
            getSpeed: true,
            tablet: {
                smooth: !0
            }
        }} containerRef={containerRef} watch={[]}>
            <div data-scroll-container ref={containerRef} id="pageWrapper" className="min-h-screen bg-neutral-100">
                <Splash loadState={loadState}/>
                <Header loadState={loadState} loadPercent={loadPercent}/>
                <RouterProvider router={props.router} />
                <Footer />
            </div>
        </LocomotiveScrollProvider>
    )
}

export default App
