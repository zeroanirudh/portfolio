import { Link } from 'react-router-dom'
import programmer from '../../resources/svg/programmer.svg'
import underline from '../../resources/svg/underline.svg'
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<div className="py-20 mx-auto w-11/12 lg:w-10/12 xl:w-8/12 flex flex-wrap-reverse items-center justify-between gap-10">
			<div className="w-full sm:w-1/2  border-gray-100 flex gap-4 flex-col" data-aos="fade-right">
				<h2 className="text-3xl text-slate-500 font-medium">Hey,</h2>
				<div className="text-3xl font-bold flex gap-6">I am
					<h1 className="relative w-fit"> 
						<span>Anirudh Singh</span>
						<img className="absolute w-full z-0" src={underline} alt="underline" />
					</h1>
				</div>
				<p className="text-slate-500 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div className="flex gap-4 mt-4">
					<Link className="text-slate-500 flex border-slate-200 shadow shadow-slate-100 hover:shadow-lg hover:shadow-indigo-100 transition duration-300 inline-block rounded-lg px-6 py-4 bg-white border items-center gap-2">
			            <span>Watch</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
						  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
						</svg>
					</Link>
					<Link className="shadow-lg shadow-indigo-100transition duration-200 hover:ring-4 hover:ring-slate-300 text-white inline-block rounded-lg px-6 py-4 bg-slate-950">Download CV</Link>
				</div>
			</div>
			<div className="w-full sm:w-2/5 z-0">
				<img className="w-full" src={programmer} alt="programmer" />
			</div>
			
		</div>
	)
}

export default HeroSection