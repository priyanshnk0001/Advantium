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
import Header from './Header';


function Contact() {
    const [pos, setPos] = useState({ x: 750, y: 400 });


    useGSAP(() => {
        const tl = gsap.timeline();
        // tl.from(".contact-main-cont", {
        //     y: 1200,
        //     duration: 0.5,
        // }, "ok")

        tl.from(".contact-headingText", {
            x: "-100%",
            duration: 0.8
        }, "ok")
        
        tl.from(".contact-details-cont *", {
            x: -300,
            duration: 0.8,
            // scale:0
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

                <div className="contact-ad-Content-cont w-[100%] min-h-screen     flex flex-col justify-center lg:items-center  text-start lg:px-[84px] md:px-[40px] md:items-center    ">
                    <h1 className='contact-headingText lg:text-[110px] text-white  text-start lg:self-start leading-none lg:mt-50 md:text-[60px] md:mt-30 md:self-center'>Together we can move forward.</h1>




                    <div className="contact-details-cont w-[100%] lg:flex lg:flex-row lg:justify-between lg:mb-25 md:flex-col md:items-center md:my-10  ">
                        <div className="details1-container lg:w-[40%] flex flex-col items-start md:w-[80%]   ">
                            <h1 className="helper-work text-3xl text-white lg:pb-15 md:py-15">Want to discuss your digital challenges? Neeraj Kumar is happy to help.</h1>
                            <div className="contact-img-cont flex justify-center items-center gap-5 text-white text-xl">
                                <div className="cont-img"><img className='w-[130px] h-[130px] rounded-full' src="neerajAdvantium.jpeg" alt="" /></div>
                                <div className="cont-name">
                                    <h1>Neeraj Kumar</h1>
                                    <h1 className='text-gray-400'> Co-Founder and Director </h1>
                                </div>
                            </div>
                            <div className="details w-full space-y-14 mt-18 text-white">
                                <div className="phone-detail flex justify-between">
                                    <h1 className="phone  text-gray-400">Phone</h1>
                                    <h1 className="number">+91 7007621313</h1>
                                </div>
                                <div className="address-detail flex justify-between">
                                    <h1 className="address  text-gray-400">Address</h1>
                                    <h1 className="add">C 22 UGF, Anoop Nagar, Delhi</h1>
                                </div>
                                <div className="E-mail flex justify-between">
                                    <h1 className="email  text-gray-400">E-mail</h1>
                                    <h1 className="mail">contact@advantium.in</h1>
                                </div>
                            </div>
                        </div>
                        <div className="details2 lg:w-[40%] md:w-[80%] lg:mt-0 md:mt-10">
                            <h1 className="helper-work text-3xl text-white lg:pb-15 md:py-15">Want to discuss your digital challenges? Priya is happy to help.</h1>
                            <div className="contact-img-cont flex  items-center gap-5 text-white text-xl">
                                <div className="cont-img"><img className='w-[130px] h-[130px] rounded-full' src="priyaAdvantium.webp" alt="" /></div>
                                <div className="cont-name">
                                    <h1>Priya Fozdar</h1>
                                    <h1 className='text-gray-400'>Director</h1>
                                </div>
                            </div>
                            <div className="details w-full space-y-14 mt-18 text-white">
                                <div className="phone-detail flex justify-between">
                                    <h1 className="phone  text-gray-400">Phone</h1>
                                    <h1 className="number">+91 7007621313</h1>
                                </div>
                                <div className="address-detail flex justify-between">
                                    <h1 className="address  text-gray-400">Address</h1>
                                    <h1 className="add">C 22 UGF, Anoop Nagar, Delhi</h1>
                                </div>
                                <div className="E-mail flex justify-between">
                                    <h1 className="email  text-gray-400">E-mail</h1>
                                    <h1 className="mail">contact@advantium.in</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
