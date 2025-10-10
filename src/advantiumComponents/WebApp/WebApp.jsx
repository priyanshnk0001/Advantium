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
import WebAppSplitText from './WebAppSplitText';
import WebAppFlexible from './WebAppFlexible';
import { NavLink } from 'react-router-dom';


function WebApp() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const WebAppTweenArrow2 = useRef(null);





    useGSAP(() => {
        const WebApptl1 = gsap.timeline()



        WebApptl1.from(".WebApp1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        WebApptl1.from(".WebApp1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        WebAppTweenArrow2.current = gsap.to(".WebAppBottomButton .WebAppArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const WebApparrow2 = document.querySelector(".WebAppBtn-container");
        if (!WebApparrow2) return;

        const onEnter2 = () => WebAppTweenArrow2.current.play();
        const onLeave2 = () => WebAppTweenArrow2.current.reverse();

        WebApparrow2.addEventListener("mouseenter", onEnter2);
        WebApparrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            WebApparrow2.removeEventListener("mouseenter", onEnter2);
            WebApparrow2.removeEventListener("mouseleave", onLeave2);
            WebAppTweenArrow2.current.kill();
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
    const moreWebAppRef = useRef(null);

    // scroll function
    const scrollTomoreWebApp = () => {
        if (!moreWebAppRef.current) return;

        moreWebAppRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="WebApp-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="WebApp-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="WebApp1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Getting web app created: the key to powerful business processes.</h1>
                            <h1 className='text-gray-300 text-[18px] '>The web applications that we develop not only offer a smooth user experience, but also provide a reliable backend that seamlessly integrates websystems, so that your organisation can continue to operate efficiently and scalable.</h1>
                            <div className="WebAppBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="WebAppBtn-container ">
                                        <button className="WebAppButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                        <button
                                            className="WebAppArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                                <button onClick={scrollTomoreWebApp} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info on Web apps</button>
                            </div>
                        </div>
                        <div className="WebApp1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic33.webp" alt="" />
                        </div>
                    </div>



                    <div className="WebApp-container2" ref={moreWebAppRef}>
                        <WebAppSplitText />
                    </div>

                    <div className="WebApp-text-container text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="lg:text-center md:text-start text-8xl lg:px-45 md:px-22 ">In five stages, we guide you to the final result.</h1>
                        <div className="WebAppFlexible-container">
                            <WebAppFlexible />
                        </div>
                    </div>

                    <div className="bigImg w-[100%] h-[100vh] flex justify-center items-center mt-[-150px]"><img className='w-[95%] h-[95vh] rounded-xl ' src="pic34.webp" alt="" /></div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default WebApp
