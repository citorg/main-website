import { Heart, Users } from "lucide-react";
import bgImage from "../images/jordan-griffith-v8QoGa0tibk-unsplash.jpg";
import Button from "./Button";
import Footer from "./Footer";

const sponsors = [
	{
		name: "Bethel World Prayer Center",
		href: "https://www.bethelworldprayercenter.org/",
		image:
			"https://www.bethelworldprayercenter.org/hp_wordpress/wp-content/uploads/2016/04/BWPC_0416LOGO_CUTOUT-WHITE-B-1_logo.png",
	},
	{
		name: "Improving",
		href: "https://www.improving.com/locations/columbus/",
		image: "https://cbuscodeandcoffee.com/img/improving-logo.png",
	},
	{
		name: "Fruits and Roots",
		href: "https://www.fruitsandroots.com/",
		image:
			"https://b72dd56ca0a27d895808.cdn6.editmysite.com/uploads/b/b72dd56ca0a27d89580869a7c818df6313cb0c46056097a5fc9cecf2f2017b9a/Shirt%20Designs%20(10%20%C3%97%206%20in)2_1659185276.png?width=2400&optimize=medium",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<div
				className="w-full text-center md:text-left md:px-12 flex flex-col justify-center min-h-[400px] md:h-[60vh]"
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="max-w-4xl">
					<h1 className="text-white text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
						CHRISTIANS <span className="font-light">IN</span> TECH
					</h1>
					<h2 className="text-white text-xl md:text-3xl mb-12 font-medium">
						A community at the intersection of Faith and Technology.
					</h2>
					<div className="md:inline-block">
						<Button
							href="https://www.meetup.com/citcbus/"
							width="medium"
							theme="light"
							text="UPCOMING EVENTS"
						/>
					</div>
				</div>
			</div>
			<div
				id="about-us"
				className="bg-white w-full py-20 px-6 md:px-12 border-b border-gray-100"
			>
				<h1
					className="text-center mb-16 font-bold"
					style={{ fontSize: "40px" }}
				>
					ABOUT US
				</h1>

				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 text-center md:text-left">
					<div className="w-full md:w-1/2">
						<img
							className="rounded-lg shadow-xl w-full"
							src="https://secure.meetupstatic.com/photos/event/4/7/6/c/highres_525918284.webp"
							alt="Christians in Tech - Columbus Meetup #2 at Bethel World Prayer Center."
						/>
					</div>

					<div className="w-full md:w-1/2 space-y-8 flex flex-col items-center md:items-start">
						<p className="text-lg text-gray-800 leading-relaxed font-light">
							Christians in Tech is a community at the intersection of faith and
							technology. Our meetups are designed to spark meaningful
							conversations, promote knowledge sharing, and encourage
							growth—both in your career and your spiritual walk with God.
							Whether you're an experienced professional or just starting your
							tech journey, CIT welcomes you.
						</p>
						<div className="w-48">
							<Button
								href="https://www.meetup.com/citcbus/"
								width="medium"
								theme="dark"
								text="JOIN A CHAPTER"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				id="get-involved"
				className="bg-gray-100 w-full h-fit pb-20 relative px-4"
			>
				<h1
					className="text-center py-20 font-bold text-black"
					style={{ fontSize: "40px" }}
				>
					GET INVOLVED
				</h1>

				<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Discord Section */}
					<div className="flex flex-col items-center text-center h-full">
						<svg
							className="mb-6 text-black"
							width="64"
							height="64"
							viewBox="0 0 127.14 96.36"
							fill="currentColor"
						>
							<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6,.48,80.21a105.73,105.73,0,0,0,32.22,16.15,77.7,77.7,0,0,0,7.39-12,67.42,67.42,0,0,1-11.86-5.62c.3-.22.59-.45.88-.68a73.16,73.16,0,0,0,69.5,0c.29.23.58.46.88.68a67.46,67.46,0,0,1-11.86,5.62,77.66,77.66,0,0,0,7.39,12,106,106,0,0,0,32.23-16.15C129.5,50.28,122.09,26.79,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
						</svg>
						<h2 className="text-2xl font-bold mb-4 text-black">JOIN OUR DISCORD</h2>
						<p className="mb-10 text-lg leading-relaxed flex-grow max-w-xs md:max-w-md text-black">
							Join the conversation on Discord. Connect with others in tech,
							share ideas, and stay in the loop with events, updates, and
							projects.
						</p>
						<a
							href="https://discord.com/invite/s9bQZBVduF"
							target="_blank"
							className="border-2 border-solid border-black p-4 text-center inline-block w-full max-w-[400px] text-black font-bold text-base no-underline hover:bg-black hover:text-white transition-colors duration-200"
							rel="noopener noreferrer"
						>
							JOIN
						</a>
					</div>

					{/* Start a Chapter Section */}
					<div className="flex flex-col items-center text-center h-full">
						<Users size={64} strokeWidth={1.5} className="mb-6 text-black" />
						<h2 className="text-2xl font-bold mb-4 text-black">START A CHAPTER</h2>
						<p className="mb-10 text-lg leading-relaxed flex-grow max-w-xs md:max-w-md text-black">
							Lead a local CIT chapter in your city. Bring Christians in tech
							together to build relationships, share ideas, and grow lasting
							community.
						</p>
						<a
							href="#"
							target="_blank"
							className="border-2 border-solid border-black p-4 text-center inline-block w-full max-w-[400px] text-black font-bold text-base no-underline hover:bg-black hover:text-white transition-colors duration-200"
							rel="noopener"
						>
							COMING SOON
						</a>
					</div>

					{/* Donation Section */}
					<div className="flex flex-col items-center text-center h-full">
						<Heart size={64} strokeWidth={1.5} className="mb-6 text-black" />
						<h2 className="text-2xl font-bold mb-4 text-black">MAKE A DONATION</h2>
						<p className="mb-10 text-lg leading-relaxed flex-grow max-w-xs md:max-w-md text-black">
							Support our mission to bridge the gap between faith and
							technology. Your contributions help us host events, support local
							chapters, and expand our reach.
						</p>
						<a
							href="https://onrealm.org/bwpc/-/form/give/cit"
							target="_blank"
							className="border-2 border-solid border-black p-4 text-center inline-block w-full max-w-[400px] text-black font-bold text-base no-underline hover:bg-black hover:text-white transition-colors duration-200"
							rel="noopener"
						>
							DONATE
						</a>
					</div>
				</div>
			</div>
			<div
				id="sponsors-partners"
				className="bg-white w-full py-24 px-6 md:px-12"
			>
				<h1
					className="text-center mb-20 font-bold uppercase tracking-widest text-black"
					style={{ fontSize: "36px" }}
				>
					SPONSORS & PARTNERS
				</h1>

				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{sponsors.map((sponsor, index) => (
						<a
							key={index}
							href={sponsor.href}
							className="group flex items-center justify-center p-12 border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300 h-64 md:h-72"
						>
							<img
								src={sponsor.image}
								alt={sponsor.name}
								className="w-full h-full object-contain"
							/>
						</a>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
