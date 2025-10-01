import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CircleIcon from '@mui/icons-material/Circle';
gsap.registerPlugin(ScrollTrigger);







export default function LMSSplitText() {
    const elRef = useRef(null);
    const LMSsplitRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) return;

        // Split text into chars
        const LMSsplit = new SplitType(elRef.current, { types: "words, chars" });
        LMSsplitRef.current = LMSsplit;

        gsap.set(LMSsplit.chars, { opacity: 0.2, });

        gsap.to(LMSsplit.chars, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 95%",
                end: "top -25%",
                scrub: 2,
                // markers:true
            },
        });

        return () => {
            if (LMSsplitRef.current) {
                LMSsplitRef.current.revert(); // cleanup split DOM
            }
            ScrollTrigger.getAll().forEach((s) => s.kill());
        };
    }, []);

    return (
        <div className="LMSsplitText-container  w-full min-h-[100vh]  flex flex-col   justify-center whitespace-normal break-words mt-20 px-45 overflow-x-hidden  ">
            <h1 className="LMS-Text text-start py-5 text-[55px] text-white flex items-center">What is an LMS and why is it important for your organisation?</h1>
            <div
                ref={elRef}
                style={{ wordBreak: "normal", overflowWrap: "normal", hyphens: "none" }}
                className=" text-[20px] flex flex-col gap-10    text-white text-start leading-snug "
            >
                <h1 className="text-white/80">A learning management system (LMS) is a digital platform that allows organisations to manage, track and improve learning activities. It enables companies to streamline training, set learning goals and monitor employee progress. In healthcare, an LMS offers significant benefits, such as efficiently tracking mandatory training and improving the knowledge and skills of healthcare professionals. From HR departments looking to speed up the onboarding process to industries needing to ensure regulatory compliance, an LMS enables employees to learn at their own pace, increasing productivity and efficiency. External partners, such as resellers, can also take training courses through our LMS, allowing them to best represent your products and services.</h1>

                <h1 className="text-[34px]">Benefits of a learning management system</h1>

                <h1 className="text-white/80">Text: Learning Management Software offers more than just access to learning content. It helps improve various business processes and streamline training. Here are some key benefits:</h1>


                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="font-semibold">Improved learning experience and productivity:</span> Employees can learn at their own pace, providing a more relevant and efficient learning experience. This results in faster application of new skills in the workplace, without everyone having to maintain the same pace.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="font-semibold">Efficiency in training and development:</span> Digital training eliminates the need for physical locations, external trainers and complex schedules. This saves time and money, while employees always have access to up-to-date information. The system also offers the ability to accurately monitor performance and progress, providing better insight into development needs.</h1>
                </div>
                <div className="!flex ">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="font-semibold">Scalability and centralisation:</span>An LMS allows training to be managed centrally but flexibly deployed on a global scale. Whether you have 50 or 5,000 employees, the system grows with your organisation. Moreover, different departments can manage their own courses, while HR and L&D always maintain an overview.</h1>
                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="font-semibold">Increased compliance and risk management:</span> In industries where regulatory compliance is crucial, an LMS ensures that every employee is trained on time and in full. The system keeps track of who has completed what training, which provides valuable reporting in audits.</h1>

                </div>
                <div className="!flex">
                    <CircleIcon className="text-2xl text-[rgb(35,147,195)] mr-3" />
                    <h1 className="text-white/80"><span className="font-semibold">Personalisation of learning pathways:</span> The LMS enables personalised learning pathways to be offered, allowing employees to follow a unique pathway based on their job role, skills and interests. This increases engagement and helps companies make better use of talents by responding to individual development needs.</h1>

                </div>
               





            </div>
        </div>
    );
}

