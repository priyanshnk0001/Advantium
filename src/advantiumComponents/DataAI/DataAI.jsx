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
import DataAISplitText from './DataAISplitText';
import DataAIFlexible from './DataAIFlexible';
import { NavLink } from 'react-router-dom';


function DataAI() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DataAITweenArrow2 = useRef(null);
    const DataAITweenArrow3 = useRef(null);
    const DataAITweenArrow4 = useRef(null);




    useGSAP(() => {
        const datatl1 = gsap.timeline()
        const datatl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".data-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        datatl1.from(".data1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        datatl1.from(".data1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        datatl2.from(".data3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        datatl2.from(".data3-child2 > *", {
            x: 760
        }, "okk")


        datatl2.from(".data4-child1 > *", {
            x: -760
        }, "okkk")

        datatl2.from(".data4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        DataAITweenArrow2.current = gsap.to(".DataAIBottomButton .DataAIArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DataAIarrow2 = document.querySelector(".DataAIBtn-container");
        if (!DataAIarrow2) return;

        const onEnter2 = () => DataAITweenArrow2.current.play();
        const onLeave2 = () => DataAITweenArrow2.current.reverse();

        DataAIarrow2.addEventListener("mouseenter", onEnter2);
        DataAIarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            DataAIarrow2.removeEventListener("mouseenter", onEnter2);
            DataAIarrow2.removeEventListener("mouseleave", onLeave2);
            DataAITweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        DataAITweenArrow3.current = gsap.to(".DataAIBottomButton2 .DataAIArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DataAIarrow3 = document.querySelector(".DataAIBtn-container2");
        if (!DataAIarrow3) return;

        const onEnter2 = () => DataAITweenArrow3.current.play();
        const onLeave2 = () => DataAITweenArrow3.current.reverse();

        DataAIarrow3.addEventListener("mouseenter", onEnter2);
        DataAIarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            DataAIarrow3.removeEventListener("mouseenter", onEnter2);
            DataAIarrow3.removeEventListener("mouseleave", onLeave2);
            DataAITweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        DataAITweenArrow4.current = gsap.to(".DataAIBottomButton4 .DataAIArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DataAIarrow4 = document.querySelector(".DataAIBtn-container4");
        if (!DataAIarrow4) return;

        const onEnter2 = () => DataAITweenArrow4.current.play();
        const onLeave2 = () => DataAITweenArrow4.current.reverse();

        DataAIarrow4.addEventListener("mouseenter", onEnter2);
        DataAIarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            DataAIarrow4.removeEventListener("mouseenter", onEnter2);
            DataAIarrow4.removeEventListener("mouseleave", onLeave2);
            DataAITweenArrow4.current.kill();
        };
    }, []);


        window.addEventListener('load', () => window.scrollTo(0, 0));
           const moreDataAiRef = useRef(null);
        
          // scroll function
          const scrollTomoreDataAi = () => {
            if (!moreDataAiRef.current) return;
        
            moreDataAiRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="data-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="data-container1 w-[100%] mt-50  flex justify-around">
                        <div className="data1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>The smart future for your organization.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Curious how Artificial Intelligence (AI) can help your organization work smarter and make better decisions? With our expertise in data management, machine learning, and automation, we prepare your business for the challenges of tomorrow.</h1>
                            <div className="DataAIBottomButton flex  items-center mt-5 z-0    ">

                                <NavLink to="/RequestForm">
                                <div className="DataAIBtn-container ">
                                    <button className="DataAIButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DataAIArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreDataAi}  className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden lg:block">More info</button>
                            </div>
                        </div>
                        <div className="data1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic18.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreDataAiRef} className="data-container2">
                        <DataAISplitText />
                    </div>
                   <div className="str-container2 w-[100%]">
                        <h1 className=" text-white mt-30 text-8xl lg:px-45 md:px-22 ">Creating business opportunities with AI.</h1>

                        <DataAIFlexible />
                    </div>






                    <div className="data-container3 w-[100%] mb-20 lg:mt-0 md:mt-[-300px]  flex justify-around items-center">
                        <div className="data3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Where to start with AI?</h1>
                            <h1 className='text-gray-300 text-[18px] '>Want to get started with AI but not sure where to begin? From building a Data Management Platform to integrating AI models into your workflows, Advantium provides complete support for a seamless transition to AI. We collaborate with your team to gather data, develop models, and implement them effectively. This not only enables smarter predictions but also ensures your products and services align better with customer needs. With flexible, scalable AI solutions, we help your organization stay agile and ready for future market and technological shifts.</h1>
                            <div className="DataAIBottomButton2 flex  items-center mt-5 z-0    ">

                                <NavLink to="/RequestForm">
                                <div className="DataAIBtn-container2 ">
                                    <button className="DataAIButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="DataAIArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="data3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic19.webp" alt="" />
                        </div>
                    </div>



                    <div className="data-container4 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="data4-child1 w-[45%] h-[700px]  flex flex-col justify-center rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic20.webp" alt="" />
                        </div>
                        <div className="data4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Better software with Gitlab Duo</h1>
                            <h1 className='text-gray-300 text-[18px] '>By leveraging AI tools like GitLab Duo, we enhance both the quality and security of our software. This accelerates development while ensuring greater protection. At Advantium, we use this technology to optimize your processes and refine our own tools. With GitLab Duo, we identify and fix issues faster, delivering robust, high-standard solutions. Discover how Advantium uses AI in GitLab Duo to elevate software security and quality to the next level.</h1>
                            <div className="DataAIBottomButton4 flex  items-center mt-5 z-0    ">
                                {/* <div className="DataAIBtn-container4 ">
                                    <button className="DataAIButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Read the case</button>
                                    <button
                                        className="DataAIArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default DataAI
