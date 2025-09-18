import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from './OppositeScroll';
import Footer from './Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from './header';


function Contact() {
    const [pos, setPos] = useState({ x: 750, y: 400 });


     useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".contact-main-cont", {
            y: 1200,
            duration: 0.5,
        },"ok")

        tl.from(".contact-headingText", {
            x: "-100%",
            duration: 0.8
        }, "ok")
        tl.from(".Insights-card.left1", {
            scale: 0,
            duration: 0.8

        }, "ok")
        tl.from(".Insights-card.right1", {
            scale: 0,
            duration: 0.8

        }, "ok")



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

                <div className="contact-ad-Content-cont w-[100%] min-h-screen    flex flex-col justify-center items-center  text-start px-[84px]    ">
                    <h1 className='contact-headingText text-[130px] text-white font-semibold text-start self-start leading-none mt-60'>Together we can move forward.</h1>




                    <div className="contact-details-cont w-[100%] flex justify-between my-25  ">
                        <div className="details1-container w-[40%] flex flex-col items-start  ">
                            <h1 className="helper-work text-4xl text-white pb-15">Want to discuss your digital challenges? Jarno is happy to help.</h1>
                            <div className="contact-img-cont flex justify-center items-center gap-5 text-white text-xl">
                                <div className="cont-img"><img className='w-[150px] h-[150px] rounded-full' src="fundament.png" alt="" /></div>
                                <div className="cont-name">
                                    <h1>name</h1>
                                    <h1 className='text-gray-400'>Designation</h1>
                                </div>
                            </div>
                            <div className="details w-full space-y-14 mt-18 text-white">
                                <div className="phone-detail flex justify-between">
                                    <h1 className="phone  text-gray-400">Phone</h1>
                                    <h1 className="number">1234567890</h1>
                                </div>
                                <div className="address-detail flex justify-between">
                                    <h1 className="address  text-gray-400">Address</h1>
                                    <h1 className="add">Advantium , sector-16 Noida</h1>
                                </div>
                                <div className="E-mail flex justify-between">
                                    <h1 className="email  text-gray-400">E-mail</h1>
                                    <h1 className="mail">Advantium@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className="details2 w-[40%]">
                             <h1 className="helper-work text-4xl text-white pb-15">Want to discuss your digital challenges? Jarno is happy to help.</h1>
                            <div className="contact-img-cont flex justify-center items-center gap-5 text-white text-xl">
                                <div className="cont-img"><img className='w-[150px] h-[150px] rounded-full' src="fundament.png" alt="" /></div>
                                <div className="cont-name">
                                    <h1>name</h1>
                                    <h1 className='text-gray-400'>Designation</h1>
                                </div>
                            </div>
                            <div className="details w-full space-y-14 mt-18 text-white">
                                <div className="phone-detail flex justify-between">
                                    <h1 className="phone  text-gray-400">Phone</h1>
                                    <h1 className="number">1234567890</h1>
                                </div>
                                <div className="address-detail flex justify-between">
                                    <h1 className="address  text-gray-400">Address</h1>
                                    <h1 className="add">Advantium , sector-16 Noida</h1>
                                </div>
                                <div className="E-mail flex justify-between">
                                    <h1 className="email  text-gray-400">E-mail</h1>
                                    <h1 className="mail">Advantium@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Contact
