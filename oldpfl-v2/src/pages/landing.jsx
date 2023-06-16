import {useState, useEffect} from "react";
import {useLocomotiveScroll} from "react-locomotive-scroll";
import Marquee from "react-fast-marquee";
import maskVid from "../assets/backgroundmask.mp4";
import mask1 from "../assets/mask1.jpg";
import mask2 from "../assets/mask2.jpg";
import projectPic1 from "../assets/projectpic/ISO1.png";
import projectPic2 from "../assets/projectpic/ISO2.png";
import projectPic3 from "../assets/projectpic/ISO3.png";
import projectPic4 from "../assets/projectpic/ISO4.png";
import projectPic5 from "../assets/projectpic/ISO5.png";

export default function Landing() {
    const { scroll, isReady } = useLocomotiveScroll()
    const [landingQuote1Appear, setLandingQuote1Appear] = useState(false);
    const [landingQuote2Appear, setLandingQuote2Appear] = useState(false);
    const [landingQuote3Appear, setLandingQuote3Appear] = useState(false);
    const [moreWorks1Appear, setMoreWorks1Appear] = useState(false);
    const [moreWorks2Appear, setMoreWorks2Appear] = useState(false);
    const [buildTogether1Appear, setBuildTogether1Appear] = useState(false);
    const [buildTogether2Appear, setBuildTogether2Appear] = useState(false);
    const [buildTogether3Appear, setBuildTogether3Appear] = useState(false);

    const repeatNameComponent = (times) => {
        return Array.from({ length: times }, (elem, idx) => <div key={idx}>
            <div className="inline-block align-middle font-ebgaramond text-9xl font-medium px-4">CHEAH ZIXU</div>
            <div className="inline-block align-middle px-4">
                <svg className="h-11 stroke-[24px] stroke-black fill-none" xmlns="http://www.w3.org/2000/svg" id="레이어_1" x="0" y="0" version="1.1" viewBox="0 0 800 800">
                    <polygon points="174.96 717.48 11.84 717.48 406.06 84 569.19 84"/>
                    <polygon points="392.47 717.48 229.34 717.48 623.56 84 786.69 84"/>
                    <path d="M204.87,320.53H41.74l60.79-97.93C156.02,136.42,250.25,84,351.68,84h0L204.87,320.53z"/>
                    <path d="M444.12,717.48L444.12,717.48l146.81-236.53h163.13l-60.79,97.93C639.78,665.06,545.55,717.48,444.12,717.48z"/>
                </svg>
            </div>
        </div>);
    }

    const repeatMarqueeComponent = (times, text) => {
        return Array.from({ length: times }, (elem, idx) => <div key={idx} className="font-famgro uppercase px-10">{text}</div>);
    }

    const landingQuoteAppear = () => {
        setLandingQuote1Appear(true);
        setTimeout(() => {
            setLandingQuote2Appear(true);
        }, 100);
        setTimeout(() => {
            setLandingQuote3Appear(true);
        }, 200);
    }

    const moreWorksAppear = () => {
        setMoreWorks1Appear(true);
        setTimeout(() => {
            setMoreWorks2Appear(true);
        }, 100);
    }

    const buildTogetherAppear = () => {
        setBuildTogether1Appear(true);
        setTimeout(() => {
            setBuildTogether2Appear(true);
        }, 100);
        setTimeout(() => {
            setBuildTogether3Appear(true);
        }, 200);
    }

    useEffect(() => {
        if (isReady) {
            scroll.on("call", arg => {
                // console.log(arg);
                if (arg === "landingQuoteAppear") {
                    landingQuoteAppear();
                }
                if (arg === "moreWorksAppear") {
                    moreWorksAppear();
                }
                if (arg === "buildTogetherAppear") {
                    buildTogetherAppear();
                }
            });
        }
    }, [scroll]);

    return (
        <div className="min-h-screen">
            <div className="py-6 border-b-[1.5px] border-zinc-900">
                <Marquee speed={45} gradient={false}>
                    {repeatNameComponent(3)}
                </Marquee>
            </div>
            <div className="border-b-[1.5px] border-zinc-900 px-7 lg:px-12">
                <div className="border-x-[1.5px] border-zinc-900">
                    <div className="flex justify-between py-3 border-b-[1.5px] border-zinc-900 font-famgro">
                        <div className="uppercase px-5 hidden lg:block">Taylor's Uni</div>
                        <div className="flex-1 uppercase w-full lg:w-auto text-center">
                            <div className="relative w-full overflow-y-hidden">
                                <div>&nbsp;</div>
                                <div className="absolute top-0 w-full">
                                    <div>Computer Science Student</div>
                                    <div>Freelance Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <div className="uppercase px-5 hidden lg:block">2016 - Current</div>
                    </div>
                    <div className="h-[20rem] md:h-[30rem] lg:h-[50rem] relative overflow-y-hidden">
                        <div className="transition duration-500">
                            <video muted autoPlay loop playsInline src={maskVid} className="object-cover h-full w-full absolute top-0 left-0"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-[1.5px] border-zinc-900">
                <div className="px-7 lg:px-32 py-24 lg:py-36">
                    <div className="text-5xl md:text-7xl lg:text-8xl flex flex-col gap-2 lg:gap-4">
                        <div className="uppercase flex flex-col lg:flex-row w-full gap-3 lg:gap-6 font-famgro">
                            <div>
                                <span className="overflow-y-hidden inline-block">
                                    <span className={`inline-block transition duration-700 transform ${landingQuote1Appear ? "translate-y-0" : "translate-y-full"}`}>Turning</span>
                                </span>
                            </div>
                            <div data-scroll data-scroll-speed="0.2" className="flex-1 border-[1.5px] border-zinc-900" style={{
                                backgroundImage: `url(${mask1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>&nbsp;</div>
                        </div>
                        <div className="uppercase text-right lg:text-center font-famgro">
                            <span className="italic overflow-y-hidden inline-block">
                                <span className={`inline-block pr-3 transition duration-700 transform ${landingQuote2Appear ? "translate-y-0" : "translate-y-full"}`}>Imagination</span>
                            </span> &nbsp;
                            <span className="overflow-y-hidden inline-block">
                                <span className={`inline-block transition duration-700 transform ${landingQuote2Appear ? "translate-y-0" : "translate-y-full"}`}>Into</span>
                            </span>
                        </div>
                        <div className="italic flex flex-col lg:flex-row w-full gap-3 lg:gap-6 font-playfair">
                            <div data-scroll data-scroll-speed="0.5" className="flex-1 border-[1.5px] border-zinc-900" style={{
                                backgroundImage: `url(${mask2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>&nbsp;</div>
                            <div>
                                <span className="overflow-y-hidden inline-block">
                                    <span className={`inline-block transition duration-700 transform ${landingQuote3Appear ? "translate-y-0" : "translate-y-full"}`}>Innovation</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-famgro uppercase py-8"  data-scroll data-scroll-position="top" data-scroll-call="landingQuoteAppear">
                        Make the Impossible Possible, and Incredible.
                    </div>
                    <div className="text-center my-4">
                        <button className="relative py-2.5 px-8 border-[1.5px] z-10 border-zinc-900 uppercase font-famgro inline-flex gap-3 items-center transition duration-300 hover:bg-zinc-900 hover:text-white fill-black hover:fill-white">
                            More About Myself
                            <span className="fill-inherit">
                                <svg className="h-3" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.565923 16.7795C0.160478 16.3741 0.148379 15.7288 0.5389 15.3383L12.9739 2.90327L3.90445 2.73329C3.34155 2.72269 2.8767 2.25784 2.8661 1.69494C2.85564 1.13219 3.30335 0.684482 3.86609 0.694947L15.3961 0.911136C15.6663 0.916288 15.9276 1.02849 16.1223 1.2232C16.317 1.4179 16.4292 1.67917 16.4343 1.94934L16.6504 13.4793C16.661 14.0422 16.2133 14.4899 15.6505 14.4793C15.0876 14.4688 14.6228 14.0039 14.6123 13.4411L14.4422 4.37153L2.00716 16.8066C1.61664 17.1971 0.971368 17.185 0.565923 16.7795Z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-b-[1.5px] border-zinc-900">
                <Marquee speed={55} gradient={false} className="py-3">
                    {repeatMarqueeComponent(15, "Recent Works")}
                </Marquee>
            </div>
            <div className="lg:min-h-screen relative border-b-[1.5px] border-zinc-900">
                <div className="px-7 lg:px-12">
                    <div className="border-x-[1.5px] border-zinc-900 relative">
                        <div data-scroll data-scroll-sticky data-scroll-target="#worksWrapper" className="absolute z-10 top-0 h-screen w-full hidden lg:flex flex-col justify-center">
                            <div>
                                <Marquee speed={35} gradient={false}>
                                    <div className="font-ebgaramond text-9xl font-medium uppercase relative w-full overflow-y-hidden">
                                        <div className="py-4">&nbsp;</div>
                                        <div className="absolute top-0 w-full">
                                            <div className="inline-block align-middle mx-10 py-4 relative">
                                                <div>Project Alcatraz</div>
                                                <div>Project Alcatraz B</div>
                                                <div>Project Alcatraz C</div>
                                            </div>
                                        </div>
                                    </div>
                                </Marquee>
                            </div>
                            <div>
                                <Marquee speed={55} gradient={false}>
                                    <div className="font-famgro text-9xl font-medium uppercase relative w-full overflow-y-hidden">
                                        <div>&nbsp;</div>
                                        <div className="absolute top-0 w-full">
                                            <div className="inline-block align-middle mx-10">
                                                <div>Graphics Design</div>
                                                <div>Graphics Design</div>
                                                <div>Web Design</div>
                                            </div>
                                        </div>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="relative z-30 min-h-screen lg:px-24">
                            <div id="worksWrapper" className="flex flex-col pt-14 lg:pt-20 pb-4 lg:pb-20">
                                <div className="text-left py-10 lg:py-28">
                                    <div className="inline-block h-60 md:h-96 w-full lg:w-5/12 border-y-[1.5px] lg:border-[1.5px] border-zinc-900" style={{
                                        backgroundImage: `url(${projectPic1})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        transform: "translateZ(0)"
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="text-right py-10 lg:py-28">
                                    <div className="inline-block h-60 md:h-96 w-full lg:w-6/12 border-y-[1.5px] lg:border-[1.5px] border-zinc-900" style={{
                                        backgroundImage: `url(${projectPic2})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        transform: "translateZ(0)"
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="text-center py-10 lg:py-28">
                                    <div className="inline-block h-60 md:h-96 w-full lg:w-8/12 border-y-[1.5px] lg:border-[1.5px] border-zinc-900" style={{
                                        backgroundImage: `url(${projectPic3})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        transform: "translateZ(0)"
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="pt-16 pb-32 text-center">
                                <div className="font-famgro text-4xl md:text-6xl uppercase italic">
                                    <span className="overflow-y-hidden inline-block">
                                        <span className={`inline-block pr-3 transition duration-700 transform ${moreWorks1Appear ? "translate-y-0" : "translate-y-full"}`}>
                                            See More of My
                                        </span>
                                    </span>
                                </div>
                                <div className="font-playfair text-5xl md:text-8xl font-black italic">
                                    <span className="overflow-y-hidden inline-block">
                                        <span className={`inline-block pr-3 transition duration-700 transform ${moreWorks2Appear ? "translate-y-0" : "translate-y-full"}`}>
                                            Works
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-10" data-scroll data-scroll-position="top" data-scroll-call="moreWorksAppear">
                                    <button className="relative py-2.5 px-8 border-[1.5px] z-10 border-zinc-900 uppercase font-famgro inline-flex gap-3 items-center transition duration-300 hover:bg-zinc-900 hover:text-white fill-black hover:fill-white">
                                        My Works
                                        <span className="fill-inherit">
                                    <svg className="h-3" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.565923 16.7795C0.160478 16.3741 0.148379 15.7288 0.5389 15.3383L12.9739 2.90327L3.90445 2.73329C3.34155 2.72269 2.8767 2.25784 2.8661 1.69494C2.85564 1.13219 3.30335 0.684482 3.86609 0.694947L15.3961 0.911136C15.6663 0.916288 15.9276 1.02849 16.1223 1.2232C16.317 1.4179 16.4292 1.67917 16.4343 1.94934L16.6504 13.4793C16.661 14.0422 16.2133 14.4899 15.6505 14.4793C15.0876 14.4688 14.6228 14.0039 14.6123 13.4411L14.4422 4.37153L2.00716 16.8066C1.61664 17.1971 0.971368 17.185 0.565923 16.7795Z" />
                                    </svg>
                                </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-[1.5px] border-neutral-100">
                <Marquee speed={55} gradient={false} className="py-3 bg-zinc-900 text-white">
                    {repeatMarqueeComponent(15, "Build Together")}
                </Marquee>
            </div>
            <div>
                <div className="bg-zinc-900 px-7 lg:px-12">
                    <div className="border-x-[1.5px] border-neutral-100 relative">
                        <div className="lg:absolute z-10 flex flex-col h-full justify-center top-0 w-full text-center">
                            <div className="flex flex-col h-full justify-center py-32">
                                <div className="flex flex-col text-white">
                                    <div className="font-famgro text-4xl md:text-6xl lg:text-7xl uppercase font-bold">
                                        <span className="overflow-y-hidden inline-block">
                                            <span className={`inline-block pr-3 transition duration-700 transform ${buildTogether1Appear ? "translate-y-0" : "translate-y-full"}`}>Let's Build</span>
                                        </span>
                                    </div>
                                    <div className="font-famgro text-4xl md:text-6xl lg:text-7xl uppercase font-bold italic">
                                        <span className="overflow-y-hidden inline-block">
                                            <span className={`inline-block pr-3 transition duration-700 transform ${buildTogether2Appear ? "translate-y-0" : "translate-y-full"}`}>The Future</span>
                                        </span>
                                    </div>
                                    <div className="font-playfair text-5xl md:text-8xl lg:text-9xl uppercase font-bold">
                                        <span className="overflow-y-hidden inline-block">
                                            <span className={`bg-clip-text text-transparent bg-gradient-to-br from-green-200 to-purple-600 inline-block pr-3 transition duration-700 transform ${buildTogether3Appear ? "translate-y-0" : "translate-y-full"}`}>Together</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-10" data-scroll data-scroll-position="top" data-scroll-call="buildTogetherAppear">
                                    <button className="relative py-2.5 px-8 border-[1.5px] z-10 border-neutral-100 text-white uppercase font-famgro inline-flex gap-3 items-center transition duration-300 hover:bg-neutral-100 hover:text-black fill-white hover:fill-black">
                                        Contact Me
                                        <span className="fill-inherit">
                                            <svg className="h-3" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.565923 16.7795C0.160478 16.3741 0.148379 15.7288 0.5389 15.3383L12.9739 2.90327L3.90445 2.73329C3.34155 2.72269 2.8767 2.25784 2.8661 1.69494C2.85564 1.13219 3.30335 0.684482 3.86609 0.694947L15.3961 0.911136C15.6663 0.916288 15.9276 1.02849 16.1223 1.2232C16.317 1.4179 16.4292 1.67917 16.4343 1.94934L16.6504 13.4793C16.661 14.0422 16.2133 14.4899 15.6505 14.4793C15.0876 14.4688 14.6228 14.0039 14.6123 13.4411L14.4422 4.37153L2.00716 16.8066C1.61664 17.1971 0.971368 17.185 0.565923 16.7795Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block relative z-30 py-40 px-20 pointer-events-none">
                            <div className="flex flex-col gap-32">
                                <div className="text-right">
                                    <div data-scroll data-scroll-speed="0.8" className="inline-block h-16 lg:h-60 w-full lg:w-3/12 border-[1.5px] border-neutral-100" style={{
                                        backgroundImage: `url(${projectPic4})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat"
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div data-scroll data-scroll-speed="1.4" className="inline-block h-16 lg:h-60 w-full lg:w-4/12 border-[1.5px] border-neutral-100" style={{
                                        backgroundImage: `url(${projectPic5})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat"
                                    }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}