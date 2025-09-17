'use client';

import PageWrapper from '@/components/feature/page/page-wrapper';

const ProductValidationPolicyPage = () => {
	return (
		<PageWrapper className="gap-3">
			<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">Chính sách kiểm hàng</h1>

			<p className="text-sm text-[#42495b] md:text-base">
				Kiểm hàng là thực hiện các công việc kiểm tra và so sánh các sản phẩm/hàng hóa nhận được trong kiện hàng chúng tôi gửi so với các sản phẩm trong đơn
				hàng mà quý khách hàng yêu cầu.
			</p>

			<p className="tex-base font-bold text-[#323c3f] md:text-lg">1. Thời gian kiểm hàng:</p>
			<p className="text-sm text-[#42495b] md:text-base">
				Chúng tôi chấp nhận cho khách hàng đồng kiểm với nhân viên giao hàng tại thời điểm nhận hàng. Nếu sau khi đã ký nhận hàng, khách hàng kiểm lại phát hiện
				vấn đề, khách hàng có thể liên lạc với bộ phận chăm sóc khách hàng của chúng tôi để được hỗ trợ đổi trả.
			</p>

			<p className="tex-base font-bold text-[#323c3f] md:text-lg">2. Phạm vi kiểm hàng:</p>
			<p className="text-sm text-[#42495b] md:text-base">
				Việc kiểm hàng ở đây là kiểm tra ngoại quan của sản phẩm được nhận, không bao gồm việc dùng thử sản phẩm, cụ thể bao gồm:
			</p>

			<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
				<li>Kiểm tra tên hàng, số lượng, chủng loại hàng, thông tin của khách hàng trên các giấy tờ của đơn hàng.</li>
				<li>Kiểm tra mẫu mã, màu sắc của hàng hoá.</li>
				<li>Kiểm tra tình trạng bóp méo, hư hỏng, đổ vỡ...</li>
			</ol>

			<p className="text-sm text-[#42495b] md:text-base">Lưu ý:</p>
			<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
				<li>Tuyệt đối không bóc, mở các hộp sản phẩm có tem niêm phong, tem đảm bảo.</li>
				<li>Không được cào lấy mã các sản phẩm có tích điểm, đổi quà.</li>
				<li>
					Quý khách tránh dùng vật sắc nhọn, dễ gây hư hỏng để mở hàng. Vì đối với những trường hợp hàng hóa bị hư hỏng do lỗi của quý khách, chúng tôi sẽ không
					chịu trách nhiệm đổi/trả cho quý khách.
				</li>
				<li>Quý khách hàng vui lòng không bóc và sử dụng các sản phẩm trong kiện hàng khi đang còn vấn đề trong quá trình kiểm tra hàng hóa với chúng tôi.</li>
				<li>Quý khách vui lòng quay video lúc mở thùng hàng để đối chiếu khi cần thiết và được hỗ trợ tốt nhất.</li>
			</ol>

			<p className="tex-base font-bold text-[#323c3f] md:text-lg">3. Các bước xử lý sau khi đồng kiểm hàng:</p>
			<p className="text-sm text-[#42495b] md:text-base">
				Nếu kiểm hàng hoá không gặp vấn đề, quý khách xác nhận với nhân viên giao hàng để nhận hàng và thanh toán đơn hàng (nếu đơn hàng chọn hình thức Thanh
				toán khi nhận hàng). Nếu sản phẩm nhận được không như sản phẩm quý khách đặt trên đơn hàng. Xin hãy liên hệ với Hotline: 0888070308 để được gặp bộ phận
				chăm sóc khách hàng để được hỗ trợ. Trường hợp được chúng tôi xác nhận có sai sót trong quá trình xử lý đơn hàng dẫn đến việc gửi sản phẩm không đúng
				theo đơn hàng quý khách đã đặt, quý khách có thể: (1) Không nhận hàng, không thanh toán và gửi lại hàng cho nhân viên giao nhận và (2) Chúng tôi có thể
				gửi lại đơn mới cho quý khách trong thời gian sớm nhất tuỳ theo yêu cầu của khách hàng.
			</p>

			<p className="text-sm text-[#42495b] md:text-base">Thông tin tiếp nhận khiếu nại của khách hàng:</p>
			<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
				<li>Điện thoại: 0888070308</li>
				<li>Email: info@parfumerie.vn</li>
			</ol>
		</PageWrapper>
	);
};

export default ProductValidationPolicyPage;
