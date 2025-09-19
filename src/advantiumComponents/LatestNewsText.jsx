import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CallMadeIcon from '@mui/icons-material/CallMade';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function LatestNewsText() {
    const viewTweenArrow = useRef(null);



    useGSAP(() => {
        viewTweenArrow.current = gsap.to(".viewAll-btn-cont .view-all-arrow", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        gsap.to(".latestNews-BigText",{
            color:"black",
            duration:5,
            scrollTrigger:{
                trigger:".latest-heading-cont",
                scroller:"body",
                scrub:2,
                start:"top 50%",
                end:"top 1%",
                // markers:true,
                

            }
        })


        const arrow = document.querySelector(".viewAll-btn-cont");
        if (!arrow) return;

        const onEnter = () => viewTweenArrow.current.play();
        const onLeave = () => viewTweenArrow.current.reverse();

        arrow.addEventListener("mouseenter", onEnter);
        arrow.addEventListener("mouseleave", onLeave);

        return () => {
            arrow.removeEventListener("mouseenter", onEnter);
            arrow.removeEventListener("mouseleave", onLeave);
            viewTweenArrow.current.kill();
        };

        




    }, []);
    return (
        <div className=' bg-gradient-to-b from-[#0f172a] to-white overflow-x-hidden'>
            <div className="latest-heading-cont flex justify-between items-end px-20 py-[200px] leading-none    ">
                <h1 className="sharingknowledge-text text-gray-200 text-xl mb-1 ">Sharing knowledge <br /> is in our DNA</h1>
                <h1 className="latestNews-BigText text-[6.5rem] text-white font-bold ">Latest news <br /> from the 𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 </h1>
                <div className="viewAll-btn-cont">

                    <button className="view-all-button  rounded-full py-4 px-7 text-[20px] border-2  text-black cursor-pointer ">View all</button>
                    <button
                        className="view-all-arrow  rounded-full p-3 border-2  text-black cursor-pointer  "

                    ><CallMadeIcon className="!w-8 !h-8" /></button>
                </div>
            </div>
        </div>
    )
}

export default LatestNewsText

