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
import WebCMSSplitText from './WebCMSSplitText';
import Flexible from './Flexible';






function WebsiteCMS() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const webCMSTweenArrow2 = useRef(null);





    useGSAP(() => {
        const webCMStl1 = gsap.timeline()



        webCMStl1.from(".webCMS1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        webCMStl1.from(".webCMS1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        webCMSTweenArrow2.current = gsap.to(".webCMSBottomButton .webCMSArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const webCMSarrow2 = document.querySelector(".webCMSBtn-container");
        if (!webCMSarrow2) return;

        const onEnter2 = () => webCMSTweenArrow2.current.play();
        const onLeave2 = () => webCMSTweenArrow2.current.reverse();

        webCMSarrow2.addEventListener("mouseenter", onEnter2);
        webCMSarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            webCMSarrow2.removeEventListener("mouseenter", onEnter2);
            webCMSarrow2.removeEventListener("mouseleave", onLeave2);
            webCMSTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(()=>{
        gsap.from(".bigImg img",{
            scale:0.5,
            scrollTrigger:{
                trigger:(".bigImg"),
                scroller:"body",
                scrub:2,
                start:"top 110%",
                end:"top 13%",
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

                <div className="webCMS-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="webCMS-container1 w-[100%] mt-60  flex justify-around items-center">
                        <div className="webCMS1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Websites that let users discover, click and buy.</h1>
                            <h1 className='text-gray-300 text-xl '>Website creation, that's where it all started for Advantium. More than 10 years ago, we took our first steps into the digital world, and since then the possibilities have developed at a racing pace. The technology is constantly changing, and we are leading. Are you walking with us?</h1>
                            <div className="webCMSBottomButton flex  items-center mt-5 z-0    ">
                                <div className="webCMSBtn-container ">
                                    <button className="webCMSButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="webCMSArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on websites</button>
                            </div>
                        </div>
                        <div className="webCMS1-child2 w-[45%] h-[625px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic03.webp" alt="" />
                        </div>
                    </div>



                    <div className="webCMS-container2">
                        <WebCMSSplitText />
                    </div>

                    <div className="flexible-text-container text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="text-center text-9xl px-45 ">The process to your perfect website</h1>
                        <div className="flexible-container">
                            <Flexible/>
                        </div>
                    </div>

                    <div className="bigImg w-[100%] h-[100vh] flex justify-center items-center mt-[-100px]"><img className='w-[95%] h-[95vh] rounded-xl ' src="pic04.webp" alt="" /></div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default WebsiteCMS
