import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
import OppositeScroll from '../OppositeScroll';
import Footer from '../Footer';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';
import SoftDevSplitText from './SoftDevSplitText';
import SoftDevSplitText2 from './SoftDevSplitText2';
import { NavLink } from 'react-router-dom';


function SoftDev() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const SoftDevTweenArrow2 = useRef(null);





    useGSAP(() => {
        const SoftDevtl1 = gsap.timeline()



        SoftDevtl1.from(".SoftDev1-child1 > *", {
            x: -760,
            stagger: 0.2,
            delay: 0.2
        }, "ok")

        SoftDevtl1.from(".SoftDev1-child2", {
            x: 660,
            opacity: 0,
            duration: 1
        }, "ok")


    })



    useGSAP(() => {
        SoftDevTweenArrow2.current = gsap.to(".SoftDevBottomButton .SoftDevArrowButton2", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const SoftDevarrow2 = document.querySelector(".SoftDevBtn-container");
        if (!SoftDevarrow2) return;

        const onEnter2 = () => SoftDevTweenArrow2.current.play();
        const onLeave2 = () => SoftDevTweenArrow2.current.reverse();

        SoftDevarrow2.addEventListener("mouseenter", onEnter2);
        SoftDevarrow2.addEventListener("mouseleave", onLeave2);

        return () => {
            SoftDevarrow2.removeEventListener("mouseenter", onEnter2);
            SoftDevarrow2.removeEventListener("mouseleave", onLeave2);
            SoftDevTweenArrow2.current.kill();
        };
    }, []);


    useGSAP(() => {

        gsap.from(".SoftDevCard", {
            y: 600,
            stagger: 0.2,
            scrollTrigger: {
                trigger: (".SoftDevCard-container"),
                scroller: "body",
                scrub: 2,
                start: "top 85%",
                end: "top 33%",
                // markers:true
            }

        })

        const mtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".SoftDev-container4"),
                scroller: "body",
                scrub: 2,

                // markers: true

            }
        })


        mtl2.from(".SoftDev4-child1 > *", {
            x: -760,
            stagger: 0.2,



        }, "okk")
        mtl2.from(".SoftDev4-child2 > *", {
            x: 760
        }, "okk")


        mtl2.from(".SoftDev5-child1 > *", {
            x: -760
        }, "okkk")

        mtl2.from(".SoftDev5-child2 > *", {

            x: 760,
            stagger: 0.2,
        }, "okkk")


    })


    useGSAP(() => {


        gsap.from(".frontEnd-headingText", {
            x: "-100%",
            scrollTrigger: {
                trigger: (".frontEnd-headingText"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top 60%",
                // markers:true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".frontEndCard-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top -50%",
                // markers: true
            }
        });

         tl2.from(".frontEndCard-cont .frontEndCard1", {
            y: "130%",
            stagger: 0.2,
        })

    })



    useGSAP(() => {


        gsap.from(".backEnd-headingText", {
            x: "-100%",
            scrollTrigger: {
                trigger: (".backEnd-headingText"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top 60%",
                // markers:true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: (".backEndCard-cont"),
                scroller: "body",
                scrub: 2,
                start: "top 99%",
                end: "top -50%",
                // markers: true
            }
        });





        tl2.from(".backEndCard-cont .backEndCard1", {
            y: "130%",
            stagger: 0.2,
        })

    })


    window.addEventListener('load', () => window.scrollTo(0, 0));
                        const moreSoftDevRef = useRef(null);
                    
                        // scroll function
                        const scrollTomoreSoftDev = () => {
                            if (!moreSoftDevRef.current) return;
                    
                            moreSoftDevRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        };





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

                <div className="SoftDev-main-container w-[100%]     flex flex-col justify-center items-center  text-start ">
                    <div className="SoftDev-container1 w-[100%] mt-50  flex justify-around items-center">
                        <div className="SoftDev1-child1 w-[45%] flex flex-col gap-7">
                            <h1 className='text-white text-[60px]  leading-tight '>Custom software development</h1>
                            <h1 className='text-gray-300 text-[18px] '>Customised software helps your organisation work more efficiently, streamline processes and better respond to your specific challenges. Not a standard solution, but exactly what you need to grow, innovate and make a difference. Whether it is about improving internal workflows, automating repetitive tasks or integrating various systems, your business processes and digital transformation are optimally supported.</h1>
                            <div className="SoftDevBottomButton flex  items-center mt-5 z-0    ">
                                <NavLink to="/RequestForm">
                                <div className="SoftDevBtn-container ">
                                    <button className="SoftDevButton  rounded-full py-3 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">Schedule an appointment</button>
                                    <button
                                        className="SoftDevArrowButton2 bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                                        <CallMadeIcon className="!w-7 !h-7" />
                                    </button>
                                </div>
                                </NavLink>
                                <button onClick={scrollTomoreSoftDev} className="moreInfo border-2 rounded-full py-3 px-7  text-white cursor-pointer  mx-3 hover:border-amber-300 hidden">More info</button>
                            </div>
                        </div>
                        <div className="SoftDev1-child2 w-[45%] h-[600px] flex flex-col rounded-2xl overflow-hidden  ">
                            <img className=' rounded-2xl' src="pic30.webp" alt="" />
                        </div>
                    </div>



                    <div ref={moreSoftDevRef} className="SoftDev-container2">
                        <SoftDevSplitText />
                    </div>


                    <div>
                        <h1 className='frontEnd-headingText text-[110px] px-50 text-white  text-start self-start leading-none mt-[50px] '>Which front-end technology do you want to deploy? </h1>
                    </div>


                    <div className="frontEndCard-cont w-[100%] grid grid-cols-3 gap-8 my-20 lg:px-50 md:px-25  text-white overflow-hidden ">

                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="livewire.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Livewire</h1>
                            <h1 className="text-white/70">Livewire offers a Laravel framework that combines the simplicity of PHP with interactive web functionality. This enables the creation of...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="typescript.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>TypeScript</h1>
                            <h1 className="text-white/70">TypeScript, a superset of JavaScript, adds static types, resulting in strong and error-resistant code. It helps detect errors early and significantly...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-4 py-8">
                                <img className='w-30  ' src="Laravel.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Laravel</h1>
                            <h1 className="text-white/70">Laravel, a leading PHP framework, accelerates development with tools like Eloquent ORM, Blade templating, and built-in security features. It provides an efficient and...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                                <img className='w-20  ' src="Tailwind.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Tailwind CSS</h1>
                            <h1 className="text-white/70">Tailwind CSS offers a utility-first framework for CSS, giving developers full control over styling through low-level classes. This promotes the development of consistent and responsive designs, while significantly reducing development time...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                                <img className='w-20  ' src="php.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>PHP</h1>
                            <h1 className="text-white/70">PHP, or Hypertext Preprocessor, serves as a powerful scripting language for creating dynamic web pages and applications. It allows you to develop robust and flexible...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="gitlab.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>GitLab</h1>
                            <h1 className="text-white/70">Shorten your time-to-market, improve the quality of your software, and increase the security of your applications with GitLab, the all-in-one DevSecOps platform. With GitLab, you streamline your development processes, ensure code quality, and deliver secure software—all from one central environment.</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-4 py-4">
                                <img className='w-30 h-30 rounded-full  ' src="tallstack.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Tallstack</h1>
                            <h1 className="text-white/70">Tallstack is a set of web development technologies comprising Tailwind CSS, Alpine.js, Laravel, and Livewire. This combination...</h1>
                        </div>
                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="vuejs.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Vue.js</h1>
                            <h1 className="text-white/70">Vue.js, an innovative JavaScript framework, enables you to create dynamic and interactive web applications. It offers not only speed and flexibility but also a modular...</h1>
                        </div>


                        <div className="frontEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className="rounded-2xl w-20" src="filament.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Filament</h1>
                            <h1 className="text-white/70">Filament is a powerful open-source PHP framework for building administrative interfaces and dashboards. It easily integrates with Laravel and allows developers...</h1>
                        </div>

                    </div>

                    <div className="SoftDev2-container2">
                        <SoftDevSplitText2 />
                    </div>


                    <div>
                        <h1 className='backEnd-headingText text-[110px] px-50 text-white font-semi-bold text-start self-start leading-none mt-[50px]'>Which back-end technology do you want to deploy? </h1>
                    </div>


                    <div className="backEndCard-cont w-[100%] grid grid-cols-3 gap-8 my-20 lg:px-50 md:px-22  text-white overflow-hidden ">

                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-6">
                                <img className='w-20  ' src="python.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Python</h1>
                            <h1 className="text-white/70">Python is known for its efficient performance and speed, making it ideal for data analysis, machine learning, and web development. With a wide range of modules and an active community, developers can create dynamic and customized solutions...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-10">
                                <img className='w-20  ' src="statamic.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Statamic</h1>
                            <h1 className="text-white/70">Statamic, an open-source CMS, operates without databases, ensuring speed and security. The system offers user-friendly features, low costs, and strong integration capabilities for various web projects...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-5 py-8">
                                <img className='w-30  ' src="Laravel.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Laravel</h1>
                            <h1 className="text-white/70">Laravel, a leading PHP framework, accelerates development with tools like Eloquent ORM, Blade templating, and built-in security features. It provides an efficient and...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                                <img className='w-20  ' src="silverstripe.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Silverstripe</h1>
                            <h1 className="text-white/70">Silverstripe offers a user-friendly interface and strong scalability with its open-source CMS. Thanks to its integration capabilities, this platform is ideal for both simple and complex projects, supported by an active community...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                                <img className='w-20  ' src="php.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>PHP</h1>
                            <h1 className="text-white/70">PHP, or Hypertext Preprocessor, serves as a powerful scripting language for creating dynamic web pages and applications. It allows you to develop robust and flexible...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="gitlab.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>GitLab</h1>
                            <h1 className="text-white/70">Shorten your time-to-market, improve the quality of your software, and increase the security of your applications with GitLab, the all-in-one DevSecOps platform. With GitLab, you streamline your development processes, ensure code quality, and deliver secure software—all from one central environment.</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-4 py-4">
                                <img className='w-30 h-30 rounded-full  ' src="tallstack.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Tallstack</h1>
                            <h1 className="text-white/70">Tallstack is a set of web development technologies comprising Tailwind CSS, Alpine.js, Laravel, and Livewire. This combination...</h1>
                        </div>
                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className='w-20  ' src="craft.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Craft</h1>
                            <h1 className="text-white/70">Craft CMS is known as a flexible CMS that excellently combines customization and user-friendliness. The platform offers a clean codebase, robust e-commerce capabilities, and intuitive management tools, making it ideal for both simple and complex web projects...</h1>
                        </div>


                        <div className="backEndCard1 flex flex-col gap-5">
                            <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                                <img className="rounded-2xl w-20" src="filament.png" alt="" />
                            </div>
                            <h1 className='text-3xl'>Filament</h1>
                            <h1 className="text-white/70">Filament is a powerful open-source PHP framework for building administrative interfaces and dashboards. It easily integrates with Laravel and allows developers...</h1>
                        </div>

                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default SoftDev
