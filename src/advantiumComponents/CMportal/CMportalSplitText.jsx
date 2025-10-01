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
        <h1 className="Modular-Text text-start py-5 text-[55px] text-white flex items-center">Modular portals that grow with your organisation.</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] space-y-5   text-white text-start leading-snug "
      >
A portal is a digital environment where customers or administrators can securely access information and functionalities relevant to them. Customer portals provide users with personalised services, such as viewing invoices, tracking orders and submitting support tickets. Management portals focus on internal processes and help companies monitor workflows, optimise processes and manage customer interactions. Often, these portals are integrated with existing systems such as CRM, ERP and CMS, making all information centrally available. Thanks to a modular structure, a portal can easily grow with an organisation's digital strategy, providing a future-proof solution.</h1>
    </div>
  );
}
