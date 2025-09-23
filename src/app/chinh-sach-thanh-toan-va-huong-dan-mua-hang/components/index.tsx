'use client';

import Image from 'next/image';

import PageWrapper from '@/components/feature/page/page-wrapper';
import useMounted from '@/hooks/useMounted';

const PaymentPolicyAndPurchaseGuidelinePage = () => {
	const mounted = useMounted();

	if (!mounted) return null;

	return (
		<PageWrapper>
			<h1 className="mt-2 text-lg font-medium text-[#323c3f] md:text-xl">Chính sách thanh toán & Hướng dẫn mua hàng</h1>
			{/* Payment Section */}
			<div className="flex flex-col gap-2">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">I. Chính sách thanh toán</h2>
				<p className="tex-md text-[#42495b] md:text-base">Khi mua hàng tại website andyperfume.com, Quý khách hàng có thể chọn hình thức thanh toán sau đây:</p>
			</div>
			<div className="flex flex-col gap-3.5">
				<h3 className="text-sm font-bold text-[#42495b] md:text-base">1. Thanh toán khi nhận hàng (COD /Cash On Delivery)</h3>
				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Bước 1: Quý Khách Hàng vui lòng chọn hình thức Thanh toán khi giao hàng (COD) và Bấm Đặt hàng.</li>
					<li>Bước 2: Nhân viên CSKH của Andy Perfume sẽ liên hệ với Quý Khách Hàng để xác nhận và xử lý đơn hàng.</li>
					<li>Bước 3: Quý Khách Hàng chỉ phải thanh toán khi nhận được hàng.</li>
				</ol>
			</div>
			<div className="flex flex-col gap-3.5">
				<h3 className="text-sm font-bold text-[#42495b] md:text-base">2. Chuyển khoản ngân hàng</h3>
				<ol className="list-inside list-disc space-y-1 text-[#42495b]">
					<li>Bước 1: Quý Khách Hàng vui lòng chọn hình thức Chuyển khoản qua ngân hàng và Bấm Đặt hàng.</li>
					<li>
						Bước 2: Quý Khách Hàng vui lòng thanh toán đơn hàng theo thông tin sau:
						<ul className="ml-0 list-inside space-y-1 font-bold md:ml-20">
							<li>Người nhận: Phan Hoàng Việt An</li>
							<li>Số tài khoản: 888888885</li>
							<li>Ngân hàng: Ngân hàng Quân đội (MBBank)</li>
							<li>Nội dung: Tên khách hàng + Số điện thoại</li>
						</ul>
					</li>
					<li>Bước 3: Nhân viên CSKH của Andy Perfume sẽ liên hệ với Quý Khách Hàng để xác nhận thanh toán và xử lý đơn hàng.</li>
				</ol>
			</div>
			<div className="flex flex-col gap-3.5">
				<h3 className="text-sm font-bold text-[#42495b] md:text-base">3. Thanh toán qua VNPay</h3>
				<p className="text-sm text-[#42495b] md:text-base">
					Tại bước đặt hàng, khách hàng chọn phương thức Thanh toán qua VNpay và xác nhận “Hoàn tất đơn hàng”.
				</p>
				<p className="text-sm text-[#42495b] md:text-base">
					Hệ thống chuyển qua giao diện thanh toán của đối tác thanh toán. Khách hàng tiến hành nhập thông tin thanh toán tại đây. Tất cả thông tin thanh toán
					được bảo mật theo tiêu chuẩn và cam kết bảo mật thông tin thanh toán theo quy định của đối tác và theo quy định pháp luật.
				</p>
				<p className="text-sm text-[#42495b] md:text-base">
					Sau khi việc thanh toán hoàn tất, đối tác thanh toán trả về dữ liệu báo “Có” cho khoản thanh toán từ khách hàng. Chúng tôi sẽ thực hiện đơn hàng và
					giao hàng trong thời gian quy định.
				</p>
			</div>
			<div className="flex flex-col gap-3.5">
			</div>
			{/* Purchase Guide Section */}
			<div className="flex flex-col gap-2">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">II. Hướng dẫn mua hàng</h2>

				<p className="tex-md text-[#42495b] md:text-base">
					Quý Khách Hàng kiểm tra thông tin sản phẩm trên website{' '}
					<a href="https://andyperfume.com/" target="_blank" className="text-[#16a085] hover:text-[#16a085]/70">
						https://andyperfume.com/
					</a>{' '}:	
				</p>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 1:</strong> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
				</h3>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 2:</strong> Click và sản phẩm muốn mua: Nếu Quý Khách Hàng muốn tiếp tục mua hàng: Bấm vào phần MUA NGAY để tiến hành đặt hàng.
				</h3>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 3:</strong> Thông qua liên hệ trực tiếp để hướng dẫn thủ tục thanh toán.
				</h3>

				<p className="text-sm text-[#42495b] md:text-base">
					Sau khi nhận được thông tin, Andy Perfume sẽ gửi tin nhắn xác nhận đơn hàng với quý khách và/hoặc liên hệ bằng cách gọi điện lại
					để xác nhận lại đơn hàng và địa chỉ của Quý Khách Hàng.
				</p>
				<p className="text-sm text-[#42495b] md:text-base">Mong Quý Khách Hàng sẽ có những trải nghiệm mua sắm tuyệt tại website andyperfume.com!</p>
				<p className="text-sm text-[#42495b] md:text-base">Trân trọng cảm ơn.</p>
			</div>
		</PageWrapper>
	);
};

export default PaymentPolicyAndPurchaseGuidelinePage;
