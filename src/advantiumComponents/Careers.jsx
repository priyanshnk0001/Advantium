import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from './OppositeScroll';
import CallMadeIcon from '@mui/icons-material/CallMade';


import Header from './Header';
import Footer from './Footer';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Careers() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const rotateTweenArrow = useRef(null);
    const careerTweenArrow2 = useRef(null);
    

    useGSAP(() => {
        const tl = gsap.timeline();
        // tl.from(".Careers-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

          tl.from(".career-headingText , .career-SubHeadingText",{
            x: "-100%",
            stagger:0.4,
            duration:0.8
        })

        tl.from(".careerJobOpeningBtn-cont",{
            x:"-130%"
        },"-=0.5")
        tl.from(".career-nextArrowButton2",{
            x: -70,
            scale:0
        })
    })


     useGSAP(() => {
        careerTweenArrow2.current = gsap.to(".careerJobOpeningBtn-cont .career-nextArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow3 = document.querySelector(".careerJobOpeningBtn-cont");
        if (!arrow3) return;

        const onEnter3 = () => careerTweenArrow2.current.play();
        const onLeave3 = () => careerTweenArrow2.current.reverse();

        arrow3.addEventListener("mouseenter", onEnter3);
        arrow3.addEventListener("mouseleave", onLeave3);

        return () => {
            arrow3.removeEventListener("mouseenter", onEnter3);
            arrow3.removeEventListener("mouseleave", onLeave3);
            careerTweenArrow2.current.kill();
        };
    })



    




   



    return (
         <>

        <div
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setPos({ x: -200, y: -200 })}
            className="Careers-main-cont w-full h-auto overflow-x-hidden relative bg-slate-900 transition-colors"
            style={{
                background: `radial-gradient(
                    900px circle at ${pos.x}px ${pos.y}px,
                    rgba(56, 189, 248, 0.7),
                    transparent 80%
                    ), #0f172a`,
                }}
                >
            <Header/>
          
           <div className="career-ad-Content-cont w-[100%] min-h-screen   flex flex-col justify-center items-center  text-start px-[84px]   ">
                    <h1 className='career-headingText text-[130px] text-white font-semi-bold text-start self-start leading-none mt-[100px]'>Ready to join <br /> the Advantium?</h1>
                    <h1 className='career-SubHeadingText text-xl text-white/70 font-semibold text-start self-start break-keep mt-[50px] pr-90'>
                    How Learning, helping each other further and experience adventures together. At Advantium, you will work on digital solutions with a team of driven specialists. You get the space to grow, develop your skills and make impact. Whether you are developer, designer or strateeg: together we push boundaries.</h1>

                    <div className="careerJobOpeningBtn-cont  flex self-start mt-15 items-center  ">

                        <button className="career-jobOpeningButton  rounded-full py-4 px-7 text-[20px] bg-yellow-300 text-black cursor-pointer ">View vacancies</button>
                        <button
                            className="career-nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-8 !h-8" /></button>
                    </div>

                </div>



                <div className="relative overflow-x-hidden    bg-slate-900 rounded-lg">
                    <OppositeScroll />
                </div>


        </div>

         
           <Footer/>

           </>
    );
}







