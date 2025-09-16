import parfumerieData from '@/data/about/data.json' assert { type: 'json' };

const AboutPage = () => {
	const { title, intro, sectionTitle, bullets, whyTitle, reasons, closing, signature, image, sectionDescription } = parfumerieData;

	return (
		<section className="container mx-auto my-6 rounded-xs border px-1.5 md:px-0">
			<div className="flex flex-col gap-3 px-2.5 py-5">
				{/* Title */}
				<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">{title}</h1>
				<p className="text-sm leading-relaxed text-[#42495B] md:text-base">{intro}</p>

				<div className="relative mx-auto w-[300] md:w-[450px]">
					<img src={image} alt="Parfumerie Store" className="w-full object-cover" />
				</div>

				<h2 className="mt-6 text-sm font-medium text-[#323c3f] md:text-base">{sectionTitle}</h2>
				<p className="text-base text-sm text-[#323c3f] md:text-base" dangerouslySetInnerHTML={{ __html: sectionDescription }} />
				<ul className="space-y-3">
					{bullets.map((item, i) => (
						<li key={i} className="text-sm leading-[20px] text-[#42495B] md:text-base">
							💡 {item}
						</li>
					))}
				</ul>

				<h2 className="text-sm font-medium text-[#323c3f] md:text-base">{whyTitle}</h2>
				<ol className="list-inside list-decimal space-y-2">
					{reasons.map((reason, i) => (
						<li key={i} className="text-sm leading-[20px] text-[#42495B] md:text-base">
							{reason}
						</li>
					))}
				</ol>

				<p className="text-sm leading-relaxed font-bold text-[#42495B] md:text-base">{closing}</p>
				<p className="text-sm leading-relaxed font-bold whitespace-pre-line text-[#42495B] md:text-base">{signature}</p>
			</div>
		</section>
	);
};

export default AboutPage;
