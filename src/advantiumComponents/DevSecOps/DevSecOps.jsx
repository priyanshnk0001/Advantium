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
import DevSecSplitText from './DevSecSplitText';
import DevSecFlexible from './DevSecFlexible';


function DevSecOps() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DevSecTweenArrow2 = useRef(null);
    const DevSecTweenArrow3 = useRef(null);
    const DevSecTweenArrow4 = useRef(null);




    useGSAP(() => {
        const devtl1 = gsap.timeline()
        const devtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".dev-container3"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top 10%",
                // markers: true

            }
        })


        devtl1.from(".dev1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        devtl1.from(".dev1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        devtl2.from(".dev3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        devtl2.from(".dev3-child2 > *", {
            x: 760
        }, "okk")

    })



    useGSAP(() => {
        DevSecTweenArrow2.current = gsap.to(".DevSecBottomButton .DevSecArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DevSecarrow2 = document.querySelector(".DevSecBtn-container");
        if (!DevSecarrow2) return;

        const onEnter2 = () => DevSecTweenArrow2.current.play();
        const onLeave2 = () => DevSecTweenArrow2.current.reverse();

        DevSecarrow2.addEventListener("mouseenter", onEnter2);
        DevSecarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            DevSecarrow2.removeEventListener("mouseenter", onEnter2);
            DevSecarrow2.removeEventListener("mouseleave", onLeave2);
            DevSecTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        DevSecTweenArrow3.current = gsap.to(".DevSecBottomButton2 .DevSecArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DevSecarrow3 = document.querySelector(".DevSecBtn-container2");
        if (!DevSecarrow3) return;

        const onEnter2 = () => DevSecTweenArrow3.current.play();
        const onLeave2 = () => DevSecTweenArrow3.current.reverse();

        DevSecarrow3.addEventListener("mouseenter", onEnter2);
        DevSecarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            DevSecarrow3.removeEventListener("mouseenter", onEnter2);
            DevSecarrow3.removeEventListener("mouseleave", onLeave2);
            DevSecTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        DevSecTweenArrow4.current = gsap.to(".DevSecBottomButton4 .DevSecArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DevSecarrow4 = document.querySelector(".DevSecBtn-container4");
        if (!DevSecarrow4) return;

        const onEnter2 = () => DevSecTweenArrow4.current.play();
        const onLeave2 = () => DevSecTweenArrow4.current.reverse();

        DevSecarrow4.addEventListener("mouseenter", onEnter2);
        DevSecarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            DevSecarrow4.removeEventListener("mouseenter", onEnter2);
            DevSecarrow4.removeEventListener("mouseleave", onLeave2);
            DevSecTweenArrow4.current.kill();
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

                <div className="dev-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="dev-container1 w-[100%] mt-60  flex justify-around">
                        <div className="dev1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>DevSecOps: Faster and more secure software development.</h1>
                            <h1 className='text-gray-300 text-xl '>Organisations want to roll out new features and fix bugs quickly, but never at the expense of quality or security. DevSecOps combines development, security and operations by integrating security from the start. This allows you to develop and implement software faster and securely.</h1>
                            <div className="DevSecBottomButton flex  items-center mt-5 z-0    ">
                                <div className="DevSecBtn-container ">
                                    <button className="DevSecButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DevSecArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">DevSecOps services with GitLab</button>
                            </div>
                        </div>
                        <div className="dev1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic23.webp" alt="" />
                        </div>
                    </div>



                    <div className="dev-container2">
                        <DevSecSplitText />
                    </div>
                   <div className="str-container2">
                        <h1 className=" text-white mt-30 text-9xl px-45 ">Why is DevDecOps important?</h1>

                        <DevSecFlexible />
                    </div>






                    <div className="dev-container3 w-[100%] mb-20  flex justify-around items-center">
                        <div className="dev3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Support in implementing DevSecOps solutions in GitLab.</h1>
                            <h1 className='text-gray-300 text-xl '>Shorten your time-to-market, improve the quality of your software and increase the security of your applications with GitLab, the all-in-one DevSecOps platform. With GitLab, you streamline your development processes, guarantee code quality and deliver secure software, all from one central environment. Find out how our specialists take your development processes to the next level.</h1>
                            <div className="DevSecBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="DevSecBtn-container2 ">
                                    <button className="DevSecButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">View our GitLab services</button>
                                    <button
                                        className="DevSecArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dev3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic19.webp" alt="" />
                        </div>
                    </div>



                    
                </div>

            </div>

            <Footer />
        </>
    )
}

export default DevSecOps
