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
import SecuritySplitText from './SecuritySplitText';
import SecurityFlexible from './SecurityFlexible';
import { NavLink } from 'react-router-dom';

function Security() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const SecurityTweenArrow2 = useRef(null);
    const SecurityTweenArrow3 = useRef(null);
    const SecurityTweenArrow4 = useRef(null);




    useGSAP(() => {
        const Securitytl1 = gsap.timeline()
        const Securitytl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".Security-container3"),
                scroller: "body",
                scrub: 2,
                // start: "top 92%",
                // end: "top 23%",
                // markers: true

            }
        })


        Securitytl1.from(".Security1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        Securitytl1.from(".Security1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


        Securitytl2.from(".Security3-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        Securitytl2.from(".Security3-child2 > *", {
            x: 760
        }, "okk")


        Securitytl2.from(".Security4-child1 > *", {
            x: -760
        }, "okkk")

        Securitytl2.from(".Security4-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")
    })



    useGSAP(() => {
        SecurityTweenArrow2.current = gsap.to(".SecurityBottomButton .SecurityArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Securityarrow2 = document.querySelector(".SecurityBtn-container");
        if (!Securityarrow2) return;

        const onEnter2 = () => SecurityTweenArrow2.current.play();
        const onLeave2 = () => SecurityTweenArrow2.current.reverse();

        Securityarrow2.addEventListener("mouseenter", onEnter2);
        Securityarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            Securityarrow2.removeEventListener("mouseenter", onEnter2);
            Securityarrow2.removeEventListener("mouseleave", onLeave2);
            SecurityTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        SecurityTweenArrow3.current = gsap.to(".SecurityBottomButton2 .SecurityArrowButton3", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Securityarrow3 = document.querySelector(".SecurityBtn-container2");
        if (!Securityarrow3) return;

        const onEnter2 = () => SecurityTweenArrow3.current.play();
        const onLeave2 = () => SecurityTweenArrow3.current.reverse();

        Securityarrow3.addEventListener("mouseenter", onEnter2);
        Securityarrow3.addEventListener("mouseleave", onLeave2);

        return () => {
            Securityarrow3.removeEventListener("mouseenter", onEnter2);
            Securityarrow3.removeEventListener("mouseleave", onLeave2);
            SecurityTweenArrow3.current.kill();
        };
    }, []);


    useGSAP(() => {
        SecurityTweenArrow4.current = gsap.to(".SecurityBottomButton4 .SecurityArrowButton4", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Securityarrow4 = document.querySelector(".SecurityBtn-container4");
        if (!Securityarrow4) return;

        const onEnter2 = () => SecurityTweenArrow4.current.play();
        const onLeave2 = () => SecurityTweenArrow4.current.reverse();

        Securityarrow4.addEventListener("mouseenter", onEnter2);
        Securityarrow4.addEventListener("mouseleave", onLeave2);

        return () => {
            Securityarrow4.removeEventListener("mouseenter", onEnter2);
            Securityarrow4.removeEventListener("mouseleave", onLeave2);
            SecurityTweenArrow4.current.kill();
        };
    }, []);


     window.addEventListener('load', () => window.scrollTo(0, 0));
        const moreScurityRef = useRef(null);
    
        // scroll function
        const scrollTomoreScurity = () => {
            if (!moreScurityRef.current) return;
    
            moreScurityRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    

    return (
        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="Security-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }}
            >


                <Header />

                <div className="Security-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="Security-container1 w-[100%] mt-60  flex justify-around">
                        <div className="Security1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Security & Privacy</h1>
                            <h1 className='text-gray-300 text-xl '>At Advantium, privacy and security are paramount. We protect our data and that of clients by complying with stringent standards such as ISO 27001 and NEN 7510, and work with transparent, reliable processes. Security is essential to us.</h1>
                            <div className="SecurityBottomButton flex  items-center mt-5 z-0    ">

                                <NavLink to="/RequestForm" onClick={()=>window.scrollTo(0,0)}>
                                <div className="SecurityBtn-container ">
                                    <button className="SecurityButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="SecurityArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreScurity} className="moreInfo border-2 rounded-full py-4 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300">More info</button>
                            </div>
                        </div>
                        <div className="Security1-child2 w-[45%] h-[580px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className='rounded-2xl' src="pic24.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreScurityRef} className="Security-container2">
                        <SecuritySplitText />
                    </div>
                   






                    <div className="Security-container3 w-[100%] my-20  flex justify-around items-center">
                        <div className="Security3-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Advantium is ISO 27001 certified.</h1>
                            <h1 className='text-gray-300 text-xl '>ISO 27001 is the international standard for information security that ensures data confidentiality, integrity, and availability. Our ISO 27001 certification confirms that we meet the strictest security standards and risk management processes. This provides our clients with the assurance that their data is well-protected and that we employ a thorough and systematic approach to managing their information. Furthermore, certification enables us to quickly respond to new threats and changes in legislation, such as the GDPR. This allows them to count on a reliable partner who continuously strives for the highest security standards and puts their interests first.</h1>
                            <div className="SecurityBottomButton2 flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm" onClick={()=>window.scrollTo(0,0)}>
                                <div className="SecurityBtn-container2 ">
                                    <button className="SecurityButton2  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">Contact us</button>
                                    <button
                                        className="SecurityArrowButton3  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="Security3-child2 w-[45%]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' h-[600px] rounded-2xl' src="ISO-27001.webp" alt="" />
                        </div>
                    </div>



                    <div className="Security-container4 w-[100%] mb-20  flex justify-around items-center overflow-hidden">
                        <div className="Security4-child1 w-[45%] h-[700px]  flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' h-[600px] rounded-2xl' src="NEN-7510.webp" alt="" />
                        </div>
                        <div className="Security4-child2 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[70px]  leading-tight '>Advantium is NEN 7510 certified.</h1>
                            <h1 className='text-gray-300 text-xl '>When developing software for healthcare institutions and other organizations that work with privacy-sensitive data, information security isn't a side issue. It's essential. Advantium is officially NEN 7510 certified: the leading standard for information security in healthcare. This demonstrates that we not only meet the strict requirements but also actively invest in secure processes and systems. Curious about what this certification entails and why it's relevant to your organization?</h1>
                            {/* <div className="SecurityBottomButton4 flex  items-center mt-5 z-0    ">
                                <div className="SecurityBtn-container4 ">
                                    <button className="SecurityButton4  rounded-full py-4 px-7 text-[18px] border-2 border-white text-white cursor-pointer ">More info</button>
                                    <button
                                        className="SecurityArrowButton4  rounded-full p-3 text-white border-2 border-white cursor-pointer  ">
                                        <CallMadeIcon className="!w-8 !h-8" />
                                    </button>
                                </div>
                            </div> */}
                        </div>

                    </div>

                    <div className="sec-container2 w-[100%]" >

                        <SecurityFlexible />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Security
