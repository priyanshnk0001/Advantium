import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);




export default function CodeSplitText() {
    const elRef = useRef(null);
    const CodesplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const Codesplit = new SplitType(elRef.current, { types: "words, chars" });
        CodesplitRef.current = Codesplit;

        gsap.set(Codesplit.chars, { opacity: 0.2, });

        gsap.to(Codesplit.chars, {
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
            if (CodesplitRef.current) {
                CodesplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="CodesplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="Code-Text text-start py-5 text-[55px] text-white flex items-center">What is code reviewing?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">Code reviewing is the systematic process of analyzing and evaluating existing codebases to ensure high standards of quality, performance, and security. The goal is to identify inefficiencies, technical issues, or potential risks before they impact functionality. Regular code reviews help software run more efficiently, remain secure, and become easier to maintain over time. <br /><br />

At Advantium, when we take responsibility for your existing software, our team performs a comprehensive audit to assess its current condition and architecture. For standard software, we map out every process the application manages and explore integration opportunities with other systems. For custom-built solutions, our experts conduct a detailed code review to evaluate maintainability, identify optimization areas, and ensure the codebase is ready for scalable future development.
                </h1>


               





            </div>
        </div>
    );
}

