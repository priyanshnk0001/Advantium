import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from '../OppositeScroll';
import Footer from '../Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';
import DesignSplitText from './DesignSplitText';




function Design() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DesignTweenArrow2 = useRef(null);





    useGSAP(() => {
        const Designtl1 = gsap.timeline()



        Designtl1.from(".Design1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        Designtl1.from(".Design1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        DesignTweenArrow2.current = gsap.to(".DesignBottomButton .DesignArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Designarrow2 = document.querySelector(".DesignBtn-container");
        if (!Designarrow2) return;

        const onEnter2 = () => DesignTweenArrow2.current.play();
        const onLeave2 = () => DesignTweenArrow2.current.reverse();

        Designarrow2.addEventListener("mouseenter", onEnter2);
        Designarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Designarrow2.removeEventListener("mouseenter", onEnter2);
            Designarrow2.removeEventListener("mouseleave", onLeave2);
            DesignTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(()=>{

        gsap.from(".DesignCard",{
            y:600,
            stagger:0.2,
            scrollTrigger:{
                trigger:(".DesignCard-container"),
                scroller:"body",
                scrub:2,
                start:"top 85%",
                end:"top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".Design-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


         mtl2.from(".Design4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".Design4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".Design5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".Design5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


    })




    return (
        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="contact-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }}
            >


                <Header />

                <div className="Design-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Design-container1 w-[100%] mt-60  flex justify-around items-center">
                        <div className="Design1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Design that scores with users and your goals.</h1>
                            <h1 className='text-gray-300 text-xl '>Design is the basis for digital success. Our UX designers translate your requirements into a modern, user-friendly interface with a smooth user experience. This is how we create digital products that not only look good, but also work superbly. Ready for a great user experience?</h1>
                            <div className="DesignBottomButton flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container ">
                                    <button className="DesignButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="DesignArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                <button className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on Design</button>
                            </div>
                        </div>
                        <div className="Design1-child2 w-[45%] h-[625px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='scale-105 rounded-2xl' src="pic27.webp" alt="" />
                        </div>
                    </div>



                    <div className="Design-container2">
                        <DesignSplitText />
                    </div>

                    <div className="Design-container3 text-white !flex !flex-col w-[100%] gap-10 py-20">
                        <h1 className="text-center text-8xl px-45 ">Ready to create your blueprint?</h1>
                        <div className="DesignCard-container w-[100%] flex  justify-around">
                            <div className="DesignCard w-[30%] h-[500px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                    <h1 className='text-4xl'>Design sprint </h1>
                                    <h1 className='text-white/70 leading-loose'>We work together to understand the core needs of your target audience. What you want, we like to hear. But what your target group wants is what matters. We start with design sprints, in which we formulate user goals using User Stories. Ready to sprint? </h1>
                                </div>
                                <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                            </div>
                           
                            <div className="DesignCard w-[30%] h-[500px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70 ">
                                <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                    <h1 className='text-4xl'>UX Design</h1>
                                    <h1 className='text-white/70 leading-loose'>Designing an optimal user experience (UX) is essential to the success of your digital product. Our UX designers always work from the end-user's perspective. We make sure the interface is intuitive, with a strong focus on simplicity and functionality. </h1>
                                </div>
                                <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                            </div>
                           
                            <div className="DesignCard w-[30%] h-[500px] text-white border-2 rounded-xl border-gray-400/50 hover:bg-gray-400/70">
                                <div className="cardInnerDiv m-8 py-10 flex flex-col gap-8 border-b-2 border-gray-400/50 ">
                                    <h1 className='text-4xl'>UI Design</h1>
                                    <h1 className='text-white/70 leading-loose'>The right icon, in the best colour, with appropriate contrast. Using space, shape and colour, we guide the user to what they want. From the right icon to the best contrast, we ensure that the interface optimally suits the needs of your target group. </h1>
                                </div>
                                <h1 className='mx-8 text-[20px]'>Read more <CallMadeIcon className='text-amber-400 text-3xl' /> </h1>
                            </div>
                           
                        </div>
                    </div>


                    <div className="Design-container4 w-[100%] my-20  flex justify-around items-center">
                        <div className="Design4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>The basis for success.</h1>
                            <h1 className='text-gray-300 text-xl '>In the first stage of our process, we work with you to understand the core needs of your target audience. What you want, we like to hear. But what your target group wants is what matters. We start with design sprints, in which we formulate user goals using User Stories. These stories help us determine what your visitors really want and how we can best serve them.</h1>
                            <div className="DesignBottomButton2 flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container2 ">
                                    <button className="DesignButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Sprinting together?</button>
                                    <button
                                        className="DesignArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Design4-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic28.webp" alt="" />
                        </div>
                    </div>



                    <div className="Design-container5 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="Design5-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic29.webp" alt="" />
                        </div>
                        <div className="Design5-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Technical architecture: Choosing the right foundation</h1>
                            <h1 className='text-gray-300 text-xl '>Every website needs a solid technical architecture. In the design sprints, we make choices about the techniques and frameworks we use. This is always done in consultation with you, so that we know exactly what choices we are making and what the consequences are. Our lead developer ensures that we make the right choices for a robust, scalable solution.</h1>
                            <div className="DesignBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="DesignBtn-container4 ">
                                    <button className="DesignButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More info</button>
                                    <button
                                        className="DesignArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Design
