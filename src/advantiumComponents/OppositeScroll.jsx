import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function OppositeScroll({
    images = [
        { src: "./whiteLaptop.jpg", caption: "Project One" },
        { src: "./technology.jpg", caption: "Project Two" },
        { src: "./AI.jpg", caption: "Project Three" },
    ],
    repeat = 3,
    containerHeight = "h-[60vh]",
}) {
    const containerRef = useRef(null);
    const trackARef = useRef(null);
    const trackBRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const trackA = trackARef.current;
        const trackB = trackBRef.current;
        if (!container || !trackA || !trackB) return;

        trackA.style.willChange = "transform";
        trackB.style.willChange = "transform";

        const computeStartX = (trackEl) => {
            const containerW = container.clientWidth;
            const trackW = trackEl.scrollWidth;
            return (containerW - trackW) / 2;
        };

        const travelFactor = 0.65;
        const travel = Math.max(container.clientWidth * travelFactor, 300);

        const startAX = computeStartX(trackA);
        const startBX = computeStartX(trackB);
        gsap.set(trackA, { x: startAX });
        gsap.set(trackB, { x: startBX });

        const tweenA = gsap.to(trackA, {
            x: startAX - travel,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        const tweenB = gsap.to(trackB, {
            x: startBX + travel,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        const onResize = () => {
            tweenA.kill();
            tweenB.kill();
            ScrollTrigger.getAll().forEach((s) => s.kill());

            const newStartA = computeStartX(trackA);
            const newStartB = computeStartX(trackB);
            const newTravel = Math.max(container.clientWidth * travelFactor, 300);

            gsap.set(trackA, { x: newStartA });
            gsap.set(trackB, { x: newStartB });

            gsap.to(trackA, {
                x: newStartA - newTravel,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(trackB, {
                x: newStartB + newTravel,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", onResize);

        return () => {
            tweenA.kill();
            tweenB.kill();
            ScrollTrigger.getAll().forEach((s) => s.kill());
            window.removeEventListener("resize", onResize);
        };
    }, [images, repeat]);

    const items = [];
    for (let r = 0; r < repeat; r++) {
        for (let i = 0; i < images.length; i++) {
            const img = images[i];
            items.push(
                <div key={`${r}-${i}`} className="flex-none px-6" style={{ width: 430 }}>
                    <div className="card-3d group" style={{ perspective: 1000 }}>
                        <div
                            className="card-inner relative w-full h-[280px] transition-transform duration-500"
                        >
                            <div
                                className="card-face card-front absolute inset-0 rounded-xl  shadow-lg"
                                style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover"
                                    style={{ display: "block" }}
                                />
                            </div>

                            <div
                                className="card-face card-back absolute inset-0  rounded-xl flex items-center justify-center px-4 text-center"
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                    background: "rgba(0,0,0,0.6)",
                                }}
                            >
                                <div className="text-white text-lg font-semibold">{img.caption}</div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    }

    const flipStyles = `
    /* rotate the inner when group hovered */
    .group:hover .card-inner { transform: rotateY(180deg); }
    .card-inner { transform-style: preserve-3d; }
    .card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
  `;

    return (
        <section className="w-full   text-white py-12">
            <style>{flipStyles}</style>

            <div className="max-w-[100%] mx-auto px-4 my-40 space-y-6">

                <div
                    ref={containerRef}
                    className={`relative  rounded-lg  ${containerHeight}`}
                >
                    <div
                        ref={trackARef}
                        className="absolute left-0 top-0   will-change-transform"
                        style={{ pointerEvents: "auto" }}
                    >
                        <div className="flex items-center">{items}</div>
                    </div>

                    {/* Lower track */}
                    <div
                        ref={trackBRef}
                        className="absolute left-0 top-85  will-change-transform"
                        style={{ pointerEvents: "auto" }}
                    >
                        <div className="flex items-center">{items}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
