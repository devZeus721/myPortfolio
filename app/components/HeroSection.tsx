'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/pixlr-image-generator-684ad78214e387c70c111d7d.png" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Dion J MAtthew KODIYANPLCKAL</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">INDEPENDENT DESIGNER & WEBSITE CREATOR</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					<b><i>I build exceptional and accessible digital experiences for the web and other creatives.
					Focusing on beautiful solutions to complicated challenges.</i></b>
				</p>
			{/*I create excellent and accessible digital experiences for websites and other creatives. 
					Focusing on creating elegant solutions to complex problems.*/}
			</div>
		</section>
	);
}
