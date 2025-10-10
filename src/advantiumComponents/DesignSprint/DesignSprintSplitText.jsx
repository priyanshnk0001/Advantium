import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function DesignSprintSplitText() {
    const elRef = useRef(null);
    const DesignSprintsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const DesignSprintsplit = new SplitType(elRef.current, { types: "words, chars" });
        DesignSprintsplitRef.current = DesignSprintsplit;

        gsap.set(DesignSprintsplit.chars, { opacity: 0.2, });

        gsap.to(DesignSprintsplit.chars, {
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
            if (DesignSprintsplitRef.current) {
                DesignSprintsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="DesignSprintsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words lg:mt-20 md:mt-0 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="DesignSprint-Text text-start py-5 text-[50px] text-white flex items-center">Online designs shaped by your target audience. </h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">The design sprint method is a fast, focused process that helps you create a clear and functional design in a short time. Through a series of collaborative sessions, our multidisciplinary team works with you to answer key questions, test ideas, and refine solutions. This approach moves you swiftly from concept to result — delivering a design that not only feels right but is proven to work.
                </h1>

                                 <h1 className="text-[40px] text-white">Why a design sprint?</h1>


                <h1 className="text-white/80 space-y-5">By collaborating in a design sprint, we make the development process faster and more effective. We test early, learn from feedback, and focus on creating solutions that truly work for users — ensuring your digital product isn’t just beautiful, but purpose-driven and impactful.
                </h1>

                


               





            </div>
        </div>
    );
}

