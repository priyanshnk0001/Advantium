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
import AppDesignSplitText from './AppDesignSplitText';
import { NavLink } from 'react-router-dom';




function AppDesign() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const AppDesignTweenArrow2 = useRef(null);
    const AppDesignTweenArrow3 = useRef(null);
    const AppDesignTweenArrow4 = useRef(null);





    useGSAP(() => {
        const AppDesigntl1 = gsap.timeline()



        AppDesigntl1.from(".AppDesign1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        AppDesigntl1.from(".AppDesign1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        AppDesignTweenArrow2.current = gsap.to(".AppDesignBottomButton .AppDesignArrowButton2", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const AppDesignarrow2 = document.querySelector(".AppDesignBtn-container");
        if (!AppDesignarrow2) return;

        const onEnter2 = () => AppDesignTweenArrow2.current.play();
        const onLeave2 = () => AppDesignTweenArrow2.current.reverse();

        AppDesignarrow2.addEventListener("mouseenter", onEnter2);
        AppDesignarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            AppDesignarrow2.removeEventListener("mouseenter", onEnter2);
            AppDesignarrow2.removeEventListener("mouseleave", onLeave2);
            AppDesignTweenArrow2.current.kill();
        };
    }, []);

    useGSAP(() => {
        AppDesignTweenArrow3.current = gsap.to(".AppDesignBottomButton2 .AppDesignArrowButton3", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const AppDesignarrow3 = document.querySelector(".AppDesignBtn-container2");
        if (!AppDesignarrow3) return;

        const onEnter3 = () => AppDesignTweenArrow3.current.play();
        const onLeave3 = () => AppDesignTweenArrow3.current.reverse();

        AppDesignarrow3.addEventListener("mouseenter", onEnter3);
        AppDesignarrow3.addEventListener("mouseleave", onLeave3);

        return () => {
            AppDesignarrow3.removeEventListener("mouseenter", onEnter3);
            AppDesignarrow3.removeEventListener("mouseleave", onLeave3);
            AppDesignTweenArrow3.current.kill();
        };
    }, []);
    useGSAP(() => {
        AppDesignTweenArrow4.current = gsap.to(".AppDesignBottomButton4 .AppDesignArrowButton4", {
            rotation: 45,
            x: 7,
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const AppDesignarrow4 = document.querySelector(".AppDesignBtn-container4");
        if (!AppDesignarrow4) return;

        const onEnter4 = () => AppDesignTweenArrow4.current.play();
        const onLeave4 = () => AppDesignTweenArrow4.current.reverse();

        AppDesignarrow4.addEventListener("mouseenter", onEnter4);
        AppDesignarrow4.addEventListener("mouseleave", onLeave4);

        return () => {
            AppDesignarrow4.removeEventListener("mouseenter", onEnter4);
            AppDesignarrow4.removeEventListener("mouseleave", onLeave4);
            AppDesignTweenArrow4.current.kill();
        };
    }, []);


    useGSAP(() => {

        gsap.from(".AppDesignCard", {
            y: 600,
            stagger: 0.2,
            scrollTrigger: {
                trigger: (".AppDesignCard-container"),
                scroller: "body",
                scrub: 2,
                start: "top 85%",
                end: "top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".AppDesign-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


        mtl2.from(".AppDesign4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".AppDesign4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".AppDesign5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".AppDesign5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


    })


    window.addEventListener('load', () => window.scrollTo(0, 0));
    const moreAppDesignRef = useRef(null);

    // scroll function
    const scrollTomoreAppDesign = () => {
        if (!moreAppDesignRef.current) return;

        moreAppDesignRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="AppDesign-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="AppDesign-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="AppDesign1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Custom Designs Crafted for Your App’s Success</h1>
                            <h1 className='text-gray-300 text-[18px] '>At Advantium, we create visually stunning and intuitively functional app designs tailored to your brand and user needs. Our team focuses on crafting seamless interfaces that elevate user experience and set your app apart in a competitive digital landscape.</h1>
                            <div className="AppDesignBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="AppDesignBtn-container ">
                                        <button className="AppDesignButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                        <button
                                            className="AppDesignArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                                <button onClick={scrollTomoreAppDesign} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info on App Design</button>
                            </div>
                        </div>
                        <div className="AppDesign1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic35.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreAppDesignRef} className="AppDesign-container2">
                        <AppDesignSplitText />
                    </div>

                    <div className="AppDesign-container3 text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="lg:text-center md:text-start text-8xl px-45 ">Ready to create your AppDesign?</h1>
                        <div className="AppDesignCard-container w-[100%] flex  justify-around">

                            <NavLink to="/DesignSprint" onClick={() => window.scrollTo(0, 0)}>
                                <div className="AppDesignCard lg:w-[30vw] lg:h-[550px] md:w-fit md:h-fit lg:p-0 md:p-5 text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>AppDesign sprint </h1>
                                        <h1 className='text-white/70 leading-loose'>We work together to understand the core needs of your target audience. What you want, we like to hear. But what your target group wants is what matters. We start with AppDesign sprints, in which we formulate user goals using User Stories. Ready to sprint? </h1>
                                    </div>
                                    <h1 className='mx-8  text-[18px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                            </NavLink>


                            <NavLink to="/UXDesign" onClick={() => window.scrollTo(0, 0)}>

                                <div className="AppDesignCard lg:w-[30vw] lg:h-[550px] md:w-fit md:h-fit lg:p-0 md:p-5 text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>UX AppDesign</h1>
                                        <h1 className='text-white/70 leading-loose'>AppDesigning an optimal user experience (UX) is essential to the success of your digital product. Our UX AppDesigners always work from the end-user's perspective. We make sure the interface is intuitive, with a strong focus on simplicity and functionality. </h1>
                                    </div>
                                    <h1 className='mx-8 text-[18px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                            </NavLink>


                            <NavLink to="/UIDesign" onClick={() => window.scrollTo(0, 0)}>

                                <div className="AppDesignCard lg:w-[30vw] lg:h-[550px] md:w-fit md:h-fit lg:p-0 md:p-5  text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                    <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                        <h1 className='text-4xl'>UI AppDesign</h1>
                                        <h1 className='text-white/70 leading-loose'>The right icon, in the best colour, with appropriate contrast. Using space, shape and colour, we guide the user to what they want. From the right icon to the best contrast, we ensure that the interface optimally suits the needs of your target group. </h1>
                                    </div>
                                    <h1 className='mx-8  text-[18px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                                </div>
                            </NavLink>

                        </div>
                    </div>


                    <div className="AppDesign-container4 w-[100%] my-10  flex justify-around items-center">
                        <div className="AppDesign4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white lg:text-[60px] md:text-[50px]  leading-tight '>Want to (design)sprint together?</h1>
                            <h1 className='text-gray-300 text-[18px] '>Before we start building your mobile application, we map out the user goals during a Designsprint. This way, we ensure that the app both works well technically and meets users' needs. At Cube, we combine form and function in the design so that the app is not only beautiful, but also intuitive and works smoothly. Every choice we make focuses on a user-friendly interface without compromising on functionality.</h1>
                            <div className="AppDesignBottomButton2 flex  items-center mt-5 z-0     ">
                                <NavLink to="/DesignSprint" onClick={() => window.scrollTo(0, 0)}>
                                    <div className="AppDesignBtn-container2 ">
                                        <button className="AppDesignButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More about designsprints</button>
                                        <button
                                            className="AppDesignArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="AppDesign4-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic36.webp" alt="" />
                        </div>
                    </div>



                    <div className="AppDesign-container5 w-[100%] my-20  flex justify-around items-center overflow-hidden">
                        <div className="AppDesign5-child1 w-[45%] h-[700px]  flex flex-col justify-center rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic37.webp" alt="" />
                        </div>
                        <div className="AppDesign5-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Mapping your user flows.</h1>
                            <h1 className='text-gray-300 text-[18px] '>After the initial brainstorming session, we get to work on the wireframe phase. In this phase, we map out the user flows, making the screen structure and navigation clear. The aim is to make everything as clear as possible for users, so they can intuitively navigate through the app. We create a visual overview in which all important interactions are clearly visible.</h1>
                            <div className="AppDesignBottomButton4 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="AppDesignBtn-container4 ">
                                        <button className="AppDesignButton4  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                        <button
                                            className="AppDesignArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
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

export default AppDesign
