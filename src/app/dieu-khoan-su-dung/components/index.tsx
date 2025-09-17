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
					Chúng tôi sẽ cấp một tài khoản (account) sử dụng để Quý Khách Hàng có thể mua sắm trên website{' '}
					<a href="https://Andy Perfume/" target="_blank" className="font-bold">
						https://Andy Perfume/
					</a>{' '}
					trong khuôn khổ điều khoản và điều kiện giao dịch đã đề ra.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Quý Khách Hàng phải đăng ký tài khoản với thông tin xác thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi nào. Mỗi người truy cập phải có trách
					nhiệm với mật khẩu, tài khoản và hoạt động của mình trên web. Hơn nữa, Quý Khách Hàng phải thông báo cho chúng tôi biết khi tài khoản bị truy cập trái
					phép. Chúng tôi không chịu bất kỳ trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do Quý Khách Hàng không
					tuân thủ quy định.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Trang web này chỉ dùng để cung cấp thông tin sản phẩm chứ chúng tôi không phải nhà sản xuất nên những nhận xét hiển thị trên web là ý kiến cá nhân của
					Quý Khách Hàng, không phải của chúng tôi.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Tất cả nội dung trang web và ý kiến phê bình của Quý Khách Hàng đều là tài sản của chúng tôi. Nếu chúng tôi phát hiện bất kỳ thông tin giả mạo nào,
					chúng tôi sẽ khóa tài khoản của Quý Khách Hàng ngay lập tức hoặc áp dụng các biện pháp khác theo quy định của pháp luật Việt Nam.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được chúng tôi cho
					phép bằng văn bản. Nếu vi phạm bất cứ điều nào trong đây, chúng tôi sẽ hủy tài khoản của Quý Khách Hàng mà không cần báo trước.
				</p>
				<p className="tex-md text-[#42495b] md:text-base">
					Trong suốt quá trình đăng ký, Quý Khách Hàng đồng ý nhận email quảng cáo từ website. Sau đó, nếu không muốn tiếp tục nhận mail, Quý Khách Hàng có thể
					từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
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
					<li>Thông báo cho chúng tôi về việc hủy giao dịch qua đường dây nóng 0888070308.</li>
					<li>Trả lại hàng hoá đã nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi ích nào từ hàng hóa đó (theo quy định của chính sách đổi trả hàng).</li>
				</ol>
			</div>
		</PageWrapper>
	);
};

export default UsageNotePage;
