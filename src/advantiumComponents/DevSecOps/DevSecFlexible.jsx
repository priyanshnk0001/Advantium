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


function DevSecFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".DevSectext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".DevSec-subchild", {
            x: -500,
            stagger: 0.3,
        }, "DevSec")

        tl.from(".DevSectext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "DevSec")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".DevSec-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const DevSecItm = item.querySelector(".DevSecItm")
            const icon = item.querySelector(".DevSec-iconAnim");
            const texth1 = item.querySelector(".DevSectext-cont h1")
            if (!DevSecItm) return;
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

            const t3 = gsap.to(DevSecItm, {
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
            { trigger: ".DevSec-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".DevSec-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".DevSec-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".DevSec-subchild:nth-child(4)", target: ".text04" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".DevSectext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".DevSectext-main-cont > div", { opacity: 0, duration: 0.2 });
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

            <div className="DevSectext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="DevSec-subchild rounded-4xl overflow-hidden  ">
                    <div className="DevSecItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>1. DevSecOps</h1>
                        </div>

                        <div className="DevSec-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="DevSec-subchild rounded-4xl overflow-hidden ">
                    <div className="DevSecItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>2. Faster Time-to-Market</h1>
                        </div>

                        <div className="DevSec-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="DevSec-subchild rounded-4xl overflow-hidden ">
                    <div className="DevSecItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>3. Quality and safety</h1>
                        </div>

                        <div className="DevSec-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="DevSec-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="DevSecItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Cost savings</h1>
                        </div>

                        <div className="DevSec-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                <div className="DevSec-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="DevSecItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>5. Better cooperation</h1>
                        </div>

                        <div className="DevSec-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>



            </div>



            <div className="DevSectext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>DevSecOps</h1>
                    <h1 className='text-white/70 text-[18px]'>Many organisations face the same pain points: slow development cycles, outdated processes, lack of collaboration between teams, and a growing threat of cyber attacks. DevSecOps addresses these problems by enforcing collaboration between developers, security teams and operations, automating the process, and ensuring security from the early stages.
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>Faster Time-to-Market</h1>
                    <h1 className='text-white/70 text-[18px]'>The demand for fast software delivery is greater than ever, but this should never be at the expense of quality or security. DevSecOps can significantly shorten software development cycles by automating many processes. Think of automated builds, tests and deployments, allowing you to respond quickly to new requirements or market conditions. Teams can receive immediate feedback and iterate quickly, without long waiting times.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Quality and safety</h1>
                    <h1 className='text-white/70 text-[18px]'>In a traditional development cycle, security is often only checked at the end of the process. This leads to risks and delays if vulnerabilities are found. With DevSecOps, automated security checks and tests are integrated into every stage of the development process. This allows vulnerabilities to be detected and fixed early on, making the software more stable and secure. Moreover, this continuous security ensures that the application always complies with the latest security standards.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Cost savings</h1>
                    <h1 className='text-white/70 text-[18px]'>By building security and quality into the development cycle from the beginning, the number of bugs and vulnerabilities found later in the process is greatly reduced. This saves costs that would otherwise be lost on fixing bugs or security issues. Moreover, it lowers the cost of manual operations and enables more efficient processes, which also helps reduce waste.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Better cooperation</h1>
                    <h1 className='text-white/70 text-[18px]'>DevSecOps breaks the traditional separation between development, operations and security teams. Instead of these teams working separately, collaboration is encouraged. This allows for faster feedback loops and smoother integration of security into the development process. Teams can react faster to problems and work together more effectively to improve the final solution.
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default DevSecFlexible
