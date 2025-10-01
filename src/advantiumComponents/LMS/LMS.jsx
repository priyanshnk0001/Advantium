import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LMSSplitText from './LMSSplitText';
import LMSFlexible from './LMSFlexible';
import Header from '../Header';
import Footer from '../Footer';




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function LMS() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const LMSTweenArrow = useRef(null);
    const LMSTweenArrow2 = useRef(null);
    const LMSTweenArrow3 = useRef(null);
    const LMSTweenArrow4 = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        // tl.from(".LMS-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

        tl.from(".LMS-headingText , .LMS-SubHeadingText", {
            x: "-100%",
            stagger: 0.4,
            duration: 0.8
        })

        tl.from(".LMSJobOpeningBtn-cont", {
            x: "-130%"
        }, "-=0.5")
        tl.from(".LMS-nextArrowButton2", {
            x: -70,
            scale: 0
        })
    })


    useGSAP(() => {
        LMSTweenArrow2.current = gsap.to(".LMSJobOpeningBtn-cont .LMS-nextArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow2 = document.querySelector(".LMSJobOpeningBtn-cont");
        if (!arrow2) return;

        const onEnter2 = () => LMSTweenArrow2.current.play();
        const onLeave2 = () => LMSTweenArrow2.current.reverse();

        arrow2.addEventListener("mouseenter", onEnter2);
        arrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            arrow2.removeEventListener("mouseenter", onEnter2);
            arrow2.removeEventListener("mouseleave", onLeave2);
            LMSTweenArrow2.current.kill();
        };
    })



    useGSAP(() => {
        const lmstl = gsap.timeline({
            scrollTrigger: {
                trigger: (".LMS-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        lmstl.from(".LMS3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        lmstl.from(".LMS3-child2 > *", {
            x: 760
        }, "okk")


        lmstl.from(".LMS4-child1 > *", {
            x: -760
        }, "okkk")

        lmstl.from(".LMS4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })






    useGSAP(() => {
        LMSTweenArrow3.current = gsap.to(".LMSBottomButton2 .LMSArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const LMSarrow3 = document.querySelector(".LMSBtn-container2");
        if (!LMSarrow3) return;

        const onEnter2 = () => LMSTweenArrow3.current.play();
        const onLeave2 = () => LMSTweenArrow3.current.reverse();

        LMSarrow3.addEventListener("mouseenter", onEnter2);
        LMSarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            LMSarrow3.removeEventListener("mouseenter", onEnter2);
            LMSarrow3.removeEventListener("mouseleave", onLeave2);
            LMSTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        LMSTweenArrow4.current = gsap.to(".LMSBottomButton4 .LMSArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const LMSarrow4 = document.querySelector(".LMSBtn-container4");
        if (!LMSarrow4) return;

        const onEnter2 = () => LMSTweenArrow4.current.play();
        const onLeave2 = () => LMSTweenArrow4.current.reverse();

        LMSarrow4.addEventListener("mouseenter", onEnter2);
        LMSarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            LMSarrow4.removeEventListener("mouseenter", onEnter2);
            LMSarrow4.removeEventListener("mouseleave", onLeave2);
            LMSTweenArrow4.current.kill();
        };
    }, []);








    return (

        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="LMS-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                 900px circle at ${pos.x}px ${pos.y}px,
                 rgba(56, 189, 248, 0.7),
                 transparent 80%
               ), #0f172a`,
                }}
            >


                <Header />




                <div className="LMS-ad-Content-cont w-[100%] min-h-screen   flex flex-col justify-center items-center  text-start px-[84px]   ">
                    <h1 className='LMS-headingText text-[130px] text-white font-semi-bold text-start self-start leading-none mt-[100px]'>Transform your learning with an LMS.</h1>

                    <h1 className='LMS-SubHeadingText text-xl text-white/70 font-semibold text-start self-start break-keep mt-[50px] pr-90'>A Learning Management System (LMS) is a strategic tool that helps organisations to streamline learning processes, improve internal training and increase productivity. Whether you need an LMS for the care industry or a HR LMS, we offer solutions that optimise your learning processes and increase productivity.</h1>

                    <div className="LMSJobOpeningBtn-cont  flex self-start mt-15 items-center  ">

                        <button className="LMS-jobOpeningButton  rounded-full py-4 px-7 text-[20px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                        <button
                            className="LMS-nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-8 !h-8" /></button>
                    </div>

                </div>
                <div>
                    <LMSSplitText />
                </div>


                <h1 className='text-9xl text-white font-semibold mt-50 ml-160 '>An LMS <br />that works.</h1>


                <div>
                    <LMSFlexible />
                </div>



                <div className="LMS-container3 w-[100%] mb-20  flex justify-around items-center ">
                    <div className="LMS3-child1 w-[45%] flex flex-col gap-7 ">
                        <h1 className='text-white text-[70px]  leading-tight '>Strengthen your HR strategy with a customised LMS.
                        </h1>
                        <h1 className='text-gray-300 text-xl '>In a constantly changing work environment, it is essential to effectively train, develop and onboard employees. A Learning Management platform for HR gives you the tools to streamline these processes, increase productivity and ensure consistent and relevant learning pathways for your employees.</h1>
                        <div className="LMSBottomButton2 flex  items-center mt-5 z-0    ">
                            <div className="LMSBtn-container2 ">
                                <button className="LMSButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More info</button>
                                <button
                                    className="LMSArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                    <CallMadeIcon className="!w-8 !h-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="LMS3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                        <img src="pic09.webp" alt="" />
                    </div>
                </div>



                <div className="LMS-container4 w-[100%] mb-20  flex justify-around items-center">
                    <div className="LMS4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                        <img className='scale-105' src="pic10.webp" alt="" />
                    </div>
                    <div className="LMS4-child2 w-[45%] flex flex-col gap-7">
                        <h1 className='text-white text-[70px]  leading-tight '>How Coulisse transforms knowledge sharing and customer support with an LMS</h1>
                        <h1 className='text-gray-300 text-xl '>With the implementation of the new LMS, Coulisse has taken a big step forward in improving knowledge transfer and customer support. Employees and resellers can now enrich their knowledge in a structured and efficient way, which has led to higher engagement and improved performance. Resellers benefit from the ability to customise the LMS to their own brand identity and training needs, reinforcing the consistency and quality of knowledge within their organisations.</h1>
                        <div className="LMSBottomButton4 flex  items-center mt-5 z-0    ">
                            <div className="LMSBtn-container4 ">
                                <button className="LMSButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Read the case</button>
                                <button
                                    className="LMSArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                    <CallMadeIcon className="!w-8 !h-8" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>












            </div>

            <Footer />
        </>
    );
}







