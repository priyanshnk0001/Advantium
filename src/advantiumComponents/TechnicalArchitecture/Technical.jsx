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
import TechnicalFlexible from './TechnicalFlexible';



function Technical() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const TechnicalTweenArrow2 = useRef(null);
    const TechnicalTweenArrow3 = useRef(null);
    const TechnicalTweenArrow4 = useRef(null);




    useGSAP(() => {
        const cmtl1 = gsap.timeline()
        const cmtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".CM-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        cmtl1.from(".CM1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        cmtl1.from(".CM1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        cmtl2.from(".CM3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        cmtl2.from(".CM3-child2 > *", {
            x: 760
        }, "okk")


        cmtl2.from(".CM4-child1 > *", {
            x: -760
        }, "okkk")

        cmtl2.from(".CM4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        TechnicalTweenArrow2.current = gsap.to(".TechnicalBottomButton .TechnicalArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Technicalarrow2 = document.querySelector(".TechnicalBtn-container");
        if (!Technicalarrow2) return;

        const onEnter2 = () => TechnicalTweenArrow2.current.play();
        const onLeave2 = () => TechnicalTweenArrow2.current.reverse();

        Technicalarrow2.addEventListener("mouseenter", onEnter2);
        Technicalarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Technicalarrow2.removeEventListener("mouseenter", onEnter2);
            Technicalarrow2.removeEventListener("mouseleave", onLeave2);
            TechnicalTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        TechnicalTweenArrow3.current = gsap.to(".TechnicalBottomButton2 .TechnicalArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Technicalarrow3 = document.querySelector(".TechnicalBtn-container2");
        if (!Technicalarrow3) return;

        const onEnter2 = () => TechnicalTweenArrow3.current.play();
        const onLeave2 = () => TechnicalTweenArrow3.current.reverse();

        Technicalarrow3.addEventListener("mouseenter", onEnter2);
        Technicalarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Technicalarrow3.removeEventListener("mouseenter", onEnter2);
            Technicalarrow3.removeEventListener("mouseleave", onLeave2);
            TechnicalTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        TechnicalTweenArrow4.current = gsap.to(".TechnicalBottomButton4 .TechnicalArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Technicalarrow4 = document.querySelector(".TechnicalBtn-container4");
        if (!Technicalarrow4) return;

        const onEnter2 = () => TechnicalTweenArrow4.current.play();
        const onLeave2 = () => TechnicalTweenArrow4.current.reverse();

        Technicalarrow4.addEventListener("mouseenter", onEnter2);
        Technicalarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Technicalarrow4.removeEventListener("mouseenter", onEnter2);
            Technicalarrow4.removeEventListener("mouseleave", onLeave2);
            TechnicalTweenArrow4.current.kill();
        };
    }, []);

    return (
        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="contact-main-cont relative w-full h-auto  bg-slate-900 transition-colors overflow-hidden"
                style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }} >


                <Header />

                <div className="CM-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="CM-container1 w-[100%] mt-60  flex justify-around">
                        <div className="CM1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>A strong foundation with the right technical architecture.</h1>
                            <h1 className='text-gray-300 text-xl '>Setting up a strong technical architecture is essential so that your systems not only work well, but are also flexible, secure and ready for the future. We design the technical foundation you need for your digital systems, so that everything fits together properly.</h1>
                            <div className="TechnicalBottomButton flex  items-center mt-5 z-0    ">
                                <div className="TechnicalBtn-container ">
                                    <button className="TechnicalButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="TechnicalArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info </button>
                            </div>
                        </div>
                        <div className="CM1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden   ">
                            <img className='h-[580px]' src="pic15.webp" alt="" />
                        </div>
                    </div>

                    <div className="CM-container3 w-[100%] my-30  flex justify-around items-center">
                         <div className="CM3-child1 w-[45%]  flex flex-col rounded-2xl   ">
                            <img className='rounded-2xl ' src="pic16.webp" alt="" />
                        </div>
                        <div className="CM3-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>What is technical architecture?</h1>
                            <h1 className='text-gray-300 text-xl '>Technical architecture is the design of the foundation for software and web applications. It involves making strategic choices for technologies, systems, frameworks and integrations that ensure your digital solutions are scalable, flexible, secure and efficient. It acts as a blueprint that not only guides current implementation, but also allows for future growth and adjustments, so that your systems can evolve with the needs of your organisation.</h1>
                            <div className="TechnicalBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="TechnicalBtn-container2 ">
                                    <button className="TechnicalButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">more on Technical Architecture</button>
                                    <button
                                        className="TechnicalArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                       
                    </div>



                    <div className="CM-container4 w-[100%] mb-20  flex justify-around items-center ">
                        
                        <div className="CM4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>A scalable digital foundation.</h1>
                            <h1 className='text-gray-300 text-xl '>Establishing a strong technical architecture is essential for the long-term and growth of your digital systems. It provides a flexible foundation on which to build, so that your systems can easily grow with changes in your organisation. By making smart choices early on, you avoid technical problems and ensure that different systems work well together. This helps everything fit together properly, prevents your business from running into compatibility issues and it provides the necessary security and stability.</h1>
                            <div className="TechnicalBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="TechnicalBtn-container4 ">
                                    <button className="TechnicalButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="TechnicalArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="CM4-child2 w-[45%] h-[700px]  flex flex-col rounded-2xl   ">
                            <img className='rounded-2xl ' src="pic17.webp" alt="" />
                        </div>

                    </div>
                </div>

                <div className="CM-container2">
                        <h1 className=" text-white mt-30 text-9xl px-45 ">The perfect technical architecture.</h1>

                        <TechnicalFlexible />
                    </div>

            </div>

            <Footer />
        </>
    )
}

export default Technical
