import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import { NavLink, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import CallMadeIcon from '@mui/icons-material/CallMade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Header() {
    const location = useLocation();

    const [pos, setPos] = useState({ x: 750, y: 400 });
    const rotateTweenArrow = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        // tl.from(".Header-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

        tl.from(".Header-advantium-text", {
            rotate: 360,
            duration: 0.8,
            delay: 0.2,
            ease: "elastic.out",
        })





    })

    useGSAP(() => {
        rotateTweenArrow.current = gsap.to(".insightsNavP3 .Header-nextArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow = document.querySelector(".header-bookingBtn-container");
        if (!arrow) return;

        const onEnter = () => rotateTweenArrow.current.play();
        const onLeave = () => rotateTweenArrow.current.reverse();

        arrow.addEventListener("mouseenter", onEnter);
        arrow.addEventListener("mouseleave", onLeave);

        return () => {
            arrow.removeEventListener("mouseenter", onEnter);
            arrow.removeEventListener("mouseleave", onLeave);
            rotateTweenArrow.current.kill();
        };
    }, []);









    useGSAP(() => {
        // ---------------- Deliver Drawer ----------------
        const deliver = document.querySelector(".insightsNavP1 .Header-deliver");
        const deliverDrawer = document.querySelector(".Header-deliverdrawer");

        const dtl = gsap.timeline({ paused: true, reversed: true });
        dtl.to(".Header-deliverdrawer", { top: 0, duration: 0.5, opacity: 1 });
        dtl.from(".Header-deliverdrawer h1", { x: -500, duration: 0.8 });

        const openDDrawer = () => {
            if (dtl.reversed()) {
                dtl.timeScale(1).play(); // open
            }
        };
        const closeDDrawer = () => {
            if (!dtl.reversed()) {
                dtl.timeScale(4).reverse(); // close
            }
        };

        // ---------------- Cases Drawer ----------------
        const cases = document.querySelector(".insightsNavP1 .Header-cases");
        const casesDrawer = document.querySelector(".Header-casesdrawer");

        const ctl = gsap.timeline({ paused: true, reversed: true });
        ctl.to(".Header-casesdrawer", { top: 0, duration: 0.5, opacity: 1 });
        ctl.from(".Header-cases-drawer-child", {
            y: 450,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2
        });
        ctl.from(
            ".Header-cases-subchild",
            {
                y: 450,
                opacity: 0,
                stagger: 0.3
            },
            "-=0.4"
        );


        const openCDrawer = () => {
            if (ctl.reversed()) {
                ctl.timeScale(1).play();
            }
        };
        const closeCDrawer = () => {
            if (!ctl.reversed()) {
                ctl.timeScale(4).reverse();
            }
        };


        const insights = document.querySelector(".insightsNavP1 .Header-insightsText");
        const about = document.querySelector(".insightsNavP1 .Header-aboutText");
        const careers = document.querySelector(".insightsNavP1 .Header-careersText");



        deliver.addEventListener("mouseenter", openDDrawer);
        deliver.addEventListener("mouseenter", closeCDrawer);
        deliverDrawer.addEventListener("mouseleave", closeDDrawer);
        deliver.addEventListener("click", closeDDrawer);


        cases.addEventListener("mouseenter", openCDrawer);
        cases.addEventListener("mouseenter", closeDDrawer);
        casesDrawer.addEventListener("mouseleave", closeCDrawer);
        cases.addEventListener("click", closeCDrawer);

        insights.addEventListener("mouseenter", closeDDrawer);
        insights.addEventListener("mouseenter", closeCDrawer);


        return () => {
            deliver.removeEventListener("mouseenter", openDDrawer);
            deliver.removeEventListener("mouseenter", closeCDrawer);
            deliverDrawer.removeEventListener("mouseleave", closeDDrawer);
            deliver.removeEventListener("click", closeDDrawer);
            dtl.kill();

            cases.removeEventListener("mouseenter", openCDrawer);
            cases.removeEventListener("mouseenter", closeDDrawer);
            casesDrawer.removeEventListener("mouseleave", closeCDrawer);
            cases.removeEventListener("click", closeCDrawer);

            insights.removeEventListener("mouseenter", closeDDrawer);
            insights.removeEventListener("mouseenter", closeCDrawer);
            ctl.kill();
        };
    }, []);






    useGSAP(() => {
        const headings = document.querySelectorAll(".Header-drawerArrowH1");

        const tweenMap = new Map();
        const handlerMap = new Map();

        headings.forEach((h1) => {
            const btn = h1.parentElement.querySelector(".Header-drawerArrowButton");
            if (!btn) return;

            const t = gsap.to(btn, {
                opacity: 1,
                scale: 1,
                x: 20,
                paused: true,
            });

            const onEnter = () => t.play();
            const onLeave = () => t.reverse();

            h1.addEventListener("mouseenter", onEnter);
            h1.addEventListener("mouseleave", onLeave);

            tweenMap.set(btn, t);
            handlerMap.set(h1, { onEnter, onLeave });
        });

        return () => {
            for (const [h1, handlers] of handlerMap.entries()) {
                h1.removeEventListener("mouseenter", handlers.onEnter);
                h1.removeEventListener("mouseleave", handlers.onLeave);
            }
            for (const tween of tweenMap.values()) {
                tween.kill();
            }
            tweenMap.clear();
            handlerMap.clear();
        };
    }, []);




    useGSAP(() => {
        const items = document.querySelectorAll(".Header-cases-subchild");

        const tweenMap = new Map();
        const handlerMap = new Map();

        items.forEach((item) => {
            // find icon INSIDE the same .cases-subchild
            const icon = item.querySelector(".Header-iconAnim");
            if (!icon) return;

            const t = gsap.to(icon, {
                x: 28,
                y: -28,
                duration: 0.35,
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
  const lines = document.querySelectorAll(".NavTextUnderline");

  lines.forEach((line) => {
    const underline = line.querySelector(".underline-line");
    const icon = line.querySelector(".KeyboardArrowDownIcon"); // per-line icon (may be null)

    if (!underline) return;

    const unline = gsap.to(underline, {
      width: "95%",
      duration: 0.5,
      paused: true
    });

    // create icon tween only if icon exists
    let iconTween = null;
    if (icon) {
      iconTween = gsap.to(icon, {
        rotation: 180,
        // NOTE: changing color on an MUI svg may not work via 'color' — consider using css variable or class toggle.
        // If color change doesn't reflect, prefer: icon.classList.add('text-amber-300') and handle in CSS/Tailwind.
        color: "#fcd34d",
        duration: 0.5,
        paused: true,
        transformOrigin: "50% 50%"
      });
    }

    const onEnter = () => {
      unline.play();
      if (iconTween) iconTween.play();
    };
    const onLeave = () => {
      unline.reverse();
      if (iconTween) iconTween.reverse();
    };

    line.addEventListener("mouseenter", onEnter);
    line.addEventListener("mouseleave", onLeave);

    // store handlers for cleanup
    line._handlers = { onEnter, onLeave, iconTween };
  });

  return () => {
    lines.forEach((line) => {
      const h = line._handlers || {};
      if (h.onEnter) line.removeEventListener("mouseenter", h.onEnter);
      if (h.onLeave) line.removeEventListener("mouseleave", h.onLeave);
      if (h.iconTween) h.iconTween.kill();
      // you may also want to kill underline tweens, but they are stored in closure — ok to leave
    });
  };
}, []);






    return (
        <div
        //             onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        //             onMouseLeave={() => setPos({ x: -200, y: -200 })}
        //   className="Header-main-cont w-full h-[100vh] relative bg-slate-900 transition-colors"
        //             style={{
        //                 background: `radial-gradient(
        //           900px circle at ${pos.x}px ${pos.y}px,
        //           rgba(56, 189, 248, 0.7),
        //           transparent 80%
        //         ), #0f172a`,
        //             }}
        >
            <div className="insightsNav w-[100%] flex justify-between items-center px-[40px] py-10 absolute top-0 left-0 text-white z-50">
                <div className="insightsNavP1 w-[40%] flex justify-between items-center ml-[30px] px-7  ">
                    <h1 className="Header-deliver NavTextUnderline text-[15px] cursor-pointer relative  ">What we deliver <KeyboardArrowDownIcon className='KeyboardArrowDownIcon' />
                        <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                    </h1>
                    <h1 className="Header-cases NavTextUnderline text-[15px] cursor-pointer relative ">Cases <KeyboardArrowDownIcon className='KeyboardArrowDownIcon' />
                        <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                    </h1>
                    <NavLink to="/Insights" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`}>
                        <h1 className="Header-insightsText NavTextUnderline text-[15px] cursor-pointer relative ">Insights
                             <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                        </h1>
                    </NavLink>
                    <NavLink to="/About" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`} >
                        <h1 className="Header-aboutText NavTextUnderline text-[15px] cursor-pointer relative ">About us
                             <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                             </h1></NavLink>
                    <NavLink to="/Careers" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`}>
                        <h1 className="Header-careersText NavTextUnderline text-[15px] cursor-pointer relative ">Careers
                             <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                             </h1></NavLink>
                </div>
                <div className="insightsNavP2 flex justify-center items-center text-center w-[20%] ">
                    <NavLink to="/" >
                        <h1 className=" Header-advantium-text text-[50px] font-extrabold">𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞</h1></NavLink>
                </div>
                <div className="insightsNavP3 w-[40%] flex justify-center items-center  ">
                    <NavLink to="/Contact" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? " text-amber-300" : "after:w-0"}`}>
                    <button className="Header-contactButton border-2 rounded-full py-3 px-7 text-[20px] cursor-pointer mx-3 hover:border-amber-300">Contact</button>
                    </NavLink>
                    <div className="header-bookingBtn-container">
                    <button className="Header-bookingButton  rounded-full py-4 px-7 text-[20px] bg-yellow-300 text-black cursor-pointer ">Book a meeting</button>
                    <button
                        className="Header-nextArrowButton bg-yellow-300 rounded-full p-4 text-black cursor-pointer  "

                    ><CallMadeIcon className="!w-8 !h-8" /></button>
                    </div>
                </div>
            </div>


            <div className="Header-deliverdrawer w-[100%] h-[90vh] absolute top-[-90vh] opacity-0   bg-black/80 backdrop-filter backdrop-blur-[12px] z-40  ">


                <div className="Header-drawer-cont w-[100%] h-[73vh] mt-[150px] pl-4   ">
                    <div className="Header-dr-sub-cont w-[90%] h-[73vh] flex mx-auto ">
                        <div className="Header-dr-sub-child w-[30%] h-[73vh] flex flex-col gap-10 text-white/80 overflow-hidden">
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[25px]  font-bold !text-white '>Digital transformation

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]   '>Code review
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full  px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Strategy & Advice
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Texhnical architecture
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Data & AI
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Replatforming
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                        </div>


                        <div className="Header-dr-sub-child w-[30%] h-[73vh] flex flex-col gap-10 text-white/80 overflow-hidden  ">
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[25px]  font-bold !text-white '>Software solutions

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Customer and management portals
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Apps
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Websites & CMS
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>E-commerce solutions
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                            <a className='w-fit' href=""><h1 className='Header-drawerArrowH1 text-[20px]  '>Data Management Platform
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></a>
                        </div>


                        <div className="Header-dr-sub-child w-[18%] h-[73vh] flex flex-col gap-6 pt-4 text-white/80 overflow-hidden  ">
                            <a className='w-fit' href=""><h1 className='text-[20px] font-bold !text-white '>Digital transformation

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Code review

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Strategy & Advice

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Texhnical architecture

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Data & AI

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Replatforming

                            </h1></a>
                        </div>


                        <div className="Header-dr-sub-child w-[18%] h-[73vh] flex flex-col gap-6 pt-4 text-white/80 overflow-hidden  ">
                            <a className='w-fit' href=""><h1 className='text-[20px] font-bold !text-white '>Digital transformation

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Code review

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Strategy & Advice

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Texhnical architecture

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Data & AI

                            </h1></a>
                            <a className='w-fit' href=""><h1 className='text-[18px]  '>Replatforming

                            </h1></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Header-casesdrawer w-[100%] h-[90vh] absolute top-[-90vh] opacity-0   bg-black/80 backdrop-filter backdrop-blur-[12px] z-30 ">

                <div className='w-[100%] h-[73vh] mt-[150px] px-19 pt-20 '>
                    <h1 className="Header-cases-heading text-white text-[30px] font-bold absolute ">Highlighted cases</h1>
                    <div className="Header-cases-drawer-cont w-[100%] h-[73vh]  flex justify-between items-center">
                        <div className="Header-cases-drawer-child w-[22.5%] h-[450px] flex flex-col gap-2 text-start text-white   ">
                            <img src="pure.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                            <h1 className="Header-cases-h1 text-[25px] font-semibold">Pure Energie</h1>
                            <h1 className="Header-cases-h1 text-[20px] text-white/80">Pure Energie:from green ambition to pure result.</h1>
                            <div className="Header-cases-sub-btn mt-4">
                                <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mr-2 rounded-2xl">Website</button>
                                <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mx-2 rounded-2xl">Platform</button>
                            </div>
                        </div>
                        <div className="Header-cases-drawer-child w-[22.5%] h-[450px] flex flex-col gap-2 text-start text-white   ">
                            <img src="nou.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                            <h1 className="Header-cases-h1 text-[25px] font-semibold">Nou</h1>
                            <h1 className="Header-cases-h1 text-[20px] text-white/80">An enhanced brand position with a customer portal website and...</h1>
                            <div className="Header-cases-sub-btn mt-4">
                                <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mr-2 rounded-2xl">Website</button>
                                <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mx-2 rounded-2xl">Platform</button>
                            </div>
                        </div>
                        <div className="Header-cases-drawer-child w-[22.5%] h-[450px] flex flex-col gap-2 text-start text-white   ">
                            <img src="inCorpe.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                            <h1 className="Header-cases-h1 text-[25px] font-semibold">InCorpe</h1>
                            <h1 className="Header-cases-h1 text-[20px] text-white/80">How InCorpe transitioned to greater efficiency through web...</h1>
                            <div className="Header-cases-sub-btn mt-4">
                                <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mr-2 rounded-2xl">Portal</button>
                            </div>
                        </div>


                        <div className="Header-cases-drawer-child w-[22.5%] h-[450px] flex flex-col gap-2 text-start text-white   ">

                            <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                <div className='flex items-center'>
                                    <img src="eastborn.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                    <h1 className='text-[20px]'>Eastborn</h1>
                                </div>
                                <div className='w-[28px] h-[28px]   relative  overflow-hidden '>
                                    <div className="Header-iconAnim absolute right-0   flex">
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                <div className='flex items-center'>
                                    <img src="fundament.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                    <h1 className='text-[20px]'>Fundaments</h1>
                                </div>
                                <div className='w-[28px] h-[28px]   relative   overflow-hidden'>
                                    <div className="Header-iconAnim absolute right-0   flex">
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                <div className='flex items-center'>
                                    <img src="justeat.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                    <h1 className='text-[20px]'>Just Eat Takeaway</h1>
                                </div>
                                <div className='w-[28px] h-[28px]   relative  overflow-hidden'>
                                    <div className="Header-iconAnim absolute right-0   flex">
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-2-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                <div className='flex items-center'>
                                    <img src="takeAway.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                    <h1 className='text-[20px]'>Takeaway.com</h1>
                                </div>

                                <div className='w-[28px] h-[28px]   relative  overflow-hidden ' >
                                    <div className="Header-iconAnim absolute right-0   flex">
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                        <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
}
