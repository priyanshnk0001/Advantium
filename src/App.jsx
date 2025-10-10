import React from 'react'


import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import { TextPlugin } from 'gsap/TextPlugin';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from './advantiumComponents/Header.jsx';
import Image from './advantiumComponents/Image.jsx'
import SplitText from './advantiumComponents/SplitText'
import SoftSolution from './advantiumComponents/SoftSolution.jsx'
import LatestNews from './advantiumComponents/LatestNews.jsx'
import LatestNewsText from './advantiumComponents/LatestNewsText.jsx'
import SpinnyWheel from './advantiumComponents/SpinnyWheel.jsx'
import Footer from './advantiumComponents/Footer.jsx';
import Marquee from "react-fast-marquee";
import axios from 'axios';


import './App.css';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(TextPlugin);





export default function HoverSpotLight() {
  const [pos, setPos] = useState({ x: 750, y: 400 });
  const [homePageData, setHomePageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const rotateTweenArrow2 = useRef(null);


  const headerRef = useRef(null); 

  const triggerHeaderBookingClick = () => {
    const attemptClick = (attempt = 0) => {
      const btn = document.querySelector('.Header-bookingButton');
      if (btn) {
        btn.click();
        return;
      }
      if (attempt < 10) {
        setTimeout(() => attemptClick(attempt + 1), 60);
      } else {
        console.warn('Header booking button not found to trigger click.');
      }
    };

    attemptClick();
  };



  window.addEventListener('load', () => window.scrollTo(0, 0));
  const softRef = useRef(null);

  // scroll function
  const scrollToSoft = () => {
    if (!softRef.current) return;

    softRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".techBuilds", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    })

    tl.from(".ad-Content-cont .bookingButton", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")

    tl.from(".ad-Content-cont .nextArrowButton2", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    tl.from(".ad-Content-cont .software", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.4")

  })




  useGSAP(() => {
    rotateTweenArrow2.current = gsap.to(".advantiumBottomButton .nextArrowButton2", {
      rotation: 45,
      x: 7,
      duration: 0.4,
      ease: "power2.out",
      force3D: true,   
      willChange: "transform", 
      paused: true,
    });

    const arrow2 = document.querySelector(".BookingBtn-container");
    if (!arrow2) return;

    const onEnter2 = () => rotateTweenArrow2.current.play();
    const onLeave2 = () => rotateTweenArrow2.current.reverse();

    arrow2.addEventListener("mouseenter", onEnter2);
    arrow2.addEventListener("mouseleave", onLeave2);

    return () => {
      arrow2.removeEventListener("mouseenter", onEnter2);
      arrow2.removeEventListener("mouseleave", onLeave2);
      rotateTweenArrow2.current.kill();
    };
  }, []);

  // ---------------- Text Animation ----------------


  const ttl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  useGSAP(() => {
    const words = ["Innovation", "Business", "Scale"];

    words.forEach((word, i) => {
      ttl.to(".scaleText", {
        duration: 2,
        text: word,
        ease: "power2.inOut", // smooth easing
        delay: 1,
      });
    });
  });

  return (
    <>
      <div
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setPos({ x: -200, y: -200 })}
        className="advantium-main-cont w-[100%]  relative overflow-hidden bg-slate-900 transition-colors"
        style={{
          background: `radial-gradient(
          900px circle at ${pos.x}px ${pos.y}px,
          rgba(56, 189, 248, 0.7),
          transparent 80%
        ), #0f172a`,

        }}
      >


        <Header ref={headerRef} />

        <div className="ad-Content-cont w-[100%] h-[90vh] flex flex-col justify-center items-center text-center px-10  overflow-x-hidden md:gap-10 ">
          <div className="w-fit overflow-hidden"> <h1 className='techBuilds techBuilds-text text-white text-7xl font-semibold overflow-hidden'>Tech builds.</h1></div>
          <div className="w-fit overflow-hidden"><h1 className='techBuilds scaleText text-white text-7xl font-semibold overflow-hidden'>Scale</h1></div>
          <div className="w-fit overflow-hidden my-5"><h1 className='techBuilds techBuilds-info text-white text-[30px] mt-5 overflow-hidden md:text-[25px]'>We transform your challenges into digital impact with smart,<br />
            scalable software that works.</h1></div>
          <div className="advantiumBottomButton w-[40%] flex justify-center items-center mt-5 z-0 overflow-hidden md:w-[100%]  ">
            <div onClick={triggerHeaderBookingClick} className="BookingBtn-container">
              <button
                
                className="bookingButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer  ">Book a meeting</button>
              <button
                className="nextArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                <CallMadeIcon className="!w-7 !h-7" />
              </button>
            </div>

            <button onClick={scrollToSoft} className="software border-2 rounded-full py-3 px-7 text-[18px] text-white cursor-pointer  mx-3 hover:border-amber-300">Software solution</button>
          </div>
        </div>
        <div className="ad-Content-cont w-[100%] h-[10vh] flex flex-col justify-center items-center text-center px-10 "></div>



        <div className='overflow-x-hidden flex items-center h-[10vh] ' style={{ position: "absolute", bottom: 0, left: 0, width: "100%", }}>
          <Marquee className='text-white text-[20px]'>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
            <h1 className="mr-20">Advantium</h1>
          </Marquee>
        </div>

      </div>


      <Image />
      <SplitText />
      <div ref={softRef}>
        <SoftSolution />
      </div>
      {/* <LatestNewsText /> */}
      {/* <LatestNews /> */}
      <SpinnyWheel />
      <Footer />
    </>

  );
}







