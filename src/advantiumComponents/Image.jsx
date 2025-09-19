import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

function Image() {

    useGSAP(()=>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger:(".image-container img"),
            scroller:"body",
            scrub: 2,
            start:"top 80%",
            
            // markers: true
        }})

        tl.to(".image-container img",{
            width: "85%",
            duration: 2,
            ease: "power2.out"
        })
    })
  return (
    <div className='image-container w-[100%] h-[100vh] bg-slate-900 flex justify-center items-center overflow-x-hidden'>
      <img className='w-[50%] h-[80vh] rounded-3xl' src="whiteLaptop.jpg" alt="" />
    </div>
  )
}

export default Image

