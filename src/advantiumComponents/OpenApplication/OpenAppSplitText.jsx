import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function DesignSplitText() {
    const elRef = useRef(null);
    const DesignsplitRef = useRef(null);

    useEffect(() => {

        
        if (!elRef.current) return;

        // Split text into chars
        const Designsplit = new SplitType(elRef.current, { types: "words, chars" });
        DesignsplitRef.current = Designsplit;

        

        gsap.set(Designsplit.chars, { opacity: 0.2, });

        gsap.to(Designsplit.chars, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 95%",
                end: "top -90%",
                scrub: 2,
                // markers:true
            },
        });

        return () => {
            if (DesignsplitRef.current) {
                DesignsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="DesignsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="Design-Text text-start py-5 text-[50px] text-white flex items-center">Leading the way together.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-5    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">The digital world is changing constantly and ever faster. For us, this is an opportunity to lead the way. Will you join us? Our team consists of experts who combine in-depth knowledge with practical innovativeness, and know exactly what is needed to help organisations move forward. We are resourceful, down-to-earth, accessible, optimistic, committed and sometimes a bit stubborn. Collaboration is paramount; delivering great products together, celebrating successes together, having adventures together and having fun together. It is not only technology that connects us, we also value a personal approach, sincere attention and social contact.</h1>

               <div >
                 <h1 className="text-[40px] text-white">Your contribution to Advantium.</h1>

                
                    <h1 className="text-white/80 space-y-5"><span className="text-white font-semibold">Be inquisitive:</span> You are eager to learn and always looking for ways to develop yourself and others.</h1>
                    <h1 className="text-white/80 space-y-5"><span className="text-white font-semibold">Learn by doing:</span> You like to get to grips with things and are not afraid to take on new challenges.</h1>
                    <h1 className="text-white/80 space-y-5"><span className="text-white font-semibold">Make others successful:</span> Collaboration and knowledge sharing come naturally to you.</h1>
                    <h1 className="text-white/80 space-y-5"><span className="text-white font-semibold">Take responsibility: </span> You feel committed and always strive for the best result.</h1>
               
               </div>


               <div>
                 <h1 className="text-[40px] text-white">In addition, we think it's important that you:</h1>

                
                    <h1 className="text-white/80 space-y-5">Have an HBO working and thinking level.</h1>
                    <h1 className="text-white/80 space-y-5">Are available for a minimum of 32 hours per week.</h1>
                    <h1 className="text-white/80 space-y-5">Preferably have experience at an agency or software party.</h1>
                    <h1 className="text-white/80 space-y-5">Bring a positive attitude and hands-on mentality.</h1>
                    <h1 className="text-white/80 space-y-5">We strive for excellence in information security, which is why we are looking for colleagues who are competent in following and maintaining our ISO 27001 standards. Should you not yet have this knowledge. no problem, we will be happy to teach you all about it.</h1>
               
               </div>

               <div>
                 <h1 className="text-[40px] text-white">Why choose Advantium?</h1>

                
                    <h1 className="text-white/80 space-y-5">Working at Advantium means being part of an inspiring and dynamic environment where your growth and enjoyment are paramount. We continuously invest in your personal development, with learning-on-the-job and plenty of training opportunities. Thanks to flexible working hours and the option to work from home, you can adapt your work to your life. You get good employment conditions, such as a suitable salary, 8% holiday allowance, a pension provision via Bright Pension (5% extra gross pay), 25 holidays and even 2 days off. Our modern office in the heart of Oldenzaal offers a fully equipped workplace with sit-stand desk, a delicious lunch at the bar every day and access to a professional gym. And of course there is plenty of room for sociability, with Friday afternoon drinks, fun team outings and the legendary Advantium weekend.</h1>
                    
               
               </div>



               

            </div>
        </div>
    );
}

