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
import DMplatformSplitText from './DMplatformSplitText';





function DMplatform() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DMplatformTweenArrow2 = useRef(null);
    const DMplatformTweenArrow3 = useRef(null);
    const DMplatformTweenArrow4 = useRef(null);




    useGSAP(() => {
        const DMtl1 = gsap.timeline()
        const DMtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".DM-container3"),
                scroller: "body",
                scrub: 2,
                start: "top 92%",
                end: "top 23%",
                // markers: true

            }
        })


        DMtl1.from(".DM1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        DMtl1.from(".DM1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        DMtl2.from(".DM3-child1 > *", {
            x: -760,
            stagger: 0.2,
            


        }, "okk")
        DMtl2.from(".DM3-child2 > *", {
            x: 760
        }, "okk")



    })



    useGSAP(() => {
        DMplatformTweenArrow2.current = gsap.to(".DMplatformBottomButton .DMplatformArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DMplatformarrow2 = document.querySelector(".DMplatformBtn-container");
        if (!DMplatformarrow2) return;

        const onEnter2 = () => DMplatformTweenArrow2.current.play();
        const onLeave2 = () => DMplatformTweenArrow2.current.reverse();

        DMplatformarrow2.addEventListener("mouseenter", onEnter2);
        DMplatformarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            DMplatformarrow2.removeEventListener("mouseenter", onEnter2);
            DMplatformarrow2.removeEventListener("mouseleave", onLeave2);
            DMplatformTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        DMplatformTweenArrow3.current = gsap.to(".DMplatformBottomButton2 .DMplatformArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DMplatformarrow3 = document.querySelector(".DMplatformBtn-container2");
        if (!DMplatformarrow3) return;

        const onEnter2 = () => DMplatformTweenArrow3.current.play();
        const onLeave2 = () => DMplatformTweenArrow3.current.reverse();

        DMplatformarrow3.addEventListener("mouseenter", onEnter2);
        DMplatformarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            DMplatformarrow3.removeEventListener("mouseenter", onEnter2);
            DMplatformarrow3.removeEventListener("mouseleave", onLeave2);
            DMplatformTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        DMplatformTweenArrow4.current = gsap.to(".DMplatformBottomButton4 .DMplatformArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DMplatformarrow4 = document.querySelector(".DMplatformBtn-container4");
        if (!DMplatformarrow4) return;

        const onEnter2 = () => DMplatformTweenArrow4.current.play();
        const onLeave2 = () => DMplatformTweenArrow4.current.reverse();

        DMplatformarrow4.addEventListener("mouseenter", onEnter2);
        DMplatformarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            DMplatformarrow4.removeEventListener("mouseenter", onEnter2);
            DMplatformarrow4.removeEventListener("mouseleave", onLeave2);
            DMplatformTweenArrow4.current.kill();
        };
    }, []);


     useGSAP(()=>{
        gsap.from(".DMbigImg img",{
            scale:0.5,
            scrollTrigger:{
                trigger:(".DMbigImg"),
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

                <div className="DM-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="DM-container1 w-[100%] mt-50  flex justify-around">
                        <div className="DM1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Manage your data smartly with a Data Management Platform.</h1>
                            <h1 className='text-gray-300 text-xl '>Many organisations already have strong systems in place such as a CRM, ERP or PIM solution. A solid foundation, and we are happy to build on it. The real magic only happens when these systems no longer stand alone, but work together and smart business logic is applied. A well-designed Data Management Platform (DMP) makes this possible.</h1>
                            <div className="DMplatformBottomButton flex  items-center mt-5 z-0    ">
                                <div className="DMplatformBtn-container ">
                                    <button className="DMplatformButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DMplatformArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on the DMP</button>
                            </div>
                        </div>
                        <div className="DM1-child2 w-[45%] h-[640px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic03.webp" alt="" />
                        </div>
                    </div>



                    <div className="DM-container2">
                        <DMplatformSplitText />
                    </div>


                     <div className="DMbigImg w-[100%] h-[100vh] flex justify-center items-center mt-[-100px]"><img className='w-[95%] h-[95vh] rounded-xl ' src="pic04.webp" alt="" /></div>


                



                    <div className="DM-container3 w-[100%] mb-20  flex justify-around items-center py-10">
                        <div className="DM3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>How does a DMP connect to your processes?</h1>
                            <h1 className='text-gray-300 text-xl '>A DMP is ideal for organisations dealing with a growing digital landscape. As you manage more systems and data, the benefits of a DMP increase. Most organisations already have a solid foundation with software such as CRM, ERP, or accounting systems. These are valuable tools, but often they still work independently of each other. A DMP makes the connection between these systems and ensures that together they form a stronger whole. The platform not only acts as middleware, but also adds intelligence. Think advanced analytics, data validation or the application of business rules. This allows you to work faster, smarter and more efficiently, while getting the most out of your existing software landscape.</h1>
                            <div className="DMplatformBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="DMplatformBtn-container2 ">
                                    <button className="DMplatformButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Read more about portals</button>
                                    <button
                                        className="DMplatformArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="DM3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic08.webp" alt="" />
                        </div>
                    </div>



                   
                </div>

            </div>

            <Footer />
        </>
    )
}

export default DMplatform
