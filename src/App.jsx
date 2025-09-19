import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import CarouselLoopFinal from './advantiumComponents/CarouselLoopFinal.jsx'
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from './advantiumComponents/header.jsx';
import Image from './advantiumComponents/Image.jsx'
import SplitText from './advantiumComponents/SplitText'
import SoftSolution from './advantiumComponents/SoftSolution.jsx'
import LatestNews from './advantiumComponents/LatestNews.jsx'
import LatestNewsText from './advantiumComponents/LatestNewsText.jsx'
import SpinnyWheel from './advantiumComponents/SpinnyWheel.jsx'
import Footer from './advantiumComponents/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

export default function HoverSpotLight() {
  const [pos, setPos] = useState({ x: 750, y: 400 });
  const rotateTweenArrow2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".advantium-main-cont", {

      y: 1200,
      duration: 0.5,
    })



    tl.from(".techBuilds", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    }, "-=0.7")

    tl.from(".ad-Content-cont .bookingButton", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")

    tl.from(".ad-Content-cont .nextArrowButton2", {
      x: -50,
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
      // backgroundColor:"#fbbf24",
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    const arrow2 = document.querySelector(".advantiumBottomButton .nextArrowButton2");
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

  const ttl = gsap.timeline({ repeat: -1, });
  useGSAP(() => {

    ttl.to(".scaleText", {
      delay: 2,
      scrambleText: {
        text: "Innovation",
        chars: "_-&%",
        revealDelay: 0.5,
        speed: 0.3,
        newClass: "innovationText"
      }
    });

    ttl.to(".scaleText", {
      delay: 2,
      scrambleText: {
        text: "Buisness",
        chars: "_-&% ",
        revealDelay: 0.5,
        speed: 0.3,
        newClass: "buisnessText"
      }
    });
    ttl.to(".scaleText", {
      delay: 2,
      scrambleText: {
        text: "scale",
        chars: "_-&% ",
        revealDelay: 0.5,
        speed: 0.3,
        newClass: "scaleText"
      }
    });
  })

  return (
    <>
      <div
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setPos({ x: -200, y: -200 })}
        className="advantium-main-cont w-[100%]  relative overflow-x-hidden bg-slate-900 transition-colors"
        style={{
          background: `radial-gradient(
          900px circle at ${pos.x}px ${pos.y}px,
          rgba(56, 189, 248, 0.7),
          transparent 80%
        ), #0f172a`,
        }}
      >

        <Header />

        <div className="ad-Content-cont w-[100%] h-[90vh] flex flex-col justify-center items-center text-center px-10  overflow-x-hidden ">
          <div className="w-fit overflow-hidden"> <h1 className='techBuilds text-white text-8xl font-bold overflow-hidden'>Tech builds.</h1></div>
          <div className="w-fit overflow-hidden"><h1 className='techBuilds scaleText text-white text-8xl font-bold overflow-hidden'>scale</h1></div>
          <div className="w-fit overflow-hidden my-5"><h1 className='techBuilds text-white text-3xl mt-5 overflow-hidden'>We transform your challenges into digital impact with smart,<br />
            scalable software that works.</h1></div>
          <div className="advantiumBottomButton w-[40%] flex justify-center items-center mt-5 z-0 overflow-hidden   ">
            <button className="bookingButton  rounded-full py-4 px-7 text-[20px] bg-yellow-300 text-black cursor-pointer hover:bg-amber-400">Book a meeting</button>
            <button
              className="nextArrowButton2 bg-yellow-300 rounded-full p-4 text-black cursor-pointer  ">
              <CallMadeIcon className="!w-8 !h-8" />
            </button>
            <button className="software border-2 rounded-full py-4 px-7 text-[20px] text-white cursor-pointer  mx-3 hover:border-amber-300">Software solution</button>
          </div>
        </div>
        <div className="ad-Content-cont w-[100%] h-[10vh] flex flex-col justify-center items-center text-center px-10 "></div>



        <div className='overflow-x-hidden' style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
          <CarouselLoopFinal embedded

          />
        </div>

      </div>


      <Image />
      <SplitText />
      <SoftSolution />
      <LatestNewsText />
      <LatestNews />
      <SpinnyWheel />
      <Footer />
    </>

  );
}







