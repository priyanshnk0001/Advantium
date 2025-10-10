import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import { NavLink } from 'react-router-dom';
import OppositeScroll from './OppositeScroll';
import Footer from './Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from './Header';
import Careers from './Careers';




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function About() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const aboutTweenArrow = useRef(null);
    const aboutTweenArrow2 = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        // tl.from(".about-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

         tl.from(".about-headingText , .about-SubHeadingText",{
            x: "-100%",
            stagger:0.4,
            duration:0.8
        })

        tl.from(".aboutJobOpeningBtn-cont",{
            x:"-130%"
        },"-=0.5")
        tl.from(".About-nextArrowButton2",{
            x: -70,
            scale:0
        })
    })


    useGSAP(() => {
        aboutTweenArrow2.current = gsap.to(".aboutJobOpeningBtn-cont .About-nextArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow2 = document.querySelector(".aboutJobOpeningBtn-cont");
        if (!arrow2) return;

        const onEnter2 = () => aboutTweenArrow2.current.play();
        const onLeave2 = () => aboutTweenArrow2.current.reverse();

        arrow2.addEventListener("mouseenter", onEnter2);
        arrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            arrow2.removeEventListener("mouseenter", onEnter2);
            arrow2.removeEventListener("mouseleave", onLeave2);
            aboutTweenArrow2.current.kill();
        };
    })


    




    return (

        <>
               <div
                   onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                   onMouseLeave={() => setPos({ x: -200, y: -200 })}
                   className="about-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                   style={{
                       background: `radial-gradient(
                 900px circle at ${pos.x}px ${pos.y}px,
                 rgba(56, 189, 248, 0.7),
                 transparent 80%
               ), #0f172a`,
                   }}
               >
       
       
                 <Header/>
       



            <div className="about-ad-Content-cont w-[100%] min-h-screen   flex flex-col justify-center items-center  text-start px-[84px]   ">
                    <h1 className='about-headingText text-[110px] text-white font-semi-bold text-start self-start leading-none mt-[100px]'>We are Advantium</h1>
                    <h1 className='about-SubHeadingText text-xl text-white/70  text-start self-start break-keep mt-[50px] lg:pr-90 md:pr-45'>How do you stay agile in a rapidly changing digital world? How do you get the maximum out of existing systems? At Advantium, we have been working on these questions for almost 15 years, and we would love to help you find the answers. We see every challenge as an opportunity to look further and create future-proof solutions. With our knowledge and experience, we reduce complex issues to their essence and develop smart, scalable technological solutions that immediately add value.</h1>

                    <div className="aboutJobOpeningBtn-cont  flex self-start mt-15 items-center  ">

                        <NavLink to="/Careers">
                        <button className="About-jobOpeningButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Job openings</button>
                        </NavLink>
                        <button
                            className="About-nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-7 !h-7" /></button>
                    </div>

                </div>



                <div className="relative overflow-x-hidden    bg-slate-900 rounded-lg">
                    <OppositeScroll />
                </div>
               

                <div className="aboutBottomTextCont w-[100%] flex flex-col justify-center items-center break-keep text-start ">
                    <div className="ABT lg:mx-50 md:mx-25 mb-20 ">
                        <h1 className=' text-5xl text-white break-keep  mb-3 '>Inventors, Designers, Developers - Partners.</h1>
                        <h1 className='text-lg break-keep text-white/70 leading-9'>What we do. We design and develop front-end, middleware and back-end solutions that optimise business processes, for example mobile apps, websites, customer portals, LMS systems and process management tools. But we are more than just a supplier; we are strategic partners who help our clients set clear goals and formulate digital strategies. With our expertise, we clarify complex issues and develop smart, scalable solutions that add immediate value. <br /> <br />

                            Our team consists of experts who combine in-depth knowledge with practical innovativeness, and know exactly what it takes to move organisations forward. We ask the right questions, dig deep and deliver impactful results. Every project gets the same dedication. We challenge ourselves and our clients to think further and grow together. Our teams are ready for tomorrow's challenges - with guts, level-headedness and a focus on quality. Ready for the next step? So are we.</h1>
                    </div>
                </div>


            </div>

            <Footer/>
        </>
    );
}







