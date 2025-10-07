import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from '../OppositeScroll';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';
import OpenAppSplitText from './OpenAppSplitText';


function OpenApp() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const OpenAppTweenArrow2 = useRef(null);





    useGSAP(() => {
        const OpenApptl1 = gsap.timeline()



        OpenApptl1.from(".OpenAppHeading-container > *", {
            x: "-120%",
            stagger: 0.3,  
        })
        OpenApptl1.from(".OpenAppBtn-container", {
            y: 200, 
        }, "-=0.2")
        OpenApptl1.from(".OpenAppArrowButton2", {
            x: -100, 
            opacity:0,
            scale:0
        })

        


    })



    useGSAP(() => {
        OpenAppTweenArrow2.current = gsap.to(".OpenAppBottomButton .OpenAppArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const OpenApparrow2 = document.querySelector(".OpenAppBtn-container");
        if (!OpenApparrow2) return;

        const onEnter2 = () => OpenAppTweenArrow2.current.play();
        const onLeave2 = () => OpenAppTweenArrow2.current.reverse();

        OpenApparrow2.addEventListener("mouseenter", onEnter2);
        OpenApparrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            OpenApparrow2.removeEventListener("mouseenter", onEnter2);
            OpenApparrow2.removeEventListener("mouseleave", onLeave2);
            OpenAppTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {

        gsap.from(".OpenAppCard", {
            y: 600,
            stagger: 0.2,
            scrollTrigger: {
                trigger: (".OpenAppCard-container"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 18%",
                // markers:true
            }

        })

        


    })




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

                <div className="OpenApp-main-container w-[100%] pt-60     flex flex-col justify-center items-center  text-start ">

                    <div className="OpenAppHeading-container text-white flex flex-col gap-10 px-[84px]">
                        <h1 className='text-9xl '>Open application (dutch speaking)</h1>
                        <h1 className='text-white/60 text-xl leading-8'>Haven't seen a suitable vacancy but curious about the possibilities? Send us an open application! At Advantium, we are always looking for new colleagues. Whether you are an experienced professional or an emerging digital talent, we would love to hear why you are the perfect addition to our team. Perhaps we will soon be sitting down together at our beautiful office in the heart of Oldenzaal for an introduction and a tour.
                        </h1>

                        <div className='w-[100%] flex justify-between'>
                            <div className='flex w-fit gap-5'>
                                <img className='w-30 rounded-full' src="pic03.webp" alt="" />
                                <div className='flex flex-col gap-2 justify-center  '>
                                    <h1>name</h1>
                                    <h1>designation</h1>
                                </div>
                            </div>
                            <div className="OpenAppBottomButton flex  items-center overflow-hidden px-20 mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="OpenAppBtn-container ">

                                        <button className="OpenAppButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Apply now</button>
                                        <button
                                            className="OpenAppArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-8 !h-8" />
                                        </button>
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                    </div>






                    <div className="OpenApp-container2">
                        <OpenAppSplitText />
                    </div>

                    <div className="OpenApp-container3 text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="text-center text-8xl  ">From us, for you.</h1>
                        <div className="OpenAppCard-container w-[100%] grid grid-cols-3 gap-8 px-[84px] ">
                            <div className="OpenAppCard   text-white  rounded-xl ">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Office equipment </h1>
                                    <h1 className='text-white/70 leading-loose'>We provide everything you need to work optimally, from your own MacBook Pro to a comfortable chair and an adjustable desk with extra screens. Or would you rather cycle while working? At Advantium, it's all possible. </h1>
                                </div>
                            </div>

                            <div className="OpenAppCard   text-white  rounded-xl ">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Flexible working</h1>
                                    <h1 className='text-white/70 leading-loose'>Enjoy flexible working hours and an extra half-hour paid break. Would you like to start earlier, or sleep in? Or do you like to work from home one day? No problem! </h1>
                                </div>
                            </div>

                            <div className="OpenAppCard   text-white  rounded-xl">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Mental health days</h1>
                                    <h1 className='text-white/70 leading-loose'>Everyone has a down day from time to time. At Advantium, in addition to your holidays, you get two down days a year to take a break and focus on what re-energises you.</h1>
                                </div>
                            </div>
                            <div className="OpenAppCard   text-white  rounded-xl">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Extensive lunch</h1>
                                    <h1 className='text-white/70 leading-loose'>Together with colleagues, you will enjoy a healthy and catered lunch at our bar, completely tailored to your dietary needs.</h1>
                                </div>
                            </div>
                            <div className="OpenAppCard   text-white  rounded-xl">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Advantium x Vitality</h1>
                                    <h1 className='text-white/70 leading-loose'>Your vitality is important to us. Take part in weekly bootcamps, lunch walks, ping-pong battles, join paddle tennis or exercise in our own Advantium gym.</h1>
                                </div>
                            </div>
                            <div className="OpenAppCard   text-white  rounded-xl">
                                <div className="cardInnerDiv  py-10 flex flex-col gap-8  ">
                                    <h1 className='text-4xl'>Having fun together</h1>
                                    <h1 className='text-white/70 leading-loose'>
                                        Weekly Friday afternoon drinks, fun outings, game nights, and more. And, of course, the annual legendary Advantium weekend.</h1>
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

export default OpenApp
