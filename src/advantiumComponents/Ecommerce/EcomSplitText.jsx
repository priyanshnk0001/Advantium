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
    <div className="EcomsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-hidden  ">
        <h1 className="connect-Text text-start py-5 text-[55px] text-white flex items-center">Connect your services with customers.</h1>
      <h1
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[20px] space-y-3  text-white text-start leading-snug "
      >
E-commerce is about more than just selling products through a web shop; it is the digital ecosystem that connects your products or services to your customers, allowing them to easily buy, pay or even enter into a contract. Whether it's a lease contract, an energy package or digital content, Advantium offers tailor-made e-commerce solutions. We have the experience to develop platforms that fit your needs and ensure a smooth payment experience, while integrating everything into your existing systems. From a website or webshop to a complete digital platform, we make it easy for your customers to order and pay.</h1>
    </div>
  );
}
