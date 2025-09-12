'use client';

import Link from 'next/link';

import { contactInfo, footerSections } from '@/constants/navbar';

const Footer = () => {
	return (
		<footer className="bg-primary-default text-sm text-white">
			<div className="container mx-auto grid grid-cols-1 gap-8 px-6 pt-7 pb-10 md:grid-cols-4">
				{footerSections.map((section, index) => (
					<div key={index}>
						<h3 className="font-primary-default mb-3 text-base font-semibold uppercase">{section.title}</h3>
						<ul className="space-y-2">
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Link href={link.href} className="text-sm text-white hover:text-yellow-300">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}

				{/* Column 5 - Contact */}
				<div className="col-span-2">
					<h3 className="font-primary-default mb-3 text-base font-semibold uppercase">Thông tin liên hệ</h3>
					<p>{contactInfo.company}</p>
					<p>{contactInfo.license}</p>
					<p>{contactInfo.address}</p>
					<p>{contactInfo.phone}</p>
					<p>{contactInfo.email}</p>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="bg-[#032119] py-4 text-center text-xs">
				Parfumerie.vn | Cung cấp bởi <span className="text-[#999999]">Sapo</span>
			</div>
		</footer>
	);
};

export default Footer;
