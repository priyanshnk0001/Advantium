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


function Flexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".flextext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".flextext-main-cont", {
            scale: 0,
            // delay:0.2,
            duration: 2
        }, "flex")

        tl.from(".flex-subchild", {
            x: -500,
            stagger: 0.3,
        }, "flex")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".flex-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const flexItm = item.querySelector(".flexItm")
            const icon = item.querySelector(".flex-iconAnim");
            const texth1 = item.querySelector(".flextext-cont h1")
            if (!flexItm) return;
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

            const t3 = gsap.to(flexItm, {
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
            { trigger: ".flex-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".flex-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".flex-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".flex-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".flex-subchild:nth-child(5)", target: ".text05" },
            { trigger: ".flex-subchild:nth-child(6)", target: ".text06" },
            { trigger: ".flex-subchild:nth-child(7)", target: ".text07" },
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".flextext-main-cont > div", { opacity: 0, duration: 0.2});
                    gsap.to(targetImg, { opacity: 1, duration: 0.2});
                   
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".flextext-main-cont > div", { opacity: 0, duration: 0.2});
                    gsap.to(defaultImg, { opacity: 1, duration: 0.2});
                    
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

            <div className="flextext-cont w-[25%] h-[90%] ">

                <div className="flex-subchild rounded-4xl overflow-hidden  ">
                        <div className="flexItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[18px] text-white'>1. Flexible webdesign</h1>
                            </div>

                            <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>

                <div className="flex-subchild rounded-4xl overflow-hidden ">
                        <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[18px] text-white'>2. User goals</h1>
                            </div>

                            <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>


                <div className="flex-subchild rounded-4xl overflow-hidden ">
                        <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[18px] text-white'>3. Concrete choices</h1>
                            </div>

                            <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>

                <div className="flex-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>4. Components</h1>
                        </div>

                        <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="flex-subchild rounded-4xl overflow-hidden ">
                    <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>5. Development</h1>
                        </div>

                        <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="flex-subchild rounded-4xl overflow-hidden ">
                    <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>6. Delivery</h1>
                        </div>

                        <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                <div className="flex-subchild rounded-4xl overflow-hidden ">
                    <div className="flexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[18px] text-white'>7. Service & management</h1>
                        </div>

                        <div className="flex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


            </div>
            <div className="flextext-main-cont text-white w-[50%] h-[90vh] rounded-3xl relative ml-[-150px] ">
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-6xl'>Flexible webdesign</h1>
                    <h1 className='text-white/70 text-[18px]'>Web development is in full swing. Websites should not only be fast, clear and distinctive, but also able to move with the digital landscape. Nowadays, there is more and more room for flexibility in web design. Whereas fixed templates used to be the norm, dynamic components now allow for much more customisation and possibilities. Dynamic components act as building blocks that you can reuse to make easy adjustments without having to rebuild your entire website. Wondering how we build your ideal website?</h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-6xl'>User goals</h1>
                    <h1 className='text-white/70 text-[18px]'>It all starts with establishing user goals. Why is the website being visited and what should the user be able to do? We do this in a joint session with you, which we call 'Sprint 0'. Here we define exactly what the website is being visited for and what actions the user should be able to perform. For example, "As a visitor, I want to be able to read reviews to make my purchase decision". By identifying these goals, we can determine which functionalities and components are needed to optimise the experience.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Concrete choices</h1>
                    <h1 className='text-white/70 text-[18px]'>After Sprint 0, we start working on translating the goals into concrete design choices and functionalities. We start with a Design Sprint in which we determine the design and the desired elements together with you. This design is worked out in detail and is fully focused on achieving the user goals. At the same time, we ensure that we can flexibly implement the chosen functionalities and components in the website, so that we can easily respond to future wishes and adjustments.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Components</h1>
                    <h1 className='text-white/70 text-[18px]'>After the Design Sprint, we deploy the dynamic components. These include flexible building blocks such as review blocks, product lists or forms, which can be used in different places in the website. These components are self-contained and can be easily modified without affecting other parts of the website. This ensures customisation and simplicity in maintenance. Each component can be adapted visually to meet your needs.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Development</h1>
                    <h1 className='text-white/70 text-[18px]'>Once the design and functionalities have been approved, we start the development phase. Here, we build the website using the latest techniques and standards. Object-oriented programming allows us to divide the code into reusable objects, which we use in different places on the website. This makes the website faster, more efficient and easier to maintain, while we keep working on a solid and clean codebase.</h1>
                </div>
                <div className="text06 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Delivery</h1>
                    <h1 className='text-white/70 text-[18px]'>Tijdens de developmentfase testen we de website continu om ervoor te zorgen dat alles werkt zoals het hoort. Voordat we de website opleveren, doen we een uitgebreide test om eventuele bugs te fixen en alles in topvorm te krijgen. Na de lancering krijg je een training, zodat jij je content zelf kunt bijwerken en beheren. Dankzij de dynamische componenten kunnen we de website eenvoudig uitbreiden met nieuwe functionaliteiten, zonder dat er technische barrières zijn. Dit maakt de website schaalbaar en toekomstbestendig.</h1>
                </div>
                <div className="text07 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-6xl'>Service & management</h1>
                    <h1 className='text-white/70 text-[18px]'>After going live, we enter the management phase. Advantium remains responsible for the maintenance of your website, so that everything keeps running as it should. With a maintenance contract and SLA, we ensure that the quality remains guaranteed, so that you can concentrate on what really matters: growing your business. By adapting or adding dynamic components, we can deliver precisely customised solutions that continue to adapt to the client's future vision.</h1>
                </div>

               

            </div>
        </div>
    )
}

export default Flexible
