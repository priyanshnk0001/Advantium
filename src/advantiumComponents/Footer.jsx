import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
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
    //     tl.from(".FP2-child h1",{
    //         x: -300,
    //         stagger:0.3
    //     })

    //     tl.from(".FP1-headingText , .FP1-child ",{
    //         x: -550,
    //         stagger:0.5,
    //         duration:1
    //     },"-=3")
    // })
    return (
        <div>
            <div className="insightsFooter-main w-[100%]  bg-slate-900">
                <div className="insightsFooter-cont w-[100%] bg-slate-900 flex justify-between">
                    <div className="footer-contentP1 w-[35%] h-[75vh] pl-12 flex flex-col justify-center overflow-hidden  ">
                        <h1 className='FP1-headingText text-white text-6xl mb-5 pl-10'>Advantium</h1>
                        <div className="FP1-child grid grid-cols-3 px-10  gap-y-5 ">
                            <div className="FP1-sub-child py-5 px-8 rounded-2xl flex justify-center items-center border-2 border-gray-400 w-fit"><img className='w-[50px] ' src="iso27001.png" alt="" /></div>
                            <div className="FP1-sub-child py-5 px-8 rounded-2xl flex justify-center items-center border-2 border-gray-400 w-fit"><img className='w-[50px] ' src="nen7510.webp" alt="" /></div>
                            <div className="FP1-sub-child border-gray-400 border-2 p-3 w-fit flex flex-col justify-center rounded-2xl">
                                <h1 className='text-white flex text-2xl items-center '><img className='w-[30px]' src="gitlab.png" alt="" />GitLab</h1>
                                <h1 className='text-white'>Channel Partner</h1>
                            </div>
                            <div className="FP1-sub-child px-6 py-8 flex justify-center items-center gap-2 border-2 border-gray-400 w-[220px] rounded-2xl ">
                                <img className='w-[30px]' src="g-logo.webp" alt="" />
                                <h1 className='text-white'>4.9 <span className='text-gray-400'>uit 45 reviews</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contentP2 w-[65%] h-[75vh] grid grid-cols-3 px-10">
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>
                        <div className="FP2-child text-start space-y-5 p-5 overflow-x-hidden">
                            <h1 className='text-gray-400 text-2xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                            <h1 className='text-white text-xl'>Advantium</h1>
                        </div>

                    </div>
                </div>
            </div>


            <Marquee className='flex items-end text-9xl  text-white space-x-10  h-[25vh]' style={{ width: "100%", height: "25vh" }}>
                Think inside the Advantium.
            </Marquee>
        </div>
    )
}

export default Footer
