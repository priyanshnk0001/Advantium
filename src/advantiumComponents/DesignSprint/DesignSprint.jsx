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
import DesignSprintSplitText from './DesignSprintSplitText';
import { NavLink } from 'react-router-dom';


function DesignSprint() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const DesignSprintTweenArrow2 = useRef(null);





    useGSAP(() => {
        const DesignSprinttl1 = gsap.timeline()



        DesignSprinttl1.from(".DesignSprint1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        DesignSprinttl1.from(".DesignSprint1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        DesignSprintTweenArrow2.current = gsap.to(".DesignSprintBottomButton .DesignSprintArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const DesignSprintarrow2 = document.querySelector(".DesignSprintBtn-container");
        if (!DesignSprintarrow2) return;

        const onEnter2 = () => DesignSprintTweenArrow2.current.play();
        const onLeave2 = () => DesignSprintTweenArrow2.current.reverse();

        DesignSprintarrow2.addEventListener("mouseenter", onEnter2);
        DesignSprintarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            DesignSprintarrow2.removeEventListener("mouseenter", onEnter2);
            DesignSprintarrow2.removeEventListener("mouseleave", onLeave2);
            DesignSprintTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {
        gsap.from(".bigImg img", {
            scale: 0.5,
            scrollTrigger: {
                trigger: (".bigImg"),
                scroller: "body",
                scrub: 2,
                start: "top 110%",
                end: "top 13%",
                // markers:true
            }

        })
    })

window.addEventListener('load', () => window.scrollTo(0, 0));
   const moreDesignSprintRef = useRef(null);

  // scroll function
  const scrollTomoreDesignSprint = () => {
    if (!moreDesignSprintRef.current) return;

    moreDesignSprintRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                <div className="DesignSprint-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="DesignSprint-container1 w-[100%] mt-40  flex justify-around items-center">
                        <div className="DesignSprint1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>From design sprints to your ideal design.</h1>
                            <h1 className='text-gray-300 text-[18px] '>Your vision matters, but the focus is on your audience’s needs. During a design sprint, we identify their goals and challenges together, then turn those insights into action. The result: an improved user experience, a more effective website, and higher conversions with happier visitors.</h1>
                            <div className="DesignSprintBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                    <div className="DesignSprintBtn-container ">
                                        <button className="DesignSprintButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                        <button
                                            className="DesignSprintArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                            <CallMadeIcon className="!w-7 !h-7" />
                                        </button>
                                    </div>
                                </NavLink>
                                <button onClick={scrollTomoreDesignSprint} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info</button>
                            </div>
                        </div>
                        <div className="DesignSprint1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img src="pic39.webp" alt="" />
                        </div>
                    </div>



                    <div className="DesignSprint-container2" ref={moreDesignSprintRef}>
                        <DesignSprintSplitText />
                    </div>

                    

                    <div className="bigImg w-[100%] h-[100vh] flex justify-center items-center "><img className='w-[95%] h-[95vh] rounded-xl ' src="pic38.webp" alt="" /></div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default DesignSprint
