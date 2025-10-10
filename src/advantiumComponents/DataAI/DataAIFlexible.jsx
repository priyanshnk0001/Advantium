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


function DataAIFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".DataAItext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".DataAI-subchild", {
            x: -500,
            stagger: 0.3,
        }, "DataAI")

        tl.from(".DataAItext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "DataAI")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".DataAI-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const DataAIItm = item.querySelector(".DataAIItm")
            const icon = item.querySelector(".DataAI-iconAnim");
            const texth1 = item.querySelector(".DataAItext-cont h1")
            if (!DataAIItm) return;
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

            const t3 = gsap.to(DataAIItm, {
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
            { trigger: ".DataAI-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".DataAI-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".DataAI-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".DataAI-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".DataAI-subchild:nth-child(5)", target: ".text05" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".DataAItext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".DataAItext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex lg:justify-around md:justify-between lg:px-0 md:px-10 items-center overflow-hidden pt-20  '>

            <div className="DataAItext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="DataAI-subchild rounded-4xl overflow-hidden  ">
                    <div className="DataAIItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>1. Decision-making</h1>
                        </div>

                        <div className="DataAI-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="DataAI-subchild rounded-4xl overflow-hidden ">
                    <div className="DataAIItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>2. Efficiency in processes</h1>
                        </div>

                        <div className="DataAI-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="DataAI-subchild rounded-4xl overflow-hidden ">
                    <div className="DataAIItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>3. Personalisation at scale</h1>
                        </div>

                        <div className="DataAI-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="DataAI-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="DataAIItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Better customer interactions</h1>
                        </div>

                        <div className="DataAI-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                <div className="DataAI-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="DataAIItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>5. Working cost-effectively</h1>
                        </div>

                        <div className="DataAI-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>



            </div>



            <div className="DataAItext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>Decision-making</h1>
                    <h1 className='text-white/70 text-[18px]'>AI enables you to make data-driven decisions. By recognising patterns in data and acting on them, you can make predictions and take the right actions. This not only helps you react faster to changes, but also better inform strategic choices.
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>Efficiency in processes</h1>
                    <h1 className='text-white/70 text-[18px]'>AI makes it possible to automate repetitive tasks. From simple administrative operations to more complex business logic, AI can take over and streamline tasks, allowing employees to focus on more strategic and valuable work.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Personalisation at scale</h1>
                    <h1 className='text-white/70 text-[18px]'>With AI, you can personalise customer interactions based on data. Think personalised recommendations, tailored marketing campaigns and proactive customer service. AI makes it possible to respond to the needs of individual customers on a large scale, boosting customer satisfaction and loyalty.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Better customer interactions</h1>
                    <h1 className='text-white/70 text-[18px]'>AI offers the opportunity to improve customer communication through, for example, chatbots and virtual assistants. These systems can provide 24/7 support, not only answering simple questions but also solving complex problems, enhancing the customer experience.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Working cost-effectively</h1>
                    <h1 className='text-white/70 text-[18px]'>By automating processes, reducing human error and making efficient use of data, organisations can save costs. AI solutions can also lead to higher margins through smarter planning and more focused activities.

                    </h1>
                </div>

            </div>
        </div>
    )
}

export default DataAIFlexible
