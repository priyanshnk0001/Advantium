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
            <h1 className="apps-Text text-start py-5 text-[55px] text-white flex items-center">Why go for an app?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80">In today’s digital world, apps are essential for enhancing user experiences and streamlining operations. Whether mobile or web-based, each offers unique advantages that help your business grow.</h1>

                <h1 className="text-[45px] text-white">Advantages of having an app for your organization.</h1>

                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="text-white">Improved accessibility:</span> Apps make your services and products available anytime, anywhere your users need them.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="text-white">More engagement:</span> Features like push notifications and personalization help you connect with users more effectively and build lasting loyalty.</h1>
                </div>
                <div className="!flex ">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="text-white">Efficiency and time savings:</span> Apps automate processes and provide users with instant access to information and tools.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="text-white">Innovation and growth:</span> A well-designed app positions your organization as forward-thinking and future-ready.</h1>

                </div>



               

            </div>
        </div>
    );
}

