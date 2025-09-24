import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import CallMadeIcon from '@mui/icons-material/CallMade';



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);
function SoftSolution() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".softImg-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".softImg-main-cont", {
            scale: 0,
            // delay:0.2,
            duration: 2
        }, "soft")

        tl.from(".soft-subchild", {
            x: 500,
            stagger: 0.3,
        }, "soft")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".soft-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const itm = item.querySelector(".itm")
            const icon = item.querySelector(".soft-iconAnim");
            const texth1 = item.querySelector(".softImg-cont h1")
            if (!itm) return;
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

            const t3 = gsap.to(itm, {
                background: "linear-gradient(to right, white, rgba(56,189,248,0.7), white)",
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
        const defaultImg = document.querySelector(".CMP-img");
        const mappings = [
            { trigger: ".soft-subchild:nth-child(1)", target: ".CMP-img" },
            { trigger: ".soft-subchild:nth-child(2)", target: ".Apps-img" },
            { trigger: ".soft-subchild:nth-child(3)", target: ".web-CMS-img" },
            { trigger: ".soft-subchild:nth-child(4)", target: ".E-com-img" },
            { trigger: ".soft-subchild:nth-child(5)", target: ".DMP-img" },
            { trigger: ".soft-subchild:nth-child(6)", target: ".LMS-img" },
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".softImg-main-cont > div", { opacity: 0, duration: 0.5 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.5 });
                    gsap.to(".CMP-text", { opacity: 0 })
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".softImg-main-cont > div", { opacity: 0, duration: 0.5 });
                    gsap.to(defaultImg, { opacity: 1, duration: 0.5 });
                    gsap.to(".CMP-text", { opacity: 1 })
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around items-center overflow-x-hidden  '>
            <div className="softImg-main-cont w-[50%] h-[90vh] rounded-3xl relative">
                <div className="CMP-img w-[100%] h-[90vh] rounded-3xl absolute bg ">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech002.jpg" alt="" />
                    <h1 className='CMP-text text-[20px]  text-white  font-extrabold absolute top-5 left-5'>What software solution <br /> are you looking for?</h1>
                </div>

                <div className="Apps-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech003.jpg" alt="" />
                </div>

                <div className="web-CMS-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech004.png" alt="" />
                </div>

                <div className="E-com-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech005.jpg" alt="" />
                </div>

                <div className="DMP-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech006.jpg" alt="" />
                </div>

                <div className="LMS-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="tech007.webp" alt="" />
                </div>

            </div>
            <div className="softImg-cont w-[40%] h-[90%]">

                <div className="soft-subchild ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>Customer and management portals</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="soft-subchild ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>Apps</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="soft-subchild ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>Websites & CMS</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="soft-subchild .pppp ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>E-commerce solutions</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="soft-subchild ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>Data Management Platform</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="soft-subchild ">
                    <div className="itm flex justify-between items-center border-b-1  border-gray-400    py-10">
                        <div className='flex items-center'>
                            <h1 className='text-[30px] text-white'>Learning Management System</h1>
                        </div>

                        <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SoftSolution
