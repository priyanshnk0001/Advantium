import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from 'gsap/all';
// import InsCarousell from './InsCarousell';
import CallMadeIcon from '@mui/icons-material/CallMade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import Header from './header';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Insights() {
    const [pos, setPos] = useState({ x: 750, y: 400 });
    const rotateTweenArrow = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".insights-main-cont", {
            y: 1200,
            duration: 0.5,
        },"ok")

        tl.from(".Insights-headingText", {
            x: "-100%",
            duration: 0.8
        }, "ok")
        tl.from(".Insights-card.left1", {
            scale: 0,
            duration: 0.8

        }, "ok")
        tl.from(".Insights-card.right1", {
            scale: 0,
            duration: 0.8

        }, "ok")



    })








    useGSAP(() => {
        const tl = gsap.timeline(
            //     {
            //     scrollTrigger: {
            //         trigger: ".insights-main-cont",
            //         scroller: "body",
            //         scrub: true,
            //         start: "top 99%",
            //         end: "top -200%",
            //         // markers:true
            //     }
            // }
        )
        const tl2 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".insights-main-cont",
                    scroller: "body",
                    scrub: true,
                    start: "top 100%",
                    end: "top 0%",
                    // markers: true
                }
            }
        )


        

        tl2.from(".Insights-card.left", {
            scale: 0,
            stagger: 0.3,
            duration: 1
        }, "same")
        tl2.from(".Insights-card.right", {
            scale: 0,
            stagger: 0.3,
            duration: 1
        }, "same")

        tl2.from(".footer-contentP2", {
            x: -400
        }, "1")
        tl2.from(".FP2-child h1", {
            x: -400
        }, "1")
    })






    return (

        <>
        <div
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setPos({ x: -200, y: -200 })}
            className="insights-main-cont relative w-full h-auto  bg-slate-900 transition-colors"
            style={{
                background: `radial-gradient(
          900px circle at ${pos.x}px ${pos.y}px,
          rgba(56, 189, 248, 0.7),
          transparent 80%
        ), #0f172a`,
            }}
        >


          <Header/>

            <div className="Insights-ad-Content-cont w-[100%] min-h-screen   flex flex-col justify-center items-center  text-start px-[84px]   ">
                <h1 className='Insights-headingText text-[130px] text-white font-bold text-start self-start mt-60 leading-none'>Latest news from the <br /> 𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞</h1>
                <div className='w-[100%] mt-[160px] mx-auto  grid grid-cols-1 sm:grid-cols-2 gap-6   '>
                    <Card className='Insights-card left1 ' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card right1' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card left' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card right' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card left' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card right' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className='Insights-card left' sx={{ width: 665, backgroundColor: 'transparent', boxShadow: 'none', }}>
                        <CardMedia
                            component="img"
                            image="./whiteLaptop.jpg"
                            alt="white laptop"
                            sx={{ height: 500, display: 'block', width: '100%', objectFit: 'cover' }}
                        />
                        <CardContent className='text-white'>
                            <Typography gutterBottom variant="h3" component="div">
                                𝔸𝕕𝕧𝕒𝕟𝕥𝕚𝕦𝕞 Insights
                            </Typography>
                            <Typography className='text-gray-300 ' variant="body2" sx={{ fontSize: "20px" }}>
                                Phase 1 - Group Classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>

                </div>

            </div>




        </div>
            <Footer />
            </>
    );
}
