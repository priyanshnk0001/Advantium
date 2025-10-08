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


function ReplatformFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".Replatformtext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".Replatform-subchild", {
            x: -500,
            stagger: 0.3,
        }, "Replatform")

        tl.from(".Replatformtext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "Replatform")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".Replatform-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const ReplatformItm = item.querySelector(".ReplatformItm")
            const icon = item.querySelector(".Replatform-iconAnim");
            const texth1 = item.querySelector(".Replatformtext-cont h1")
            if (!ReplatformItm) return;
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

            const t3 = gsap.to(ReplatformItm, {
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
            { trigger: ".Replatform-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".Replatform-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".Replatform-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".Replatform-subchild:nth-child(4)", target: ".text04" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".Replatformtext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".Replatformtext-main-cont > div", { opacity: 0, duration: 0.2 });
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

            <div className="Replatformtext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="Replatform-subchild rounded-4xl overflow-hidden  ">
                    <div className="ReplatformItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>1. Analysis digital environment</h1>
                        </div>

                        <div className="Replatform-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Replatform-subchild rounded-4xl overflow-hidden ">
                    <div className="ReplatformItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>2. Technical architecture</h1>
                        </div>

                        <div className="Replatform-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="Replatform-subchild rounded-4xl overflow-hidden ">
                    <div className="ReplatformItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>3. Migration and integration</h1>
                        </div>

                        <div className="Replatform-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Replatform-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="ReplatformItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Maintenance & Service</h1>
                        </div>

                        <div className="Replatform-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>




            </div>



            <div className="Replatformtext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>Analysis digital environment</h1>
                    <h1 className='text-white/70 text-[18px]'>Migrating to a new platform starts by thoroughly analysing the existing digital environment. This helps determine which systems can be migrated, which are outdated and which components need to be replaced completely. Advantium provides detailed assessments to determine which technologies and systems provide the best foundation for the future. We ensure that the analysis is carried out carefully, making the right choices not only for the short-term, but also for a sustainable and growth-oriented future of your business.
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>Technical architecture</h1>
                    <h1 className='text-white/70 text-[18px]'>We help design a digital architecture that fits your company's needs. A Data Management Platform (DMP) is often implemented as middleware to connect systems and optimise data flows. This makes the digital landscape future-proof and flexible, with opportunities for expansion as your business grows.
                        <br /><br />

                        Our focus is not only on technology, but above all on value for your business. The chosen architecture meets current requirements and is prepared for future developments, such as new tools and headless CMS architectures. By choosing a scalable and modular architecture, we create a digital foundation that easily grows with your business.


                    </h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Migration and integration</h1>
                    <h1 className='text-white/70 text-[18px]'>One of the biggest challenges of replatforming is migrating data and systems without losing functionality or customer data. Advantium guides you through the entire migration process, including data migration, integration with existing systems and extensive testing to minimise risks. The aim is to achieve a smooth transition without inconveniencing customers or users.
                        <br /><br />

                        We understand that moving systems and data is a complex process, but at Advantium, we make sure you are completely unburdened. We guide you through every phase, from testing the new infrastructure to the actual go live. Our technical experts ensure that all integrations are seamless, so that the user experience remains optimal.


                    </h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Maintenance & Service</h1>
                    <h1 className='text-white/70 text-[18px]'>After migration, Advantium stays involved by providing aftercare in the form of service packages, SLAs and ongoing management. This ensures that your digital platform continues to perform optimally even after the project is completed. We understand that replatforming success does not end with the launch of the new system. This is why we provide ongoing support and ensure that your platform is always up-to-date and functioning properly.
                        <br /><br />

                        Our service packages offer not only proactive management, but also optimisation, so you get the most out of your new digital environment. Flexibility and scalability are key, allowing your business to adapt quickly to new opportunities and technological developments. By ensuring a strong technical foundation, we minimise risks and keep your business on track during and after migration.

                    </h1>
                </div>


            </div>
        </div>
    )
}

export default ReplatformFlexible
