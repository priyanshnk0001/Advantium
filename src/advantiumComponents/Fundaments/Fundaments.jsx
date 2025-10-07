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


function Fundaments() {

    const FundamentsTweenArrow01 = useRef(null);





    useGSAP(() => {
        FundamentsTweenArrow01.current = gsap.to(".Fundaments-BottomButton .Fundaments-ArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const Fundamentsarrow01 = document.querySelector(".Fundaments-Btn-container");
        if (!Fundamentsarrow01) return;

        const onEnter2 = () => FundamentsTweenArrow01.current.play();
        const onLeave2 = () => FundamentsTweenArrow01.current.reverse();

        Fundamentsarrow01.addEventListener("mouseenter", onEnter2);
        Fundamentsarrow01.addEventListener("mouseleave", onLeave2);

        return () => {
            Fundamentsarrow01.removeEventListener("mouseenter", onEnter2);
            Fundamentsarrow01.removeEventListener("mouseleave", onLeave2);
            FundamentsTweenArrow01.current.kill();
        };
    }, []);




    return (
        <div className='Fundaments-main-cont w-[100%] flex flex-col  bg-white ' >

            <Header />

            <div className="Fundaments-image01-cont w-[100%] h-[100vh] relative">
                <img className='w-full h-[100vh] object-cover' src="Fundaments02.webp" alt="" />
                <h1 className='text-white text-9xl  absolute top-80 left-10 '>How Fundaments strengthens customer relationships and streamlines billing.</h1>
            </div>

            <div className='Fundaments-text01-cont flex flex-col gap-5 my-20 px-40'>
                <h1 className=" Fundaments-heading01 text-8xl text-black/80     ">Fundaments :</h1>
                <h1 className='Fundaments-text01 text-3xl leading-relaxed text-black/50'>Fundaments, established through the merger of Canon Business Center North East, OSN Netherlands, and Repromat, set out to transform the business printing market with innovative print subscriptions and tailored services. The merger created the perfect opportunity to modernize their digital landscape — enhancing customer experience and automating internal processes. The result? A self-service customer portal, a new website, and a custom-built web shop designed to deliver efficiency and seamless interaction.</h1>

            </div>

            <div className="Fundaments-BottomButton flex  items-center  z-0 px-40    ">
                <a href="https://Fundaments.nl/">


                    <div className="Fundaments-Btn-container ">
                        <button className="Fundaments-Button  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View Fundaments.nl</button>
                        <button
                            className="Fundaments-ArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                            <CallMadeIcon className="!w-8 !h-8" />
                        </button>
                    </div>
                </a>
                {/* <button className="Fundaments-moreInfo border-2 rounded-full py-4 px-7   cursor-pointer  mx-3 hover:border-amber-300">Discuss your project</button> */}
            </div>

            <div className="Fundaments-image02-cont w-[100%] h-[1000px] mt-20 relative">
                <img className='w-full object-cover' src="Fundaments03.webp" alt="" />
            </div>

            <div className='Fundaments-text02-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" Fundaments-heading02 text-8xl text-black/80  text-wh   ">A new digital landscape for Fundaments.</h1>
                <h1 className='Fundaments-text02 text-3xl leading-relaxed text-black/50'>The merger of three distinct companies presented several challenges — from creating a unified customer experience to optimizing internal operations. Customers needed an intuitive platform to manage their devices and submit service requests effortlessly. Additionally, an efficient ordering system was essential for products like cartridges and toners, fully integrated with the existing ERP system that manages all customer data, orders, and contracts.</h1>

            </div>

            <div className="Fundaments-image03-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[80%] rounded-2xl' src="Fundaments04.webp" alt="" />
            </div>

            <div className='Fundaments-text03-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className='Fundaments-text03 text-3xl leading-relaxed text-black/70'>“The great thing is that the longer we work with Advantium, the more they feel like part of our own team. As the project progresses, we start speaking the same language — it truly feels like they’re working with us, not just for us.*”</h1>




            </div>

            <div className="Fundaments-text-imagediv w-[100vw] h-[500px] flex justify-between my-[200px] px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                        Phase 1: A customer portal and website.
                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Fundaments chose Advantium to develop a custom digital platform focused on the customer portal and website. Advantium translated the brand guide into a user-friendly and visually engaging design. The website achieves the perfect balance between aesthetics and functionality, featuring clear navigation and full integration with the portal — ensuring a seamless and consistent user experience.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] overflow-y-scroll overflow-x-hidden rounded-xl">
                    <img src="pic47.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className="Fundaments-text-imagediv02 w-[100vw] h-[500px] flex justify-between mb-20  px-40">
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className="text-4xl">
                        Self-service customer portal.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                        Customers should enjoy every interaction with Fundaments — which is why the customer portal was designed with intuitive self-service functionality. Users can easily manage all their devices, view and enter counter readings, and submit service requests for specific machines. They can also order related products such as cartridges, paper, and toners directly through the portal. The result is a simple, seamless, and accessible ordering experience that enhances customer satisfaction.
                    </h1>
                </div>

                <div className="imgpart w-[50%] h-[500px] rounded-xl">
                    <img src="pic48.webp" alt="scrollable" className="w-full object-cover" />
                </div>
            </div>


            <div className='Fundaments-text04-cont flex flex-col my-20 gap-5 px-40'>
                <h1 className=" Fundaments-heading04 text-6xl text-black/80  text-wh   ">Phase 2: A customised webshop.</h1>
                <h1 className='Fundaments-text04 text-2xl leading-relaxed text-black/50'>In the second phase, a custom-built webshop was developed, fully integrated with Fundaments’ AFAS software, which centrally manages product data, order processing, and customer information. This integration eliminated the need for external platforms like Shopify or Magento, making the solution more efficient and cost-effective. <br />

                    The webshop was designed to serve both B2C and B2B customers. Existing clients can easily order related products — such as cartridges and toners — directly through the portal, based on their connected devices. For business customers, an advanced feature allows multiple users within the same organization to place orders on account, ensuring a flexible, streamlined, and efficient ordering experience for every user.

                </h1>



            </div>

            <div className="Fundaments-image04-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[90%] rounded-2xl' src="Fundaments05.webp" alt="" />
            </div>


            <div className="Fundaments-text-imagediv02 w-[100vw]  flex justify-between  my-[100px]  px-40">
                <div className="imgpart w-[50%]  rounded-xl overflow-hidden">
                    <img src="pic50.webp" alt="scrollable" className="w-full object-cover" />
                </div>

                <div className="textpart w-[50%] flex flex-col justify-center pl-10 gap-5">
                    <h1 className="text-4xl">
                        The challenge of an AFAS integration.

                    </h1>
                    <h1 className="text-black/50 text-xl">
                        One of the most technically complex aspects of the project was integrating the webshop with Fundaments’ existing AFAS environment. AFAS serves as the central ERP system, managing customer data, orders, contracts, and financial administration. The main challenge was achieving complete synchronization between the webshop and AFAS — all without relying on external e-commerce platforms like Shopware, Shopify, Magento, or Lightspeed.
                    </h1>
                </div>

            </div>

            <Footer />



        </div>
    )
}

export default Fundaments
