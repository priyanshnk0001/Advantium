import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function WebAppSplitText() {
    const elRef = useRef(null);
    const WebAppsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const WebAppsplit = new SplitType(elRef.current, { types: "words, chars" });
        WebAppsplitRef.current = WebAppsplit;

        gsap.set(WebAppsplit.chars, { opacity: 0.2, });

        gsap.to(WebAppsplit.chars, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 95%",
                end: "top 30%",
                scrub: 2,
                // markers:true
            },
        });

        return () => {
            if (WebAppsplitRef.current) {
                WebAppsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="WebAppsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words lg:mt-20 md:mt-0 lg:px-45 md:px-22 overflow-x-hidden  ">
            <h1 className="WebApp-Text text-start py-5 text-[50px] text-white flex items-center">Web applications as digital tools.</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[18px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80 space-y-5">A web application is a software application that can be accessed via a web browser. Unlike traditional desktop applications, web apps are platform-independent and available anywhere, as long as there is an internet connection. Whether it is to manage customer relationships, streamline internal processes, or provide self-service portals for users, web applications are increasingly being used to help companies work more efficiently and better meet their customers' needs.
                    <br /><br />

                    The benefits of web applications are manifold. They allow your organisation to simplify complex processes, save time and get a grip on data. In addition, web apps enable teams to work better together, as information is always up-to-date and accessible. Links to other systems - such as ERPs or CRMs - automate workflows, resulting in fewer errors and more productivity. With a web application, you have a digital tool that takes your business processes to the next level while improving the user experience of employees and customers.


                </h1>
                
            </div>
        </div>
    );
}

