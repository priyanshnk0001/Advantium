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
import UIDesignSplitText from './UIDesignSplitText';
import { NavLink } from 'react-router-dom';



function UIDesign() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const UIDesignTweenArrow2 = useRef(null);
    const UIDesignTweenArrow3 = useRef(null);
    const UIDesignTweenArrow4 = useRef(null);





    useGSAP(() => {
        const UIDesigntl1 = gsap.timeline()



        UIDesigntl1.from(".UIDesign1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        UIDesigntl1.from(".UIDesign1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        UIDesignTweenArrow2.current = gsap.to(".UIDesignBottomButton .UIDesignArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const UIDesignarrow2 = document.querySelector(".UIDesignBtn-container");
        if (!UIDesignarrow2) return;

        const onEnter2 = () => UIDesignTweenArrow2.current.play();
        const onLeave2 = () => UIDesignTweenArrow2.current.reverse();

        UIDesignarrow2.addEventListener("mouseenter", onEnter2);
        UIDesignarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            UIDesignarrow2.removeEventListener("mouseenter", onEnter2);
            UIDesignarrow2.removeEventListener("mouseleave", onLeave2);
            UIDesignTweenArrow2.current.kill();
        };
    }, []);

     useGSAP(() => {
        UIDesignTweenArrow3.current = gsap.to(".UIDesignBottomButton2 .UIDesignArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const UIDesignarrow3 = document.querySelector(".UIDesignBtn-container2");
        if (!UIDesignarrow3) return;

        const onEnter3 = () => UIDesignTweenArrow3.current.play();
        const onLeave3 = () => UIDesignTweenArrow3.current.reverse();

        UIDesignarrow3.addEventListener("mouseenter", onEnter3);
        UIDesignarrow3.addEventListener("mouseleave", onLeave3);

        return () => {
            UIDesignarrow3.removeEventListener("mouseenter", onEnter3);
            UIDesignarrow3.removeEventListener("mouseleave", onLeave3);
            UIDesignTweenArrow3.current.kill();
        };
    }, []);
    
    useGSAP(() => {
        UIDesignTweenArrow4.current = gsap.to(".UIDesignBottomButton4 .UIDesignArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const UIDesignarrow4 = document.querySelector(".UIDesignBtn-container4");
        if (!UIDesignarrow4) return;

        const onEnter4 = () => UIDesignTweenArrow4.current.play();
        const onLeave4 = () => UIDesignTweenArrow4.current.reverse();

        UIDesignarrow4.addEventListener("mouseenter", onEnter4);
        UIDesignarrow4.addEventListener("mouseleave", onLeave4);

        return () => {
            UIDesignarrow4.removeEventListener("mouseenter", onEnter4);
            UIDesignarrow4.removeEventListener("mouseleave", onLeave4);
            UIDesignTweenArrow4.current.kill();
        };
    }, []);



    useGSAP(()=>{

        gsap.from(".UIDesignCard",{
            y:600,
            stagger:0.2,
            scrollTrigger:{
                trigger:(".UIDesignCard-container"),
                scroller:"body",
                scrub:2,
                start:"top 85%",
                end:"top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".UIDesign-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


         mtl2.from(".UIDesign4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".UIDesign4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".UIDesign5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".UIDesign5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


    })


     window.addEventListener('load', () => window.scrollTo(0, 0));
        const moreUIDesignRef = useRef(null);
    
        // scroll function
        const scrollTomoreUIDesign = () => {
            if (!moreUIDesignRef.current) return;
    
            moreUIDesignRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="UIDesign-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="UIDesign-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="UIDesign1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Optimal interactions with User Interface Designs.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Good design is more than just aesthetically pleasing; it's about the experience you provide. From the right icon to the perfect colour and contrast, our UI/UX designers make sure every interaction is optimised for the user. We make sure your message comes across clearly and effectively, by carefully fine-tuning the arrangement and even the smallest details. Complexity is made simple, so that your users always have the best experience.</h1>
                            <div className="UIDesignBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="UIDesignBtn-container ">
                                    <button className="UIDesignButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="UIDesignArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreUIDesign} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info on UI Design</button>
                            </div>
                        </div>
                        <div className="UIDesign1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic43.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreUIDesignRef} className="UIDesign-container2">
                        <UIDesignSplitText />
                    </div>

                    


                    <div className="UIDesign-container4 w-[100%] my-10  flex justify-around items-center">
                        <div className="UIDesign4-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Why is User Interface Design important?</h1>
                            <h1 className='text-gray-300 text-[18px] '>A well-designed user interface makes it easy for users to understand how to interact with a product, leading to higher conversion and satisfaction. If users cannot quickly find what they need or cannot navigate intuitively, you will lose them to competitors. By focusing on simplicity and usability, we combine UI and UX design in a coherent process. Our UX designers ensure that your product performs effectively and keeps users coming back. With a well-designed user interface and user experience design, you not only create beautiful products, but also products that really work.</h1>
                            <div className="UIDesignBottomButton2 flex  items-center mt-5 z-0     ">
                                <NavLink to="/RequestForm" onClick={()=>window.scrollTo(0 , 0)}>
                                <div className="UIDesignBtn-container2 ">
                                    <button className="UIDesignButton2  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="UIDesignArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="UIDesign4-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic44.webp" alt="" />
                        </div>
                    </div>



                    <div className="UIDesign-container5 w-[100%] my-20  flex justify-around items-center overflow-hidden">
                        <div className="UIDesign5-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic42.webp" alt="" />
                        </div>
                        <div className="UIDesign5-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>An experience between the brand, product and user.</h1>
                            <h1 className='text-gray-300 text-[18px] '>The right icon, in the best colour, with appropriate contrast. Using space, shape and colour, we guide the user to what they want. Besides the user experience, we also focus on the User Interface (UI) - everything the user sees and interacts with. From the right icon to the best contrast, we make sure the interface optimally suits the needs of your target audience. We make complexity simple and ensure smooth interaction and conversion.</h1>
                            <div className="UIDesignBottomButton4 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="UIDesignBtn-container4 ">
                                    <button className="UIDesignButton4  rounded-full py-3 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="UIDesignArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
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

export default UIDesign
