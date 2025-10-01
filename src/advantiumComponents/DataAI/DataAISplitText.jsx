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
AI is everywhere these days. Perhaps you already work with it and see its potential, or you are still looking for ways to deploy it. Artificial Intelligence (AI) is all about technology that makes systems smarter and more efficient. It can learn from data, recognise patterns and make decisions or predictions based on them. As a result, AI offers more than just automation of repetitive tasks. It also helps uncover hidden insights, such as what trends are at play in customer behaviour or which processes need more attention.
<br /><br />
Many organisations face challenges such as managing data from different systems, developing actionable AI models, and effectively integrating AI into existing processes. Data is often spread across multiple sources, making it difficult to keep an overview and actually extract value from it. This is where AI comes into play.
<br /><br />
By applying AI intelligently, you can make processes more efficient as well as more personal. Think of customer interactions that respond perfectly to someone's preferences, or systems that proactively spot opportunities and problems before you notice them yourself. It is a powerful and practical way to future-proof work, create value and get the most out of your data.</h1>
    </div>
  );
}
