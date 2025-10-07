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


function TechFlexible() {





    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: (".Techtext-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 95%",
                end: "top 48%",
                // markers:true,
            }
        });
        tl.from(".Tech-subchild", {
            x: -500,
            stagger: 0.3,
        }, "Tech")

        tl.from(".Techtext-main-cont", {
            scale: 0,
            duration: 1.5
        }, "Tech")

    })


    useGSAP(() => {
        const items = document.querySelectorAll(".Tech-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const TechItm = item.querySelector(".TechItm")
            const icon = item.querySelector(".Tech-iconAnim");
            const texth1 = item.querySelector(".Techtext-cont h1")
            if (!TechItm) return;
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

            const t3 = gsap.to(TechItm, {
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
            { trigger: ".Tech-subchild:nth-child(1)", target: ".text01" },
            { trigger: ".Tech-subchild:nth-child(2)", target: ".text02" },
            { trigger: ".Tech-subchild:nth-child(3)", target: ".text03" },
            { trigger: ".Tech-subchild:nth-child(4)", target: ".text04" },
            { trigger: ".Tech-subchild:nth-child(5)", target: ".text05" },

        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".Techtext-main-cont > div", { opacity: 0, duration: 0.2 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.2 });

                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".Techtext-main-cont > div", { opacity: 0, duration: 0.2 });
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

            <div className="Techtext-cont w-[25%] h-[90%] flex flex-col  ">

                <div className="Tech-subchild rounded-4xl overflow-hidden  ">
                    <div className="TechItm flex justify-between items-center border-b-1  border-gray-400      py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>1. Blueprinting</h1>
                        </div>

                        <div className="Tech-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Tech-subchild rounded-4xl overflow-hidden ">
                    <div className="TechItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>2. Advice</h1>
                        </div>

                        <div className="Tech-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>


                <div className="Tech-subchild rounded-4xl overflow-hidden ">
                    <div className="TechItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>3. Designing ecosystems</h1>
                        </div>

                        <div className="Tech-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>

                <div className="Tech-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="TechItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>4. Implementation</h1>
                        </div>

                        <div className="Tech-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>
                <div className="Tech-subchild rounded-4xl overflow-hidden .pppp ">
                    <div className="TechItm flex justify-between items-center border-b-1  border-gray-400    py-5">
                        <div className='flex items-center pl-7'>
                            <h1 className='text-[20px] text-white'>5. Maintenance & management</h1>
                        </div>

                        <div className="Tech-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                            <CallMadeIcon className="!w-7 !h-7 text-black " />
                        </div>
                    </div>

                </div>



            </div>



            <div className="Techtext-main-cont text-white w-[50%] h-[90vh]  rounded-3xl relative ml-[-250px]  ">

                <div className="text01 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10  ">
                    <h1 className='text-7xl'>Blueprinting</h1>
                    <h1 className='text-white/70 text-[20px]'>Need help developing a customized technical architecture that perfectly matches your organization's specific needs and goals? We can help! <br /><br />

                        With the C4 model, we create a clear and structured blueprint that visualizes the technical components and their interrelationships. This ensures that the architecture is understandable and flexible, so your systems perform optimally and can grow with the developments within your organization.


                    </h1>
                </div>
                <div className="text02 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0   ">
                    <h1 className='text-7xl'>Advice</h1>
                    <h1 className='text-white/70 text-[20px]'>We advise on the best technology choices, such as frameworks, hosting, CMS and integration tools. Thanks to our broad industry knowledge, we know exactly which technologies are best suited to your organisation's unique needs. This enables us to make informed choices that ensure efficient, secure and future-proof systems, and a solid foundation for your digital platforms. Whether it's choosing a flexible CMS, finding reliable hosting solutions, or integrating systems to optimise your processes, we ensure that the chosen technologies not only fit your current needs, but also grow with your organisation.</h1>
                </div>
                <div className="text03 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Designing ecosystems</h1>
                    <h1 className='text-white/70 text-[20px]'>At Advantium, we design modular and future-proof ecosystems that are flexible and scalable. This means that we divide systems into different, easily manageable parts (modules) that can be easily adapted or extended, without the need to rebuild everything from scratch. This allows you to continue developing your digital platforms in the future without major disruptions. We also ensure that the links between different systems work well and that everything remains user-friendly, so that it is not only technically strong, but also easy for you and your team to manage and use. The result is a system that grows with your organisation and is ready for the future.</h1>
                </div>
                <div className="text04 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Implementation</h1>
                    <h1 className='text-white/70 text-[20px]'>We provide comprehensive guidance on the implementation of your new systems to ensure everything runs smoothly and efficiently. We ensure that the transition to the new technical architecture is well managed, with clear steps and timelines, so there are no unexpected bumps in the road. Our team works closely with your organisation to ensure that everything is implemented as required, so that your systems are up and running quickly and meet expectations straight away. We take the time to answer any questions and make sure your team is well prepared to use the new technology.</h1>
                </div>
                <div className="text05 w-[100%] h-[90vh] rounded-3xl absolute pt-5 flex flex-col gap-10 opacity-0  ">
                    <h1 className='text-7xl'>Maintenance & management</h1>
                    <h1 className='text-white/70 text-[20px]'>Do you want to be assured of a stable, secure and optimally performing digital platform? Advantium offers ongoing maintenance and management support to ensure your systems always remain up-to-date and reliable. With proactive monitoring, timely updates and technical support, we minimise risks and maximise performance. Any bugs or incidents are dealt with quickly via our Service Desk, and thanks to our clear Service Level Agreements (SLA), you always know where you stand. <br /><br />

                        We like to think strategically with you about improvements and optimisations, so that your digital landscape not only continues to function well, but can also grow along with your ambitions.

                    </h1>
                </div>





            </div>
        </div>
    )
}

export default TechFlexible
