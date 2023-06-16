import gsap from "gsap";
import {isMobile} from 'react-device-detect';
import CustomEase from "gsap/CustomEase";
import { Elastic } from "gsap/gsap-core";
import { useEffect, useRef, useState } from "react";

export default function Dynbox(props) {
    const loadingBarRef = useRef(null);
    const div2Ref = useRef(null);
    const borderBarOriTextRef = useRef(null);
    const borderBarTextRef = useRef(null);
    const wiggleBarRef = useRef(null);
    const [borderBarText, setBorderBarText] = useState("");

    useEffect(() => {
        gsap.registerPlugin(CustomEase);
        borderBarTextRef.current.style.width = borderBarOriTextRef.current.offsetWidth + "px";
    }, []);

    useEffect(() => {
        if (props.loadState !== undefined && props.loadState === false) {
            setTimeout(() => {
                gsap.to(wiggleBarRef.current, {
                    duration: 0.1,
                    x: -10,
                    ease: "easeOut",
                }).then(() => {
                    gsap.to(wiggleBarRef.current, {
                        duration: 1.6,
                        x: 0,
                        ease: Elastic.easeOut.config(1, 0.2),
                    });
                });
            }, 1500);
            setTimeout(() => {
                setBorderBarText("ALL SYSTEMS OPERATIONAL");
            }, 3000);
            setTimeout(() => {
                setBorderBarText("");
            }, 6000);
        }
    }, [props.loadState]);

    useEffect(() => {
        gsap.to(loadingBarRef.current, {
            duration: 1.3,
            width: props.loadPercent + "%",
            ease: CustomEase.create("custom", "0.25, 1, 0.5, 1"),
        });
        if (props.loadPercent === 100) {
            gsap.to(loadingBarRef.current, {
                duration: 0.5,
                delay: 1,
                backgroundColor: "transparent",
            });
        }
    }, [props.loadPercent]);

    useEffect(() => {
        gsap.to(borderBarTextRef.current, {
            duration: 1,
            width: borderBarOriTextRef.current.offsetWidth,
            ease: CustomEase.create("custom", "0.16, 1, 0.3, 1"),
        });
    }, [borderBarText]);

    return (
        <>
            <div ref={borderBarOriTextRef} className="absolute opacity-0 font-ibmplexmono font-medium">{(borderBarText && !isMobile) ? borderBarText : ""}</div>
            <button ref={wiggleBarRef} className={`relative py-2.5 border-[1.5px] z-10 ${props.loadState ? "border-neutral-100": "border-zinc-900"}`}>
                <div ref={loadingBarRef} className="absolute top-0 h-full bg-neutral-100 hover:bg-zinc-100 transition duration-100"></div>
                <div ref={div2Ref} className={`flex gap-x-3 px-3.5 ${props.loadState ? "opacity-0" : "opacity-100"}`}>
                    <div className="flex items-center">
                        <div className="h-[10px] w-[10px] bg-green-300"></div>
                    </div>
                    <div ref={borderBarTextRef} className={`overflow-x-hidden whitespace-nowrap transition duration-700 font-ibmplexmono font-medium ${props.loadState ? "text-white" : "text-black"} ${borderBarText ? 'opacity-100' : 'opacity-0'}`}>{borderBarText ? borderBarText : <code>&nbsp;</code>}</div>
                    <div className={`${props.loadState ? "fill-white" : "fill-black"} flex items-center pl-7`}>
                        <svg className="h-3" viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.44772 0 0 0.44772 0 1C0 1.55228 0.44772 2 1 2H21C21.5522 2 22 1.55228 22 1C22 0.44772 21.5522 0 21 0H1ZM0 7C0 6.44772 0.44772 6 1 6H21C21.5522 6 22 6.44772 22 7C22 7.55228 21.5522 8 21 8H1C0.44772 8 0 7.55228 0 7ZM0 13C0 12.4478 0.44772 12 1 12H21C21.5522 12 22 12.4478 22 13C22 13.5522 21.5522 14 21 14H1C0.44772 14 0 13.5522 0 13Z" />
                        </svg>
                    </div>
                </div>
            </button>
        </>
    )
}