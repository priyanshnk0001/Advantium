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
import MaintenanceSplitText from './MaintenanceSplitText';
import MaintenanceFlexible from './MaintenanceFlexible';


function Maintenance() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const MaintenanceTweenArrow2 = useRef(null);
    const MaintenanceTweenArrow3 = useRef(null);
    const MaintenanceTweenArrow4 = useRef(null);




    useGSAP(() => {
        const mtl1 = gsap.timeline()
        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".Maintenance-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        mtl1.from(".Maintenance1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        mtl1.from(".Maintenance1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        mtl2.from(".Maintenance3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".Maintenance3-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".Maintenance4-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".Maintenance4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        MaintenanceTweenArrow2.current = gsap.to(".MaintenanceBottomButton .MaintenanceArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Maintenancearrow2 = document.querySelector(".MaintenanceBtn-container");
        if (!Maintenancearrow2) return;

        const onEnter2 = () => MaintenanceTweenArrow2.current.play();
        const onLeave2 = () => MaintenanceTweenArrow2.current.reverse();

        Maintenancearrow2.addEventListener("mouseenter", onEnter2);
        Maintenancearrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Maintenancearrow2.removeEventListener("mouseenter", onEnter2);
            Maintenancearrow2.removeEventListener("mouseleave", onLeave2);
            MaintenanceTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        MaintenanceTweenArrow3.current = gsap.to(".MaintenanceBottomButton2 .MaintenanceArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Maintenancearrow3 = document.querySelector(".MaintenanceBtn-container2");
        if (!Maintenancearrow3) return;

        const onEnter2 = () => MaintenanceTweenArrow3.current.play();
        const onLeave2 = () => MaintenanceTweenArrow3.current.reverse();

        Maintenancearrow3.addEventListener("mouseenter", onEnter2);
        Maintenancearrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Maintenancearrow3.removeEventListener("mouseenter", onEnter2);
            Maintenancearrow3.removeEventListener("mouseleave", onLeave2);
            MaintenanceTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        MaintenanceTweenArrow4.current = gsap.to(".MaintenanceBottomButton4 .MaintenanceArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Maintenancearrow4 = document.querySelector(".MaintenanceBtn-container4");
        if (!Maintenancearrow4) return;

        const onEnter2 = () => MaintenanceTweenArrow4.current.play();
        const onLeave2 = () => MaintenanceTweenArrow4.current.reverse();

        Maintenancearrow4.addEventListener("mouseenter", onEnter2);
        Maintenancearrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Maintenancearrow4.removeEventListener("mouseenter", onEnter2);
            Maintenancearrow4.removeEventListener("mouseleave", onLeave2);
            MaintenanceTweenArrow4.current.kill();
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

                <div className="Maintenance-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Maintenance-container1 w-[100%] mt-60  flex justify-around">
                        <div className="Maintenance1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Maintenance & management out of your hands.</h1>
                            <h1 className='text-gray-300 text-xl '>At Advantium, we ensure quality and reliability by taking the management of your online platforms off your hands. From project management to hosting, monitoring and testing: we keep everything running so that you can focus on what really matters.</h1>
                            <div className="MaintenanceBottomButton flex  items-center mt-5 z-0    ">
                                <div className="MaintenanceBtn-container ">
                                    <button className="MaintenanceButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="MaintenanceArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info</button>
                            </div>
                        </div>
                        <div className="Maintenance1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic25.webp" alt="" />
                        </div>
                    </div>



                    <div className="Maintenance-container2">
                        <MaintenanceSplitText />
                    </div>
                   






                    <div className="Maintenance-container3 w-[100%] my-20  flex justify-around items-center">
                        <div className="Maintenance3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Hosting</h1>
                            <h1 className='text-gray-300 text-xl '>The foundation of any successful online solution is a reliable and stable environment. Our digital solutions run on scalable cloud servers that are always ready for growth. We work with our hosting partners to bring you the best managed hosting solutions. Best of all? Everything is monitored 24/7. This means we always keep an eye on how your platform is performing. Thanks to the close cooperation between our developers and hosting partners, we can guarantee that you have a secure, stable and high-performing website.</h1>
                            <div className="MaintenanceBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="MaintenanceBtn-container2 ">
                                    <button className="MaintenanceButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="MaintenanceArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Maintenance3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic26.webp" alt="" />
                        </div>
                    </div>



                    <div className="Maintenance-container4 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="Maintenance4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic20.webp" alt="" />
                        </div>
                        <div className="Maintenance4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Software management by Advantium</h1>
                            <h1 className='text-gray-300 text-xl '>Software is the engine of your organisation, which is precisely why management should not be a weak spot. Yet it often happens: applications quietly age, crucial knowledge resides in a handful of people, and responsibilities are unclear. This leads to errors in releases, security risks and stagnating development. Advantium helps organisations regain control with software management that is tailored to your processes and needs.</h1>
                            <div className="MaintenanceBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="MaintenanceBtn-container4 ">
                                    <button className="MaintenanceButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More info</button>
                                    <button
                                        className="MaintenanceArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="str-container2 w-[100%]">
                        <h1 className=" text-white mt-30 text-9xl px-45 ">Automated testing for complex solutions.</h1>

                        <MaintenanceFlexible />
                    </div>


                </div>

            </div>

            <Footer />
        </>
    )
}

export default Maintenance
