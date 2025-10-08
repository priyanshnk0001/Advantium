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
import StrategyFlexible from './StrategyFlexible';
import { NavLink } from 'react-router-dom';



function Strategy() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const StrategyTweenArrow2 = useRef(null);
    const StrategyTweenArrow3 = useRef(null);
    const StrategyTweenArrow4 = useRef(null);




    useGSAP(() => {
        const strtl1 = gsap.timeline()
        const strtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".str-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        strtl1.from(".str1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        strtl1.from(".str1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        strtl2.from(".str3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        strtl2.from(".str3-child2 > *", {
            x: 760
        }, "okk")


        strtl2.from(".str4-child1 > *", {
            x: -760
        }, "okkk")

        strtl2.from(".str4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        StrategyTweenArrow2.current = gsap.to(".StrategyBottomButton .StrategyArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Strategyarrow2 = document.querySelector(".StrategyBtn-container");
        if (!Strategyarrow2) return;

        const onEnter2 = () => StrategyTweenArrow2.current.play();
        const onLeave2 = () => StrategyTweenArrow2.current.reverse();

        Strategyarrow2.addEventListener("mouseenter", onEnter2);
        Strategyarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Strategyarrow2.removeEventListener("mouseenter", onEnter2);
            Strategyarrow2.removeEventListener("mouseleave", onLeave2);
            StrategyTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        StrategyTweenArrow3.current = gsap.to(".StrategyBottomButton2 .StrategyArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Strategyarrow3 = document.querySelector(".StrategyBtn-container2");
        if (!Strategyarrow3) return;

        const onEnter2 = () => StrategyTweenArrow3.current.play();
        const onLeave2 = () => StrategyTweenArrow3.current.reverse();

        Strategyarrow3.addEventListener("mouseenter", onEnter2);
        Strategyarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Strategyarrow3.removeEventListener("mouseenter", onEnter2);
            Strategyarrow3.removeEventListener("mouseleave", onLeave2);
            StrategyTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        StrategyTweenArrow4.current = gsap.to(".StrategyBottomButton4 .StrategyArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Strategyarrow4 = document.querySelector(".StrategyBtn-container4");
        if (!Strategyarrow4) return;

        const onEnter2 = () => StrategyTweenArrow4.current.play();
        const onLeave2 = () => StrategyTweenArrow4.current.reverse();

        Strategyarrow4.addEventListener("mouseenter", onEnter2);
        Strategyarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Strategyarrow4.removeEventListener("mouseenter", onEnter2);
            Strategyarrow4.removeEventListener("mouseleave", onLeave2);
            StrategyTweenArrow4.current.kill();
        };
    }, []);




    window.addEventListener('load', () => window.scrollTo(0, 0));
       const moreStrategyRef = useRef(null);
    
      // scroll function
      const scrollTomoreStrategy = () => {
        if (!moreStrategyRef.current) return;
    
        moreStrategyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="str-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="str-container1 w-[100%] mt-50  flex justify-around">
                        <div className="str1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Strategy & advice for your digital transformation</h1>
                            <h1 className='text-gray-300 text-xl '>Digital transformation enables companies to optimise processes, improve the customer experience and innovate to stay competitive. A digital strategy is the starting point for success. Your organisation's vision, combined with our no-nonsense mentality and technological know-how, will make your strategy executable, result-oriented and ready to grow with the future.</h1>
                            <div className="StrategyBottomButton flex  items-center  z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="StrategyBtn-container ">
                                    <button className="StrategyButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="StrategyArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreStrategy}  className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info </button>
                            </div>
                        </div>
                        <div className="str1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden   ">
                            <img className='h-[580px] rounded-2xl' src="pic07.webp" alt="" />
                        </div>
                    </div>



                    <div className="str-container2" ref={moreStrategyRef}>
                        <h1 className=" text-white mt-30 text-8xl px-45 ">Your ideal digital strategies.</h1>

                        <StrategyFlexible />
                    </div>



                    <div className="str-container3 w-[100%] mb-20  flex justify-around items-center">
                        <div className="str3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Your digital roadmap in sprint 0</h1>
                            <h1 className='text-gray-300 text-[18px] '>Good preparation is half the battle; with the right knowledge, the best choices can be made. Using Sprint 0, we will discover how your business works, what makes it distinctive and where the needs lie. The essence of your issue is made concrete and we then translate this into the perfect digital strategy.</h1>
                            {/* <div className="StrategyBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="StrategyBtn-container2 ">
                                    <button className="StrategyButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Learn more about Sprint 0</button>
                                    <button
                                        className="StrategyArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        <div className="str3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic12.webp" alt="" />
                        </div>
                    </div>



                    <div className="str-container4 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="str4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic13.webp" alt="" />
                        </div>
                        <div className="str4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>A targeted conversion strategy</h1>
                            <h1 className='text-gray-300 text-[18px] '>It all starts with a good picture of your target audience: who are they, what do they need and how can you best reach them? By clearly establishing this, we devise ways to attract and convince them digitally. With clever routes, touchpoints and triggers, we ensure that your target group gets exactly what they are looking for, and you get the results you want.</h1>
                            {/* <div className="StrategyBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="StrategyBtn-container4 ">
                                    <button className="StrategyButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More on conversion strategy</button>
                                    <button
                                        className="StrategyArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Strategy
