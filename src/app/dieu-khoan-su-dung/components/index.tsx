'use client';

import PageWrapper from '@/components/feature/page/page-wrapper';

const UsageNotePage = () => {
	return (
		<PageWrapper className="gap-3">
			<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">Điều khoản sử dụng</h1>

			<p className="tex-md text-[#42495b] md:text-base">
				Khi Quý Khách Hàng truy cập vào trang web của chúng tôi có nghĩa là Quý Khách Hàng đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh
				sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và Điều kiện sử dụng, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang
				web mà không cần thông báo trước. Và khi Quý Khách Hàng tiếp tục sử dụng trang web, sau khi các thay đổi về quy định và điều kiện được đăng tải, có
				nghĩa là quý khách chấp nhận với những thay đổi đó. Quý Khách Hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
			</p>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">1. Hướng dẫn sử dụng web</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Khi vào web của chúng tôi, Quý Khách Hàng phải đảm bảo đủ 15 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Quý Khách
					Hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Trang web này chỉ dùng để cung cấp thông tin sản phẩm chứ chúng tôi không phải nhà sản xuất nên những nhận xét hiển thị trên web là ý kiến cá nhân của
					Quý Khách Hàng, không phải của chúng tôi.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được chúng tôi cho
					phép bằng văn bản.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">2. Chấp nhận đơn hàng và giá cả</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Chúng tôi có quyền từ chối hoặc hủy đơn hàng của Quý Khách Hàng vì bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách khách quan vào bất kỳ
					lúc nào. Chúng tôi có thể hỏi thêm về số điện thoại và địa chỉ trước khi nhận đơn hàng.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Chúng tôi cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho người tiêu dùng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá
					sản phẩm không hiển thị chính xác trên trang web hoặc sai giá, tùy theo từng trường hợp chúng tôi sẽ liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó
					cho quý khách. Chúng tôi cũng có quyền từ chối hoặc hủy bỏ bất kỳ đơn hàng nào dù đơn hàng đó đã hay chưa được xác nhận hoặc đã bị thanh toán.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">3. Thương hiệu và bản quyền</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung thông tin và tất cả các thiết kế, văn bản, đồ họa, phần mềm, hình ảnh, video, âm
					nhạc, âm thanh, biên dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài sản của chúng tôi. Toàn bộ nội dung của trang web được bảo vệ bởi luật bản
					quyền của Việt Nam và các công ước quốc tế. Bản quyền đã được bảo lưu.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">4. Quyền pháp lý</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Các điều kiện, điều khoản và nội dung của trang web này được điều chỉnh bởi luật pháp Việt Nam và Tòa án có thẩm quyền tại Việt Nam sẽ giải quyết bất
					kỳ tranh chấp nào phát sinh từ việc sử dụng trái phép trang web này.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">5. Quy định về bảo mật</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của Quý Khách Hàng.
					Thông tin của Quý Khách Hàng trong quá trình thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi Quý Khách Hàng hoàn thành quá trình đặt hàng, Quý
					Khách Hàng sẽ thoát khỏi chế độ an toàn.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Quý Khách Hàng không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu.
					Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống.
					Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này cho các
					cơ quan pháp luật.
				</p>
			</div>

			<div className="flex flex-col gap-2.5">
				<h2 className="text-base font-bold text-[#42495b] md:text-lg">6. Thay đổi, hủy bỏ giao dịch tại website</h2>
				<p className="tex-md text-[#42495b] md:text-base">
					Trong mọi trường hợp, Quý Khách Hàng đều có quyền chấm dứt giao dịch nếu đã thực hiện các biện pháp sau đây:
				</p>
				<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
					<li>Thông báo cho chúng tôi về việc hủy giao dịch qua đường dây nóng 0909292848.</li>
					<li>Trả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi ích nào từ hàng hóa đó (theo quy định của chính sách đổi trả hàng).</li>
				</ol>
			</div>
		</PageWrapper>
	);
};

export default UsageNotePage;
