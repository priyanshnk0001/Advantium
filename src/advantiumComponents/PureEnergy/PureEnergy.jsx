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



function PureEnergy() {

    const pureETweenArrow01 = useRef(null);





    useGSAP(() => {
        pureETweenArrow01.current = gsap.to(".pureE-BottomButton .pureE-ArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor:"#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const pureEarrow01 = document.querySelector(".pureE-Btn-container");
        if (!pureEarrow01) return;

        const onEnter2 = () => pureETweenArrow01.current.play();
        const onLeave2 = () => pureETweenArrow01.current.reverse();

        pureEarrow01.addEventListener("mouseenter", onEnter2);
        pureEarrow01.addEventListener("mouseleave", onLeave2);

        return () => {
            pureEarrow01.removeEventListener("mouseenter", onEnter2);
            pureEarrow01.removeEventListener("mouseleave", onLeave2);
            pureETweenArrow01.current.kill();
        };
    }, []);


    return (
        <div className='pureE-main-cont w-[100%] flex flex-col  bg-white ' >

            <Header />

            <div className="pureE-image01-cont w-[100%] h-[1000px] relative">
                <img className='w-fit' src="PEnergy02.webp" alt="" />
            </div>

            <div className='pureE-text01-cont flex flex-col gap-5 px-40'>
                <h1 className=" pureE-heading01 text-8xl text-black/80     ">Pure Energie: From green ambition to pure results.</h1>
                <h1 className='pureE-text01 text-3xl leading-relaxed text-black/50'>Green power from meadow to socket. In this way, Enschede-based energy company Pure Energie is making the energy market in the Netherlands less dependent on fossil energy every day. "We have been building wind turbines and solar panels in the Netherlands since 1995. We sell the power from our energy sources directly to our customers. Nothing more, because that way it's simple and transparent." The difference with other energy companies? "We have never gone green, but always have been."</h1>

            </div>

            <div className="pureE-BottomButton flex  items-center mt-5 z-0 px-40    ">
            <a href="https://pure-energie.nl/">
                <div className="pureE-Btn-container ">
                    <button className="pureE-Button  rounded-full py-4 px-7 text-[18px] bg-yellow-300 text-black cursor-pointer ">View pure-energie.nl</button>
                    <button
                        className="pureE-ArrowButton bg-yellow-300 rounded-full p-3 text-black cursor-pointer  ">
                        <CallMadeIcon className="!w-8 !h-8" />
                    </button>
                </div>
                </a>
                {/* <button className="pureE-moreInfo border-2 rounded-full py-4 px-7   cursor-pointer  mx-3 hover:border-amber-300">Discuss your project</button> */}
            </div>

            <div className="pureE-image02-cont w-[100%] h-[1000px] mt-20 relative">
                <img className='w-fit' src="PEnergy03.webp" alt="" />
            </div>

            <div className='pureE-text02-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" pureE-heading02 text-8xl text-black/80  text-wh   ">A digital transformation since 2018.</h1>
                <h1 className='pureE-text02 text-3xl leading-relaxed text-black/50'>With a desire to exceed their ambitions and develop a new website, Pure Energie started looking for a partner for a digital transformation in 2018. Jeroen Seppenwoolde, marketing manager at Pure Energie, says: "At the time, we talked to several companies, big and small. But in the end, the choice for Advantium was quickly made." The first step in this process was the launch of a new website, followed by the development of a customer portal and a mobile app. With this app, customers can easily view their consumption, report meter readings and manage and pay bills. The focus here was not only on technical improvements, but also on providing an optimal customer experience."</h1>

            </div>

            <div className="pureE-image03-cont flex justify-center items-center w-[100%] h-[1000px] mt-10 relative">
                <img className='w-[80%] rounded-2xl' src="pic04.webp" alt="" />
            </div>

            <div className='pureE-text03-cont flex flex-col mt-20 gap-5 px-40'>
                <h1 className=" pureE-heading03 text-6xl text-black/80  text-wh   ">A user-friendly and transparent website.</h1>
                <h1 className='pureE-text03 text-2xl leading-relaxed text-black/50'>In developing pure-energie.nl, the focus is on user-friendliness and transparency, with an intuitive calculation tool that allows customers to easily put together a customised energy contract. At the same time, Pure Energy shows the ways in which pure energy is generated, giving visitors insight into both their contract and where their energy comes from. "We aim for a website that both optimises conversion and informs our visitors about the production of renewable energy at our own sites."</h1>


                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        <span className='text-black/70'>Retention engine for effortlessly renewing your contract customers:</span> As a customer, you want to spend as little time as possible managing your energy contract. When your contract is about to expire, you want to be able to renew as easily as possible. Via a personal e-mail with a unique URL, based on their historical consumption and contract details, customers are sent directly to a renewal engine. Here they can easily take out a new energy contract, with their details already filled in, of course. This not only ensures ease of use, but also quick processing of the new contract.
                    </h1>
                </div>
                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        <span className='text-black/70'>An interactive energy resources map with real-time data:</span>  Pure Energie emphasises its identity as a true energy maker with an interactive map showing real-time data from its wind and solar farms. Customers can see exactly where their energy comes from, with a direct link to the current energy production of the various installations. A separate website has been developed for each farm, where more detailed information can be found.
                    </h1>
                </div>

            </div>

            <div className="pureE-text-imagediv w-[100vw] flex justify-between mt-[100px] px-40" >
                <div className="textpart w-[50%] flex flex-col justify-center pr-10 gap-5">
                    <h1 className='text-4xl'>
                        Choice engine for a personalised customised energy contract.

                    </h1>
                    <h1 className='text-black/50 text-xl'>
                        The smart choice engine helps private and business customers easily put together an energy contract. In doing so, the user immediately receives a tailor-made calculation for the specific situation. All costs are clearly displayed for maximum transparency. Although this seems simple, it is still unique in the energy market. The Data Management Platform (DMP) processes the data and sends it directly to Pure Energie's systems, so that registration can be arranged quickly and smoothly.
                    </h1>
                </div>
                <div className="imgpart w-[50%]">
                    <img src="pic46.webp" alt="" />
                </div>
            </div>

            <div className='pureE-text04-cont flex flex-col my-20 gap-5 px-40'>
                <h1 className=" pureE-heading04 text-6xl text-black/80  text-wh   ">Insight via the Pure Energy app.</h1>
                <h1 className='pureE-text04 text-2xl leading-relaxed text-black/50'>Pure Energie offers both business and residential customer portals so that customers can easily access all relevant information about their consumption, meter readings, contracts, bills, the budget manager and any changes. Available as a mobile app (iOS & Android) and a web app, the customer portal helps users better manage their energy consumption. Here, customers can easily view their energy consumption and quickly see if their current consumption is still in line with the term charge they are paying. Nobody gets happy about running into a hefty bill at the end of an energy contract, which is why the process has been made as easy and transparent as possible. A complete redesign has created a clear and functional interface, allowing users to view their energy data at a glance. The customer portal includes the following features:

                </h1>


                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        Inspection of energy consumption and feed-in.
                    </h1>
                </div>
                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        Overview of installment amounts for gas and electricity, with advice that provides insight into any additional payment or refund at the end of the year.


                    </h1>
                </div>
                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        Access to payments, invoices and contract details.


                    </h1>
                </div>
                <div className='flex  gap-3'>
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mt-1.5 " />
                    <h1 className=' text-2xl leading-relaxed text-black/50'>
                        Meter readings.




                    </h1>
                </div>

            </div>

            <Footer />



        </div>
    )
}

export default PureEnergy
