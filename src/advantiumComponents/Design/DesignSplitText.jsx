import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function DesignSplitText() {
    const elRef = useRef(null);
    const DesignsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const Designsplit = new SplitType(elRef.current, { types: "words, chars" });
        DesignsplitRef.current = Designsplit;

        gsap.set(Designsplit.chars, { opacity: 0.2, });

        gsap.to(Designsplit.chars, {
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
            if (DesignsplitRef.current) {
                DesignsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="DesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="Design-Text text-start py-5 text-[50px] text-white flex items-center">Our design philosophy: winning through usability.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Design is more than aesthetics — it’s about accessibility, functionality, and purpose. A great design doesn’t just look good; it converts, communicates, and reflects your brand’s identity. That’s where we stand out. At Advantium, impact drives everything we create. By combining data with creativity, we craft designs that deliver real results — from higher conversions and happier users to more efficient processes. Our approach earns not just awards, but lasting partnerships and trust.</h1>

                <h1 className="text-[40px] text-white">Our design process in action.</h1>

                
                    <h1 className="text-white/80 space-y-5">Over the years, our design process has evolved and refined, enriched with fresh insights and innovation. With deep experience and a strong grasp of the latest trends, we deliver digital design services that set your brand apart.</h1>
               



               

            </div>
        </div>
    );
}

