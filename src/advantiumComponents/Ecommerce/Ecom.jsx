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
import EcomSplitText from './EcomSplitText';


function Ecom() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const EcomTweenArrow2 = useRef(null);
    const EcomTweenArrow3 = useRef(null);
    const EcomTweenArrow4 = useRef(null);




    useGSAP(() => {
        const Ecomtl1 = gsap.timeline()
        const Ecomtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".Ecom-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        Ecomtl1.from(".Ecom1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        Ecomtl1.from(".Ecom1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        Ecomtl2.from(".Ecom3-child1 > *", {
            x: -760,
            stagger: 0.2,
            


        }, "okk")
        Ecomtl2.from(".Ecom3-child2 > *", {
            x: 760
        }, "okk")


        Ecomtl2.from(".Ecom4-child1 > *", {
             x: -760
        }, "okkk")

        Ecomtl2.from(".Ecom4-child2 > *", {
           
             x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        EcomTweenArrow2.current = gsap.to(".EcomBottomButton .EcomArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Ecomarrow2 = document.querySelector(".EcomBtn-container");
        if (!Ecomarrow2) return;

        const onEnter2 = () => EcomTweenArrow2.current.play();
        const onLeave2 = () => EcomTweenArrow2.current.reverse();

        Ecomarrow2.addEventListener("mouseenter", onEnter2);
        Ecomarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Ecomarrow2.removeEventListener("mouseenter", onEnter2);
            Ecomarrow2.removeEventListener("mouseleave", onLeave2);
            EcomTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        EcomTweenArrow3.current = gsap.to(".EcomBottomButton2 .EcomArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Ecomarrow3 = document.querySelector(".EcomBtn-container2");
        if (!Ecomarrow3) return;

        const onEnter2 = () => EcomTweenArrow3.current.play();
        const onLeave2 = () => EcomTweenArrow3.current.reverse();

        Ecomarrow3.addEventListener("mouseenter", onEnter2);
        Ecomarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Ecomarrow3.removeEventListener("mouseenter", onEnter2);
            Ecomarrow3.removeEventListener("mouseleave", onLeave2);
            EcomTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        EcomTweenArrow4.current = gsap.to(".EcomBottomButton4 .EcomArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Ecomarrow4 = document.querySelector(".EcomBtn-container4");
        if (!Ecomarrow4) return;

        const onEnter2 = () => EcomTweenArrow4.current.play();
        const onLeave2 = () => EcomTweenArrow4.current.reverse();

        Ecomarrow4.addEventListener("mouseenter", onEnter2);
        Ecomarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Ecomarrow4.removeEventListener("mouseenter", onEnter2);
            Ecomarrow4.removeEventListener("mouseleave", onLeave2);
            EcomTweenArrow4.current.kill();
        };
    }, []);

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

                <div className="Ecom-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Ecom-container1 w-[100%] mt-50  flex justify-around">
                        <div className="Ecom1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight !break-keep '>Building your E-commerce environment together.</h1>
                            <h1 className='text-gray-300 text-xl '>Offering your services or products online. It all falls under e-commerce, the world of digital revenue models. Whether you need a webshop, leasing platform, or a smart integrated payment process, we offer customised solutions that take your e-commerce business to a higher level.</h1>
                            <div className="EcomBottomButton flex  items-center mt-5 z-0    ">
                                <div className="EcomBtn-container ">
                                    <button className="EcomButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="EcomArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More on E-commerce</button>
                            </div>
                        </div>
                        <div className="Ecom1-child2 w-[45%] h-[630px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic01.webp" alt="" />
                        </div>
                    </div>



                    <div className="Ecom-container2">
                        <EcomSplitText/>
                    </div>



                    <div className="Ecom-container3 w-[100%] mb-20  flex justify-around items-center">
                        <div className="Ecom3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Your idea. Our technology. Growing together.</h1>
                            <h1 className='text-gray-300 text-xl '>At Advantium, we believe in the power of collaboration. Your ideas are the basis of what we create, and our technical expertise helps make those ideas a reality. Whether you have an innovative product offering, want to develop a new digital platform or integrate complex payment systems, we make sure everything is technically possible. Together, we provide a solid foundation, enabling your organisation to grow and evolve in the dynamic world of e-commerce. Your vision, combined with our technology, provides the perfect formula for success.</h1>
                            <div className="EcomBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="EcomBtn-container2 ">
                                    <button className="EcomButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="EcomArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Ecom3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic05.webp" alt="" />
                        </div>
                    </div>



                    <div className="Ecom-container4 w-[100%] mb-20  flex justify-around items-center">
                         <div className="Ecom4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic06.webp" alt="" />
                        </div>
                        <div className="Ecom4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Tailor-made e-commerce solutions.</h1>
                            <h1 className='text-gray-300 text-xl '>Our team of experts has extensive experience in developing customised solutions for various business models, such as licensing models and recurring revenue, and offering SaaS (Software as a Service). We can also set up systems for composing energy packages, online leasing and financing, and digital purchasing of items and content. We provide smart payment integrations to suit the complexity of your business. Designing user-friendly check-out flows is one of our specialities, allowing customers to complete their purchase quickly and easily. With links to WMS, ERP and inventory management systems, we ensure that your e-commerce platform is fully integrated and runs smoothly, so that your organisation always runs efficiently.</h1>
                            <div className="EcomBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="EcomBtn-container4 ">
                                    <button className="EcomButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="EcomArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
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

export default Ecom
