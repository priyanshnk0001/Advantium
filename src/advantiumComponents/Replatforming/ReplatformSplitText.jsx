import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);


export default function ReplatformSplitText() {
    const elRef = useRef(null);
    const ReplatformsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const Replatformsplit = new SplitType(elRef.current, { types: "words, chars" });
        ReplatformsplitRef.current = Replatformsplit;

        gsap.set(Replatformsplit.chars, { opacity: 0.2, });

        gsap.to(Replatformsplit.chars, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 95%",
                end: "top -45%",
                scrub: 2,
                // markers:true
            },
        });

        return () => {
            if (ReplatformsplitRef.current) {
                ReplatformsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="ReplatformsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="Replatform-Text text-start py-5 text-[55px] text-white flex items-center">Wat is replatforming?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/70">Replatforming is the process of migrating an existing digital platform, such as a website, e-commerce platform or application, to a new technology or infrastructure. This involves modernising the technical stack, modifying the architecture for better performance, scalability and maintainability, and replacing outdated systems with modern, cloud-based solutions.
                    <br /><br />

                    A specific example of replatforming is, for example, replatforming in e-commerce. This involves migrating an existing e-commerce platform to a new platform, often to improve performance, user experience and integration capabilities. This can range from migrating an outdated platform to a cloud-based system, to implementing new architectures such as headless CMS- or API-driven systems, which enable integration with other tools.

                </h1>

                 <h1 className="text-4xl text-white/90">Why is replatforming important for your organisation?</h1>
                 <h1 className="text-white/70">Replatforming offers companies a powerful solution for future-proofing their digital infrastructure. The benefits of replatforming are numerous:</h1>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/70"><span className="text-white ">Improved performance:</span> By investing in modern technologies, businesses can make their platforms run faster and more efficiently. This is of great importance, especially for e-commerce companies striving for better load times and higher conversions.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/70"><span className="text-white ">Better security:</span> Outdated technologies often pose security risks. By moving to modern platforms, businesses can benefit from more advanced security measures that improve the protection of customer data and transactions.</h1>
                </div>
                <div className="!flex ">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/70"><span className="text-white ">Optimising user experience:</span> By choosing modern, flexible platforms, the user experience on both mobile devices and desktops can be greatly improved, which is crucial for customer satisfaction and conversion.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/70"><span className="text-white ">Integration with new tools:</span> Replatforming makes it easier to integrate new systems and tools, such as APIs, headless CMS architectures and other innovations that support digital strategy.</h1>

                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/70"><span className="text-white ">Cost-effective solutions:</span> The benefits of replatforming also extend to operational costs. By replacing obsolete technologies, maintenance costs are reduced and processes can be made more efficient.</h1>

                </div>
                <div className="!flex">
                    <h1 className="text-white/70"><span className="text-white ">Advantium</span> offers extensive expertise in replatforming and helps companies every step of the way. Whether replatforming e-commerce or migrating other digital systems, Advantium has the experience and technical know-how to make the process run smoothly and efficiently. Our focus is on delivering customised solutions that perfectly match the specific needs of your business, ensuring a successful transformation without unnecessary disruptions to your operations.</h1>

                </div>





            </div>
        </div>
    );
}

