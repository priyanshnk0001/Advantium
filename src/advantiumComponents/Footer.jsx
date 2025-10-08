import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';

import { NavLink, useLocation } from 'react-router-dom';

import Marquee from "react-fast-marquee";

function Footer() {

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".insightsFooter-main",
    //             scroller: "body",
    //             scrub: 2,
    //             start:"top 99%",
    //             end:"top 1%",

    //             markers: true
    //         }
    //     })
    //     tl.from(".FP2-child",{
    //         x: -300,
    //         stagger:0.3
    //     })

    //     tl.from(".FP1-headingText , .FP1-child ",{
    //         x: -550,
    //         stagger:0.5,
    //         duration:1
    //     },"-=3")
    // })


    useGSAP(() => {
        const Flines = document.querySelectorAll(".footer-TextUnderline");

        Flines.forEach((line) => {
            const Funderline = line.querySelector(".underline-footer");

            if (!Funderline) return;

            const Funline = gsap.to(Funderline, {
                width: "95%",
                duration: 0.5,
                paused: true
            });



            const onEnter = () => {
                Funline.play();

            };
            const onLeave = () => {
                Funline.reverse();
            };

            line.addEventListener("mouseenter", onEnter);
            line.addEventListener("mouseleave", onLeave);

            // store handlers for cleanup
            line._handlers = { onEnter, onLeave, };
        });

        return () => {
            Flines.forEach((line) => {
                const h = line._handlers || {};
                if (h.onEnter) line.removeEventListener("mouseenter", h.onEnter);
                if (h.onLeave) line.removeEventListener("mouseleave", h.onLeave);
            });
        };
    }, []);




    return (
        // bg-gradient-to-b from-[#0f172a]  to-gray-700
        <div className=' bg-gray-700'>
            <div className="insightsFooter-main w-[100%]  ">
                <div className="insightsFooter-cont w-[100%]  flex justify-between">
                    <div className="footer-contentP1 w-[35%] h-[75vh] pl-12 flex flex-col justify-center overflow-hidden  ">
                        <h1 className='FP1-headingText text-white text-6xl mb-5 pl-10'>Advantium</h1>
                        <div className="FP1-child grid grid-cols-3 px-10  gap-y-5 ">
                            <div className="FP1-sub-child py-5 px-8 rounded-[22px] flex justify-center items-center border-2 border-gray-400 w-fit"><img className='w-[50px] ' src="iso27001.png" alt="" /></div>
                            <div className="FP1-sub-child py-5 px-8 rounded-[22px] flex justify-center items-center border-2 border-gray-400 w-fit"><img className='w-[50px] ' src="nen7510.webp" alt="" /></div>
                            <div className="FP1-sub-child border-gray-400 border-2 p-3 w-fit flex flex-col justify-center rounded-[22px]">
                                <h1 className='text-white flex text-[22px] items-center '><img className='w-[30px]' src="gitlab.png" alt="" />GitLab</h1>
                                <h1 className='text-white'>Channel Partner</h1>
                            </div>
                            <div className="FP1-sub-child px-6 py-8 flex justify-center items-center gap-2 border-2 border-gray-400 w-[220px] rounded-[22px] ">
                                <img className='w-[30px]' src="g-logo.webp" alt="" />
                                <h1 className='text-white'>4.9 <span className='text-gray-400'>uit 45 reviews</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contentP2 w-[65%] h-[75vh] grid grid-cols-3 px-10 ">
                        <div className="overflow-x-hidden">
                            <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px]'>Office</h1>
                                <h1 className='text-white text-[18px]'>C 22 UGF, </h1>
                                <h1 className='text-white text-[18px]'>Anoop Nagar, </h1>
                                <h1 className='text-white text-[18px]'>Delhi</h1>
                            </div>
                        </div>
                        <div className="overflow-x-hidden">
                            <div className="FP2-child  text-start flex flex-col gap-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px] '>What we do</h1>
                                <NavLink to="/Apps" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline  text-white text-[18px] '>Apps
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/WebsiteCMS" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Websites & CMS
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/Ecom" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>E-commerce
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/DMplatform" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Data Management Platform
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                            </div>
                        </div>
                        <div className="overflow-x-hidden">
                            <div className="FP2-child text-start flex flex-col gap-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px]'>Who we are</h1>

                                <NavLink to="/About" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>About us
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/Careers" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`}>
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Careers
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/Contact" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`}>
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Contact
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                            </div>
                        </div>
                        <div className="overflow-x-hidden">
                            <div className="FP2-child text-start flex flex-col gap-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px]'>Follow us</h1>
                                <NavLink to="https://in.linkedin.com/company/advantium-technologies" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>LinkedIn
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="https://www.instagram.com/neeraj.kumar.mnnit" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Instagram
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                                    </h1>
                                </NavLink>
                                <NavLink to="" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Facebook
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                            </div>
                        </div>
                        <div className="overflow-x-hidden">
                            <div className="FP2-child text-start flex flex-col gap-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px]'>Community</h1>
                                <NavLink to="" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Blog
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Cases
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="/Careers" onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Careers
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                            </div>
                        </div>
                        <div className="overflow-x-hidden">
                            <div className="FP2-child text-start flex flex-col gap-5 p-5 overflow-x-hidden">
                                <h1 className='text-gray-400 text-[22px]'>General</h1>
                                <NavLink to="" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>Privacy Statement
                                        <span className="underline-footer  absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>

                                    </h1>
                                </NavLink>
                                <NavLink to="" className={({ isActive }) => `w-fit relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300`} >
                                    <h1 className='footer-TextUnderline text-white text-[18px]'>General terms and <br /> conditions
                                        <span className="underline-footer absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                                    </h1>
                                </NavLink>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <Marquee className='flex items-end text-8xl  text-white space-x-10  h-[25vh]' style={{ width: "100%", height: "25vh" }}>
                Think inside the Advantium.
            </Marquee>
        </div>
    )
}

export default Footer
