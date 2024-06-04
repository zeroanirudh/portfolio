import Header from './widget/Header'
import Navbar from './widget/Navbar'
import HeroSection from './widget/HeroSection'
import About from './widget/About'
import Footer from './widget/Footer'

function HomeScreen() {
	return (
		<div className="text-slate-700">
			<Header />
			<Navbar />
			<HeroSection />
			<About />
			<Footer />
		</div>
	)
}

export default HomeScreen