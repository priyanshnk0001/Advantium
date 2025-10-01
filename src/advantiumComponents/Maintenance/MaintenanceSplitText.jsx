import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function DataAISplitText() {
  const elRef = useRef(null);
  const DataAIsplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const DataAIsplit = new SplitType(elRef.current, { types: "words, chars" });
    DataAIsplitRef.current = DataAIsplit;

    gsap.set(DataAIsplit.chars, { opacity: 0.2, });

    gsap.to(DataAIsplit.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 97%",
        end:"top 24%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (DataAIsplitRef.current) {
        DataAIsplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="DataAIsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[55px] text-white flex items-center">Guidance from A to Z with experienced project managers.</h1>
      <div
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] space-y-5   text-white/70 text-start leading-snug "
      >
Our project managers are the people who make sure everything runs smoothly. They have the overview, understand the details and ensure that communication between us and you is always clear and efficient. From the first meeting to delivery, our project managers guide the project from A to Z. They not only have an eye for the big picture, but also for the small details that often make the difference. So you can always be sure that everything goes according to plan and that your end result meets your expectations.</div>
    </div>
  );
}
