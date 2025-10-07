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
        <h1 className="Modular-Text text-start py-5 text-[55px] text-white flex items-center">Why AI is indispensable</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] space-y-5   text-white/70 text-start leading-snug "
      >
AI is everywhere today — you may already be using it or exploring how to put it to work. Artificial Intelligence empowers systems to become smarter and more efficient by learning from data, recognizing patterns, and making informed decisions or predictions. Beyond automating repetitive tasks, AI uncovers valuable insights — revealing trends in customer behavior and identifying areas for process improvement.
<br /><br />
Many organizations struggle with challenges like managing data across multiple systems, building actionable AI models, and integrating AI effectively into existing workflows. With data often scattered across different sources, gaining clear insights and real value becomes difficult — and that’s where AI makes the difference.
<br /><br />
By applying AI intelligently, you can make processes both more efficient and more personalized. Imagine customer interactions that adapt perfectly to individual preferences, or systems that identify opportunities and issues before you even notice them. It’s a powerful, practical way to future-proof operations, create value, and unlock the full potential of your data.</h1>
    </div>
  );
}
