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
import emailjs from "emailjs-com";

// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Header from '../Header';

function RequestForm() {

        const [pos, setPos] = useState({ x: 750, y: 400 });
    

    const RequestTweenArrow = useRef(null);


    const formRef = useRef();

        const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_naresh",   // EmailJS se milega
        "template_3fokrph",  // EmailJS se milega
        formRef.current,
        "TXgR3cKIt4epQKF6L"    // EmailJS dashboard me "Public Key"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error.text);
        }
      );
    };
    


     useGSAP(() => {
        RequestTweenArrow.current = gsap.to(".Request-drawer-Btn-container .Request-nextArrowButton", {
            rotation: 45,
            x: 7,
            // backgroundColor: "#fbbf24",
            duration: 0.4,
            ease: "power2.out",
            paused: true,
        });

        const arrow4 = document.querySelector(".Request-drawer-Btn-container");
        if (!arrow4) return;

        const onEnter = () => RequestTweenArrow.current.play();
        const onLeave = () => RequestTweenArrow.current.reverse();

        arrow4.addEventListener("mouseenter", onEnter);
        arrow4.addEventListener("mouseleave", onLeave);

        return () => {
            arrow4.removeEventListener("mouseenter", onEnter);
            arrow4.removeEventListener("mouseleave", onLeave);
            RequestTweenArrow.current.kill();
        };
    }, []);



    return (
        <div 
         onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPos({ x: -200, y: -200 })}

        className='w-[100%] h-[100vh] pt-32 '
         style={{
                    background: `radial-gradient(
                        900px circle at ${pos.x}px ${pos.y}px,
                        rgba(56, 189, 248, 0.7),
                        transparent 80%
                      ), #0f172a`,
                }}
        >
            <div>
                <Header/>
            </div>
            <div className="Request w-[55%] text-white m-auto rounded-2xl  border-2 border-white/50 p-15">

                <form className=' flex flex-col gap-5 ' action="" ref={formRef} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="">What is your name ?</label>
                        <input
                        name="user_name"
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                             required
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

                    <div className="Request-drawer-Btn-container pt-5">
                        <button className="Request-drawer-Button  rounded-full py-4 px-15 text-[18px] bg-yellow-300 text-black cursor-pointer ">Send</button>
                        <button
                            className="Request-nextArrowButton bg-yellow-300 rounded-full p-4 text-black cursor-pointer  ">
                            <CallMadeIcon className="!w-7 !h-7" />
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default RequestForm
