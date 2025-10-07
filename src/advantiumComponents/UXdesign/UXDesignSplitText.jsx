import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function UXDesignSplitText() {
    const elRef = useRef(null);
    const UXDesignsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const UXDesignsplit = new SplitType(elRef.current, { types: "words, chars" });
        UXDesignsplitRef.current = UXDesignsplit;

        gsap.set(UXDesignsplit.chars, { opacity: 0.2, });

        gsap.to(UXDesignsplit.chars, {
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
            if (UXDesignsplitRef.current) {
                UXDesignsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="UXDesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="UXDesign-Text text-start py-5 text-[55px] text-white flex items-center">Wat is User Experience Design?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">User Experience Design (UX) is about creating an intuitive and efficient interaction between the user and your product. It's not just about the visual elements of an interface, but also about how that interface functions. The goal? To provide the user with a hassle-free and enjoyable experience. The simpler and user-friendly the experience, the more likely users are to stick around, come back and eventually take the desired action.
                    <br /><br />

                    Designing an optimal user experience (UX) is essential to the success of your digital product. Our UX designers always work from the end-user's perspective. We make sure the interface is intuitive, with a strong focus on simplicity and functionality. The simpler the experience, the greater your user engagement. We make sure your application provides exactly the experience your users expect, with the best user interface design and user experience design.

                </h1>
            </div>
        </div>
    );
}

