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


function MobileAppFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".MobileApptext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".MobileApptext-main-cont", {
            scale: 0,
            // delay:0.2,
            duration: 2
        }, "MobileApp")

        tl.from(".MobileApp-subchild", {
            x: -500,
            stagger: 0.3,
        }, "MobileApp")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".MobileApp-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const MobileAppItm = item.querySelector(".MobileAppItm")
            const icon = item.querySelector(".MobileApp-iconAnim");
            const texth1 = item.querySelector(".MobileApptext-cont h1")
            if (!MobileAppItm) return;
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

            const t3 = gsap.to(MobileAppItm, {
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
            { trigger: ".MobileApp-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".MobileApp-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".MobileApp-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".MobileApp-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".MobileApp-subchild:nth-child(5)", target: ".text05" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".MobileApptext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".MobileApptext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around items-center overflow-hidden   '>

            <div className="MobileApptext-cont w-[25%] h-[90%] flex flex-col justify-center ">

                <div className="MobileApp-subchild rounded-4xl overflow-hidden  ">
                    <div className="MobileAppItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>1. Analysing</h1>
                        </div>

                        <div className="MobileApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="MobileApp-subchild rounded-4xl overflow-hidden ">
                    <div className="MobileAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>2. Storyboard</h1>
                        </div>

                        <div className="MobileApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="MobileApp-subchild rounded-4xl overflow-hidden ">
                    <div className="MobileAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>3. Architecture</h1>
                        </div>

                        <div className="MobileApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="MobileApp-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="MobileAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Design</h1>
                        </div>

                        <div className="MobileApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="MobileApp-subchild rounded-4xl overflow-hidden ">
                    <div className="MobileAppItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>5. Delivery</h1>
                        </div>

                        <div className="MobileApp-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

            </div>



            <div className="MobileApptext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px] pt-33 ">
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>Analysing</h1>
                    <h1 className='text-white/70 text-[20px]'>Every project starts with a comprehensive analysis. Together, we discuss your needs, goals and the possibilities offered by different technologies. We answer questions such as:

                        - What exactly should the app do?"
                        - Who will use the app?"
                        - What do competitors offer and how do they perform?"
                        - How can a mobile app support business processes?"
                        - How much time do we have for developing the application?"
                        - What is the available budget?
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Storyboard</h1>
                    <h1 className='text-white/70 text-[20px]'>With a clear goal in mind, we start designing wireframes and storyboards. These provide a visual overview of what your mobile app will look like and what functionalities it will incorporate. This is the first step in translating your idea into a concrete design.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Architecture</h1>
                    <h1 className='text-white/70 text-[20px]'>The technical structure of your mobile application is crucial and forms the backbone of the project. Based on the wireframes and goals created, we design a strong foundation with data relay models, APIs, servers and management environments. Our developers ensure that all data flows, exchanges and customisations are programmed and managed. This way, we create a future-proof mobile app that is easy to maintain and ready for growth.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Design</h1>
                    <h1 className='text-white/70 text-[20px]'>During the design phase, we bring the concept to life by creating a clickable prototype. This gives you a clear picture of what your mobile app will roughly look like. During the feedback phase, we incorporate your input so that we can work together to create a perfect end product. It is also valuable to test the prototype outside the project team and with people from the target group, to discover possible problems, irregularities or areas for improvement in the user experience.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Delivery</h1>
                    <h1 className='text-white/70 text-[20px]'>Now our craftsmanship really comes into its own. We build and test your customised app extensively on different devices and systems, from Android to iOS, to ensure the application works optimally and meets the highest quality standards. Although 100% error-free software does not exist, we always strive to get as close to perfection as possible.</h1>
                </div>




            </div>
        </div>
    )
}

export default MobileAppFlexible
