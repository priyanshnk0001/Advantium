import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function SoftDevSplitText() {
    const elRef = useRef(null);
    const SoftDevsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const SoftDevsplit = new SplitType(elRef.current, { types: "words, chars" });
        SoftDevsplitRef.current = SoftDevsplit;

        gsap.set(SoftDevsplit.chars, { opacity: 0.2, });

        gsap.to(SoftDevsplit.chars, {
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
            if (SoftDevsplitRef.current) {
                SoftDevsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="SoftDevsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="SoftDev-Text text-start py-5 text-[55px] text-white flex items-center">Front-end Development.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">All styling on the internet comes about through front-end technology. Apps, websites, platforms and more: together, they define your online brand experience with content, interaction and technology. How your solution looks plays a crucial role in the impression you want to make. Our front-end developers ensure that your solution looks exactly as you envision it. Whether you want to have a platform, website or application developed, Advantium has the knowledge and experience to make your vision a reality.</h1>

                <h1 className="text-[45px] text-white">Mapping goals.</h1>

                
                    <h1 className="text-white/80 space-y-5">In consultation, we map out your wishes and goals. What do you want to project? Who are your target groups? Based on these insights, we choose the right techniques for your specific situation. In everything we develop, the end user is central. That is what we do it for. At Advantium, we take front-end development seriously. From large to small, from television to phone: your SoftDev will be fully optimised for every format. From colours and typography to interactive menus: with a combination of advanced techniques, we ensure that your solution is not only beautiful, but also functional.</h1>
               



               

            </div>
        </div>
    );
}

