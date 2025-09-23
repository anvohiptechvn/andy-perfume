const SlideNotice = () => {
	return (
		<div className="container mx-auto w-full overflow-hidden bg-white px-4 py-2 text-center text-sm font-medium text-black">
			<span
				className="animate-marquee inline-block whitespace-nowrap"
				style={{
					animation: 'marquee 30s linear infinite',
				}}
			>
				📢📢 <strong>KHÁCH HÀNG MỚI:</strong>💎Mỗi đơn hàng &gt; 500K được tặng 1 Via sample mini tự chọn, 💎Mỗi đơn hàng &gt; 2 sản phẩm được giảm 5% tổng hóa đơn, 💎Mỗi đơn hàng &gt; 3 sản phẩm được giảm 8% tổng hóa đơn. 💎ĐẶC BIỆT tích lũy &gt; 20 điểm sẽ được bốc thăm trúng thưởng phần quà lên đến 5 triệu. Mọi chi tiết xem trong phần KHUYẾN MÃI hoặc liên hệ fanpage để được giải đáp 🥇🥇
			</span>
		</div>
	);
};

export default SlideNotice;
