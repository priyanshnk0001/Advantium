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
import CallMadeIcon from '@mui/icons-material/CallMade';


import Header from './Header';
import Footer from './Footer';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Careers() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const rotateTweenArrow = useRef(null);
    const careerTweenArrow2 = useRef(null);
    const findTweenArrow2 = useRef(null);


window.addEventListener('load', () => window.scrollTo(0, 0));
   const findRef = useRef(null);

  // scroll function
  const scrollTofind = () => {
    if (!findRef.current) return;

    findRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

    
    

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



    


    useGSAP(() => {
        findTweenArrow2.current = gsap.to(".findJobOpeningBtn-cont .find-nextArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow2 = document.querySelector(".findJobOpeningBtn-cont");
        if (!arrow2) return;

        const onEnter2 = () => findTweenArrow2.current.play();
        const onLeave2 = () => findTweenArrow2.current.reverse();

        arrow2.addEventListener("mouseenter", onEnter2);
        arrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            arrow2.removeEventListener("mouseenter", onEnter2);
            arrow2.removeEventListener("mouseleave", onLeave2);
            findTweenArrow2.current.kill();
        };
    })

   



    return (
         <>

        <div
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setPos({ x: -200, y: -200 })}
            className="Careers-main-cont w-full h-auto overflow-hidden relative bg-slate-900 transition-colors"
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
                    <h1 className='career-headingText lg:text-[110px] md:text-[90px] text-white  text-start self-start leading-none mt-[100px]'>Ready to join <br /> the Advantium?</h1>
                    <h1 className='career-SubHeadingText text-xl text-white/70  text-start self-start break-keep mt-[50px] lg:pr-90 md:pr-45'>
                    How Learning, helping each other further and experience adventures together. At Advantium, you will work on digital solutions with a team of driven specialists. You get the space to grow, develop your skills and make impact. Whether you are developer, designer or strateeg: together we push boundaries.</h1>

                    <div onClick={scrollTofind} className="careerJobOpeningBtn-cont  flex self-start mt-15 items-center  ">

                        <button className="career-jobOpeningButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View vacancies</button>
                        <button
                            className="career-nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-7 !h-7" /></button>
                    </div>

                </div>



                <div className="relative overflow-x-hidden    bg-slate-900 rounded-lg">
                    <OppositeScroll />
                </div>


                <div className="findJob">
                    <div ref={findRef} className="findJob-heading-cont flex justify-between px-[84px] py-20">
                    <h1 className="findJob-heading text-white lg:text-8xl md:text-7xl ">Find your <br /> next job.</h1>
                     <div className="findJobOpeningBtn-cont  flex self-end  mt-15 items-center   ">

                        <NavLink to="/OpenApp" onClick={() => window.scrollTo(0, 0)}>
                        <button className="find-jobOpeningButton  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Open Application</button>
                        </NavLink>
                        <button
                            className="find-nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-7 !h-7" /></button>
                    </div>




                    </div>


                </div>


        </div>

         
           <Footer/>

           </>
    );
}







