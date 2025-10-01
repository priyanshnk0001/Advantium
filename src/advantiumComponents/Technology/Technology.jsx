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




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Technology() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
   

    useGSAP(() => {
        const tl = gsap.timeline();
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:(".technologyCard-cont"),
                scroller:"body",
                scrub: 2,
                start:"top 60%",
                end:"top -90%",
                // markers:true
            }
        });
        // tl.from(".technology-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

        tl.from(".technology-headingText , .technology-SubHeadingText", {
            x: "-100%",
            stagger: 0.4,
            duration: 0.8
        }, "ok")
        tl.from(".technologyCard-cont .techCard",{
            y:220,
            stagger:0.2,
            duration:1
        }, "ok")

        tl2.from(".technologyCard-cont .techCard1", {
            y: "130%",
            stagger:0.2,
        })
       
    })


    







    return (

        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="technology-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                 900px circle at ${pos.x}px ${pos.y}px,
                 rgba(56, 189, 248, 0.7),
                 transparent 80%
               ), #0f172a`,
                }}
            >


                <Header />




                <div className="technology-ad-Content-cont w-[100%]   flex flex-col   items-center   text-start px-[54px]   ">
                    <h1 className='technology-headingText text-[130px] text-white font-semi-bold text-start self-start leading-none mt-[250px]'>Tech we deploy for your success.</h1>
                    <h1 className='technology-SubHeadingText text-xl text-white/70 font-semibold text-start self-start break-keep mt-[50px] pr-90'>Discover the power behind our tech stack, frameworks, and tools we utilize.</h1>


                </div>



                <div className="technologyCard-cont w-[100%] grid grid-cols-3 gap-8 my-20 px-[54px]  text-white overflow-hidden ">
                    <div className="techCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="elasticsearch.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>ElasticSearch</h1>
                        <h1 className="text-white/70">Elastic Search serves as an efficient search and analytics tool that processes large amounts of data in real-time. The platform offers advanced search capabilities and scalable data analysis, suitable for a wide...</h1>
                    </div>
                    <div className="techCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="expo.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Expo</h1>
                        <h1 className="text-white/70">Expo provides an open-source platform for the development of React Native apps. It offers developers a user-friendly environment and handy tools to quickly build...</h1>
                    </div>
                    <div className="techCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-30  ' src="Laravel.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Laravel</h1>
                        <h1 className="text-white/70">Laravel, a leading PHP framework, accelerates development with tools like Eloquent ORM, Blade templating, and built-in security features. It provides an efficient and...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="magento.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Magento</h1>
                        <h1 className="text-white/70">Magento is een e-commerce platform dat flexibiliteit, schaalbaarheid en uitgebreide aanpassingsmogelijkheden biedt. Perfect voor bedrijven die hun webshop willen laten...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                            <img className='w-20  ' src="php.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>PHP</h1>
                        <h1 className="text-white/70">PHP, or Hypertext Preprocessor, serves as a powerful scripting language for creating dynamic web pages and applications. It allows you to develop robust and flexible...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="reactNative.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>React Native</h1>
                        <h1 className="text-white/70">React Native enables the development of powerful native apps for iOS and Android using JavaScript and React. By utilizing a single codebase, you significantly reduce development time and costs. This framework</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                            <img className='w-20  ' src="silverstripe.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Silverstripe</h1>
                        <h1 className="text-white/70">Silverstripe offers a user-friendly interface and strong scalability with its open-source CMS. Thanks to its integration capabilities, this platform is ideal for both simple and...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="vuejs.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Vue.js</h1>
                        <h1 className="text-white/70">Vue.js, an innovative JavaScript framework, enables you to create dynamic and interactive web applications. It offers not only speed and flexibility but also a modular...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className="rounded-2xl w-20"  src="statamic.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Statamic</h1>
                        <h1 className="text-white/70">Statamic, an open-source CMS, operates without databases, ensuring speed and security. The system offers user-friendly features, low costs, and strong integration...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className="rounded-2xl w-20"  src="craft.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Craft</h1>
                        <h1 className="text-white/70">Craft CMS is known as a flexible CMS that excellently combines customization and user-friendliness. The platform offers a clean codebase, robust e-commerce capabilities...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className="rounded-2xl w-20"  src="filament.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Filament</h1>
                        <h1 className="text-white/70">Filament is a powerful open-source PHP framework for building administrative interfaces and dashboards. It easily integrates with Laravel and allows developers...</h1>
                    </div>
                    <div className="techCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className="rounded-2xl w-20"  src="backpack.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>BackPack</h1>
                        <h1 className="text-white/70">Backpack is an open-source toolkit for quickly developing user-friendly admin interfaces within Laravel projects.</h1>
                    </div>
                </div>



               


            </div>

            <Footer />
        </>
    );
}







