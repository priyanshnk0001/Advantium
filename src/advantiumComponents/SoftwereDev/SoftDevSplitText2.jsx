import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function SoftDevSplitText2() {
    const elRef = useRef(null);
    const SoftDev2splitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const SoftDev2split = new SplitType(elRef.current, { types: "words, chars" });
        SoftDev2splitRef.current = SoftDev2split;

        gsap.set(SoftDev2split.chars, { opacity: 0.2, });

        gsap.to(SoftDev2split.chars, {
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
            if (SoftDev2splitRef.current) {
                SoftDev2splitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="SoftDev2splitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="SoftDev2-Text text-start py-5 text-[55px] text-white flex items-center">Back-end Development.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Our world is changing more radically than ever before. More and more processes are being optimised through digitisation. Yet we are only at the beginning. Blockchain, IoT, big data, machine learning and Artificial Intelligence herald the next phase on the digital frontier. For all these new things, as well as the digital solutions we already know, back-end development is crucial. A strong back-end forms the backbone of your digital environment.</h1>

                <h1 className="text-[45px] text-white">A master plan on the table.</h1>

                
                    <h1 className="text-white/80 space-y-5">Advantium is used to working with various back-end technologies. We map the technology within the organisation and together develop a vision for the coming years. With this master plan on the table, we select the most appropriate tools and platforms for each specific situation. Technology has an often underestimated dimension: the people who work with it. The best technology only has value if people can easily handle it. We always take that into account.</h1>
               



               

            </div>
        </div>
    );
}

