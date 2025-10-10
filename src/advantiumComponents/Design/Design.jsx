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
import DesignSplitText from './DesignSplitText';
import { NavLink } from 'react-router-dom';




function Design() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DesignTweenArrow2 = useRef(null);
    const DesignTweenArrow3 = useRef(null);
    const DesignTweenArrow4 = useRef(null);





    useGSAP(() => {
        const Designtl1 = gsap.timeline()



        Designtl1.from(".Design1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        Designtl1.from(".Design1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        DesignTweenArrow2.current = gsap.to(".DesignBottomButton .DesignArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Designarrow2 = document.querySelector(".DesignBtn-container");
        if (!Designarrow2) return;

        const onEnter2 = () => DesignTweenArrow2.current.play();
        const onLeave2 = () => DesignTweenArrow2.current.reverse();

        Designarrow2.addEventListener("mouseenter", onEnter2);
        Designarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Designarrow2.removeEventListener("mouseenter", onEnter2);
            Designarrow2.removeEventListener("mouseleave", onLeave2);
            DesignTweenArrow2.current.kill();
        };
    }, []);

     useGSAP(() => {
        DesignTweenArrow3.current = gsap.to(".DesignBottomButton2 .DesignArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Designarrow3 = document.querySelector(".DesignBtn-container2");
        if (!Designarrow3) return;

        const onEnter3 = () => DesignTweenArrow3.current.play();
        const onLeave3 = () => DesignTweenArrow3.current.reverse();

        Designarrow3.addEventListener("mouseenter", onEnter3);
        Designarrow3.addEventListener("mouseleave", onLeave3);

        return () => {
            Designarrow3.removeEventListener("mouseenter", onEnter3);
            Designarrow3.removeEventListener("mouseleave", onLeave3);
            DesignTweenArrow3.current.kill();
        };
    }, []);
    
    useGSAP(() => {
        DesignTweenArrow4.current = gsap.to(".DesignBottomButton4 .DesignArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Designarrow4 = document.querySelector(".DesignBtn-container4");
        if (!Designarrow4) return;

        const onEnter4 = () => DesignTweenArrow4.current.play();
        const onLeave4 = () => DesignTweenArrow4.current.reverse();

        Designarrow4.addEventListener("mouseenter", onEnter4);
        Designarrow4.addEventListener("mouseleave", onLeave4);

        return () => {
            Designarrow4.removeEventListener("mouseenter", onEnter4);
            Designarrow4.removeEventListener("mouseleave", onLeave4);
            DesignTweenArrow4.current.kill();
        };
    }, []);



    useGSAP(() => {

        gsap.from(".DesignCard", {
            y: 600,
            stagger: 0.2,
            scrollTrigger: {
                trigger: (".DesignCard-container"),
                scroller: "body",
                scrub: 2,
                start: "top 85%",
                end: "top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".Design-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


        mtl2.from(".Design4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".Design4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".Design5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".Design5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


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

                <div className="Design-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Design-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="Design1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Design that connects with users and drives your goals.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Design is the foundation of digital success. Our UX designers turn your requirements into modern, user-friendly interfaces that deliver seamless experiences. The result? Digital products that don’t just look great — they perform flawlessly. Ready to elevate your user experience?</h1>
                            <div className="DesignBottomButton flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container ">
                                    <button className="DesignButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DesignArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info on Design</button>
                            </div>
                        </div>
                        <div className="Design1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic27.webp" alt="" />
                        </div>
                    </div>



                    <div className="Design-container2">
                        <DesignSplitText />
                    </div>

                    <div className="Design-container3 text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="text-center text-8xl px-45 ">Ready to design your blueprint?</h1>
                        <div className="DesignCard-container w-[100vw] grid grid-cols-3 gap-8 ">
                            <NavLink to="/DesignSprint" onClick={()=> window.scrollTo(0,0)}>
                                <div className="DesignCard w-[30vw] lg:h-[500px] md:h-[600px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>Design sprint </h1>
                                        <h1 className='text-white/70 lg:leading-loose'>We collaborate to understand the core needs of your target audience. Your vision matters — but your users’ needs guide the way. Through focused design sprints, we define user goals using clear User Stories. Ready to sprint?</h1>
                                    </div>
                                    <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                                </NavLink>

                                <NavLink to="/UXDesign" onClick={()=> window.scrollTo(0,0)}>
                                <div className="DesignCard w-[30vw] lg:h-[500px] md:h-[600px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>UX Design</h1>
                                        <h1 className='text-white/70 lg:leading-loose'>Designing an optimal user experience (UX) is key to any digital product’s success. Our UX designers always think from the end user’s perspective, creating interfaces that are intuitive, simple, and highly functional.</h1>
                                    </div>
                                    <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                                </NavLink>



                                <NavLink to="/UIDesign" onClick={()=> window.scrollTo(0,0)}>
                                <div className="DesignCard w-[30vw] lg:h-[500px]  md:h-[600px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>UI Design</h1>
                                        <h1 className='text-white/70 lg:leading-loose'>The right icon, the perfect color, and balanced contrast — every detail matters. Through thoughtful use of space, shape, and color, we guide users effortlessly toward their goals, ensuring the interface perfectly aligns with your audience’s needs. </h1>
                                    </div>
                                    <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                                </NavLink>

                                <NavLink to="/Technical" onClick={()=> window.scrollTo(0,0)}>
                                <div className="DesignCard w-fit h-[fit] pb-10 lg:mx-0 md:mx-10   text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>Technical Architecture</h1>
                                        <h1 className='text-white/70 lg:leading-loose'>In design sprints, we determine the techniques and frameworks best suited to your project. We create the technical architecture your digital systems need — ensuring they’re efficient, flexible, secure, and future-ready. </h1>
                                    </div>
                                    <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                                </NavLink>

                                <NavLink to="/AppDesign" onClick={()=> window.scrollTo(0,0)}>
                                <div className="DesignCard w-[300px] h-[fit] pb-10 lg:mx-0 md:mx-20 text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>App design</h1>
                                        <h1 className='text-white/70 lg:leading-loose'>Developing a mobile app begins with design, not code. Great app design goes beyond aesthetics — it defines how users interact, navigate features, and stay engaged with your app.</h1>
                                    </div>
                                    <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                                </NavLink>

                        </div>
                    </div>


                    <div className="Design-container4 w-[100%] my-20  flex justify-around items-center">
                        <div className="Design4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>The foundation for success.</h1>
                            <h1 className='text-gray-300 text-[18px] '>In the first phase, we collaborate with you to uncover the core needs of your target audience. Your vision is important — but your users’ needs come first. Through design sprints, we define user goals using clear User Stories, helping us understand what your visitors truly want and how to serve them best.</h1>
                            <div className="DesignBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container2 ">
                                    <button className="DesignButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Sprinting together?</button>
                                    <button
                                        className="DesignArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Design4-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic28.webp" alt="" />
                        </div>
                    </div>



                    <div className="Design-container5 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="Design5-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic29.webp" alt="" />
                        </div>
                        <div className="Design5-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Technical architecture: Building the right foundation</h1>
                            <h1 className='text-gray-300 text-[18px] '>Every website needs a strong technical foundation. During the design sprints, we decide on the right techniques and frameworks in close collaboration with you — ensuring full transparency in every choice and its impact. Our lead developer guides the process, guaranteeing a robust and scalable solution.</h1>
                            <div className="DesignBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container4 ">
                                    <button className="DesignButton4  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More info</button>
                                    <button
                                        className="DesignArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
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

export default Design
