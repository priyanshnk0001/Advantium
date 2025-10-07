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


function EastBorn() {

    const EastBornTweenArrow01 = useRef(null);





    useGSAP(() => {
        EastBornTweenArrow01.current = gsap.to(".EastBorn-BottomButton .EastBorn-ArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const EastBornarrow01 = document.querySelector(".EastBorn-Btn-container");
        if (!EastBornarrow01) return;

        const onEnter2 = () => EastBornTweenArrow01.current.play();
        const onLeave2 = () => EastBornTweenArrow01.current.reverse();

        EastBornarrow01.addEventListener("mouseenter", onEnter2);
        EastBornarrow01.addEventListener("mouseleave", onLeave2);

        return () => {
            EastBornarrow01.removeEventListener("mouseenter", onEnter2);
            EastBornarrow01.removeEventListener("mouseleave", onLeave2);
            EastBornTweenArrow01.current.kill();
        };
    }, []);

    


    return (
        <div className='EastBorn-main-cont w-[100%] flex flex-col  bg-white ' >

            <Header />

            <div className="EastBorn-image01-cont w-[100%] h-[100vh] relative">
                <img className='w-full h-[100vh] object-cover' src="EastBorn02.webp" alt="" />
                <h1 className='text-white text-9xl  absolute top-100 left-10 '>From strategy to reality: how Eastborn became digitally mature.</h1>
            </div>

            <div className='EastBorn-text01-cont flex flex-col gap-5 my-20 px-40'>
                <h1 className=" EastBorn-heading01 text-8xl text-black/80     ">EastBorn :</h1>
                <h1 className='EastBorn-text01 text-3xl leading-relaxed text-black/50'>EastBorn, formed through the merger of Canon Business Center North East, OSN Netherlands, and Repromat, set out to revolutionize the business printing market with innovative print subscriptions and tailored services. The merger created the perfect opportunity to modernize their digital ecosystem — enhancing customer experience and streamlining internal operations. The result? A self-service customer portal, a new website, and a fully customized web shop.</h1>

            </div>

            <div className="EastBorn-BottomButton flex  items-center  z-0 px-40    ">
                <a href="https://EastBorn.nl/">

                
                    <div className="EastBorn-Btn-container ">
                        <button className="EastBorn-Button  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View EastBorn.nl</button>
                        <button
                            className="EastBorn-ArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                            <CallMadeIcon className="!w-8 !h-8" />
                        </button>
                    </div>
                </a>
                {/* <button className="EastBorn-moreInfo border-2 rounded-full py-4 px-7   cursor-pointer  mx-3 hover:border-amber-300">Discuss your project</button> */}
            </div>

            <div className="EastBorn-image02-cont w-[100%] h-[1000px] mt-20 relative">
                <img className='w-full object-cover' src="EastBorn03.webp" alt="" />
            </div>

            <div className='EastBorn-text02-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" EastBorn-heading02 text-8xl text-black/80  text-wh   ">A new digital landscape for EastBorn.</h1>
                <h1 className='EastBorn-text02 text-3xl leading-relaxed text-black/50'>The merger of three distinct companies introduced several challenges — from unifying the customer experience to optimizing internal workflows. Customers needed an intuitive platform to manage their devices and submit service requests with ease. At the same time, an efficient solution was required for ordering products like cartridges and toners, seamlessly integrated with the existing ERP system that manages all customer data, orders, and contracts.</h1>

            </div>

            <div className="EastBorn-image03-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[80%] rounded-2xl' src="EastBorn04.webp" alt="" />
            </div>

            <div className='EastBorn-text03-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className='EastBorn-text03 text-3xl leading-relaxed text-black/70'>“The great thing is that the longer we work with Advantium, the more they feel like part of our own team. As the project moves forward, we start speaking the same language — it truly feels like they’re working with us, not just for us.”</h1>




            </div>

            <div className="EastBorn-text-imagediv w-[100vw] h-[500px] flex justify-between my-[200px] px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                        Phase 1: Customer portal and website.
                    </h1>
                    <h1 className="text-black/50 text-xl">
                       EastBorn chose Advantium to develop a custom digital platform focused on the customer portal and website. Advantium translated the brand guide into a user-friendly and visually engaging experience. The website strikes the perfect balance between design and functionality, featuring clear navigation and full integration with the portal — ensuring a seamless user experience.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] overflow-y-scroll overflow-x-hidden rounded-xl">
                    <img src="pic47.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className="EastBorn-text-imagediv02 w-[100vw] h-[500px] flex justify-between mb-20  px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                       Self-service customer portal.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Customers should enjoy every interaction with EastBorn — that’s why the customer portal was built with self-service at its core. Within the portal, users can easily manage all their devices, view and enter counter readings, and submit service requests for specific machines. They can also order related products such as cartridges, paper, and toners with just a few clicks. The result is a simple, accessible, and satisfying ordering experience.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] rounded-xl">
                    <img src="pic48.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className='EastBorn-text04-cont flex flex-col my-20 gap-5 px-40'>
                <h1 className=" EastBorn-heading04 text-6xl text-black/80  text-wh   ">Phase 2: A customised webshop.</h1>
                <h1 className='EastBorn-text04 text-2xl leading-relaxed text-black/50'>In the second phase, a custom web shop was developed — fully integrated with EastBorn’s AFAS software, which centrally manages product data, order processing, and customer information. This eliminated the need for external platforms like Shopify or Magento, making the solution more convenient and cost-efficient. <br />

The webshop was built for both B2C and B2B customers. Existing customers can easily order related products, such as cartridges and toners, directly through the portal based on their connected devices. For business clients, a smart feature allows multiple users within an organization to place orders on account — creating a flexible, efficient, and seamless ordering experience for every customer.

                </h1>


               
            </div>

            <div className="EastBorn-image04-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[90%] rounded-2xl' src="EastBorn05.webp" alt="" />
            </div>


             <div className="EastBorn-text-imagediv02 w-[100vw]  flex justify-between  my-[100px]  px-40">
                <div className="imgpart w-[50%]  rounded-xl overflow-hidden">
                    <img src="pic50.webp" alt="scrollable" className="w-full object-cover" />
                </div>

                <div className="textpart w-[50%] flex flex-col justify-center pl-10 gap-5">
                    <h1 className="text-4xl">
                       The challenge of an AFAS integration.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                       One of the most technically challenging aspects of the project was integrating the web shop with EastBorn’s existing AFAS environment. AFAS serves as the central ERP system, managing customer data, orders, contracts, and financial administration. The key challenge lay in achieving full synchronization between the webshop and AFAS — all without relying on external e-commerce platforms like Shopware, Shopify, Magento, or Lightspeed.
                    </h1>
                </div>

            </div>

            <Footer />



        </div>
    )
}

export default EastBorn
