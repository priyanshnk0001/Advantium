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
function SoftSolution() {





    useGSAP(()=>{
        const tl = gsap.timeline({scrollTrigger:{
             trigger:(".softImg-cont"),
            scroller:"body",
            scrub: 2,
            start:"top 90%",
            end: "top 10%",
            // markers:true,
        }});

        tl.from(".softImg-main-cont",{
            scale:0,
            // delay:0.2,
            duration:2
        }, "soft")

        tl.from(".soft-subchild",{
            x: 500,
            stagger:0.3,
        }, "soft")
    })


    useGSAP(() => {
        const items = document.querySelectorAll(".soft-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const icon = item.querySelector(".soft-iconAnim");
            if (!icon) return;

            const t = gsap.to(icon, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                paused: true,
                transformOrigin: "50% 50%",
            });

            const onEnter = () => t.play();
            const onLeave = () => t.reverse();

            item.addEventListener("mouseenter", onEnter);
            item.addEventListener("mouseleave", onLeave);

            tweenMap.set(icon, t);
            handlerMap.set(item, { onEnter, onLeave });
        });

        return () => {
            for (const [item, handlers] of handlerMap.entries()) {
                item.removeEventListener("mouseenter", handlers.onEnter);
                item.removeEventListener("mouseleave", handlers.onLeave);
            }
            for (const tween of tweenMap.values()) tween.kill();
            tweenMap.clear();
            handlerMap.clear();
        };
    }, []);



    useGSAP(() => {
  const defaultImg = document.querySelector(".CMP-img");
  const mappings = [
    { trigger: ".soft-subchild:nth-child(1)", target: ".CMP-img" },
    { trigger: ".soft-subchild:nth-child(2)", target: ".Apps-img" },
    { trigger: ".soft-subchild:nth-child(3)", target: ".web-CMS-img" },
    { trigger: ".soft-subchild:nth-child(4)", target: ".E-com-img" },
    { trigger: ".soft-subchild:nth-child(5)", target: ".DMP-img" },
    { trigger: ".soft-subchild:nth-child(6)", target: ".LMS-img" },
  ];

  mappings.forEach(({ trigger, target }) => {
    const el = document.querySelector(trigger);
    const targetImg = document.querySelector(target);

    if (el && targetImg) {
      el.addEventListener("mouseenter", () => {
        gsap.to(".softImg-main-cont > div", { opacity: 0, duration: 0.5 });
        gsap.to(targetImg, { opacity: 1, duration: 0.5 });
        gsap.to(".CMP-text",{opacity:0})
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(".softImg-main-cont > div", { opacity: 0, duration: 0.5 });
        gsap.to(defaultImg, { opacity: 1, duration: 0.5 });
         gsap.to(".CMP-text",{opacity:1})
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
        <div className='w-[100%] h-[100vh] bg-gray-900 flex justify-around items-center overflow-x-hidden  '>
            <div className="softImg-main-cont w-[50%] h-[90vh] rounded-3xl relative">
                <div className="CMP-img w-[100%] h-[90vh] rounded-3xl absolute bg">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://cdn.supplyon.com/wp-content/uploads/2022/07/Customer-Portal-Management_social-media_blog-1024x535.jpg" alt="" />
                    <h1 className='CMP-text text-[50px] text-amber-700 font-extrabold absolute bottom-15 left-15'>What software solution <br /> are you looking for?</h1>
                </div>

                 <div className="Apps-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://media.istockphoto.com/id/2159760015/photo/technology-organization-computer-document-data-technology-digital-display-toolbox-computer.jpg?s=612x612&w=0&k=20&c=agSIDXPzPzqXxmAs1n6C_pcdMOlPZJ63ETMzQ26c2us=" alt="" />
                </div>

                 <div className="web-CMS-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" alt="" />
                </div>

                 <div className="E-com-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://5.imimg.com/data5/IE/EW/NT/SELLER-13691480/e-commerce-solution.jpg" alt="" />
                </div>

                 <div className="DMP-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://st3.depositphotos.com/1071909/14471/i/450/depositphotos_144710139-stock-photo-data-management-and-privacy-concept.jpg" alt="" />
                </div>

                 <div className="LMS-img w-[100%] h-[90vh] rounded-3xl absolute opacity-0">
                    <img className='object-fit w-full h-full rounded-3xl' src="https://media.istockphoto.com/id/1485715402/photo/lms-learning-management-system-for-lesson-and-online-education-course-application-study-e.jpg?s=612x612&w=0&k=20&c=_pt8OIMpvfOgQKHW_5u2rB6fXAg5KT0G-0Yy1UqOwZM=" alt="" />
                </div>

            </div>
            <div className="softImg-cont w-[40%] h-[90%]">

                <div className="soft-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>Customer and management portals</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>

                <div className="soft-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>Apps</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>


                <div className="soft-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>Websites & CMS</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>

                <div className="soft-subchild .pppp flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>E-commerce solutions</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>

                <div className="soft-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>Data Management Platform</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>

                <div className="soft-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-10">
                    <div className='flex items-center'>
                        <h1 className='text-[30px] text-white/70'>Learning Management System</h1>
                    </div>

                    <div className="soft-iconAnim opacity-0 scale-0  bg-yellow-300  flex px-3 py-3 rounded-full">
                        <CallMadeIcon className="!w-7 !h-7 text-black " />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SoftSolution
