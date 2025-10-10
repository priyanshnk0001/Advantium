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
import MobileAppSplitText from './MobileAppSplitText';
import MobileAppFlexible from './MobileAppFlexible';
import { NavLink } from 'react-router-dom';


function MobileApp() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const MobileAppTweenArrow2 = useRef(null);





    useGSAP(() => {
        const MobileApptl1 = gsap.timeline()



        MobileApptl1.from(".MobileApp1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        MobileApptl1.from(".MobileApp1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        MobileAppTweenArrow2.current = gsap.to(".MobileAppBottomButton .MobileAppArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const MobileApparrow2 = document.querySelector(".MobileAppBtn-container");
        if (!MobileApparrow2) return;

        const onEnter2 = () => MobileAppTweenArrow2.current.play();
        const onLeave2 = () => MobileAppTweenArrow2.current.reverse();

        MobileApparrow2.addEventListener("mouseenter", onEnter2);
        MobileApparrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            MobileApparrow2.removeEventListener("mouseenter", onEnter2);
            MobileApparrow2.removeEventListener("mouseleave", onLeave2);
            MobileAppTweenArrow2.current.kill();
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
    const moreMobileAppRef = useRef(null);

    // scroll function
    const scrollTomoreMobileApp = () => {
        if (!moreMobileAppRef.current) return;

        moreMobileAppRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="MobileApp-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="MobileApp-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="MobileApp1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Mobile app: software in your customer's hand. software.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Having a mobile app created means making your user goal both digital and portable. Whether you are having an app built for your customers or want to have a business app developed for internal processes, we go through a structured process with you from idea to final product.</h1>
                            <div className="MobileAppBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="MobileAppBtn-container ">
                                        <button className="MobileAppButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                        <button
                                            className="MobileAppArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                                <button onClick={scrollTomoreMobileApp} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info on mobile apps</button>
                            </div>
                        </div>
                        <div className="MobileApp1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic31.webp" alt="" />
                        </div>
                    </div>



                    <div className="MobileApp-container2" ref={moreMobileAppRef}>
                        <MobileAppSplitText />
                    </div>

                    <div className="MobileApp-text-container text-white !flex !flex-col w-[100%] gap-10 pt-20 ">
                        <h1 className="lg:text-center md:text-start text-8xl px-45  ">From idea to successful app.</h1>
                        <div className="MobileAppFlexible-container  ">
                            <MobileAppFlexible />
                        </div>
                    </div>

                    <div className="bigImg w-[100%] h-[100vh] flex justify-center items-center mt-[-100px]"><img className='w-[95%] h-[95vh] rounded-xl ' src="pic32.webp" alt="" /></div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default MobileApp
