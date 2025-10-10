import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function DevSecSplitText() {
  const elRef = useRef(null);
  const DevSecsplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const DevSecsplit = new SplitType(elRef.current, { types: "words, chars" });
    DevSecsplitRef.current = DevSecsplit;

    gsap.set(DevSecsplit.chars, { opacity: 0.2, });

    gsap.to(DevSecsplit.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 97%",
        end:"top 30%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (DevSecsplitRef.current) {
        DevSecsplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="DevSecsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words  lg:px-45 md:px-22 overflow-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[50px] text-white flex items-center">What is DevSecOps exactly?</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[18px] space-y-5   text-white text-start leading-snug "
      >
DevSecOps integrates security into every phase of software development — from initial design to production and maintenance. Instead of treating security as an afterthought or a final checkpoint, it becomes an integral part of the process from day one. This proactive approach ensures vulnerabilities are prevented early, keeping your software secure, stable, and ready for continuous delivery.
<br /><br />
A DevSecOps approach leverages automation to accelerate software delivery while maintaining strong security. Through automated testing, Continuous Integration (CI), and Continuous Delivery (CD), every code change is rapidly tested and deployed. Built-in security scans and checks run continuously, ensuring vulnerabilities are detected and resolved early in the process.</h1>
    </div>
  );
}
