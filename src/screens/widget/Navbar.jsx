import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'aos'

function Navbar({ active }) {

	const [aside, setAside] = useState(false)

	function handleClick() {
		setAside(!aside)
	}

	if (!active) {
		active = 'home'
	}

	return (
		<div>

			<nav className="flex justify-between items-center py-6 mx-auto w-11/12 lg:w-10/12 xl:w-8/12">

				<Link className="text-2xl font-bold">Anirudh.</Link>

				<ul className="text-gray-500 flex gap-8 items-center hidden sm:flex">

					<li><Link className="hover:text-slate-950">About</Link></li>
					<li><Link className="hover:text-slate-950">Skills</Link></li>
					<li><Link className="hover:text-slate-950">Projects</Link></li>
					<li><Link className="hover:text-slate-950">Contact</Link></li>
					{/*<li><Link className="hover:text-slate-950 border-slate-200 shadow shadow-slate-100 hover:shadow-lg hover:shadow-indigo-100 transition duration-300 inline-block rounded-lg px-8 py-4 bg-white border">Hire Me</Link></li>*/}
				
				</ul>

				<div className="relative">

					<button className="block" onClick={handleClick}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						  	<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
						</svg>
					</button>

					<aside className={`${aside ? 'visible opacity-100' : 'invisible opacity-0'} z-10 absolute transition tansition-visibility transition-opacity duration-200 right-0 top-10 w-48 bg-white border border-slate-200 shadow-lg rounded-lg`}>

						<div className="px-4 py-2 border-b bg-slate-50 rounded-t-lg flex justify-between items-center">
							<span className="text-sm text-slate-950">Menu</span>
							<div className="flex gap-1">
								<span className="h-3 w-3 rounded-full bg-green-500"></span>
								<span className="h-3 w-3 rounded-full bg-yellow-500"></span>
								<span className="h-3 w-3 rounded-full bg-red-500 pointer" onClick={handleClick}></span>
							</div>
						</div>

						<ul className="text-gray-500 flex gap-4 flex-col justify-center items-start p-4">

							<li className="sm:hidden"><Link className="hover:text-slate-950">About</Link></li>
							<li className="sm:hidden"><Link className="hover:text-slate-950">Skills</Link></li>
							<li className="sm:hidden"><Link className="hover:text-slate-950">Projects</Link></li>
							<li><Link className="hover:text-slate-950">Education</Link></li>
							<li><Link className="hover:text-slate-950">Blog</Link></li>
							<li><Link className="hover:text-slate-950">Stats</Link></li>
							<li><Link className="hover:text-slate-950">Contact</Link></li>

						</ul>

					</aside>

				</div>

			</nav>

		</div>
	)
}

export default Navbar