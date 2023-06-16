export default function Footer() {
    return (
        <div className="flex flex-col">
            <div className="uppercase text-center border-t-[1.5px] border-zinc-900 p-3 font-famgro">
                You've reached the end, what do you think now?
            </div>
            <div className="border-y-[1.5px] border-zinc-900 flex flex-col-reverse lg:flex-row justify-between p-7 lg:p-12">
                <div className="flex justify-center lg:justify-start lg:items-end">
                    <button className="uppercase px-5 py-3 transition hover:bg-gray-100">
                        <span className="inline-block align-middle">
                            <svg className="inline-block align-baseline h-3" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.8918 0C10.4652 0 10.93 0.44772 10.93 1V18.5858L17.4633 12.2929C17.8688 11.9024 18.5262 11.9024 18.9318 12.2929C19.3371 12.6834 19.3371 13.3166 18.9318 13.7071L10.6259 21.7072C10.4312 21.8946 10.1672 22 9.8918 22C9.61645 22 9.35237 21.8946 9.15768 21.7072L0.85195 13.7071C0.446485 13.3166 0.446485 12.6834 0.85195 12.2929C1.25739 11.9024 1.91475 11.9024 2.3202 12.2929L8.85359 18.5858V1C8.85359 0.44772 9.31842 0 9.8918 0Z" fill="black"/>
                            </svg>
                        </span>
                        <span className="px-1.5">&nbsp;</span>
                        <span className="inline-block align-middle font-ibmplexmono text-sm font-medium">
                            Continue to Lab
                        </span>
                    </button>
                </div>
                <div className="text-center lg:text-right">
                    <div className="py-12">
                       <div className="lg:pb-24">
                           <svg className="h-24 inline-block" xmlns="http://www.w3.org/2000/svg" id="레이어_1" x="0" y="0" version="1.1" viewBox="0 0 800 800">
                               <polygon fill="#0057B7" points="174.96 717.48 11.84 717.48 406.06 84 569.19 84"/>
                               <polygon fill="#FFDD00" points="392.47 717.48 229.34 717.48 623.56 84 786.69 84"/>
                               <path fill="#0057B7" d="M204.87,320.53H41.74l60.79-97.93C156.02,136.42,250.25,84,351.68,84h0L204.87,320.53z"/>
                               <path fill="#FFDD00" d="M444.12,717.48L444.12,717.48l146.81-236.53h163.13l-60.79,97.93C639.78,665.06,545.55,717.48,444.12,717.48z"/>
                           </svg>
                       </div>
                    </div>
                    <div className="font-famgro opacity-30 py-3 break-words">
                        SHA5: <br/>936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af
                    </div>
                </div>
            </div>
        </div>
    )
}