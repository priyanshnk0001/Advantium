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
<h1 className="text-white/70">Connecting data and processes efficiently can be a huge step forward, this is exactly where a Data Management Platform (DMP) plays a crucial role: as a middleware solution, it not only establishes connections, but also adds smart logic and intelligence to use technology to take your business to the next level.</h1> 

 <h1 className="text-white/70">A DMP is a central hub that brings together data from different sources and applications. This could be customer data from your CRM, financial data from your ERP or product information from a PIM system. The platform ensures that these data no longer exist separately, but are integrated into one well-organised environment. But a well-designed DMP goes beyond just collecting data. It adds smart logic, giving you valuable insights with advanced analytics. As a result, data is not only managed, but actually used to optimise processes and inform strategic decisions.</h1>

<h1 className="text-white/70">In addition, the DMP acts as a data hub for front-end applications, such as mobile apps, websites and customer portals. It ensures that these applications always have up-to-date and consistent data from the back-office systems. For example, customers can directly view their order history in a self-service portal or request real-time product information in a mobile app. This link between back-end and front-end creates an optimal user experience, without the need for manual data transfer.</h1>
</div>
    </div>
  );
}
