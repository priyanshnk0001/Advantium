import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { NavLink } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);


function WebAppFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".WebApptext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".WebApptext-main-cont", {
            scale: 0,
            // delay:0.2,
            duration: 2
        }, "WebApp")

        tl.from(".WebApp-subchild", {
            x: -500,
            stagger: 0.3,
        }, "WebApp")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".WebApp-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const WebAppItm = item.querySelector(".WebAppItm")
            const icon = item.querySelector(".WebApp-iconAnim");
            const texth1 = item.querySelector(".WebApptext-cont h1")
            if (!WebAppItm) return;
            if (!icon) return;
            if (!texth1) return;

            const t = gsap.to(icon, {
                opacity: 1,
                scale: 1,
                x: -20,
                duration: 0.5,
                ease: "power2.out",
                paused: true,
                transformOrigin: "50% 50%",
            });
            const t2 = gsap.to(texth1, {
                scale: 0.8,
                color: "black",
                paused: true,
            })

            const t3 = gsap.to(WebAppItm, {
                background: "linear-gradient(to right, white, rgba(56,189,248,0.7), white)",
                borderBottom: "0%",
                paused: true
            });


            const onEnter = () => {
                t.play();
                t2.play();
                t3.play();
            }
            const onLeave = () => {
                t.reverse();
                t2.reverse();
                t3.reverse();
            }

            item.addEventListener("mouseenter", onEnter);
            item.addEventListener("mouseleave", onLeave);

            tweenMap.set(icon, t);
            handlerMap.set(item, { onEnter, onLeave });
        });

        return () => {
            for (const [item, handlers] of handlerMap.entries()) {
                item.removeEventListener("mouseenter", handlers.onEnter);
                item.removeEventListener("mouseleave", handlers.onLeave);
            }
            for (const tween of tweenMap.values()) tween.kill();
            tweenMap.clear();
            handlerMap.clear();
        };
    }, []);



    useGSAP(() => {
        const defaultImg = document.querySelector(".text01");
        const mappings = [
            { trigger: ".WebApp-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".WebApp-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".WebApp-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".WebApp-subchild:nth-child(4)", target: ".text04" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".WebApptext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".WebApptext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(defaultImg, { opacity: 1, duration: 0.2 });

                });
            }
        });

        return () => {
            mappings.forEach(({ trigger }) => {
                const el = document.querySelector(trigger);
                if (el) {
                    el.replaceWith(el.cloneNode(true)); // cleanup listeners
                }
            });
        };
    }, []);





    return (
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around  overflow-hidden   '>

            <div className="WebApptext-cont w-[25%] h-[90%] flex flex-col justify-center ">

                <div className="WebApp-subchild rounded-4xl overflow-hidden  ">
                    <div className="WebAppItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>1. Smart technology</h1>
                        </div>

                        <div className="WebApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="WebApp-subchild rounded-4xl overflow-hidden ">
                    <div className="WebAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>2. Visual design</h1>
                        </div>

                        <div className="WebApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="WebApp-subchild rounded-4xl overflow-hidden ">
                    <div className="WebAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>3. Interactive prototype</h1>
                        </div>

                        <div className="WebApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="WebApp-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="WebAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Craftsmanship</h1>
                        </div>

                        <div className="WebApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>



            </div>



            <div className="WebApptext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px] pt-33 ">
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>Smart technology</h1>
                    <h1 className='text-white/70 text-[18px]'>Every project starts with a thorough analysis. Together, we explore your needs, objectives and the opportunities offered by different technologies. In doing so, we address questions such as:

                        - What is the main purpose of the web application?

                        - What needs or expectations do you have from the web app?

                        - Do you have examples of other applications that appeal to you in terms of functionality or design?

                        - Are there plans for a mobile version of the web application or additional extensions?

                        - Are there specific KPIs you want to track?



                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>Visual design</h1>
                    <h1 className='text-white/70 text-[18px]'>With a clear goal in mind, we start by designing wireframes and storyboards for your web application. These provide a visual overview of the web app's structure, functionalities and user flow. It is the first step in turning your idea into a tangible design for the web environment.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Interactive prototype</h1>
                    <h1 className='text-white/70 text-[18px]'>During the design phase, we bring the concept of your web application to life by creating an interactive prototype. This gives a clear picture of what the web app will look like and how the functionalities work. In the feedback phase, we incorporate your input so that together we can strive for the best end result. It is also valuable to test the prototype outside the project team, with real users from the target audience. This helps to identify any problems, inconsistencies or areas for improvement in the user experience.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Craftsmanship</h1>
                    <h1 className='text-white/70 text-[18px]'>Now our craftsmanship really comes into its own. We thoroughly build and test your web application on different browsers and operating systems to ensure it performs optimally and meets the highest quality standards. Although 100% error-free software does not exist, we always strive to make the web application as close to perfection as possible so that users have a smooth experience.</h1>
                </div>
                




            </div>
        </div>
    )
}

export default WebAppFlexible
