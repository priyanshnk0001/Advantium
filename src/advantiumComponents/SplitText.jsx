import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
import "./SplitText.css"
gsap.registerPlugin(ScrollTrigger);

export default function SplitTextAnimate() {
  const elRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const split = new SplitType(elRef.current, { types: "chars" });
    splitRef.current = split;

    gsap.set(split.chars, { opacity: 0.2, });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 93%",
        end:"top 10%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (splitRef.current) {
        splitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="splitText-container w-full min-h-[100vh] bg-gray-900 flex flex-col   justify-center whitespace-normal break-words px-45 overflow-x-hidden  ">
        <h1 className="Dot text-start py-5 text-xl text-white flex items-center"><CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3"/> Driven by technology since 2011</h1>
      <h1
        ref={elRef}
        className="text-4xl md:text-6xl font-semi-bold text-white text-start leading-snug"
      >
At <span className="text-[rgb(35,147,195)] ">Advantium</span>, we’re not just creating technology — we’re shaping tomorrow with smart, innovative digital solutions that empower businesses and individuals to grow, connect, and succeed. </h1>
    </div>
  );
}
