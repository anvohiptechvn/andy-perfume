'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

import contactJSON from '@/data/contact/data.json' assert { type: 'json' };

const ContactPage = () => {
	const { contact, map } = contactJSON;

	return (
		<section className="container mx-auto flex flex-col gap-6 px-4 py-6 md:flex-row">
			{/* Contact Info */}
			<div className="flex flex-col gap-3">
				<h2 className="text-lg font-semibold md:text-xl">Liên hệ</h2>

				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<MapPin className="h-[14px] w-[14px]" />
						<p className="text-xs text-[#42495B] md:text-sm">{contact.address}</p>
					</div>

					<div className="flex items-center gap-2">
						<Phone className="h-[14px] w-[14px]" />
						<a href={contact.phone.href} className="hover:text-primary-default text-xs text-black hover:underline md:text-sm">
							{contact.phone.label}
						</a>
					</div>

					<div className="flex items-center gap-2">
						<Mail className="h-[14px] w-[14px]" />
						<a href={contact.email.href} className="hover:text-primary-default text-xs text-black hover:underline md:text-sm">
							{contact.email.label}
						</a>
					</div>
				</div>
			</div>

			{/* Google Map */}
			<div className="w-full flex-1 overflow-hidden">
				<iframe src={map.embedUrl} width="100%" height="350" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
			</div>
		</section>
	);
};

export default ContactPage;
