'use client';

import PageWrapper from '@/components/feature/page/page-wrapper';

const PaymentSecurityPolicyPage = () => {
	return (
		<PageWrapper className="gap-3">
			<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">Chính sách bảo mật thanh toán</h1>

			<p className="tex-base font-bold text-[#323c3f] md:text-lg">1. Cam kết bảo mật</p>

			<p className="tex-sm text-[#42495b] md:text-base">
				Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp pháp tại Việt Nam. Theo
				đó, các tiêu chuẩn bảo mật thanh toán thẻ tại website andyperfume.com đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
			</p>

			<p className="tex-base font-bold text-[#323c3f] md:text-lg">2. Quy định bảo mật</p>

			<div className="flex flex-col gap-2.5">
				<p className="tex-sm text-[#42495b] md:text-base">
					Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh
					Toán gồm:
				</p>

				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer).</li>
					<li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
					<li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</li>
					<li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
					<li>Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.</li>
				</ol>

				<p className="tex-sm text-[#42495b] md:text-base">Chính sách bảo mật giao dịch trong thanh toán của website andyperfume.com áp dụng với Khách hàng:</p>
				<p className="tex-sm text-[#42495b] md:text-base">
					- Chúng tôi không cung cấp tiện ích lưu giữ token - chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp. Chúng tôi không trực tiếp lưu
					trữ thông tin thẻ khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.
				</p>
				<p className="tex-sm text-[#42495b] md:text-base">
					- Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống của website
					Andy Perfume. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.
				</p>
				<p className="tex-sm text-[#42495b] md:text-base">
					- Đối với thẻ nội địa (internet banking), chúng tôi chỉ lưu trữ mã đơn hàng, mã giao dịch và tên ngân hàng. Chúng tôi cam kết đảm bảo thực hiện nghiêm
					túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên website andyperfume.com.
				</p>
			</div>
		</PageWrapper>
	);
};

export default PaymentSecurityPolicyPage;
