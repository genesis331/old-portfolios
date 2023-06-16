import Dynbox from "./dynbox.jsx";
import Noise from "./noise.jsx";

export default function Header(props) {
    return (
        <div data-scroll data-scroll-sticky data-scroll-target="#pageWrapper" className="sticky top-0 z-50">
            <Noise />
            <div className={`h-24 w-screen transition delay-700 ${props.loadState ? "bg-transparent" : "bg-neutral-100"}`}>
                <div className="h-full border-y-[1.5px] border-zinc-900">
                    <div className="h-full flex items-center px-7 lg:px-12">
                        <div className={`transition duration-500 ${props.loadState ? "stroke-[24px] stroke-white" : "fill-black"}`}>
                            <svg className="h-11" xmlns="http://www.w3.org/2000/svg" id="레이어_1" x="0" y="0" version="1.1" viewBox="0 0 800 800">
                                <polygon points="174.96 717.48 11.84 717.48 406.06 84 569.19 84"/>
                                <polygon points="392.47 717.48 229.34 717.48 623.56 84 786.69 84"/>
                                <path d="M204.87,320.53H41.74l60.79-97.93C156.02,136.42,250.25,84,351.68,84h0L204.87,320.53z"/>
                                <path d="M444.12,717.48L444.12,717.48l146.81-236.53h163.13l-60.79,97.93C639.78,665.06,545.55,717.48,444.12,717.48z"/>
                            </svg>
                        </div>
                        <div className="flex-1 flex flex-col items-end">
                            <Dynbox loadState={props.loadState} loadPercent={props.loadPercent}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}