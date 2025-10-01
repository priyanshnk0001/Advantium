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


function LMSflexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".LMSflextext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 90%",
                end: "top 10%",
                // markers:true,
            }
        });

        tl.from(".LMSflextext-main-cont", {
            scale: 0,
            // delay:0.2,
            duration: 2
        }, "LMSflex")

        tl.from(".LMSflex-subchild", {
            x: -500,
            stagger: 0.3,
        }, "LMSflex")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".LMSflex-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const LMSflexItm = item.querySelector(".LMSflexItm")
            const icon = item.querySelector(".LMSflex-iconAnim");
            const texth1 = item.querySelector(".LMSflextext-cont h1")
            if (!LMSflexItm) return;
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

            const t3 = gsap.to(LMSflexItm, {
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
            { trigger: ".LMSflex-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".LMSflex-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".LMSflex-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".LMSflex-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".LMSflex-subchild:nth-child(5)", target: ".text05" },
            { trigger: ".LMSflex-subchild:nth-child(6)", target: ".text06" },
            { trigger: ".LMSflex-subchild:nth-child(7)", target: ".text07" },
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".LMSflextext-main-cont > div", { opacity: 0, duration: 0.2});
                    gsap.to(targetImg, { opacity: 1, duration: 0.2});
                   
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".LMSflextext-main-cont > div", { opacity: 0, duration: 0.2});
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around items-center overflow-hidden    '>

            <div className="LMSflextext-cont w-[25%] h-[90%]  flex flex-col justify-center ">

                <div className="LMSflex-subchild rounded-4xl overflow-hidden  ">
                        <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[20px] text-white'>1. LMS by Advantium</h1>
                            </div>

                            <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>

                <div className="LMSflex-subchild rounded-4xl overflow-hidden ">
                        <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[20px] text-white'>2. Analysis</h1>
                            </div>

                            <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>


                <div className="LMSflex-subchild rounded-4xl overflow-hidden ">
                        <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                            <div className='flex items-center pl-7'>
                                <h1 className='text-[20px] text-white'>3. Design and planning</h1>
                            </div>

                            <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                                <CallMadeIcon className="!w-7 !h-7 text-black " />
                            </div>
                        </div>

                </div>

                <div className="LMSflex-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Development and integration</h1>
                        </div>

                        <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="LMSflex-subchild rounded-4xl overflow-hidden ">
                    <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='LMSflex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>5. Testing and feedback</h1>
                        </div>

                        <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="LMSflex-subchild rounded-4xl overflow-hidden ">
                    <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>6. Implementation and training</h1>
                        </div>

                        <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                <div className="LMSflex-subchild rounded-4xl overflow-hidden ">
                    <div className="LMSflexItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>7. Aftercare and further development</h1>
                        </div>

                        <div className="LMSflex-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


            </div>

            <div className="LMSflextext-main-cont text-white w-[50%] h-[90vh] rounded-3xl relative ml-[-250px] mt-30  ">
                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>LMS by Advantium</h1>
                    <h1 className='text-white/70 text-[20px]'>Bij Advantium volgen we een gestructureerd proces om ervoor te zorgen dat het LMS systeem dat we ontwikkelen aansluit bij de specifieke behoeften van jouw organisatie. Met deze werkwijze zorgen we ervoor dat het learning management system (LMS) perfect aansluit bij jouw organisatie, de leerbehoeften van je medewerkers ondersteunt en bijdraagt aan de lange termijn groei van jouw bedrijf. Benieuwd in welke fasen wij werken?</h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Analysis</h1>
                    <h1 className='text-white/70 text-[20px]'>We beginnen met een grondige analyse van jouw organisatie en leerbehoeften. Dit doen we door samen met jouw team de doelstellingen, het type trainingen en de gebruikersvereisten in kaart te brengen. We onderzoeken ook de technische vereisten en eventuele integraties met andere systemen, zoals HR- of ERP-systemen.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Design and planning</h1>
                    <h1 className='text-white/70 text-[20px]'>Based on the input from the analysis phase, we prepare a detailed design. This includes both the functional and visual aspects of the LMS, with a focus on usability and scalability. We plan the project phases and establish a timeline for development, so that we can clearly communicate expectations and progress.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Development and integration</h1>
                    <h1 className='text-white/70 text-[20px]'>In this phase, we start the actual development of the LMS system. We ensure that the platform meets the predefined requirements and, where necessary, integrate the system with existing software such as HR systems or business applications. This ensures streamlined operation and simplifies management.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Testing and feedback</h1>
                    <h1 className='text-white/70 text-[20px]'>Zodra de eerste versie van het LMS klaar is, voeren we uitgebreide tests uit om te controleren of alles functioneert zoals verwacht. We betrekken jouw team bij het testen, zodat we direct kunnen bijsturen en eventuele verbeteringen kunnen doorvoeren. Dit zorgt ervoor dat het systeem optimaal werkt voordat het live gaat.</h1>
                </div>
                <div className="text06 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Implementation and training</h1>
                    <h1 className='text-white/70 text-[20px]'>After successful testing, we implement the LMS system in your organisation. We provide training to administrators and users so that everyone is well prepared to use the system effectively. We ensure there is adequate support during the transition period.</h1>
                </div>
                <div className="text07 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Aftercare and further development</h1>
                    <h1 className='text-white/70 text-[20px]'>Na de implementatie blijven we betrokken. We bieden doorlopende ondersteuning en stellen verbeteringen voor op basis van gebruikersfeedback en nieuwe behoeften. Als je organisatie groeit of de eisen veranderen, passen we het LMS aan om altijd te voldoen aan jouw veranderende wensen.</h1>
                </div>

               

            </div>
        </div>
    )
}

export default LMSflexible
