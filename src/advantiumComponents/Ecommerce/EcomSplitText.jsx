import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function EcomSplitText() {
  const elRef = useRef(null);
  const EcomsplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const Ecomsplit = new SplitType(elRef.current, { types: "words, chars" });
    EcomsplitRef.current = Ecomsplit;

    gsap.set(Ecomsplit.chars, { opacity: 0.2, });

    gsap.to(Ecomsplit.chars, {
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
      if (EcomsplitRef.current) {
        EcomsplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="EcomsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words  px-45 overflow-hidden  ">
        <h1 className="connect-Text text-start py-5 text-[50px] text-white flex items-center">Connect your services with your customers.</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[18px] space-y-3  text-white text-start leading-snug "
      >
E-commerce is more than just selling products online — it’s the digital ecosystem that connects your services and products directly with your customers, enabling them to buy, pay, or even enter into contracts effortlessly. Whether it’s a lease agreement, energy package, or digital content, Advantium delivers tailor-made e-commerce solutions. We design platforms that meet your specific needs, ensure a seamless payment experience, and integrate flawlessly with your existing systems. From a simple webshop to a complete digital platform, we make it easy for your customers to browse, order, and pay — all in one smooth experience.</h1>
    </div>
  );
}
