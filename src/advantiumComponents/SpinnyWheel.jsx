import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
    const marqueeRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const marqueeContent = contentRef.current;
        if (!marquee || !marqueeContent) return;

        // clone for infinite loop
        const clone = marqueeContent.cloneNode(true);
        marquee.appendChild(clone);

        const width = marqueeContent.offsetWidth || marqueeContent.getBoundingClientRect().width;

        gsap.fromTo(
            marquee.children,
            { x: 0 },
            {
                x: -width,
                duration: 25,
                ease: "none",
                repeat: -1,
            }
        );
    }, []);

    return (
        <div className="relative w-[100%] h-[100vh] overflow-hidden bg-gradient-to-b from-white to-[#0f172a] py-6 pb-10 flex items-baseline-last">

            <h1 className="ourTeam-heading absolute text-8xl font-semi-bold font-stretch-200% text-gray-500  left-50 top-20">Our team. Or <br /> well, actually, <br /> your team.</h1>
            {/* simple fade edges */}
            {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-30" /> */}

            <div ref={marqueeRef} className="flex relative z-10
            
             "

            >
                <div ref={contentRef} className="flex">
                    <div className="box group relative mx-4 w-70 h-100 flex items-center justify-center">
                        <div className="panel w-full h-full bg-white rounded-xl flex items-center justify-center">
                            <img
                                src="./dubeySir.jpeg"
                                alt="HTML"
                                className="w-full h-100 object-fit transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <div className="absolute  text-start px-5 space-y-4 flex flex-col    opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                                <h1 className="text-semi-bold text-black name">name</h1>
                                <h1 className="text-gray-400 designation">Designation</h1>
                                <h1 className="text-[12px] text-gray-700 about-person">Default information for a tech employee generally includes data points collected for standard HR and IT purposes, as well as specific technical details related to their role and systems access. This information can be separated into three main categories: personal, professional, and technical. </h1>
                            </div>
                        </div>
                    </div>

                    <div className="box group relative mx-4 w-70 h-100 flex items-center justify-center">
                        <div className="panel w-full h-full bg-white rounded-xl  flex items-center justify-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                alt="JS"
                                className="w-70 h-100 object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <div className="absolute  text-start px-5 space-y-4 flex flex-col    opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                                <h1 className="text-semi-bold text-black name">name</h1>
                                <h1 className="text-gray-400 designation">Designation</h1>
                                <h1 className="text-[12px] text-gray-700 about-person">Default information for a tech employee generally includes data points collected for standard HR and IT purposes, as well as specific technical details related to their role and systems access. This information can be separated into three main categories: personal, professional, and technical. </h1>
                            </div>
                        </div>
                    </div>

                    <div className="box group relative mx-4 w-70 h-100 flex items-center justify-center">
                        <div className="panel w-full h-full bg-white rounded-xl  flex items-center justify-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                                alt="C"
                                className="w-70 h-100 object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <div className="absolute  text-start px-5 space-y-4 flex flex-col    opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                                <h1 className="text-semi-bold text-black name">name</h1>
                                <h1 className="text-gray-400 designation">Designation</h1>
                                <h1 className="text-[12px] text-gray-700 about-person">Default information for a tech employee generally includes data points collected for standard HR and IT purposes, as well as specific technical details related to their role and systems access. This information can be separated into three main categories: personal, professional, and technical. </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        .box { position: relative; z-index: 20; display: flex; align-items: center; justify-content: center; }
        .panel { position: relative; z-index: 30; overflow: hidden; border-radius: 12px; }
        .box::after {
          content: '';
          position: absolute;
          top: -8px; /* extend beyond box to show glow outside */
          left: -8px;
          right: -8px;
          bottom: -8px;
          z-index: 10;
          filter: blur(12px);
          opacity: 0.85;
          border-radius: 14px;
          background: linear-gradient(-110deg, #02f4c8 10%, #41bbf6 30%, #41bbf6 70%, #02f4c8 80%);
          background-size: 400% 400%;
          animation: glow 6.8s linear infinite;
          pointer-events: none;
        }
        @keyframes glow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* small responsive tweak so glow doesn't clip on very small screens */
        @media (max-width: 400px) {
          .box::after { top: -6px; left: -6px; right: -6px; bottom: -6px; filter: blur(10px); opacity: 0.9; }
        }
      `}</style>
        </div>
    );
}
