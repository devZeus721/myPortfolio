'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-16 px-4 border-t border-gray-800">
			<div className="max-w-2xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-white">Contact</h2>
					<p className="text-gray-300">Interested in working together? Let&apos;s have a conversation.</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-300">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span><b>Bangalore & Alappuzha </b></span>
						<span><b>India</b></span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="mailto:devzeus.mathew721@gmail.com"
							className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
  href="/DION JOHNSON mainfinall080725.pdf"
  target="_blank"
  className="px-6 py-2 border border-gray-600 text-gray-300 font-medium rounded hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
>

							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a href="https://github.com/devZeus721" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a href="https://www.linkedin.com/in/izeusmatthewk749?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVuhoWKtbToyZI5LxPhrLeg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a href="https://x.com/_zeusjmattk21?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
					<a href="https://www.behance.net/creatordjmk21497" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.67 10.13c.64-.32 1.01-.94 1.01-1.8 0-1.58-1.09-2.33-3.17-2.33H0v8.01h6.97c2.15 0 3.25-.9 3.25-2.68 0-1.01-.37-1.7-1.13-2.07zm-4.7-2.05h2.28c.84 0 1.27.34 1.27 1.03 0 .7-.43 1.04-1.27 1.04H3.97v-2.07zm2.45 5.6H3.97v-2.22h2.52c.98 0 1.47.38 1.47 1.11 0 .73-.49 1.11-1.54 1.11zm8.34-2.42c-2.09 0-3.37 1.47-3.37 3.75 0 2.16 1.2 3.59 3.16 3.59 1.58 0 2.69-.73 3.09-2.09h-1.52c-.19.44-.58.7-1.19.7-.84 0-1.33-.55-1.4-1.65h4.62v-.77c0-2.19-1.12-3.53-3.39-3.53zm-1.15 2.94c.09-.97.64-1.49 1.54-1.49.87 0 1.39.56 1.45 1.49h-2.99zm7.5-2.94c-1.36 0-2.28.53-2.8 1.61l1.31.55c.21-.5.67-.77 1.37-.77.81 0 1.23.33 1.23.97v.14c-.28-.08-.7-.17-1.27-.17-1.54 0-2.32.65-2.32 1.93 0 1.17.81 1.85 2.17 1.85.9 0 1.47-.29 1.81-.91h.02v.78h1.46v-3.29c0-1.31-.79-2.06-2.18-2.06zm-.19 4.11c-.56 0-.89-.23-.89-.65 0-.44.34-.65 1.07-.65.38 0 .7.05.91.14v.33c0 .57-.39.83-1.09.83zm-3.21-7.4h4.01v1.13h-4.01v-1.13z"/>
  </svg>
</a>
<a href="https://dribbble.com/designerZeusjmk721" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 6.36c2.05 2.46 2.22 6.02.43 8.66-.26-.41-2.02-3.06-6.58-2.48-.13-.31-.25-.62-.39-.93.14-.03.28-.05.42-.08 5.89-1.13 5.47-4.28 5.36-4.83zm-6.93-4.36c2.13 0 4.09.84 5.56 2.2-.19.27-1.84 2.46-5.12 3.2-1.63-3.01-3.41-5.11-3.62-5.36C8.65 3.12 10.27 2 12 2zm-4.21 1.86c.29.33 1.98 2.4 3.57 5.34-5.01 1.34-9.13 1.24-9.37 1.23C2.99 5.93 7.01 2.7 7.79 1.86zM2.05 12.18c0-.18.01-.36.02-.54.26.01 4.64.08 9.8-1.27-.25.5-.48 1-.68 1.51-6.13 1.82-8.34 5.58-8.47 5.79-.43-1.06-.67-2.21-.67-3.49zm1.52 5.09c.14-.23 2.08-3.22 8.05-5.02.44 1.13.8 2.29 1.07 3.47-6.74 2.01-8.97 5.03-9.12 5.25.54-.86 1.19-1.63 2-2.27zm2.61 2.93c.17-.24 2.18-2.91 8.44-4.83.13.47.24.94.33 1.42-6.37 1.54-8.79 4.61-8.77 4.64zm5.82 1.14c-1.49 0-2.91-.36-4.14-1 .22-.28 2.7-3.18 9.17-4.69.21.82.36 1.66.44 2.52-4.23 1.17-5.89 2.83-5.91 2.85-.18.18-.43.32-.71.32zm6.16-1.12c-.12-.13-1.44-1.42-5.56-2.67.06-.77.17-1.53.33-2.28 4.36-.56 6.24 1.49 6.29 1.54-.41 1.13-1.09 2.13-2.06 2.87zm2.01-4.36c-.32-.34-2.13-1.98-6.5-1.57.18-.48.39-.96.61-1.43 4.33-.62 6.19 1.18 6.23 1.23-.09.61-.25 1.2-.34 1.77z"/>
  </svg>
</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
