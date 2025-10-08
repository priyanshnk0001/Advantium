import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import { TextPlugin } from 'gsap/all';
import { NavLink, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import CallMadeIcon from '@mui/icons-material/CallMade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css';
import emailjs from "emailjs-com";




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(TextPlugin);

export default function Header() {
    //     const [loading, setLoading] = useState(true);

    //   useEffect(() => {
    //     const handleLoad = () => setLoading(false);  // page load होते ही loading false

    //     if (document.readyState === "complete") {
    //       setLoading(false); // agar page pehle se loaded hai
    //     } else {
    //       window.addEventListener("load", handleLoad);
    //     }

    //     return () => window.removeEventListener("load", handleLoad);
    //   }, []);




    const location = useLocation();

    const [pos, setPos] = useState({ x: 750, y: 400 });
    const rotateTweenArrow = useRef(null);
    const bookingTweenArrow = useRef(null);

    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isDeliverOpen, setIsDeliverOpen] = useState(false);
    const [isCasesOpen, setIsCasesOpen] = useState(false);

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
        bookingTweenArrow.current = gsap.to(".Booking-drawer-Btn-container .booking-nextArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow4 = document.querySelector(".Booking-drawer-Btn-container");
        if (!arrow4) return;

        const onEnter = () => bookingTweenArrow.current.play();
        const onLeave = () => bookingTweenArrow.current.reverse();

        arrow4.addEventListener("mouseenter", onEnter);
        arrow4.addEventListener("mouseleave", onLeave);

        return () => {
            arrow4.removeEventListener("mouseenter", onEnter);
            arrow4.removeEventListener("mouseleave", onLeave);
            bookingTweenArrow.current.kill();
        };
    }, []);












    useGSAP(() => {
        // ---------------- Deliver Drawer ----------------
        const deliver = document.querySelector(".insightsNavP1 .Header-deliver");
        const deliverDrawer = document.querySelector(".Header-deliverdrawer");

        const dtl = gsap.timeline({ paused: true, reversed: true });
        dtl.to(".Header-deliverdrawer", { top: 0, duration: 0.5, opacity: 1 });
        dtl.from(".Header-deliverdrawer h1", { x: -500, duration: 0.8 });

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

        // ---------------- Booking Drawer (same useGSAP scope) ----------------
        const bookingBtn = document.querySelector(".Header-bookingButton");
        const bookingDrawerEl = document.querySelector(".Header-Bookingdrawer");

        const btl = gsap.timeline({ paused: true, reversed: true });
        btl.to(".Header-Bookingdrawer", { top: 0, duration: 0.45, opacity: 1, ease: "power2.out" });
        btl.to(".Header-bookingButton", { text: "Close overlay", ease: "none" })
        btl.from(".bookingP1 > * , .bookingP2 > * ", {
            y: 30,
            opacity: 0,
            stagger: 0.6
        }, "0.2");

        const closeBookingIfOpen = () => {
            if (btl && !btl.reversed()) {
                btl.timeScale(2).reverse();
                try { setIsBookingOpen(false); } catch (e) { }
            }
        };


        const openDDrawer = () => {
            closeBookingIfOpen();
            if (dtl.reversed()) {
                dtl.timeScale(1).play(); // open
                try { setIsBookingOpen(false); setIsCasesOpen(false); } catch (e) { }
            }
        };
        const closeDDrawer = () => {
            if (!dtl.reversed()) {
                dtl.timeScale(4).reverse(); // close
            }
        };



        // paste immediately after closeDDrawer
        const toggleDDrawer = (e) => {
            e && e.stopPropagation();
            if (dtl.reversed()) { // closed -> open
                if (!ctl.reversed()) ctl.timeScale(4).reverse(); // close cases if open
                if (btl && !btl.reversed()) btl.timeScale(2).reverse(); // close booking if open
                dtl.timeScale(1).play();
                try { setIsDeliverOpen(true); setIsBookingOpen(false); setIsCasesOpen(false); } catch (err) { }
            } else { // open -> close
                dtl.timeScale(4).reverse();
                try { setIsDeliverOpen(false); } catch (err) { }
            }
        };

        const toggleCDrawer = (e) => {
            e && e.stopPropagation();
            if (ctl.reversed()) { // closed -> open
                if (!dtl.reversed()) dtl.timeScale(4).reverse(); // close deliver if open
                if (btl && !btl.reversed()) btl.timeScale(2).reverse(); // close booking if open
                ctl.timeScale(1).play();
                try { setIsCasesOpen(true); setIsBookingOpen(false); setIsDeliverOpen(false); } catch (err) { }
            } else { // open -> close
                ctl.timeScale(4).reverse();
                try { setIsCasesOpen(false); } catch (err) { }
            }
        };


        const openCDrawer = () => {
            closeBookingIfOpen();
            if (ctl.reversed()) {
                ctl.timeScale(1).play();
                try { setIsBookingOpen(false); setIsDeliverOpen(false); } catch (e) { }
            }
        };
        const closeCDrawer = () => {
            if (!ctl.reversed()) {
                ctl.timeScale(4).reverse();
            }
        };

        const toggleBooking = (e) => {
            e && e.stopPropagation();
            if (!btl) return;

            if (btl.reversed()) {
                if (!dtl.reversed()) dtl.timeScale(4).reverse();
                if (!ctl.reversed()) ctl.timeScale(4).reverse();

                btl.timeScale(1).play();
                try { setIsBookingOpen(true); } catch (e) { }
            } else {
                btl.timeScale(2).reverse();
                try { setIsBookingOpen(false); } catch (e) { }
            }
        };

        const onBookingBgClick = (ev) => {
            if (ev.target === bookingDrawerEl && btl && !btl.reversed()) {
                btl.timeScale(2).reverse();
                try { setIsBookingOpen(false); } catch (e) { }
            }
        };

        if (deliver) {
            deliver.addEventListener("mouseenter", openDDrawer);
            deliver.addEventListener("mouseenter", closeCDrawer);
            deliver.addEventListener("click", toggleDDrawer);
        }
        if (deliverDrawer) {
            deliverDrawer.addEventListener("mouseleave", closeDDrawer);
        }

        if (cases) {
            cases.addEventListener("mouseenter", openCDrawer);
            cases.addEventListener("mouseenter", closeDDrawer);
            cases.addEventListener("click", toggleCDrawer);
        }
        if (casesDrawer) {
            casesDrawer.addEventListener("mouseleave", closeCDrawer);
        }

        const about = document.querySelector(".insightsNavP1 .Header-aboutText");
        if (about) {
            about.addEventListener("mouseenter", closeDDrawer);
            about.addEventListener("mouseenter", closeCDrawer);
        }

        if (bookingBtn) bookingBtn.addEventListener("click", toggleBooking);
        if (bookingDrawerEl) bookingDrawerEl.addEventListener("click", onBookingBgClick);

        // cleanup
        return () => {
            if (deliver) {
                deliver.removeEventListener("mouseenter", openDDrawer);
                deliver.removeEventListener("mouseenter", closeCDrawer);
                deliver.removeEventListener("click", toggleDDrawer);
            }
            if (deliverDrawer) deliverDrawer.removeEventListener("mouseleave", closeDDrawer);
            dtl.kill();

            if (cases) {
                cases.removeEventListener("mouseenter", openCDrawer);
                cases.removeEventListener("mouseenter", closeDDrawer);
                cases.removeEventListener("click", toggleCDrawer);
            }
            if (casesDrawer) casesDrawer.removeEventListener("mouseleave", closeCDrawer);
            ctl.kill();

            if (about) {
                about.removeEventListener("mouseenter", closeDDrawer);
                about.removeEventListener("mouseenter", closeCDrawer);
            }

            if (bookingBtn) bookingBtn.removeEventListener("click", toggleBooking);
            if (bookingDrawerEl) bookingDrawerEl.removeEventListener("click", onBookingBgClick);
            btl.kill();
        };
    }, []);



    useGSAP(() => {
        const btl = gsap.timeline({ paused: true, reversed: true });
        btl.to(".Header-Bookingdrawer", {
            top: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        });

        if (isBookingOpen) btl.timeScale(1).play();
        else btl.timeScale(2).reverse();
    }, [isBookingOpen]);


    const toggleBooking = () => {
        if (!isBookingOpen) {
            setIsDeliverOpen(false);
            setIsCasesOpen(false);
        }
        setIsBookingOpen((prev) => !prev);
    };






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
                x: 5,
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

            let iconTween = null;
            if (icon) {
                iconTween = gsap.to(icon, {
                    rotation: 180,

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
            });
        };
    }, []);


    const formRef2 = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_naresh",   // EmailJS se milega
                "template_3fokrph",  // EmailJS se milega
                formRef2.current,
                "TXgR3cKIt4epQKF6L"    // EmailJS dashboard me "Public Key"
            )
            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    console.log(result.text);
                    formRef2.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message.");
                    console.log(error.text);
                }
            );
    };







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
        // className={loading ? "hidden" : ""}
        >
            <div className="insightsNav w-[100%]  flex justify-between items-center px-[50px] py-10 absolute top-0 left-0 text-white z-50">
                <div className="insightsNavP1 w-[40%] flex gap-10 items-center      ">
                    <h1 className="Header-deliver NavTextUnderline text-[13px] cursor-pointer relative  ">What we deliver <KeyboardArrowDownIcon className='KeyboardArrowDownIcon' />
                        <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                    </h1>
                    <h1 className="Header-cases NavTextUnderline text-[13px] cursor-pointer relative ">Cases <KeyboardArrowDownIcon className='KeyboardArrowDownIcon' />
                        <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                    </h1>
                    {/* <NavLink to="/Insights" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`}>
                        <h1 className="Header-insightsText NavTextUnderline text-[13px] cursor-pointer relative ">Insights
                            <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                        </h1>
                    </NavLink> */}
                    <NavLink to="/About" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`} >
                        <h1 className="Header-aboutText NavTextUnderline text-[13px] cursor-pointer relative ">About us
                            <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                        </h1></NavLink>
                    <NavLink to="/Careers" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? "after:w-full text-amber-300" : "after:w-0"}`}>
                        <h1 className="Header-careersText NavTextUnderline text-[13px] cursor-pointer relative ">Careers
                            <span className="underline-line absolute left-0 bottom-0 h-[2px] bg-amber-300 w-0"></span>
                        </h1></NavLink>
                </div>
                <div className="insightsNavP2 flex justify-center  items-center text-center w-[20%]  ">
                    <NavLink to="/" >
                        <h1 className=" Header-advantium-text flex items-center gap-2 text-[25px] font-semibold"><img className='w-[50px]' src="Advantium-logo.png" alt="" />Advantium</h1></NavLink>
                </div>
                <div className="insightsNavP3 w-[40%] flex justify-end items-center  ">
                    <NavLink to="/Contact" className={({ isActive }) => `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300
                     ${isActive ? " text-amber-300" : "after:w-0"}`}>
                        <button className="Header-contactButton border-2 rounded-full py-2.5 px-7 text-[18px] cursor-pointer mx-3 hover:border-amber-300">Contact</button>
                    </NavLink>
                    <div className="header-bookingBtn-container">
                        <button className="Header-bookingButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Book a meeting</button>
                        <button
                            className="Header-nextArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  "

                        ><CallMadeIcon className="!w-7 !h-7" /></button>
                    </div>
                </div>

                <div className="mobile-menu hidden">menu</div>
            </div>


            <div className="Header-deliverdrawer w-[100%] h-[90vh] absolute top-[-90vh] opacity-0   bg-black/80 backdrop-filter backdrop-blur-[12px] z-40  ">


                <div className="Header-drawer-cont w-[100%] h-[73vh] mt-[150px] pl-4   ">
                    <div className="Header-dr-sub-cont w-[95%] h-[73vh] flex justify-between mx-auto  ">
                        <div className="Header-dr-sub-child w-[30%] h-[73vh] flex flex-col gap-10 text-white/80 overflow-hidden">
                            <h1 className='Header-drawerArrowH1 text-[25px]  font-semibold !text-white '>Digital transformation

                            </h1>
                            <NavLink className='w-fit' to="/Code"><h1 className='Header-drawerArrowH1 text-[18px]   '>Code review
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full  px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className='w-fit' to="/Strategy"><h1 className='Header-drawerArrowH1 text-[18px]  '>Strategy & Advice
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className='w-fit' to="/Technical"><h1 className='Header-drawerArrowH1 text-[18px]  '>Technical architecture
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className='w-fit' to="/DataAI"><h1 className='Header-drawerArrowH1 text-[18px]  '>Data & AI
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className='w-fit' to="/Replatform"><h1 className='Header-drawerArrowH1 text-[18px]  '>Replatforming
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                        </div>


                        <div className="Header-dr-sub-child w-[30%] h-[73vh] flex flex-col gap-10 text-white/80 overflow-hidden  ">
                            <h1 className='Header-drawerArrowH1 text-[25px]  font-semibold !text-white '>Software solutions

                            </h1>
                            <NavLink className="w-fit" to="/CMportal"><h1 className='Header-drawerArrowH1 text-[18px]  '>Customer and management portals
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className="w-fit" to="/Apps"><h1 className='Header-drawerArrowH1 text-[18px]  '>Apps
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className="w-fit" to="/WebsiteCMS"><h1 className='Header-drawerArrowH1 text-[18px]  '>Websites & CMS
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className="w-fit" to="/Ecom"><h1 className='Header-drawerArrowH1 text-[18px]  '>E-commerce solutions
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                            <NavLink className="w-fit" to="/DMplatform"><h1 className='Header-drawerArrowH1 text-[18px]  '>Data Management Platform
                                <button
                                    className="Header-drawerArrowButton bg-yellow-300 rounded-full   px-3 py-2.5 text-black cursor-pointer opacity-0 scale-50  ">
                                    <CallMadeIcon className="!w-6 !h-6" />
                                </button>
                            </h1></NavLink>
                        </div>


                        <div className="Header-dr-sub-child w-[18%] h-[73vh] flex flex-col gap-6 pt-4 text-white/80 overflow-hidden  ">
                            <h1 className='text-[18px] font-semibold !text-white '>Services

                            </h1>
                            <NavLink className="w-fit" to="/SoftDev"><h1 className='text-[18px]  '>Software Development

                            </h1></NavLink>
                            <NavLink className="w-fit" to="/Design"><h1 className='text-[18px]  '>Design

                            </h1></NavLink>
                            <NavLink className="w-fit" to="/Maintenance"><h1 className='text-[18px]  '>Maintenance

                            </h1></NavLink>
                            <NavLink className="w-fit" to="/Security"><h1 className='text-[18px]  '>Security & Privacy

                            </h1></NavLink>
                            <NavLink className="w-fit" to="/DevSecOps"><h1 className='text-[18px]  '>DevSecOps

                            </h1></NavLink>
                        </div>


                        <div className="Header-dr-sub-child w-[18%] h-[73vh] flex flex-col gap-6 pt-4 text-white/80 overflow-hidden   ">
                            <h1 className='text-[18px] w-fit font-semibold !text-white '>Also interesting
                            </h1>

                            <NavLink className="w-fit" to="/Technology"><h1 className='text-[18px]  '>Technology
                            </h1></NavLink>

                            <NavLink className="w-fit" to="/Integration"><h1 className='text-[18px]  '>Integrations
                            </h1></NavLink>


                        </div>
                    </div>
                </div>
            </div>


            <div className="Header-casesdrawer w-[100%] h-[90vh] absolute top-[-90vh] opacity-0   bg-black/80 backdrop-filter backdrop-blur-[12px] overflow-hidden z-30 ">

                <div className='w-[100%] h-[73vh] mt-[150px] px-19 pt-15 '>
                    <h1 className="Header-cases-heading text-white text-[30px] font-semibold absolute ">Highlighted cases</h1>
                    <div className="Header-cases-drawer-cont w-[100%] h-[73vh]  flex justify-between items-center">
                        <NavLink className=" w-[22.5%] h-[450px] " to="/PureEnergy">
                            <div className="Header-cases-drawer-child flex flex-col gap-2 text-start text-white   ">
                                <img src="pure.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                                <h1 className="Header-cases-h1 text-[25px] font-semisemibold">Pure Energie</h1>
                                <h1 className="Header-cases-h1 text-[18px] text-white/80">Pure Energie:from green ambition to pure result.</h1>
                                <div className="Header-cases-sub-btn mt-4">
                                    <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300  mr-2 rounded-2xl">Website</button>
                                    <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300  mx-2 rounded-2xl">Platform</button>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink className=" w-[22.5%] h-[450px] " to="/Nou">
                            <div className="Header-cases-drawer-child  flex flex-col gap-2 text-start text-white   ">
                                <img src="nou.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                                <h1 className="Header-cases-h1 text-[25px] font-semisemibold">Nou</h1>
                                <h1 className="Header-cases-h1 text-[18px] text-white/80">An enhanced brand position with a customer portal website and...</h1>
                                <div className="Header-cases-sub-btn mt-4">
                                    <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mr-2 rounded-2xl">Website</button>
                                    <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mx-2 rounded-2xl">Platform</button>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink className=" w-[22.5%] h-[450px] " to="/InCorpe">
                            <div className="Header-cases-drawer-child  flex flex-col gap-2 text-start text-white   ">
                                <img src="inCorpe.png" alt="" className="Header-cases-img w-[100%] h-[225px] rounded-2xl hover:scale-110 " />
                                <h1 className="Header-cases-h1 text-[25px] font-semisemibold">InCorpe</h1>
                                <h1 className="Header-cases-h1 text-[18px] text-white/80">How InCorpe transitioned to greater efficiency through web...</h1>
                                <div className="Header-cases-sub-btn mt-4">
                                    <button className="Header-cases-btn border-2 text-white w-fit px-4  py-1 hover:bg-gray-300 cursor-pointer mr-2 rounded-2xl">Portal</button>
                                </div>
                            </div>
                        </NavLink>


                        <div className="Header-cases-drawer-child w-[22.5%] h-[450px] flex flex-col gap-2 text-start text-white   ">

                            <NavLink className="  " to="/EastBorn">
                                <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                    <div className='flex items-center'>
                                        <img src="eastborn.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                        <h1 className='text-[18px]'>Eastborn</h1>
                                    </div>
                                    <div className='w-[28px] h-[28px]   relative  overflow-hidden '>
                                        <div className="Header-iconAnim absolute right-0   flex">
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink className="  " to="/Fundaments">
                                <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                    <div className='flex items-center'>
                                        <img src="fundament.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                        <h1 className='text-[18px]'>Fundaments</h1>
                                    </div>
                                    <div className='w-[28px] h-[28px]   relative   overflow-hidden'>
                                        <div className="Header-iconAnim absolute right-0   flex">
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink className="  " to="/JustEat">
                                <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-t-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                    <div className='flex items-center'>
                                        <img src="justeat.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                        <h1 className='text-[18px]'>Just Eat Takeaway</h1>
                                    </div>
                                    <div className='w-[28px] h-[28px]   relative  overflow-hidden'>
                                        <div className="Header-iconAnim absolute right-0   flex">
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink className="  " to="/TakeAway">
                                <div className="Header-cases-subchild flex justify-between items-center border-b-1 rounded-2-xl border-gray-400 hover:bg-gray-200/10  py-4">
                                    <div className='flex items-center'>
                                        <img src="takeAway.png" alt="" className="Header-subchild-img w-[70px] rounded-[7px] mr-3" />
                                        <h1 className='text-[18px]'>Takeaway.com</h1>
                                    </div>

                                    <div className='w-[28px] h-[28px]   relative  overflow-hidden ' >
                                        <div className="Header-iconAnim absolute right-0   flex">
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400 mt-[28px]" />
                                            <CallMadeIcon className="!w-7 !h-7 text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>



            <div className="Header-Bookingdrawer w-[100%] h-[100vh] absolute top-[-100vh] opacity-0    bg-black backdrop-filter backdrop-blur-[12px] z-40   ">
                <div className="Header-booking-container w-[100%] flex mt-50">
                    <div className="bookingP1 w-[45%] pl-10   ">
                        <div className="BP1-child w-[100%] flex flex-col items-start gap-10 text-white  ">
                            <h1 className="helper-work text-5xl text-white ">Book an appointment</h1>
                            <h1 className='text-gray-400 text-xl  '>Curious how we can help with your digital challenges? Schedule a quick chat and get immediate insight into the best solution for your situation.</h1>
                            <div className="booking-img-cont w-[100%] flex justify-between items-center pr-10 text-white text-xl">
                                <div className="book-img flex items-center gap-5"><img className='w-[130px] h-[130px] rounded-full' src="neerajAdvantium.jpeg" alt="" />
                                    <div className="book-name">
                                        <h1>Neeraj Kumar</h1>
                                        <h1 className='text-gray-400'>Co-Founder and Director</h1>
                                    </div>
                                </div>

                                <button className="BP1btn text-2xl text-white border-2 border-white rounded-full px-3 py-2.5 ml-20 cursor-pointer">@</button>

                            </div>


                            <div className="booking-img-cont w-[100%] flex justify-between items-center pr-10 text-white text-xl">
                                <div className="book-img flex items-center gap-5"><img className='w-[130px] h-[130px] rounded-full' src="priyaAdvantium.webp" alt="" />
                                    <div className="book-name">
                                        <h1>Priya Fozdar</h1>
                                        <h1 className='text-gray-400'>Director</h1>
                                    </div>
                                </div>

                                <button className="BP1btn text-2xl text-white border-2 border-white rounded-full px-3 py-2.5 ml-20 cursor-pointer">@</button>

                            </div>

                        </div>
                    </div>
                    <div className="bookingP2 w-[55%] text-white px-15   ">

                        <form className=' flex flex-col gap-10 ' action="" ref={formRef2} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="">What is your name ?</label>
                                <input
                                    required
                                    name="user_name"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    className="w-full bg-transparent text-white placeholder-white/60 border-b border-white focus:outline-none focus:border-white py-4"
                                />
                            </div>

                            <div className='flex w-[100%] justify-between py-4'>
                                <div className='w-[45%] flex flex-col gap-4'>
                                    <label htmlFor="">What is your e-mail?</label>
                                    <input
                                        required
                                        name="user_email"
                                        type="email"
                                        placeholder="Email address"
                                        aria-label="Email address"
                                        className="w-full bg-transparent text-white placeholder-white/60 border-b border-white focus:outline-none focus:border-white py-4"
                                    />
                                </div>
                                <div className='w-[45%] flex flex-col gap-4'>
                                    <label htmlFor="">What is your phone number?</label>
                                    <input
                                        required
                                        name="user_phone"
                                        type="number"
                                        placeholder="Phone number"
                                        aria-label="Phone number"
                                        className="w-full bg-transparent text-white placeholder-white/60 border-b border-white focus:outline-none focus:border-white py-4"
                                    />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="">What would you like to talk about?</label>
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Type your answer here"
                                    aria-label="answer"
                                    rows={4}
                                    className="w-full bg-transparent text-white placeholder-white/60 border-b border-white focus:outline-none focus:border-white py-4 resize-y"
                                />
                            </div>

                            <div className="Booking-drawer-Btn-container">
                                <button className="booking-drawer-Button  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Book a meeting</button>
                                <button
                                    className="booking-nextArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                    <CallMadeIcon className="!w-7 !h-7" />
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>








        </div>
    );
}
