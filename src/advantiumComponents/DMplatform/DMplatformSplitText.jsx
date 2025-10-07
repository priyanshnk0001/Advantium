import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);




export default function DMplatformSplitText() {
  const elRef = useRef(null);
  const DMsplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const DMsplit = new SplitType(elRef.current, { types: "words, chars" });
    DMsplitRef.current = DMsplit;

    gsap.set(DMsplit.chars, { opacity: 0.2, });

    gsap.to(DMsplit.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 95%",
        end:"top 20%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (DMsplitRef.current) {
        DMsplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="DMsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[55px] text-white flex items-center">What is a Data Management Platform?</h1>
      <div
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] font-semi-bold   text-white text-start leading-loose flex flex-col gap-5 "
      >
<h1 className="text-white/70">Efficiently connecting data and processes can be a major step forward — and that’s exactly where a Data Management Platform (DMP) makes the difference. As a powerful middleware solution, it not only links systems seamlessly but also adds smart logic and intelligence, helping you leverage technology to take your business to the next level.</h1> 

 <h1 className="text-white/70">A Data Management Platform (DMP) serves as a central hub that unites data from multiple sources and applications — from customer details in your CRM and financial records in your ERP to product information in your PIM system. It ensures all this data is seamlessly integrated into one organized environment. But a well-designed DMP goes further than data collection — it adds intelligent logic and advanced analytics, turning raw information into actionable insights. This means your data doesn’t just sit in systems; it actively drives process optimization and smarter strategic decisions.</h1>

<h1 className="text-white/70">In addition, the Data Management Platform (DMP) functions as a central data hub for front-end applications like mobile apps, websites, and customer portals. It ensures these applications always have access to accurate, real-time data from back-office systems. For instance, customers can view their order history in a self-service portal or access up-to-date product details through a mobile app. This seamless connection between back-end and front-end delivers an optimal user experience — without the need for manual data transfers.</h1>
</div>
    </div>
  );
}
