'use client';

import Link from 'next/link';

import { contactInfo, footerSections } from '@/constants/navbar';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Footer = () => {
	return (
		<footer className="bg-primary-default text-sm text-white">
			<div className="container mx-auto grid grid-cols-1 gap-4 px-1.5 pt-3.5 pb-10 md:grid-cols-4 md:gap-8 md:px-6 md:pt-7">
				{footerSections.map((section, index) => (
					<div key={index} className="col-span-2 md:col-span-1">
						<h3 className="font-primary-default mb-3 hidden text-base font-semibold uppercase md:block">{section.title}</h3>
						<ul className="hidden space-y-2 md:block">
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Link href={link.href} className="text-sm text-white hover:text-yellow-300">
										{link.label}
									</Link>
								</li>
							))}
						</ul>

						<Accordion type="single" className="block w-full md:hidden" defaultValue="item-1" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="font-primary-default flex py-0 text-sm font-semibold uppercase md:hidden">{section.title}</AccordionTrigger>
								<AccordionContent className="pb-0">
									<ul className="mt-2 space-y-2">
										{section.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<Link href={link.href} className="text-sm text-white hover:text-yellow-300">
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				))}

				{/* Column 5 - Contact */}
				<div className="col-span-2 border-t border-white pt-4 md:border-0 md:pt-0">
					<h3 className="font-primary-default mb-3 text-center text-base font-semibold uppercase md:text-left">Thông tin liên hệ</h3>
					<p className="text-center leading-[23px] md:text-left">{contactInfo.company}</p>
					<p className="text-center leading-[23px] md:text-left">{contactInfo.license}</p>
					<p className="text-center leading-[23px] md:text-left">{contactInfo.address}</p>
					<p className="text-center leading-[23px] md:text-left">{contactInfo.phone}</p>
					<p className="text-center leading-[23px] md:text-left">{contactInfo.email}</p>
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
