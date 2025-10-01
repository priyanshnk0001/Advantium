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


function SecurityFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".Securitytext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".Security-subchild", {
            x: -500,
            stagger: 0.3,
        }, "Security")

        tl.from(".Securitytext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "Security")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".Security-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const SecurityItm = item.querySelector(".SecurityItm")
            const icon = item.querySelector(".Security-iconAnim");
            const texth1 = item.querySelector(".Securitytext-cont h1")
            if (!SecurityItm) return;
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

            const t3 = gsap.to(SecurityItm, {
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
            { trigger: ".Security-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".Security-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".Security-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".Security-subchild:nth-child(4)", target: ".text04" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".Securitytext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".Securitytext-main-cont > div", { opacity: 0, duration: 0.2 });
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
        <div className='w-[100%]  h-[100vh] bg-slate-900 flex justify-around items-center overflow-hidden pt-20'>

            <div className="Securitytext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="Security-subchild rounded-4xl overflow-hidden  ">
                    <div className="SecurityItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>1. Privacy by design</h1>
                        </div>

                        <div className="Security-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Security-subchild rounded-4xl overflow-hidden ">
                    <div className="SecurityItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>2. Tech</h1>
                        </div>

                        <div className="Security-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="Security-subchild rounded-4xl overflow-hidden ">
                    <div className="SecurityItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>3. Compliance</h1>
                        </div>

                        <div className="Security-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Security-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="SecurityItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Training</h1>
                        </div>

                        <div className="Security-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>




            </div>



            <div className="Securitytext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>Privacy by design</h1>
                    <h1 className='text-white/70 text-[20px]'>We implement privacy measures from the design stage, ensuring that personal data is not collected inappropriately and that necessary security measures are in place. Our focus is on integrating privacy from the beginning of a project, ensuring that systems and applications comply with the AVG and other regulations. This ensures that we meet the highest security standards, giving clients peace of mind that their data is well protected.
                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Tech</h1>
                    <h1 className='text-white/70 text-[20px]'>We maken gebruik van geavanceerde technologieën, zoals geautomatiseerde security scanners, om continu kwetsbaarheden te monitoren en tijdig te verhelpen. Door gebruik te maken van proactieve technologieën kunnen we snel reageren op potentiële dreigingen en de veiligheid van systemen blijven waarborgen. Dit stelt ons in staat om risico’s tijdig te identificeren en de impact te minimaliseren, wat de algehele beveiliging verhoogt.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Compliance</h1>
                    <h1 className='text-white/70 text-[20px]'>Wij houden voortdurend de wetgeving in de gaten en passen onze systemen aan om te voldoen aan de nieuwste vereisten, zoals de AVG. Dit helpt onze opdrachtgevers om compliant te blijven zonder zelf alle details te hoeven beheren. Door de naleving van de wetgeving te waarborgen, zorgen we ervoor dat organisaties zich geen zorgen hoeven te maken over juridische gevolgen en zich volledig kunnen richten op hun kernactiviteiten.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Training</h1>
                    <h1 className='text-white/70 text-[20px]'>We offer workshops and coaching for both our employees and clients, so that everyone understands how to ensure their responsibility in privacy and security. By providing targeted training, we raise awareness about security and privacy and help employees and clients handle sensitive data responsibly. This contributes to a culture of security and awareness within the organisation.
                        <br /><br />
                        In all this, we ensure full transparency in our processes and policies, so that clients are always aware of the security of their data. We take responsibility for security so that organisations can concentrate on their day-to-day business, knowing that their data is managed securely and compliantly.

                    </h1>
                </div>
               

            </div>
        </div>
    )
}

export default SecurityFlexible
