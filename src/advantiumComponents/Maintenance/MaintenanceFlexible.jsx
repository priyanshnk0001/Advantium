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


function MaintenanceFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".Maintenancetext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".Maintenance-subchild", {
            x: -500,
            stagger: 0.3,
        }, "Maintenance")

        tl.from(".Maintenancetext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "Maintenance")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".Maintenance-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const MaintenanceItm = item.querySelector(".MaintenanceItm")
            const icon = item.querySelector(".Maintenance-iconAnim");
            const texth1 = item.querySelector(".Maintenancetext-cont h1")
            if (!MaintenanceItm) return;
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

            const t3 = gsap.to(MaintenanceItm, {
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
            { trigger: ".Maintenance-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".Maintenance-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".Maintenance-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".Maintenance-subchild:nth-child(4)", target: ".text04" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".Maintenancetext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".Maintenancetext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex lg:justify-around md:justify-between items-center overflow-hidden pt-20 lg:px-0 md:px-20  '>

            <div className="Maintenancetext-cont lg:w-[25%] md:w-[35%] h-[90%] flex flex-col  ">

                <div className="Maintenance-subchild rounded-4xl overflow-hidden  ">
                    <div className="MaintenanceItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>1. What is it?</h1>
                        </div>

                        <div className="Maintenance-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Maintenance-subchild rounded-4xl overflow-hidden ">
                    <div className="MaintenanceItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>2. Advantages</h1>
                        </div>

                        <div className="Maintenance-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="Maintenance-subchild rounded-4xl overflow-hidden ">
                    <div className="MaintenanceItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>3. Better software</h1>
                        </div>

                        <div className="Maintenance-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Maintenance-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="MaintenanceItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Case study</h1>
                        </div>

                        <div className="Maintenance-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                



            </div>



            <div className="Maintenancetext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>What is it?</h1>
                    <h1 className='text-white/70 text-[18px]'>Automatic testing helps developers detect bugs early, even before code enters production. This process automatically checks whether functions work as intended, without a developer having to manually test everything. Think of testing individual functions (unit tests), the collaboration between different components (integration tests) and entire systems. Building testing in keeps software stable and reliable. Automated testing is not necessary for every project, but it is indispensable for larger and more complex applications. Especially for projects of 250 hours or more or for software that depends on links to external systems, automated testing prevents errors and delays. Test automation is also a smart choice for applications with a Data Management Platform (DMP) or systems where small changes can have major consequences.
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>Advantages</h1>
                    <h1 className='text-white/70 text-[18px]'>For developers, automated testing offers many advantages. It ensures better code quality because tests force structured and testable programming. It also speeds up development, as bugs are detected early and do not cause delays later on. It also increases software reliability, allowing releases to be rolled out with more confidence. Moreover, tests serve as documentation as they show exactly how functions are supposed to work.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Better software</h1>
                    <h1 className='text-white/70 text-[18px]'>Not only developers, but also organisations benefit from automated testing. Fewer bugs and more stable software improve the customer experience, as users experience fewer problems. In addition, maintenance becomes more efficient because it is immediately visible whether an update affects existing functions. This saves time and costs. The higher quality of software allows an organisation to stand out from the competition and increase customer trust.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Case study</h1>
                    <h1 className='text-white/70 text-[18px]'>In the development of the Data Management Platform for Thermen Resorts automatic testing played a major role.Extensive unit tests were set up to monitor complex processes, such as product availability, blockades and the Mollie link for payments. These tests allowed early detection of errors, for example when calculating blockages within product sets. A failed test immediately made it clear that the original solution was not fully working, leading to a quick revision and correct implementation - even before anyone manually checked the code or the customer interacted with it. With a test coverage of 35%, not all lines of code are tested, but the most critical parts are, allowing major changes to be implemented safely without compromising core functionality. This ensured that Thermen Resorts received hardly any high-priority bugs after a year, especially within the tested components.</h1>
                </div>
                

            </div>
        </div>
    )
}

export default MaintenanceFlexible
