import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function UIDesignSplitText() {
    const elRef = useRef(null);
    const UIDesignsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const UIDesignsplit = new SplitType(elRef.current, { types: "words, chars" });
        UIDesignsplitRef.current = UIDesignsplit;

        gsap.set(UIDesignsplit.chars, { opacity: 0.2, });

        gsap.to(UIDesignsplit.chars, {
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
            if (UIDesignsplitRef.current) {
                UIDesignsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="UIDesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="UIDesign-Text text-start py-5 text-[55px] text-white flex items-center">Wat is User Interface Design?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">User Interface Design (UI) is about everything the user sees and interacts with. It includes the buttons, icons, colours, typography, layout and overall visual structure of a digital product. Along with user experience design (UX), UI Design focuses on optimising the user experience by making designs visually appealing and intuitive. Our user interface designers and user experience designers work closely together to optimally tailor the interface to your organisation and target group. The strategic basis of the project is translated into something visual and tangible. Using colour, space and form, our UX/UI designers create an appropriate digital experience. With the aim of creating an appropriate experience between the brand, product and user.

                </h1>
            </div>
        </div>
    );
}

