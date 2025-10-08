import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function CMportalSplitText() {
  const elRef = useRef(null);
  const CMsplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const CMsplit = new SplitType(elRef.current, { types: "words, chars" });
    CMsplitRef.current = CMsplit;

    gsap.set(CMsplit.chars, { opacity: 0.2, });

    gsap.to(CMsplit.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 99%",
        end:"top 35%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (CMsplitRef.current) {
        CMsplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="CMsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[50px] text-white flex items-center">Modular portals that scale with your organization.</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[18px] space-y-5   text-white/80 text-start leading-snug "
      >
A portal is a secure digital environment where customers or administrators can access information and functionalities tailored to their needs. Customer portals offer personalized services like viewing invoices, tracking orders, and submitting support requests. Management portals streamline internal workflows, optimize processes, and enhance customer interaction management. Integrated with systems such as CRM, ERP, and CMS, they centralize data for efficiency. With a modular architecture, portals evolve alongside your organization’s digital strategy, delivering a scalable and future-proof solution.</h1>
    </div>
  );
}
