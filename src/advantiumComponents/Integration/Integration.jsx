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

export default function Integration() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
   

    useGSAP(() => {
        const tl = gsap.timeline();
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:(".IntegrationCard-cont"),
                scroller:"body",
                scrub: 2,
                start:"top 60%",
                end:"top -90%",
                // markers:true
            }
        });
        // tl.from(".Integration-main-cont", {

        //     y: 1200,
        //     duration: 0.5,
        // })

        tl.from(".Integration-headingText , .Integration-SubHeadingText", {
            x: "-100%",
            stagger: 0.4,
            duration: 0.8
        }, "ok")
        tl.from(".IntegrationCard-cont .integrationCard",{
            y:220,
            stagger:0.2,
            duration:1
        }, "ok")

        tl2.from(".IntegrationCard-cont .integrationCard1", {
            y: "130%",
            stagger:0.2,
        })
       
    })


    







    return (

        <>
            <div
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}
                className="Integration-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
                style={{
                    background: `radial-gradient(
                 900px circle at ${pos.x}px ${pos.y}px,
                 rgba(56, 189, 248, 0.7),
                 transparent 80%
               ), #0f172a`,
                }}
            >


                <Header />




                <div className="Integration-ad-Content-cont w-[100%]   flex flex-col   items-center   text-start px-[54px]   ">
                    <h1 className='Integration-headingText text-[130px] text-white font-semi-bold text-start self-start leading-none mt-[250px]'>Experienced in building integrations.</h1>
                    <h1 className='Integration-SubHeadingText text-xl text-white/70 font-semibold text-start self-start break-keep mt-[50px] pr-90'>Is your desired connection or integration not listed? No problem, we’ll build it for you!</h1>


                </div>



                <div className="IntegrationCard-cont w-[100%] grid grid-cols-3 gap-8 my-20 px-[54px]  text-white overflow-hidden ">
                    <div className="integrationCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="akeneo.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Akeneo</h1>
                        <h1 className="text-white/70">Akeneo is a product information management (PIM) platform that helps centralise, enrich and distribute product data across all marketing and sales channels, ensuring consistency and efficiency...</h1>
                    </div>
                    <div className="integrationCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20 rounded-full  ' src="exact.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Exact Online</h1>
                        <h1 className="text-white/70">Exact Online is a versatile cloud-based ERP system that optimises financial administration, accounting and business processes, enabling organisations to work more efficiently and accurately...</h1>
                    </div>
                    <div className="integrationCard flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                            <img className='w-30  ' src="afas.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>AFAS software</h1>
                        <h1 className="text-white/70">AFAS offers a complete solution for automating business processes. It reduces manual tasks, increases efficiency, and provides real-time insights for strategic growth...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="hubspot.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>HubSpot</h1>
                        <h1 className="text-white/70">HubSpot centralises customer interactions, enabling businesses to deliver personalised experiences. The platform supports all stages of the customer journey, from lead generation to customer service, with deep...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                            <img className='w-20  ' src="bullhorn.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Bullhorn</h1>
                        <h1 className="text-white/70">Bullhorn optimizes the recruitment process by efficiently managing candidate data and applications. This system enhances effectiveness and collaboration, allowing recruiters to spend more time finding...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className='w-20  ' src="bullhorn.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Connexys</h1>
                        <h1 className="text-white/70">Connexys streamlines the entire recruitment process, from job posting to candidate management. With powerful tools and integrations, the system simplifies recruitment and enhances the candidate experience...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-9">
                            <img className='w-20  ' src="xplan.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>xPlan</h1>
                        <h1 className="text-white/70">xPlan optimizes the management of spa and wellness experiences by centralizing bookings, customer data, and administration. The system offers flexible solutions and improved customer satisfaction for efficient business operations...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-10">
                            <img className='w-20  ' src="salesforce.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Salesforce</h1>
                        <h1 className="text-white/70">Salesforce optimizes customer relationship management by efficiently managing customer data, personalizing marketing campaigns, improving sales processes, and providing customer service...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-13">
                            <img className="rounded-2xl w-20"  src="mollie.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Mollie</h1>
                        <h1 className="text-white/70">Mollie offers a hassle-free payment solution for online shops and apps, with various payment options and recurring payments. It provides secure, user-friendly transactions and transparent fees, making it ideal for any business...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-12">
                            <img className="rounded-2xl w-20"  src="mailchimp.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>Mailchimp</h1>
                        <h1 className="text-white/70">Mailchimp is used for managing email campaigns, from newsletters to promotions. The platform offers advanced segmentation and powerful analytics tools, helping to improve customer engagement and conversions...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 p-8">
                            <img className="rounded-2xl w-20"  src="activecampaign.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>ActiveCampaign</h1>
                        <h1 className="text-white/70">ActiveCampaign helps automate marketing and sales processes, from personalized emails to automated customer journeys. This tool enhances customer engagement and increases conversions through effective segmentation and integration...</h1>
                    </div>
                    <div className="integrationCard1 flex flex-col gap-5">
                        <div className="w-fit TCardImg-cont rounded-2xl  border-2 border-gray-500 hover:border-gray-300 px-8 py-14">
                            <img className="rounded-2xl w-20"  src="surfconext.png" alt="" />
                        </div>
                        <h1 className='text-3xl'>SURFconext</h1>
                        <h1 className="text-white/70">SURFconext is a secure and efficient login service for education, allowing students and teachers to access various digital platforms and tools with a single set of login credentials.</h1>
                    </div>
                </div>



               


            </div>

            <Footer />
        </>
    );
}







