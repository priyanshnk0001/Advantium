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
import CMportalSplitText from './CMportalSplitText';
import { NavLink } from 'react-router-dom';



function CMportal() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const CMportalTweenArrow2 = useRef(null);
    const CMportalTweenArrow3 = useRef(null);
    const CMportalTweenArrow4 = useRef(null);




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
        CMportalTweenArrow2.current = gsap.to(".CMportalBottomButton .CMportalArrowButton2", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const CMportalarrow2 = document.querySelector(".CMportalBtn-container");
        if (!CMportalarrow2) return;

        const onEnter2 = () => CMportalTweenArrow2.current.play();
        const onLeave2 = () => CMportalTweenArrow2.current.reverse();

        CMportalarrow2.addEventListener("mouseenter", onEnter2);
        CMportalarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            CMportalarrow2.removeEventListener("mouseenter", onEnter2);
            CMportalarrow2.removeEventListener("mouseleave", onLeave2);
            CMportalTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        CMportalTweenArrow3.current = gsap.to(".CMportalBottomButton2 .CMportalArrowButton3", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const CMportalarrow3 = document.querySelector(".CMportalBtn-container2");
        if (!CMportalarrow3) return;

        const onEnter2 = () => CMportalTweenArrow3.current.play();
        const onLeave2 = () => CMportalTweenArrow3.current.reverse();

        CMportalarrow3.addEventListener("mouseenter", onEnter2);
        CMportalarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            CMportalarrow3.removeEventListener("mouseenter", onEnter2);
            CMportalarrow3.removeEventListener("mouseleave", onLeave2);
            CMportalTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        CMportalTweenArrow4.current = gsap.to(".CMportalBottomButton4 .CMportalArrowButton4", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const CMportalarrow4 = document.querySelector(".CMportalBtn-container4");
        if (!CMportalarrow4) return;

        const onEnter2 = () => CMportalTweenArrow4.current.play();
        const onLeave2 = () => CMportalTweenArrow4.current.reverse();

        CMportalarrow4.addEventListener("mouseenter", onEnter2);
        CMportalarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            CMportalarrow4.removeEventListener("mouseenter", onEnter2);
            CMportalarrow4.removeEventListener("mouseleave", onLeave2);
            CMportalTweenArrow4.current.kill();
        };
    }, []);


     window.addEventListener('load', () => window.scrollTo(0, 0));
           const moreCMPRef = useRef(null);
        
          // scroll function
          const scrollTomoreCMP = () => {
            if (!moreCMPRef.current) return;
        
            moreCMPRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          };

    return (
        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="contact-main-cont relative w-full h-auto overflow-hidden  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }}
            >


                <Header />

                <div className="CM-main-container w-[100%]     flex flex-col justify-center items-center  text-start ]">
                    <div className="CM-container1 w-[100%] mt-40  flex justify-around">
                        <div className="CM1-child1 w-[45%] flex flex-col justify-center gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Develop custom portals.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Whether it’s a customer portal linked to AFAS for viewing invoices and orders, an employee portal for managing leave requests and pay slips, or a dealer portal for placing orders and handling customer data — a digital portal brings structure, speed, and convenience to every process.</h1>
                            <div className="CMportalBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="CMportalBtn-container ">
                                    <button className="CMportalButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="CMportalArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreCMP} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on portals</button>
                            </div>
                        </div>
                        <div className="CM1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic01.webp" alt="" />
                        </div>
                    </div>



                    <div className="CM-container2">
                        <CMportalSplitText />
                    </div>



                    <div className="CM-container3 w-[100%] mb-20  flex justify-around items-center">
                        <div className="CM3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Quicker adaptation to customer demands.</h1>
                            <h1 className='text-gray-300 text-[18px] '>A portal empowers customers to update information, track applications, and make payments independently, enhancing usability and overall experience. At the same time, it automates repetitive tasks like administration and contract management, saving time and minimizing errors. This streamlines processes, improves communication, and enables companies to respond faster to customer needs while optimizing operations, reducing costs, and boosting customer satisfaction.</h1>
                            <div className="CMportalBottomButton2 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="CMportalBtn-container2 ">
                                    <button className="CMportalButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Get in touch</button>
                                    <button
                                        className="CMportalArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="CM3-child2 w-[45%]  flex flex-col rounded-2xl  ">
                            <img className='rounded-2xl' src="pic02.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreCMPRef} className="CM-container4 w-[100%] mb-20  flex justify-around items-center ">
                        <div className="CM4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden   ">
                            <img className='   rounded-2xl ' src="pic18.webp" alt="" />
                        </div>
                        <div className="CM4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Efficient, secure, and customer-focused.</h1>
                            <h1 className='text-gray-300 text-[18px] '>A modular portal minimizes manual work and phone support, reducing costs and boosting productivity. Users gain quick access to relevant information, enhancing convenience and satisfaction. With scalability and ISO 27001–level security, the portal grows alongside your organization while delivering a reliable and transparent customer experience.</h1>
                            <div className="CMportalBottomButton4 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="CMportalBtn-container4 ">
                                    <button className="CMportalButton4  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Get in touch</button>
                                    <button
                                        className="CMportalArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
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

export default CMportal
