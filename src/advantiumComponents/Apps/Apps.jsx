import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import { NavLink } from 'react-router-dom';
import OppositeScroll from '../OppositeScroll';
import Footer from '../Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';
import AppsSplitText from './AppsSplitText';





function Apps() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const appsTweenArrow2 = useRef(null);





    useGSAP(() => {
        const appstl1 = gsap.timeline()



        appstl1.from(".apps1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        appstl1.from(".apps1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        appsTweenArrow2.current = gsap.to(".appsBottomButton .appsArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const appsarrow2 = document.querySelector(".appsBtn-container");
        if (!appsarrow2) return;

        const onEnter2 = () => appsTweenArrow2.current.play();
        const onLeave2 = () => appsTweenArrow2.current.reverse();

        appsarrow2.addEventListener("mouseenter", onEnter2);
        appsarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            appsarrow2.removeEventListener("mouseenter", onEnter2);
            appsarrow2.removeEventListener("mouseleave", onLeave2);
            appsTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        gsap.from(".appCard", {
            y: 600,
            stagger: 0.2,
            scrollTrigger: {
                trigger: (".appCard-container"),
                scroller: "body",
                scrub: 2,
                start: "top 85%",
                end: "top 33%",
                // markers:true
            }

        })
    })


    window.addEventListener('load', () => window.scrollTo(0, 0));
    const moreAppRef = useRef(null);

    // scroll function
    const scrollTomoreApp = () => {
        if (!moreAppRef.current) return;

        moreAppRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="apps-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="apps-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="apps1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Your app developed by experienced app developers.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Mobile applications are becoming increasingly important, and it is essential to stand out with a user-friendly and perfectly functioning app. As experienced app developers, we create customised solutions that not only match your personal requirements, but also appeal to the right target group.</h1>
                            <div className="appsBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="appsBtn-container ">
                                        <button className="appsButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                        <button
                                            className="appsArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>

                                <button onClick={scrollTomoreApp} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on apps</button>
                            </div>
                        </div>
                        <div className="apps1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='scale-105 rounded-2xl' src="dubeySir.jpeg" alt="" />
                        </div>
                    </div>



                    <div ref={moreAppRef} className="apps-container2">
                        <AppsSplitText />
                    </div>

                    <div className="appLooking-container text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="text-center text-8xl px-45 ">Which app are you looking for?</h1>
                        <div className="appCard-container w-[100%] flex  justify-around">

                            <div onClick={() => window.scrollTo(0, 0)} className="appCard w-[30%]  text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                <NavLink to="/MobileApp">
                                    <div className='h-[450px]'>
                                        <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                            <h1 className='text-4xl'>Mobile app</h1>
                                            <h1 className='text-white/70 leading-loose'>Creating a mobile app means turning your users’ goals into a digital, on-the-go experience. With our expertise in custom app development, we ensure your app meets every requirement and connects seamlessly with your target audience.</h1>
                                        </div>
                                        <h1 className='mx-8 text-[18px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                    </div>
                                </NavLink>
                            </div>

                            <div onClick={() => window.scrollTo(0, 0)} className="appCard w-[30%]  text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                <NavLink to="/WebApp">
                                    <div className='h-[450px]'>
                                        <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                            <h1 className='text-4xl'>Web app</h1>
                                            <h1 className='text-white/70 leading-loose'>The web applications developed by Advantium deliver a seamless user experience and a robust backend that integrates systems effortlessly, ensuring your organisation runs efficiently and scales with ease. </h1>
                                        </div>
                                        <h1 className='mx-8 text-[18px] '>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                    </div>
                                </NavLink>
                            </div>

                            <div onClick={() => window.scrollTo(0, 0)} className="appCard w-[30%]  text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                <NavLink to="/AppDesign">
                                    <div className='h-[450px]'>
                                        <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                            <h1 className='text-4xl'>App design</h1>
                                            <h1 className='text-white/70 leading-loose'>Developing a mobile app begins with design, not code. At Advantium, we ensure your app’s design forms the foundation for an exceptional user experience. Together, we identify and shape the needs of your end users. </h1>
                                        </div>
                                        <h1 className='mx-8 text-[18px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Apps
