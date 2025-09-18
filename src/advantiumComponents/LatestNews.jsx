import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import CallMadeIcon from '@mui/icons-material/CallMade';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);


function LatestNews() {

    const [pos, setPos] = useState({});



    useGSAP(() => {
        const LNtl = gsap.timeline({
            scrollTrigger: {
                trigger: ".LN-main-cont",
                scroller: "body",
                scrub: 2,
                start:"top 90%",
                end:"top 1%",
                duration:1,
                // markers: true,
                
            }
        })

        LNtl.from(".LN-container.lf",{
            x:"-100%",
            stagger:0.3
        },"LN")
        LNtl.from(".LN-container.rt",{
            x:"100%",
            stagger:0.3
        },"LN")
    })




    useGSAP(() => {
        const mappings = [
            { trigger: ".LN-container:nth-child(1)", target: ".hover-img1" },
            { trigger: ".LN-container:nth-child(2)", target: ".hover-img2" },
            { trigger: ".LN-container:nth-child(3)", target: ".hover-img3" },
            { trigger: ".LN-container:nth-child(4)", target: ".hover-img4" },
            { trigger: ".LN-container:nth-child(5)", target: ".hover-img5" },
        ];

        mappings.forEach(({ trigger, target }) => {
            const el = document.querySelector(trigger);
            const targetImg = document.querySelector(target);

            if (el && targetImg) {
                el.addEventListener("mouseenter", () => {
                    gsap.to(".hover-img-cont > div", { opacity: 0, duration: 0.5 });
                    gsap.to(targetImg, { opacity: 1, duration: 0.5 });
                });

                el.addEventListener("mouseleave", () => {
                    gsap.to(".hover-img-cont > div", { opacity: 0, duration: 0.5 });
                });
            }
        });

        return () => {
            mappings.forEach(({ trigger }) => {
                const el = document.querySelector(trigger);
                if (el) {
                    el.replaceWith(el.cloneNode(true)); // cleanup listeners
                }
            });
        };
    }, []);



    return (
        <div
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setPos({})}
            className="LN-main-cont w-[100%]  relative bg-white   transition-colors"
        //     style={{
        //         background: `radial-gradient(
        //   900px circle at ${pos.x}px ${pos.y}px,
        //   rgba(56, 189, 248, 0.7),
        //   transparent 80%
        // ), white`,
        //     }}
        >

            <div className='LN-container lf w-[90%] h-[20vh] border-b-2 border-gray-400 mx-auto flex justify-between items-center   '>
                <div className="LN-sub-cont flex items-center border-r-2 border-gray-400  gap-1 pr-3 ">
                    <img className='w-[70px] h-[70px] rounded-full' src="./inCorpe.png" alt="" />
                    <h1 className="LN-name text-xl font-semibold">Advantium</h1>
                </div>
                <h1 className="LN-news text-3xl font-stretch-150%">Latest news from the Advantium</h1>
                <h1 className="LN-news-date">15 September 2025</h1>
            </div>

            <div className='LN-container rt w-[90%] h-[20vh] border-b-2 border-gray-400 mx-auto flex justify-between items-center   '>
                <div className="LN-sub-cont flex items-center border-r-2 border-gray-400  gap-1 pr-3 ">
                    <img className='w-[70px] h-[70px] rounded-full' src="./inCorpe.png" alt="" />
                    <h1 className="LN-name text-xl font-semibold">Advantium</h1>
                </div>
                <h1 className="LN-news text-3xl font-stretch-150%">Latest news from the Advantium</h1>
                <h1 className="LN-news-date">15 September 2025</h1>
            </div>

            <div className='LN-container lf w-[90%] h-[20vh] border-b-2 border-gray-400 mx-auto flex justify-between items-center   '>
                <div className="LN-sub-cont flex items-center border-r-2 border-gray-400  gap-1 pr-3 ">
                    <img className='w-[70px] h-[70px] rounded-full' src="./inCorpe.png" alt="" />
                    <h1 className="LN-name text-xl font-semibold">Advantium</h1>
                </div>
                <h1 className="LN-news text-3xl font-stretch-150%">Latest news from the Advantium</h1>
                <h1 className="LN-news-date">15 September 2025</h1>
            </div>

            <div className='LN-container rt w-[90%] h-[20vh] border-b-2 border-gray-400 mx-auto flex justify-between items-center   '>
                <div className="LN-sub-cont flex items-center border-r-2 border-gray-400  gap-1 pr-3 ">
                    <img className='w-[70px] h-[70px] rounded-full' src="./inCorpe.png" alt="" />
                    <h1 className="LN-name text-xl font-semibold">Advantium</h1>
                </div>
                <h1 className="LN-news text-3xl font-stretch-150%">Latest news from the Advantium</h1>
                <h1 className="LN-news-date">15 September 2025</h1>
            </div>

            <div className='LN-container lf w-[90%] h-[20vh] border-b-2 border-gray-400 mx-auto flex justify-between items-center   '>
                <div className="LN-sub-cont flex items-center border-r-2 border-gray-400  gap-1 pr-3 ">
                    <img className='w-[70px] h-[70px] rounded-full' src="./inCorpe.png" alt="" />
                    <h1 className="LN-name text-xl font-semibold">Advantium</h1>
                </div>
                <h1 className="LN-news text-3xl font-stretch-150%">Latest news from the Advantium</h1>
                <h1 className="LN-news-date">15 September 2025</h1>
            </div>


            <div
                className=' hover-img-cont w-[250px] h-[250px] rounded-2xl  absolute   '
                style={{
                    left: pos.x + "px",
                    top: pos.y + "px",
                    transform: "translate(10%, -50%)", // center align cursor
                    pointerEvents: 'none'
                }}
            >
                <div className="hover-img1 w-[250px] h-[250px] rounded-2xl opacity-0 absolute ">
                    <img className='object-fit w-full h-full rounded-2xl' src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg" alt="" />
                </div>

                <div className="hover-img2 w-[250px] h-[250px] rounded-2xl opacity-0 absolute ">
                    <img className='object-fit w-full h-full rounded-2xl' src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>

                <div className="hover-img3 w-[250px] h-[250px] rounded-2xl opacity-0 absolute ">
                    <img className='object-fit w-full h-full rounded-2xl' src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?cs=srgb&dl=pexels-serpstat-177219-572056.jpg&fm=jpg" alt="" />
                </div>

                <div className="hover-img4 w-[250px] h-[250px] rounded-2xl opacity-0 absolute ">
                    <img className='object-fit w-full h-full rounded-2xl' src="https://media.istockphoto.com/id/2161298305/photo/big-data-technology-background.jpg?s=612x612&w=0&k=20&c=khClhyFXpnxIFpeZl3rHjE_m1mLhP_0YEuZmBE1V7ME=" alt="" />
                </div>

                <div className="hover-img5 w-[250px] h-[250px] rounded-2xl opacity-0 absolute ">
                    <img className='object-fit w-full h-full rounded-2xl' src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg" alt="" />
                </div>

            </div>

        </div>
    )
}

export default LatestNews
