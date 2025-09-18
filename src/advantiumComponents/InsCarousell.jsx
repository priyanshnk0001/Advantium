// CarouselLoopFinal.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function InsCarousell({ embedded = false }) {
    const rootRef = useRef(null);
    const loopRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        // style inject
        const style = document.createElement("style");
        style.innerHTML = `
      .clf-root { font-family: system-ui; width: 100%;  }
      .clf-inner { height: 25vh; width: 100%; display: flex; justify-content: center; align-items: center; }
      .clf-wrapper { height: 25vh; width: 100%;  position: relative; display: flex; align-items: center; overflow: hidden; margin: 0 auto; }
      .clf-box { display: flex; align-items: center; justify-content: center; height: 80%; width: 20%; margin: 0; padding: 0; flex-shrink: 0; font-size: 21px; cursor: pointer;  }
      .clf-track { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
      @media (max-width: 720px) {
        .clf-box { width: 30%; font-size: 18px; }
      }
    `;
        document.head.appendChild(style);

        const boxes = gsap.utils.toArray(root.querySelectorAll(".clf-box"));
        if (boxes.length === 0) return;

        // loop helper
        function horizontalLoop(items, config) {
            items = gsap.utils.toArray(items);
            config = config || {};
            let tl = gsap.timeline({
                repeat: config.repeat,
                paused: config.paused,
                defaults: { ease: "none" },
                onReverseComplete: () =>
                    tl.totalTime(tl.rawTime() + tl.duration() * 100),
            }),
                length = items.length,
                startX = items[0].offsetLeft,
                times = [],
                widths = [],
                xPercents = [],
                curIndex = 0,
                pixelsPerSecond = (config.speed || 1) * 50,
                snap =
                    config.snap === false
                        ? (v) => v
                        : gsap.utils.snap(config.snap || 1),
                totalWidth,
                curX,
                distanceToStart,
                distanceToLoop,
                item,
                i;

            gsap.set(items, {
                xPercent: (i, el) => {
                    let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
                    xPercents[i] = snap(
                        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                        gsap.getProperty(el, "xPercent")
                    );
                    return xPercents[i];
                },
            });
            gsap.set(items, { x: 0 });

            totalWidth =
                items[length - 1].offsetLeft +
                (xPercents[length - 1] / 100) * widths[length - 1] -
                startX +
                items[length - 1].offsetWidth *
                gsap.getProperty(items[length - 1], "scaleX") +
                (parseFloat(config.paddingRight) || 0);

            for (i = 0; i < length; i++) {
                item = items[i];
                curX = (xPercents[i] / 100) * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop =
                    distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(
                    item,
                    {
                        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                        duration: distanceToLoop / pixelsPerSecond,
                    },
                    0
                )
                    .fromTo(
                        item,
                        {
                            xPercent: snap(
                                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                            ),
                        },
                        {
                            xPercent: xPercents[i],
                            duration:
                                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                            immediateRender: false,
                        },
                        distanceToLoop / pixelsPerSecond
                    )
                    .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            return tl;
        }

        const loop = horizontalLoop(boxes, { paused: true, repeat: -1 });
        loop.play();
        loopRef.current = loop;

        // ✅ if embedded → no pin, just autoplay forever
        if (!embedded) {
            ScrollTrigger.create({
                trigger: root.querySelector(".clf-inner"),
                start: "top top",
                end: "+=2000",
                pin: true,
                onUpdate(self) {
                    self.direction === -1 ? loop.timeScale(-1) : loop.timeScale(1);
                },
            });
        }

        return () => {
            if (loopRef.current) loopRef.current.kill();
            ScrollTrigger.getAll().forEach((s) => s.kill());
            if (style && style.parentNode) style.parentNode.removeChild(style);
        };
    }, [embedded]);

    return (
        <div ref={rootRef} className="clf-root">
            <div className="clf-container">
                <div className="clf-inner">
                    <div className="clf-wrapper">
                        <div className="clf-track">
                            {Array.from({ length: 11 }, (_, i) => (
                                <div key={i} className="clf-box !w-auto text-white whitespace-nowrap  !text-9xl !px-16">
                                    {"Think inside the 𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞."}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
