import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from '../OppositeScroll';
import Footer from '../Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';
import CodeSplitText from './CodeSplitText';
import CodeFlexible from './CodeFlexible';
import { NavLink } from 'react-router-dom';



function Code() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const CodeTweenArrow2 = useRef(null);





    useGSAP(() => {
        const Codetl1 = gsap.timeline()



        Codetl1.from(".Code1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        Codetl1.from(".Code1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        CodeTweenArrow2.current = gsap.to(".CodeBottomButton .CodeArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Codearrow2 = document.querySelector(".CodeBtn-container");
        if (!Codearrow2) return;

        const onEnter2 = () => CodeTweenArrow2.current.play();
        const onLeave2 = () => CodeTweenArrow2.current.reverse();

        Codearrow2.addEventListener("mouseenter", onEnter2);
        Codearrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Codearrow2.removeEventListener("mouseenter", onEnter2);
            Codearrow2.removeEventListener("mouseleave", onLeave2);
            CodeTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        gsap.from(".bigImg img", {
            scale: 0.5,
            scrollTrigger: {
                trigger: (".bigImg"),
                scroller: "body",
                scrub: 2,
                start: "top 110%",
                end: "top 13%",
                // markers:true
            }

        })
    })

window.addEventListener('load', () => window.scrollTo(0, 0));
   const moreCodeRef = useRef(null);

  // scroll function
  const scrollTomoreCode = () => {
    if (!moreCodeRef.current) return;

    moreCodeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



    return (
        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="contact-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }}
            >


                <Header />

                <div className="Code-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Code-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="Code1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[55px]  leading-tight '>Comprehensive Code Review & Seamless Software Integration</h1>
                            <h1 className='text-gray-300 text-[18px] '>In today’s rapidly evolving tech landscape, maintaining clean, efficient, and secure code is vital for business success. At Advantium, we ensure your software stays reliable and scalable through in-depth code reviews and smooth adoption of existing systems. Whether it’s legacy software or custom-built solutions, our experts optimize your codebase for performance, security, and long-term sustainability.</h1>
                            <div className="CodeBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="CodeBtn-container ">
                                        <button className="CodeButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Request a code review</button>
                                        <button
                                            className="CodeArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                                <button onClick={scrollTomoreCode} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info about code reviewing</button>
                            </div>
                        </div>
                        <div className="Code1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic11.webp" alt="" />
                        </div>
                    </div>



                    <div className="Code-container2" ref={moreCodeRef}>
                        <CodeSplitText />
                    </div>

                    <div className="code-text-container text-white !flex !flex-col w-[100%] gap-10 ">
                        <h1 className="text-center text-9xl px-45 ">How can Advantium help?</h1>
                        <div className="CodeFlexible-container">
                            <CodeFlexible />
                        </div>
                    </div>

                    <div className="bigImg w-[100%] h-[100vh] flex justify-center items-center mt-[-100px]"><img className='w-[95%] h-[95vh] rounded-xl ' src="pic04.webp" alt="" /></div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Code
