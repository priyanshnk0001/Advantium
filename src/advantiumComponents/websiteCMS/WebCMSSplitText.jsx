import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function WebCMSSplitText() {
    const elRef = useRef(null);
    const webCMSsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const webCMSsplit = new SplitType(elRef.current, { types: "words, chars" });
        webCMSsplitRef.current = webCMSsplit;

        gsap.set(webCMSsplit.chars, { opacity: 0.2, });

        gsap.to(webCMSsplit.chars, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 95%",
                end: "top 30%",
                scrub: 2,
                // markers:true
            },
        });

        return () => {
            if (webCMSsplitRef.current) {
                webCMSsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="webCMSsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words lg:mt-20 md:mt-0 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="webCMS-Text text-start py-5 text-[50px] text-white flex items-center">A website with impact.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80">Sure, a beautiful website with strong content is important. But the power lies in combining that look with smart functionalities and processes that make it easier for you to achieve your goals. The goal is clear: a website that works, pays off and helps you grow. And that's what we're all about. What would you like your website to do for you?</h1>


                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Generate more leads?</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Fewer customer service enquiries?</h1>
                </div>
                <div className="!flex ">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Make your company's process more efficient?</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Improve specific user flows?</h1>

                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Gain insights from your visitor data?</h1>

                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Make better communication with your customers?</h1>

                </div>





            </div>
        </div>
    );
}

