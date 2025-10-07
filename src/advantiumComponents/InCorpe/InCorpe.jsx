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
import CircleIcon from '@mui/icons-material/Circle';

import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';


function InCorpe() {

    const InCorpeTweenArrow01 = useRef(null);





    useGSAP(() => {
        InCorpeTweenArrow01.current = gsap.to(".InCorpe-BottomButton .InCorpe-ArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const InCorpearrow01 = document.querySelector(".InCorpe-Btn-container");
        if (!InCorpearrow01) return;

        const onEnter2 = () => InCorpeTweenArrow01.current.play();
        const onLeave2 = () => InCorpeTweenArrow01.current.reverse();

        InCorpearrow01.addEventListener("mouseenter", onEnter2);
        InCorpearrow01.addEventListener("mouseleave", onLeave2);

        return () => {
            InCorpearrow01.removeEventListener("mouseenter", onEnter2);
            InCorpearrow01.removeEventListener("mouseleave", onLeave2);
            InCorpeTweenArrow01.current.kill();
        };
    }, []);

    


    return (
        <div className='InCorpe-main-cont w-[100%] flex flex-col  bg-white ' >

            <Header />

            <div className="InCorpe-image01-cont w-[100%] h-[100vh] relative">
                <img className='w-full h-[100vh] object-cover' src="incorpe02.webp" alt="" />
            </div>

            <div className='InCorpe-text01-cont flex flex-col gap-5 my-20 px-40'>
                <h1 className=" InCorpe-heading01 text-8xl text-black/80     ">InCorpe :</h1>
                <h1 className='InCorpe-text01 text-3xl leading-relaxed text-black/50'>InCorpe, formed through the merger of Canon Business Center North East, OSN Netherlands, and Repromat, set out to transform the business printing market with innovative print subscriptions and tailored services. The merger created the perfect opportunity to modernize their digital landscape — enhancing customer experience and streamlining internal operations. The result? A self-service customer portal, a new website, and a custom-built webshop designed for efficiency and an exceptional user experience.</h1>

            </div>

            <div className="InCorpe-BottomButton flex  items-center  z-0 px-40    ">
                <a href="https://InCorpe.nl/">


                    <div className="InCorpe-Btn-container ">
                        <button className="InCorpe-Button  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View InCorpe.nl</button>
                        <button
                            className="InCorpe-ArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                            <CallMadeIcon className="!w-8 !h-8" />
                        </button>
                    </div>
                </a>
                {/* <button className="InCorpe-moreInfo border-2 rounded-full py-4 px-7   cursor-pointer  mx-3 hover:border-amber-300">Discuss your project</button> */}
            </div>

            <div className="InCorpe-image02-cont w-[100%] h-[1000px] mt-20 relative">
                <img className='w-fit' src="incorpe03.webp" alt="" />
            </div>

            <div className='InCorpe-text02-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" InCorpe-heading02 text-8xl text-black/80  text-wh   ">A new digital landscape for InCorpe.</h1>
                <h1 className='InCorpe-text02 text-3xl leading-relaxed text-black/50'>The merger of three distinct companies introduced several challenges — from creating a unified customer experience to optimizing internal workflows. Customers needed an intuitive platform to manage their devices and submit service requests effortlessly. Additionally, there was a need for an efficient system to order products like cartridges and toners, fully integrated with the existing ERP system that manages all customer data, orders, and contracts.</h1>

            </div>

            <div className="InCorpe-image03-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[80%] rounded-2xl' src="incorpe04.webp" alt="" />
            </div>

            <div className='InCorpe-text03-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className='InCorpe-text03 text-3xl leading-relaxed text-black/70'>“The great thing is that the longer we work with Advantium, the more they feel like part of our own team. As the project moves forward, we start speaking the same language — it truly feels like they’re working with us, not just for us.*”</h1>




            </div>

            <div className="InCorpe-text-imagediv w-[100vw] h-[500px] flex justify-between my-[200px] px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                        Phase 1: A customer portal and website.
                    </h1>
                    <h1 className="text-black/50 text-xl">
                        InCorpe chose Advantium to build a custom digital platform focused on the customer portal and website. Advantium translated the brand guide into a user-friendly and visually engaging design. The website achieves the perfect balance between aesthetics and functionality, featuring clear navigation and full integration with the portal — ensuring a seamless and optimized user experience.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] overflow-y-scroll overflow-x-hidden rounded-xl">
                    <img src="pic47.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className="InCorpe-text-imagediv02 w-[100vw] h-[500px] flex justify-between mb-20  px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                       Self-service customer portal.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Customers should enjoy every interaction with InCorpe, which is why the customer portal was designed with intuitive self-service features. Users can easily manage all their devices, view and enter counter readings, and submit service requests for specific machines. They can also order related products — such as cartridges, paper, and toners — directly through the portal. This makes the entire ordering process simple, accessible, and efficient.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] rounded-xl">
                    <img src="pic48.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className='InCorpe-text04-cont flex flex-col my-20 gap-5 px-40'>
                <h1 className=" InCorpe-heading04 text-6xl text-black/80  text-wh   ">Phase 2: A customised webshop.</h1>
                <h1 className='InCorpe-text04 text-2xl leading-relaxed text-black/50'>In the second phase, a custom-made web shop was developed, fully integrated with InCorpe's AFAS software, which centrally controlled product management, order processing and customer information. This eliminated the need for external platforms such as Shopify or Magento, for example, making the platform more convenient and cost-efficient. The webshop is designed for both B2C and B2B customers. Existing customers can easily order associated products, such as cartridges and toners, through the portal based on their connected devices. For businesses, a smart feature has also been added, allowing different users within an organisation to place orders on account. This makes the ordering experience flexible and efficient for every customer.

                </h1>


               
            </div>

            <div className="InCorpe-image04-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[90%] rounded-2xl' src="incorpe05.webp" alt="" />
            </div>


             <div className="InCorpe-text-imagediv02 w-[100vw]  flex justify-between  my-[100px]  px-40">
                <div className="imgpart w-[50%]  rounded-xl overflow-hidden">
                    <img src="pic50.webp" alt="scrollable" className="w-full object-cover" />
                </div>

                <div className="textpart w-[50%] flex flex-col justify-center pl-10 gap-5">
                    <h1 className="text-4xl">
                       The challenge of an AFAS integration.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                       One of the most technical and complex parts of the project was the integration of the web shop with InCorpe's existing AFAS environment. AFAS acts as the central ERP system for customer management, orders, contracts and financial administration, among other things. The challenge was to fully synchronise the webshop with AFAS, without using an external e-commerce platform such as Shopware, Shopify, Magento or Lightspeed.
                    </h1>
                </div>

            </div>

            <Footer />



        </div>
    )
}

export default InCorpe
