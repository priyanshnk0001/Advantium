import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);

export default function AppsSplitText() {
    const elRef = useRef(null);
    const appssplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const appssplit = new SplitType(elRef.current, { types: "words, chars" });
        appssplitRef.current = appssplit;

        gsap.set(appssplit.chars, { opacity: 0.2, });

        gsap.to(appssplit.chars, {
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
            if (appssplitRef.current) {
                appssplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="appssplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="apps-Text text-start py-5 text-[55px] text-white flex items-center">Why choose an app?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80">In our increasingly digital world, apps play a crucial role in improving user experiences and streamlining processes. Whether it's a mobile app or a web application, both offer unique benefits that can drive your business forward.</h1>

                <h1 className="text-[55px] text-white">Benefits of an app for your organisation.</h1>

                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Improved accessibility: Apps allow you to make your services and products available 24/7, when and where users need them.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">More engagement: With features such as push notifications and personalisation, you can better engage users and increase their loyalty.</h1>
                </div>
                <div className="!flex ">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Efficiency and time savings: Apps can automate business processes and give users access to instant information and tools.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80">Innovation and growth: A well-designed app positions your organisation as innovative and ready for the future.</h1>

                </div>



               

            </div>
        </div>
    );
}

