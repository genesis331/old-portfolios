import {isMobile} from 'react-device-detect';

export default function Splash(props) {
    return (
        <div data-scroll data-scroll-sticky data-scroll-target="#pageWrapper" className={`${isMobile ? "fixed": "fixed"} top-0 z-40 h-screen w-screen bg-zinc-900 transition duration-700 pointer-events-none ${props.loadState ? "opacity-100" : "opacity-0"}`}></div>
    )
}