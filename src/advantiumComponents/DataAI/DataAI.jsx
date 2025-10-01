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
                    <div className="data-container1 w-[100%] mt-60  flex justify-around">
                        <div className="data1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>The smart future for your organisation</h1>
                            <h1 className='text-gray-300 text-xl '>Wondering how Artificial Intelligence (AI) can help your organisation work more efficiently and make better decisions? Our expertise in data management, machine learning and automation ensures that your organisation is ready for the challenges of tomorrow.</h1>
                            <div className="DataAIBottomButton flex  items-center mt-5 z-0    ">
                                <div className="DataAIBtn-container ">
                                    <button className="DataAIButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DataAIArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info</button>
                            </div>
                        </div>
                        <div className="data1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic18.webp" alt="" />
                        </div>
                    </div>



                    <div className="data-container2">
                        <DataAISplitText />
                    </div>
                   <div className="str-container2 w-[100%]">
                        <h1 className=" text-white mt-30 text-9xl px-45 ">Creating business opportunities with AI.</h1>

                        <DataAIFlexible />
                    </div>






                    <div className="data-container3 w-[100%] mb-20  flex justify-around items-center">
                        <div className="data3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Where to start with AI?</h1>
                            <h1 className='text-gray-300 text-xl '>Want to get started with AI, but don't know where to start? From setting up a Data Management Platform to integrating AI models into your work processes, Advantium offers full support for a successful transition to AI. We work with your team to collect data, develop models and deploy them appropriately. This way, you not only make smart predictions, but also ensure better alignment of products and services with customer needs. By creating flexible, scalable AI solutions, we can ensure that your organisation can constantly adapt to changes in the market and technological advances.</h1>
                            <div className="DataAIBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="DataAIBtn-container2 ">
                                    <button className="DataAIButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="DataAIArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="data3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic19.webp" alt="" />
                        </div>
                    </div>



                    <div className="data-container4 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="data4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic20.webp" alt="" />
                        </div>
                        <div className="data4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Better software with Gitlab Duo</h1>
                            <h1 className='text-gray-300 text-xl '>By using AI tools, such as GitLab Duo, we improve both the quality and security of our software. This not only speeds up the development process, but also makes it more secure. At Advantium, we apply this technology not only to optimise your processes, but also to improve our own tools. Thanks to GitLab Duo, we can detect and correct errors faster, resulting in robust solutions that meet the highest standards. Find out how Advantium uses AI in GitLab Duo to take software security and quality to the next level.</h1>
                            <div className="DataAIBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="DataAIBtn-container4 ">
                                    <button className="DataAIButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Read the case</button>
                                    <button
                                        className="DataAIArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
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
