import { Link } from "react-router-dom"

function Header() {
	return (
		<header className="w-full backgrop-opacity-50 bg-slate-950 text-white py-6 flex justify-between mb-4 shadow-lg shadow-indigo-100">
			<div className="mx-auto w-11/12 lg:w-10/12 xl:w-8/12 flex justify-between">
				<div className="flex gap-6">
	            <Link to="/">
	              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-white feather feather-instagram w-6 h-6">
	                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
	              </svg>
	            </Link>
	            <Link to="/">
	              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-white feather feather-youtube w-6 h-6">
	                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
	                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
	                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
	              </svg>
	            </Link>
	          	</div>
	          	<p>contact@anirudhsingh.in</p>
          	</div>
		</header>
	)
}

export default Header