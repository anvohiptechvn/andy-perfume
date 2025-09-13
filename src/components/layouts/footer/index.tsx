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
					<p className="leading-[23px]">{contactInfo.company}</p>
					<p className="leading-[23px]">{contactInfo.license}</p>
					<p className="leading-[23px]">{contactInfo.address}</p>
					<p className="leading-[23px]">{contactInfo.phone}</p>
					<p className="leading-[23px]">{contactInfo.email}</p>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="bg-[#032119] py-4 text-center text-xs">
				Parfumerie.vn | Cung cấp bởi{' '}
				<Link
					className="text-[#999999]"
					href="https://www.sapo.vn/?utm_campaign=cpn:site_khach_hang-plm:footer&utm_source=site_khach_hang&utm_medium=referral&utm_content=fm:text_link-km:-sz:&utm_term=&campaign=site_khach_hang"
					target="_blank"
				>
					Sapo
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
