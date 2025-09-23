'use client';

import PageWrapper from '@/components/feature/page/page-wrapper';

const ShippingPolicyPage = () => {
	return (
		<PageWrapper className="gap-3">
			<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">Chính sách giao hàng</h1>

			<p className="tex-sm text-[#42495b] md:text-base">
				Andy Perfume luôn hướng đến việc cung cấp dịch vụ vận chuyển tốt cùng mức phí vận chuyển phù hợp nhất cho tất cả các đơn hàng của Quý Khách Hàng. Chúng
				tôi hỗ trợ giao hàng trên toàn quốc với chính sách giao hàng cụ thể như sau:
			</p>

			<div className="flex flex-col gap-2.5">
				<p className="tex-sm font-bold text-[#42495b] md:text-base">1. Phạm vi giao hàng: Toàn quốc</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Chúng tôi sử dụng dịch vụ giao nhận của các đối tác vận chuyển và có thể gửi hàng tận nhà của khách hàng.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<p className="tex-sm font-bold text-[#42495b] md:text-base">2. Chi phí giao hàng:</p>

				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Giao hàng miễn phí với các đơn hàng trên 3.000.000 VNĐ</li>
					<li>
						Với các đơn hàng dưới 3.000.000 VNĐ, phí giao hàng tùy thuộc vào cước phí của bên đơn vị vận chuyển sau khi tính toán kích thước sản phẩm và địa
						điểm giao hàng. Chi phí này sẽ được thông báo tại bước đặt hàng để quý khách kiểm tra và xác nhận trước khi đặt hàng.
					</li>
				</ol>
			</div>

			<div className="flex flex-col gap-2.5">
				<p className="tex-sm font-bold text-[#42495b] md:text-base">3. Thời gian giao hàng:</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Thời gian giao hàng của từng đơn hàng sẽ phụ thuộc vào từng khu vực địa lý. Cụ thể, thời gian giao hàng của Quý khách sau khi hệ thống báo đặt hàng
					thành công (không tính Thứ Bảy, Chủ Nhật, Lễ, Tết) là như sau:
				</p>
				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Trong nội thành khu vực Tp Hồ Chí Minh: giao trong ngày.</li>
					<li>Trong nội thành khu vực Tây Ninh: giao trong ngày.</li>
					<li>Ngoại thành TP Hồ Chí Minh: dự kiến từ 2-3 ngày.</li>
					<li>Các thành phố, tỉnh thành khác: dự kiến từ 3-5 ngày.</li>
				</ol>

				<p className="tex-sm text-[#42495b] md:text-base">
					Đây là thời gian giao hàng dự kiến. Thời gian này có thể thay đổi vì một số lý do ngoài ý muốn và sẽ được thông báo với Quý khách hàng (nếu có). Ngoài
					ra, quy định phân vùng nội thành, ngoại thành tùy thuộc vào từng nhà cung cấp dịch vụ vận chuyển, sẽ có cách thức phân nội thành, ngoại thành khác
					nhau. Chi tiết Quý khách hàng vui lòng liên hệ Tổng đài chăm sóc khách hàng để được tư vấn.
				</p>

				<p className="tex-sm font-bold text-[#42495b] italic md:text-base">
					*** Đơn hàng đã được xác nhận, sản phẩm được giao đến nơi mà Quý khách hàng không nhận hàng (lý do từ khách hàng), Quý khách hàng vui lòng: (1) thanh
					toán trực tiếp Phí vận chuyển và bảo hiểm hàng hoá của Đơn hàng liên quan cho nhân viên giao hàng hoặc (2) Phí vận chuyển và bảo hiểm hàng hoá của Đơn
					hàng liên quan sẽ được cấn trừ vào khoản tiền đã thanh toán/ đã đặt cọc của Quý khách hàng theo chính sách mua hàng tại Andy Perfume.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<p className="tex-sm font-bold text-[#42495b] md:text-base">4. Trách nhiệm cung cấp chứng từ hàng hóa trong quá trình giao nhận</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Chúng tôi sẽ cung cấp phiếu mua hàng, phiếu xuất kho, hoá đơn và các chứng từ của hàng hoá khác (nếu có) khi gửi hàng cho đơn vị vận chuyển. Đơn vị
					vận chuyển sẽ tiếp nhận hàng hoá, chứng từ và thực hiện việc giao hàng hoá và các chứng từ này cho khách hàng.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Chúng tôi sẽ cung cấp thông tin cần thiết liên quan đến hàng hóa để bảo đảm vận chuyển an toàn cho hàng hóa và sẽ thanh toán cước phí vận chuyển cho
					bên đối tác vận chuyển theo đúng thời hạn, phương thức đã thỏa thuận.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Đối tác vận chuyển có trách nhiệm tiếp nhận và giao hàng hoá và chứng từ liên quan đầy đủ, an toàn đến cho khách hàng.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Đối tác vận chuyển có trách nhiệm cung cấp dịch vụ vận chuyển theo đúng yêu cầu, tiêu chuẩn dịch vụ đã đề ra và đã được thỏa thuận trong hợp đồng hợp
					tác; cam kết thực hiện chính sách giao hàng và chính sách bồi thường thiệt hại nếu lỗi do đối tác vận chuyển gây ra thiệt hại người mua hoặc cho chúng
					tôi trong quá trình cung cấp dịch vụ.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Đối tác vận chuyển có quyền từ chối vận chuyển hàng hóa không đúng với loại hàng hóa đã thỏa thuận trong hợp đồng, hàng hóa cấm giao dịch, hoặc hàng
					hóa có tính chất nguy hiểm, độc hại.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Đối tác vận chuyển có trách nhiệm cung cấp các chứng từ liên quan tới hàng hóa khi có kiểm tra hoặc được yêu cầu bởi cơ quan quản lý nhà nước có thẩm
					quyền trong quá trình thực hiện dịch vụ giao nhận.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Trong trường hợp phát sinh chậm trễ trong việc giao hàng hoặc cung ứng dịch vụ, đối tác vận chuyển phải thông tin kịp thời cho khách hàng để khách
					hàng được biết. Khách hàng có quyền lựa chọn tiếp tục chờ hàng hoặc Huỷ đơn hàng.
				</p>

				<p className="tex-sm text-[#42495b] md:text-base">
					Trường hợp việc giao hàng chậm trễ gây ảnh hưởng đến khách hàng dẫn đến khách hàng muốn huỷ đơn hàng, đối tác vận chuyển cần hỗ trợ khách hàng huỷ đơn
					và thông báo lại cho chúng tôi. Hoặc đối tác vận chuyển phản hồi lại để chúng tôi hỗ trợ thực hiện huỷ bỏ đơn hàng cho khách hàng.
				</p>
			</div>
		</PageWrapper>
	);
};

export default ShippingPolicyPage;
