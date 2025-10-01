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
                <h1 className="text-white/80 space-y-5">Code reviewing is the process of analysing and assessing existing codebases to evaluate software quality, maintainability and security. The aim is to identify potential inefficiencies, technical errors or risks in the source code before they cause problems. Through regular code reviews, a software application can not only function better, but also be more secure and easier to maintain in the long run. <br /><br />

                    When Advantium takes over responsibility for your existing software, we perform a thorough audit to evaluate the current state of the application. For standard software, we inventory exactly what processes the application handles and examine how we can possibly link it to other systems. For custom software, we do a code review to determine whether we can take over management of the software and whether the code base is suitable for further development.
                </h1>


               





            </div>
        </div>
    );
}

