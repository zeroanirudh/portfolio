import arrow from "../../resources/svg/arched-arrow.svg"
import anirudh from "../../resources/png/anirudh.png"
import { Link } from "react-router-dom"

function About() {
	return (
		<div className="py-20 mx-auto w-11/12 lg:w-10/12 xl:w-8/12">
			<div className="flex gap-4">
				<h2 className="text-4xl  text-slate-950 font-bold">About Me</h2>
				<img src={arrow} alt="Arched Arrow" className="rotate-90 block -translate-y-8" />
			</div>
			<div className="flex gap-4 justify-between items-center mt-8">
				
				<div className="w-1/2">
					<img className="h-96 rounded-lg m-auto" src={anirudh} alt="Anirudh"/>
				</div>
				<div className="w-1/2 text-lg text-gray-500 text-justify">
					<div>
						I'm Anirudh Singh, a Full Stack Developer. I know HTML, CSS, JavaScript, and Python well. I love making WebApps and mastering Data Structures and Algorithms. I'm excited about learning new tech and facing challenges. Let's team up for great coding projects!
					</div>
					<Link className="text-slate-500 mt-8 flex w-fit text-base border-slate-200 shadow shadow-slate-100 hover:shadow-lg hover:shadow-indigo-100 transition duration-300 inline-block rounded-lg px-6 py-4 bg-white border items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
						  	<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
						</svg>
			            <span>Let's Connect</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default About