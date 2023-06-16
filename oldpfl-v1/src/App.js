import React, { useRef, useState, useEffect } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './styles/index.css';
import AnimatedCursor from "react-animated-cursor";
import Main from './pages/Main';
import Background from './components/Background';
import Menu from "./components/Menu";
import Header from './components/Header';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import MobileMain from "./pages/MobileMain";

function App() {
    const backgroundRef = useRef(null);
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const mainRef = useRef(null);
    const aboutRef = useRef(null);
    const blogRef = useRef(null);
    const projectRef = useRef(null);
    const [menuStatus, setMenuStatus] = useState(false);
    const [menuDiv, setMenuDiv] = useState(<></>);
    const [cursorStatus, setCursorStatus] = useState("240, 240, 240");
    const [mobileBlock, setMobileBlock] = useState(false);

    let toggleMenu = () => {
        if (menuStatus) {
            backgroundRef.current.menuCloseAnim();
            menuRef.current.leavingPageAnim();
            setTimeout(() => {
                headerRef.current.toggleHeader();
                setCursorStatus("240, 240, 240");
            }, 600);
            setTimeout(() => {
                if (mainRef.current) {
                    mainRef.current.backToPageAnim();
                }
                if (aboutRef.current) {
                    aboutRef.current.backToPageAnim();
                }
                if (blogRef.current) {
                    blogRef.current.backToPageAnim();
                }
                if (projectRef.current) {
                    projectRef.current.backToPageAnim();
                }
            }, 700);
            setTimeout(() => {
                setMenuStatus(false);
                setMenuDiv(<></>);
            }, 1000);
        } else {
            if (mainRef.current) {
                mainRef.current.leavePageAnim();
            } 
            if (aboutRef.current) {
                aboutRef.current.leavePageAnim();
            }
            if (blogRef.current) {
                blogRef.current.leavePageAnim();
            }
            if (projectRef.current) {
                projectRef.current.leavePageAnim();
            }
            backgroundRef.current.menuStartAnim();
            setTimeout(() => {
                headerRef.current.toggleHeader();
                setCursorStatus("0, 0, 0");
            }, 600);
            setTimeout(() => {
                setMenuStatus(true);
                setMenuDiv(<Menu toggleMenu={toggleMenu1} ref={menuRef} />);
            }, 1000);
        }
    }

    let toggleMenu1 = () => {
        menuRef.current.leavingPageAnim();
        setTimeout(() => {
            headerRef.current.toggleHeader();
            setCursorStatus("240, 240, 240");
        }, 600);
        setTimeout(() => {
            setMenuStatus(false);
            setMenuDiv(<></>);
        }, 1000);
    }

    let backToMain = () => {
        backgroundRef.current.pageLeaveAnim();
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

    useEffect(() => {
        const resizeListener = () => {
            if (window.matchMedia("(orientation: portrait)").matches) {
                setMobileBlock(true);
            } else {
                setMobileBlock(false);
            }
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    });

    useEffect(() => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            setMobileBlock(true);
        } else {
            setMobileBlock(false);
        }
    }, []);

    return (
        <>
            <Header toggleMenu={toggleMenu} backToMain={backToMain} ref={headerRef} />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main animDelayBaseValue={300} backgroundRef={backgroundRef} ref={mainRef}/>
                    </Route>
                    <Route path="/about">
                        <About backgroundRef={backgroundRef} ref={aboutRef}/>
                    </Route>
                    <Route path="/blog">
                        <Blog backgroundRef={backgroundRef} ref={blogRef}/>
                    </Route>
                    <Route path="/projects">
                        <Projects backgroundRef={backgroundRef} ref={projectRef}/>
                    </Route>
                </Switch>
            </Router>
            {menuDiv}
            <Background ref={backgroundRef} />
            <AnimatedCursor color={cursorStatus} />
            {mobileBlock ? <MobileMain /> : <></>}
        </>
    )
}

export default App;