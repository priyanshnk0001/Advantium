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
import UXDesignSplitText from './UXDesignSplitText';
import { NavLink } from 'react-router-dom';



function UXDesign() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const UXDesignTweenArrow2 = useRef(null);





    useGSAP(() => {
        const UXDesigntl1 = gsap.timeline()



        UXDesigntl1.from(".UXDesign1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        UXDesigntl1.from(".UXDesign1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        UXDesignTweenArrow2.current = gsap.to(".UXDesignBottomButton .UXDesignArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const UXDesignarrow2 = document.querySelector(".UXDesignBtn-container");
        if (!UXDesignarrow2) return;

        const onEnter2 = () => UXDesignTweenArrow2.current.play();
        const onLeave2 = () => UXDesignTweenArrow2.current.reverse();

        UXDesignarrow2.addEventListener("mouseenter", onEnter2);
        UXDesignarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            UXDesignarrow2.removeEventListener("mouseenter", onEnter2);
            UXDesignarrow2.removeEventListener("mouseleave", onLeave2);
            UXDesignTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(()=>{

        gsap.from(".UXDesignCard",{
            y:600,
            stagger:0.2,
            scrollTrigger:{
                trigger:(".UXDesignCard-container"),
                scroller:"body",
                scrub:2,
                start:"top 85%",
                end:"top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".UXDesign-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


         mtl2.from(".UXDesign4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".UXDesign4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".UXDesign5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".UXDesign5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


    })


     window.addEventListener('load', () => window.scrollTo(0, 0));
        const moreUXDesignRef = useRef(null);
    
        // scroll function
        const scrollTomoreUXDesign = () => {
            if (!moreUXDesignRef.current) return;
    
            moreUXDesignRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    




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

                <div className="UXDesign-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="UXDesign-container1 w-[100%] mt-60  flex justify-around items-center">
                        <div className="UXDesign1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Impress with User Experience Designs.</h1>
                            <h1 className='text-gray-300 text-xl '>Design is the basis for digital success. Our UX designers translate your requirements and wireframes into a user-friendly, modern User Interface. From a streamlined user experience to a interface you love to use - we make sure your digital products not only look good, but also perform. Ready to create a great user experience for your digital product?</h1>
                            <div className="UXDesignBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="UXDesignBtn-container ">
                                    <button className="UXDesignButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="UXDesignArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreUXDesign} className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on UX Design</button>
                            </div>
                        </div>
                        <div className="UXDesign1-child2 w-[45%] h-[625px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic40.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreUXDesignRef} className="UXDesign-container2">
                        <UXDesignSplitText />
                    </div>

                    


                    <div className="UXDesign-container4 w-[100%] my-10  flex justify-around items-center">
                        <div className="UXDesign4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Why is UX Design important?</h1>
                            <h1 className='text-gray-300 text-xl '>In today's digital world, the difference between success and failure is often found in user experience. Without thinking about User Experience, your visitors can quickly leave your site or app, while a positive UX drives engagement, trust and conversions. Whether you have an e-commerce website, develop a SaaS solution, or build an enterprise platform, your end-user experience is always key to achieving your goals. We shape experiences that users crave and organisations grow from. That's because User Experience Design is at the heart of everything we create.</h1>
                            <div className="UXDesignBottomButton2 flex  items-center mt-5 z-0     ">
                                <NavLink to="/RequestForm" onClick={()=>window.scrollTo(0 , 0)}>
                                <div className="UXDesignBtn-container2 ">
                                    <button className="UXDesignButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="UXDesignArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="UXDesign4-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic41.webp" alt="" />
                        </div>
                    </div>



                    <div className="UXDesign-container5 w-[100%] my-20  flex justify-around items-center overflow-hidden">
                        <div className="UXDesign5-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic42.webp" alt="" />
                        </div>
                        <div className="UXDesign5-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Data meets design.</h1>
                            <h1 className='text-gray-300 text-xl '>We want to know as much as possible about your end-users and product, because the right insights lead to appropriate design choices. The design must be both functional and attractive. We take the end-user as our starting point, because if you want to be an online end-user you will have to start at the end of the chain: the final online experience. Who are they? What do they want? How do they behave online? With the right balance of data and knowledge, we shape a strong brand experience. Our UX designers ensure that your solution fits perfectly. Whatever you want developed, Advantium has the knowledge and experience.</h1>
                            <div className="UXDesignBottomButton4 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="UXDesignBtn-container4 ">
                                    <button className="UXDesignButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="UXDesignArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default UXDesign
