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
    <div className="DevSecsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[55px] text-white flex items-center">What is DevSecOps exactly?</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] space-y-5   text-white text-start leading-snug "
      >
DevSecOps integrates security into every stage of software development. This starts at software design and continues through production and maintenance. Instead of security being a step added later in the process (e.g. at product launch), it becomes part of development from the outset. This ensures that security measures are applied proactively, rather than reactively after an attack or vulnerability.
<br /><br />
A DevSecOps approach uses automation to increase the speed of software delivery while ensuring a high level of security. Automated testing, continuous integration (CI) and continuous delivery (CD) are deployed to quickly test and immediately deploy any change in code, while security checks and scanning are always in place to identify vulnerabilities in a timely manner.</h1>
    </div>
  );
}
