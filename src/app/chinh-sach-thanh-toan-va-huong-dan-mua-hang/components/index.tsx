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
				<p className="tex-md text-[#42495b] md:text-base">Khi mua hàng tại website Parfumerie.vn, Quý khách hàng có thể chọn hình thức thanh toán sau đây:</p>
			</div>
			<div className="flex flex-col gap-3.5">
				<h3 className="text-sm font-bold text-[#42495b] md:text-base">1. Thanh toán khi nhận hàng (COD /Cash On Delivery)</h3>
				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Bước 1: Quý Khách Hàng vui lòng chọn hình thức Thanh toán khi giao hàng (COD) và Bấm Đặt hàng.</li>
					<li>Bước 2: Nhân viên CSKH của Parfumerie.vn sẽ liên hệ với Quý Khách Hàng để xác nhận và xử lý đơn hàng.</li>
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
							<li>Người nhận: Nguyễn Thanh Công</li>
							<li>Số tài khoản: 0888070308</li>
							<li>Ngân hàng: Ngân hàng Quân đội (MBBank)</li>
							<li>Nội dung: Tên khách hàng + Số điện thoại</li>
						</ul>
					</li>
					<li>Bước 3: Nhân viên CSKH của Parfumerie.vn sẽ liên hệ với Quý Khách Hàng để xác nhận thanh toán và xử lý đơn hàng.</li>
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
				<div className="flex flex-col gap-2">
					<h3 className="text-sm font-bold text-[#42495b] md:text-base">4. Thanh toán qua Ngân Lượng</h3>
					<p className="tex-md text-[#42495b] md:text-base">
						Quý Khách Hàng có thể chọn hình thức này để áp dụng Thanh toán bằng thẻ Visa/Master/JCB/ Napas qua các bước thanh toán như sau:
					</p>
				</div>

				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Bước 1: Chọn phương thức Thanh toán qua Ngân Lượng và bấm Đặt hàng.</li>
					<li>Bước 2: Nhập thông tin tài khoản ngân hàng bao gồm: Tên chủ thẻ - Email - Số điện thoại.</li>
					<li>Bước 3: Nhập thông tin Thẻ theo hướng dẫn - Nhập mã OTP để xác nhận giao dịch.</li>
					<li>Bước 4: Nhân viên CSKH của Parfumerie.vn sẽ liên hệ Quý Khách để xác nhận thanh toán và xử lý đơn hàng.</li>
				</ol>
			</div>
			{/* Purchase Guide Section */}
			<div className="flex flex-col gap-2">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">II. Hướng dẫn mua hàng</h2>

				<p className="tex-md text-[#42495b] md:text-base">
					Quý Khách Hàng có thể đặt hàng trên website{' '}
					<a href="https://orchard.vn/" target="_blank" className="text-[#16a085] hover:text-[#16a085]/70">
						https://parfumerie.vn/
					</a>{' '}
					theo các bước sau:
				</p>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 1:</strong> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng
				</h3>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 2:</strong> Click và sản phẩm muốn mua, màn hình hiển thị ra với các lựa chọn sau:
				</h3>

				<p className="text-sm text-[#42495b] md:text-base">2.1. Nếu Quý Khách Hàng muốn tiếp tục mua hàng: Bấm vào phần MUA NGAY để tiến hành đặt hàng.</p>
				<div className="relative aspect-[1128/617] w-full">
					<Image
						src={'https://bizweb.dktcdn.net/100/429/123/files/screen-shot-2021-06-30-at-12-26-43.png?v=1625030879878'}
						alt={''}
						fill
						className="h-full w-full object-cover"
						priority
					/>
				</div>

				<p className="text-sm text-[#42495b] md:text-base">
					2.2. Nếu Quý khách muốn tiếp tục lựa chọn thêm sản phẩm khác: bấm vào nội dung "Chọn sản phẩm khác" để chọn thêm sản phẩm.
				</p>
				<div className="relative aspect-[1128/705] w-full">
					<Image
						src={'https://bizweb.dktcdn.net/100/429/123/files/screen-shot-2021-06-30-at-12-28-52.png?v=1625031007448'}
						alt={''}
						fill
						className="h-full w-full object-cover"
						priority
					/>
				</div>

				<p className="text-sm text-[#42495b] md:text-base">
					2.3. Nếu Quý Khách Hàng muốn xem giỏ hàng để biết bạn đã lựa chọn những sản phẩm nào: Bấm vào icon "Giỏ hàng" ở góc phải phía trên website.
				</p>

				<p className="text-sm text-[#42495b] md:text-base">
					2.4. Nếu Quý khách muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào "THANH TOÁN NGAY" hoặc bấm vào "TIẾP TỤC MUA HÀNG" để lựa chọn thêm
					sản phẩm khác.
				</p>
				<div className="relative aspect-[1128/573] w-full">
					<Image
						src={'https://bizweb.dktcdn.net/100/429/123/files/screen-shot-2021-06-30-at-12-35-29.png?v=1625031398891'}
						alt={''}
						fill
						className="h-full w-full object-cover"
						priority
					/>
				</div>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 3:</strong> Lựa chọn thông tin tài khoản thanh toán
				</h3>
				<p className="text-sm text-[#42495b] md:text-base">
					3.1. Nếu Quý Khách Hàng chưa có tài khoản và muốn đăng ký tài khoản vui lòng thực hiện "ĐĂNG KÝ TÀI KHOẢN". Khi có tài khoản Quý Khách Hàng sẽ dễ dàng
					theo dõi được đơn hàng của mình.
				</p>
				<p className="text-sm text-[#42495b] md:text-base">
					3.2. Nếu Quý Khách Hàng muốn mua hàng mà không cần tài khoản, vui lòng cung cấp thông tin mua hàng, địa chỉ giao hàng, lựa chọn hình thức thanh toán
					để thực hiện đơn hàng của mình.
				</p>

				<h3 className="text-sm text-[#42495b] md:text-base">
					<strong>Bước 4:</strong> Xem lại thông tin mua hàng, điền chú thích (nếu có) và bấm "ĐẶT HÀNG" để gửi & hoàn tất đơn hàng.
				</h3>
				<div className="relative aspect-[1128/505] w-full">
					<Image
						src={'https://bizweb.dktcdn.net/100/429/123/files/screen-shot-2021-06-30-at-12-35-29.png?v=1625031398891'}
						alt={''}
						fill
						className="h-full w-full object-cover"
						priority
					/>
				</div>

				<p className="text-sm text-[#42495b] md:text-base">
					Sau khi nhận được đơn hàng, Parfumerie sẽ gửi xác nhận đơn hàng qua điạ chỉ email mà Quý khách hàng đã cung cấp và/hoặc liên hệ bằng cách gọi điện lại
					để xác nhận lại đơn hàng và địa chỉ của Quý Khách Hàng.
				</p>
				<p className="text-sm text-[#42495b] md:text-base">Mong Quý Khách Hàng sẽ có những trải nghiệm mua sắm tuyệt tại website Parfumerie.vn!</p>
				<p className="text-sm text-[#42495b] md:text-base">Trân trọng cảm ơn.</p>
			</div>
		</PageWrapper>
	);
};

export default PaymentPolicyAndPurchaseGuidelinePage;
