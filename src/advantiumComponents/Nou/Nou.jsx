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


function Nou() {

    const NouTweenArrow01 = useRef(null);





    useGSAP(() => {
        NouTweenArrow01.current = gsap.to(".Nou-BottomButton .Nou-ArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Nouarrow01 = document.querySelector(".Nou-Btn-container");
        if (!Nouarrow01) return;

        const onEnter2 = () => NouTweenArrow01.current.play();
        const onLeave2 = () => NouTweenArrow01.current.reverse();

        Nouarrow01.addEventListener("mouseenter", onEnter2);
        Nouarrow01.addEventListener("mouseleave", onLeave2);

        return () => {
            Nouarrow01.removeEventListener("mouseenter", onEnter2);
            Nouarrow01.removeEventListener("mouseleave", onLeave2);
            NouTweenArrow01.current.kill();
        };
    }, []);

    


    return (
        <div className='Nou-main-cont w-[100%] flex flex-col  bg-white ' >

            <Header />

            <div className="Nou-image01-cont w-[100%] h-[100vh] relative">
                <img className='w-full h-[100vh] object-cover' src="nou02.webp" alt="" />
            </div>

            <div className='Nou-text01-cont flex flex-col gap-5 my-20 px-40'>
                <h1 className=" Nou-heading01 text-8xl text-black/80     ">Nou :</h1>
                <h1 className='Nou-text01 text-3xl leading-relaxed text-black/50'>Nou, born out of the merger of Canon Business Center North East, OSN Netherlands and Repromat, had the ambition to innovate the business printing market. Their approach focuses on offering innovative print subscriptions and targeted services. This merger provided an ideal moment to develop their digital landscape, aiming to provide customers with an optimal experience and automate internal processes. The solution? A self-service customer portal, a new website and a customised web shop.</h1>

            </div>

            <div className="Nou-BottomButton flex  items-center  z-0 px-40    ">
                <a href="https://nou.nl/">
                    <div className="Nou-Btn-container ">
                        <button className="Nou-Button  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View nou.nl</button>
                        <button
                            className="Nou-ArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                            <CallMadeIcon className="!w-8 !h-8" />
                        </button>
                    </div>
                </a>
                {/* <button className="Nou-moreInfo border-2 rounded-full py-4 px-7   cursor-pointer  mx-3 hover:border-amber-300">Discuss your project</button> */}
            </div>

            <div className="Nou-image02-cont w-[100%] h-[1000px] mt-20 relative">
                <img className='w-fit' src="nou03.webp" alt="" />
            </div>

            <div className='Nou-text02-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" Nou-heading02 text-8xl text-black/80  text-wh   ">A new digital landscape for Nou.</h1>
                <h1 className='Nou-text02 text-3xl leading-relaxed text-black/50'>The merger of three different companies brought challenges, including the need to create a consistent customer experience and streamline internal processes. Customers needed a user-friendly environment to manage their devices and submit service requests. It was also important to develop an efficient way for customers to order products such as cartridges and toners, directly linked to the existing ERP system that manages all customer data, orders and contracts.</h1>

            </div>

            <div className="Nou-image03-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[80%] rounded-2xl' src="pic04.webp" alt="" />
            </div>

            <div className='Nou-text03-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className='Nou-text03 text-3xl leading-relaxed text-black/70'>"The nice thing is that the longer we work with Advantium, they start to feel more and more like our colleagues. As the project progresses, we speak the same language more and more and it seems like they really work with us."</h1>




            </div>

            <div className="Nou-text-imagediv w-[100vw] h-[500px] flex justify-between my-[200px] px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                        Phase 1: A customer portal and website.
                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Nou koos Advantium om een op maat gemaakt digitaal platform te bouwen, met een focus op het klantenportal en de website. Advantium vertaalde de brandguide naar een gebruiksvriendelijke en aantrekkelijke website en klantenportal. De website biedt een optimale balans tussen design en functionaliteit, met een helder navigatiemenu en volledige integratie met het portaal voor een optimale gebruikerservaring.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] overflow-y-scroll overflow-x-hidden rounded-xl">
                    <img src="pic47.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className="Nou-text-imagediv02 w-[100vw] h-[500px] flex justify-between mb-20  px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                       Self-service customer portal.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Customers should feel happy when they interact with Nou, which is why self-service functionalities have been developed in the customer portal. Customers can easily manage all their devices within the organisation and view and enter counter readings. In addition, it is possible to submit service requests for specific devices and customers can also easily order associated products such as cartridges, paper and toners. This makes the ordering process simple and accessible.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] rounded-xl">
                    <img src="pic48.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className='Nou-text04-cont flex flex-col my-20 gap-5 px-40'>
                <h1 className=" Nou-heading04 text-6xl text-black/80  text-wh   ">Phase 2: A customised webshop.</h1>
                <h1 className='Nou-text04 text-2xl leading-relaxed text-black/50'>In the second phase, a custom-made web shop was developed, fully integrated with Nou's AFAS software, which centrally controlled product management, order processing and customer information. This eliminated the need for external platforms such as Shopify or Magento, for example, making the platform more convenient and cost-efficient. The webshop is designed for both B2C and B2B customers. Existing customers can easily order associated products, such as cartridges and toners, through the portal based on their connected devices. For businesses, a smart feature has also been added, allowing different users within an organisation to place orders on account. This makes the ordering experience flexible and efficient for every customer.

                </h1>


               
            </div>

            <div className="Nou-image04-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[90%] rounded-2xl' src="pic49.webp" alt="" />
            </div>


             <div className="Nou-text-imagediv02 w-[100vw]  flex justify-between  my-[100px]  px-40">
                <div className="imgpart w-[50%]  rounded-xl overflow-hidden">
                    <img src="pic50.webp" alt="scrollable" className="w-full object-cover" />
                </div>

                <div className="textpart w-[50%] flex flex-col justify-center pl-10 gap-5">
                    <h1 className="text-4xl">
                       The challenge of an AFAS integration.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                       One of the most technical and complex parts of the project was the integration of the web shop with Nou's existing AFAS environment. AFAS acts as the central ERP system for customer management, orders, contracts and financial administration, among other things. The challenge was to fully synchronise the webshop with AFAS, without using an external e-commerce platform such as Shopware, Shopify, Magento or Lightspeed.
                    </h1>
                </div>

            </div>

            <Footer />



        </div>
    )
}

export default Nou
