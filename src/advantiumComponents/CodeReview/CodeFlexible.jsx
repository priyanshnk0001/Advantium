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


function CodeFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".codetext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".codetext-main-cont", {
            scale: 0,
            duration: 2
        }, "code")

        tl.from(".code-subchild", {
            x: -500,
            stagger: 0.3,
        }, "code")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".code-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const codeItm = item.querySelector(".codeItm")
            const icon = item.querySelector(".code-iconAnim");
            const texth1 = item.querySelector(".codetext-cont h1")
            if (!codeItm) return;
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

            const t3 = gsap.to(codeItm, {
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
            { trigger: ".code-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".code-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".code-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".code-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".code-subchild:nth-child(5)", target: ".text05" },
           
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".codetext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".codetext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%]  bg-gray-900 flex justify-around items-center overflow-hidden pb-20  '>

            <div className="codetext-cont w-[25%] h-[90%] flex flex-col justify-center">

                <div className="code-subchild rounded-4xl overflow-hidden  ">
                    <div className="codeItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>1. Code reviews</h1>
                        </div>

                        <div className="code-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="code-subchild rounded-4xl overflow-hidden ">
                    <div className="codeItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>2. Recommendations</h1>
                        </div>

                        <div className="code-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="code-subchild rounded-4xl overflow-hidden ">
                    <div className="codeItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>3. Takeover software</h1>
                        </div>

                        <div className="code-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="code-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="codeItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Optimisation</h1>
                        </div>

                        <div className="code-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="code-subchild rounded-4xl overflow-hidden ">
                    <div className="codeItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>5. Maintenance & management</h1>
                        </div>

                        <div className="code-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

            </div>



            <div className="codetext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px] pt-33 ">
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>Code reviews</h1>
                    <h1 className='text-white/70 text-[20px]'>We carry out thorough code reviews to identify inefficiencies, technical errors and improvement opportunities to optimise the quality and performance of your software.</h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Recommendations</h1>
                    <h1 className='text-white/70 text-[20px]'>After the code review, we provide a detailed report with recommendations to improve code quality and performance. We also provide suggestions for improving security and maintainability.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Takeover software</h1>
                    <h1 className='text-white/70 text-[20px]'>Before Advantium takes over responsibility for your existing software, we perform a thorough audit and formulate a robust management approach. This ensures that your application will soon be properly maintained and developed, without you having to worry about technical complications. We ensure a smooth transition so that business processes are not disrupted. We make clear agreements based on specific conditions so that management and further development can continue without interruptions.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Optimisation</h1>
                    <h1 className='text-white/70 text-[20px]'>We ensure that the application is ready for the future. We implement targeted optimisations to make the application more efficient, faster and more robust. This includes applying best practices, modernising the technology stack and improving scalability. By continuously analysing and implementing improvements, we ensure that the application not only meets current requirements, but is also ready for growth and innovation.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Maintenance & management</h1>
                    <h1 className='text-white/70 text-[20px]'>Advantium offers service packages that continuously support your software. We offer maintenance, management and further development of your application, including SLA agreements, so that you are always assured of a well-functioning application.</h1>
                </div>
               



            </div>
        </div>
    )
}

export default CodeFlexible
