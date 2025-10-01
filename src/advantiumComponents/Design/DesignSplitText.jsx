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
        <div className="DesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="Design-Text text-start py-5 text-[55px] text-white flex items-center">Our design philosophy: winning with usability.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Design is not just about aesthetics. It is about accessibility, functionality and a design that does what it is supposed to do: convert. But there is more. Good design has to match who you are and what your brand radiates. That's where we make a difference. For us, it's all about impact. That is why we combine data and creativity to come up with a design that not only looks good, but also really delivers. Whether that's more conversions, satisfied users or a streamlined process. Because of our approach, we win awards, partners and hearts.</h1>

                <h1 className="text-[45px] text-white">Our designprocess in action.</h1>

                
                    <h1 className="text-white/80 space-y-5">Over the years, our design process has matured well with many new flavours. We have extensive experience and know the latest trends like no other. These are our digital design services.</h1>
               



               

            </div>
        </div>
    );
}

