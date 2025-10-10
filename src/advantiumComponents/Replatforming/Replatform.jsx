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
import ReplatformSplitText from './ReplatformSplitText';
import ReplatformFlexible from './ReplatformFlexible';
import { NavLink } from 'react-router-dom';



function Replatform() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const ReplatformTweenArrow2 = useRef(null);
    const ReplatformTweenArrow3 = useRef(null);
    const ReplatformTweenArrow4 = useRef(null);




    useGSAP(() => {
        const retl1 = gsap.timeline()
        const retl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".replatform-container3"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top 18%",
                // markers: true

            }
        })


        retl1.from(".replatform1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        retl1.from(".replatform1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        retl2.from(".replatform3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        retl2.from(".replatform3-child2 > *", {
            x: 760,
            duration:0.8
        }, "okk")


      
    })



    useGSAP(() => {
        ReplatformTweenArrow2.current = gsap.to(".ReplatformBottomButton .ReplatformArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Replatformarrow2 = document.querySelector(".ReplatformBtn-container");
        if (!Replatformarrow2) return;

        const onEnter2 = () => ReplatformTweenArrow2.current.play();
        const onLeave2 = () => ReplatformTweenArrow2.current.reverse();

        Replatformarrow2.addEventListener("mouseenter", onEnter2);
        Replatformarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Replatformarrow2.removeEventListener("mouseenter", onEnter2);
            Replatformarrow2.removeEventListener("mouseleave", onLeave2);
            ReplatformTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        ReplatformTweenArrow3.current = gsap.to(".ReplatformBottomButton2 .ReplatformArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Replatformarrow3 = document.querySelector(".ReplatformBtn-container2");
        if (!Replatformarrow3) return;

        const onEnter2 = () => ReplatformTweenArrow3.current.play();
        const onLeave2 = () => ReplatformTweenArrow3.current.reverse();

        Replatformarrow3.addEventListener("mouseenter", onEnter2);
        Replatformarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Replatformarrow3.removeEventListener("mouseenter", onEnter2);
            Replatformarrow3.removeEventListener("mouseleave", onLeave2);
            ReplatformTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        ReplatformTweenArrow4.current = gsap.to(".ReplatformBottomButton4 .ReplatformArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Replatformarrow4 = document.querySelector(".ReplatformBtn-container4");
        if (!Replatformarrow4) return;

        const onEnter2 = () => ReplatformTweenArrow4.current.play();
        const onLeave2 = () => ReplatformTweenArrow4.current.reverse();

        Replatformarrow4.addEventListener("mouseenter", onEnter2);
        Replatformarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Replatformarrow4.removeEventListener("mouseenter", onEnter2);
            Replatformarrow4.removeEventListener("mouseleave", onLeave2);
            ReplatformTweenArrow4.current.kill();
        };
    }, []);


     window.addEventListener('load', () => window.scrollTo(0, 0));
               const moreReplatformRef = useRef(null);
            
              // scroll function
              const scrollTomoreReplatform = () => {
                if (!moreReplatformRef.current) return;
            
                moreReplatformRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="replatform-main-container !w-[100%]      flex flex-col justify-center items-center  text-start  ">
                    <div className="replatform-container1 w-[100%] mt-50  flex justify-around">
                        <div className="replatform1-child1 w-[45%] flex flex-col justify-center gap-7">
                            <h1 className='text-white lg:text-[60px] md:text-[50px]  leading-tight '>Replatforming: ready for the future.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Replatforming offers companies the opportunity to rebuild their e-commerce platforms and digital environments with advanced technologies. This process enables a digital transformation that ensures not only better performance, security and scalability, but also future growth.</h1>
                            <div className="ReplatformBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="ReplatformBtn-container ">
                                    <button className="ReplatformButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="ReplatformArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreReplatform} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden lg:block">More info</button>
                            </div>
                        </div>
                        <div className="replatform1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic22.webp" alt="" />
                            <h1 className=' text-cyan-200  [text-shadow:_2px_2px_0_#fff] text-5xl font-bold absolute top-50 left-40 rotate-z-9 hidden '>Advantium</h1>
                        </div>
                    </div>



                    <div ref={moreReplatformRef} className="replatform-container2">
                        <ReplatformSplitText />
                    </div>
                   <div className="str-container2">
                        <h1 className=" text-white mt-30 text-8xl px-45 ">Guidance in replatforming</h1>

                        <ReplatformFlexible />
                    </div>






                    <div className="replatform-container3 w-[100%] mb-20 lg:mt-0 md:mt-[-300px]  flex justify-around items-center">
                        <div className="replatform3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Start your replatforming journey today.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Replatforming is not only a technical decision, but also a strategic move that affects the entire organisation. By investing in a new platform, you can not only improve your digital processes, but also optimise the customer experience and make your operations more efficient. Every organisation is unique, which is why tailor-made solutions are offered that meet technology needs and contribute to broader business goals. Whether you are a growing e-commerce company or looking to modernise your digital infrastructure for future innovation, we will help you successfully achieve this transformation, with minimal disruption and maximum benefits.</h1>
                            <div className="ReplatformBottomButton2 flex  items-center mt-5 z-0    ">
                                 <NavLink to="/RequestForm">
                                <div className="ReplatformBtn-container2 ">
                                    <button className="ReplatformButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="ReplatformArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="replatform3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic21.webp" alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Replatform
