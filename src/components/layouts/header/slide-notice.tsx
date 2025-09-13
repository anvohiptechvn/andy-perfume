const SlideNotice = () => {
	return (
		<div className="container mx-auto w-full overflow-hidden bg-white px-4 py-2 text-center text-sm font-medium text-black">
			<span
				className="animate-marquee inline-block whitespace-nowrap"
				style={{
					animation: 'marquee 18s linear infinite',
				}}
			>
				Mỗi đơn hàng &gt; 1 triệu được tặng 1 via tự chọn, mỗi đơn hàng &gt; 3 triệu được tặng 1 chai mini, Khách cũ tổng đơn hàng &gt; 10 triệu được tặng 1
				chai chiết tự chọn 🥇🥇🥇
			</span>
		</div>
	);
};

export default SlideNotice;
