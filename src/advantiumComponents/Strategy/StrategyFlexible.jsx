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


function StrategyFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".Strategytext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".Strategy-subchild", {
            x: -500,
            stagger: 0.3,
        }, "Strategy")

        tl.from(".Strategytext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "Strategy")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".Strategy-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const StrategyItm = item.querySelector(".StrategyItm")
            const icon = item.querySelector(".Strategy-iconAnim");
            const texth1 = item.querySelector(".Strategytext-cont h1")
            if (!StrategyItm) return;
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

            const t3 = gsap.to(StrategyItm, {
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
            { trigger: ".Strategy-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".Strategy-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".Strategy-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".Strategy-subchild:nth-child(4)", target: ".text04" },
           
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".Strategytext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".Strategytext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around items-center overflow-hidden pt-20  '>

            <div className="Strategytext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="Strategy-subchild rounded-4xl overflow-hidden  ">
                    <div className="StrategyItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>1. Digital roadmap</h1>
                        </div>

                        <div className="Strategy-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Strategy-subchild rounded-4xl overflow-hidden ">
                    <div className="StrategyItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>2. Analysing</h1>
                        </div>

                        <div className="Strategy-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="Strategy-subchild rounded-4xl overflow-hidden ">
                    <div className="StrategyItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>3. Research and advice</h1>
                        </div>

                        <div className="Strategy-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Strategy-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="StrategyItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Change management</h1>
                        </div>

                        <div className="Strategy-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

               

            </div>



            <div className="Strategytext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">
                
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>Digital roadmap</h1>
                    <h1 className='text-white/70 text-[20px]'>Drawing up a digital roadmap starts with an intensive Sprint 0, in which we get to know your organisation and market completely. The business model and internal processes form the basis, while we curiously investigate how the lines run and where the biggest opportunities lie. Together, during interactive sessions, we clearly map out the essence of your issue or need. This inventory phase results in strategic goals and a digital strategy that fits your organisation perfectly. Thanks to this cooperation and short turnaround time, a solid foundation is laid for what follows: the translation into concrete digital solutions.</h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Analysing</h1>
                    <h1 className='text-white/70 text-[20px]'>A digital transformation starts with a thorough understanding of what is already there. By analysing current business processes and technologies, we identify bottlenecks and opportunities. We examine how processes run, which tools are used and where inefficiencies or areas for improvement lie. This helps to understand what works well and what could be improved, both technologically and organisationally. With this analysis, we lay a solid foundation for targeted improvements and the integration of new solutions that will make your organisation stronger and future-proof.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Research and advice</h1>
                    <h1 className='text-white/70 text-[20px]'>Setting up an effective digital landscape requires a combination of insight and customisation. Using the C4 model, we clearly map the relationship between applications - both standard and customised. We examine which solutions best suit your organisation and how they can be integrated into the existing landscape. Here, we look not only at the technology, but also at the strategic impact and future growth opportunities. This research results in concrete advice that allows you to optimise your digital ecosystem so that it is ready to deliver value at both operational and strategic levels.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Change management</h1>
                    <h1 className='text-white/70 text-[20px]'>In digital transformation, it is not only important to implement new technologies, but also to bring the organisation and its employees along with the change. We support in strengthening internal acceptance by actively involving employees and equipping them with the right knowledge and skills. This helps to reduce any resistance and ensures that the technology is successfully integrated into daily business processes. This not only helps speed up implementation, but ensures that new technologies are effectively integrated into existing processes and actually contribute to the organisation's strategic goals. Through this focus on both technology and culture, we make digital transformation sustainable and successful.</h1>
                </div>
               
               



            </div>
        </div>
    )
}

export default StrategyFlexible
