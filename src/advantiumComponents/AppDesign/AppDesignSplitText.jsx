import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function AppDesignSplitText() {
    const elRef = useRef(null);
    const AppDesignsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const AppDesignsplit = new SplitType(elRef.current, { types: "words, chars" });
        AppDesignsplitRef.current = AppDesignsplit;

        gsap.set(AppDesignsplit.chars, { opacity: 0.2, });

        gsap.to(AppDesignsplit.chars, {
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
            if (AppDesignsplitRef.current) {
                AppDesignsplitRef.current.revert(); 
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="AppDesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words lg:mt-20 md:mt-0 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="AppDesign-Text text-start py-5 text-[50px] text-white flex items-center">Build meaningful connections between users and your brand.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Great app design goes beyond aesthetics — it shapes how users interact, explore features, and stay engaged. An intuitive interface ensures a seamless experience, helping users achieve their goals effortlessly. At Advantium, we craft designs that not only enhance usability but also strengthen the emotional bond between users and your brand — building trust and setting your app apart in a competitive digital landscape.</h1>

                <h1 className="text-[45px] text-white">Why choose Advantium for your app design?</h1>

                
                    <h1 className="text-white/80 space-y-5">At <span className="text-white">Advantium</span>, we design apps that are not just visually striking, but also highly functional and user-centric. Whether it’s a complex mobile solution or a web application, our designs are crafted around real user needs. By leveraging the latest technologies and modern design principles, we create intuitive, efficient, and goal-driven experiences. Every element serves a purpose — no clutter, just seamless functionality that delivers results. Curious how we make it happen?</h1>
               



               

            </div>
        </div>
    );
}

