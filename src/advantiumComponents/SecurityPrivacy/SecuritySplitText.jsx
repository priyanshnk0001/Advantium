import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);



export default function SecuritySplitText() {
  const elRef = useRef(null);
  const SecuritysplitRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    // Split text into chars
    const Securitysplit = new SplitType(elRef.current, { types: "words, chars" });
    SecuritysplitRef.current = Securitysplit;

    gsap.set(Securitysplit.chars, { opacity: 0.2, });

    gsap.to(Securitysplit.chars, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 97%",
        end:"top 5%",
        scrub: 2,
        // markers:true
      },
    });

    return () => {
      if (SecuritysplitRef.current) {
        SecuritysplitRef.current.revert(); // cleanup split DOM
      }
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <div className="SecuritysplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 lg:px-45 md:px-22 overflow-hidden  ">
        <h1 className="Modular-Text text-start py-5 text-[50px] text-white flex items-center">Highest standards of information security.</h1>
      <div
        ref={elRef}
       style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
        className=" text-[18px] space-y-5   text-white text-start leading-snug "
      >
<h1 className="text-white/70 space-y-5">Security and privacy is essential for any organisation, especially at a time when data processing and information security are key. Implementing security measures protects both our systems and our clients' data from unauthorised access, loss or misuse. Advantium has achieved ISO 27001 certification, an international standard for information security, demonstrating that we meet the highest standards of protection and risk management.

</h1>
<h1 className="text-4xl text-white/90">Why is it important?</h1>
<h1 className="text-white/70 space-y-5">
  Many organisations struggle to keep up with increasingly stringent security and privacy regulations, such as the AVG, and do not always have the internal knowledge or resources to effectively implement the necessary measures. Advantium offers a secure solution by helping companies comply with laws and regulations while ensuring data privacy and security in developed online solutions. With our ISO 27001 certification, we guarantee compliance with the highest information security standards. We also support clients in identifying risks, implementing measures and conducting regular audits to monitor security.
<br /><br />
Quality and consistency are paramount in everything we do. Security is not just a technical issue, but an integral part of the quality we offer. Clients must be confident that their data is safe, and that as a partner we ensure the reliability and continuity of our systems. The consequences of data leaks or breaches can be far-reaching, both for an organisation's reputation and its legal and financial health. We therefore maintain the highest security standards and ensure that our systems are always up-to-date and well-monitored.


</h1>
</div>
    </div>
  );
}
