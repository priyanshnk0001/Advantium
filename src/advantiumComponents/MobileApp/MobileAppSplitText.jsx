import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function MobileAppSplitText() {
    const elRef = useRef(null);
    const MobileAppsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const MobileAppsplit = new SplitType(elRef.current, { types: "words, chars" });
        MobileAppsplitRef.current = MobileAppsplit;

        gsap.set(MobileAppsplit.chars, { opacity: 0.2, });

        gsap.to(MobileAppsplit.chars, {
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
            if (MobileAppsplitRef.current) {
                MobileAppsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="MobileAppsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words  lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="MobileApp-Text text-start py-5 text-[50px] text-white flex items-center">Why a mobile app?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Having a mobile application created offers numerous advantages. Mobile apps are fast, responsive and even work offline. This makes them ideal for businesses that want to offer a better user experience while optimising their processes. Whether you have a business app created for internal efficiency or a professional app developed for consumers, you can count on benefits such as:
                </h1>
                 <h1 className="text-white/80 space-y-5"><span className="text-white font-bold">Fast performance:</span> Apps run locally on the device, resulting in an instant and smooth experience.</h1>
                 
                 <h1 className="text-white/80 space-y-5"><span className="text-white font-bold">Offline functionality:</span> Users can continue to use your mobile app regardless of their internet connection.</h1>
                 
                 <h1 className="text-white/80 space-y-5"><span className="text-white font-bold">Push notifications:</span> Push notifications keep customers engaged and up-to-date on your products or services. </h1>
                 
                 <h1 className="text-white/80 space-y-5">Having an app developed helps you reach customers in a way that is effective and future-proof.</h1>
                 



               





            </div>
        </div>
    );
}

