'use client';

import PageWrapper from '@/components/feature/page/page-wrapper';

const InformationSecurityPolicyPage = () => {
	return (
		<PageWrapper className="gap-3">
			<h1 className="text-lg font-medium text-[#323c3f] md:text-xl">Chính sách bảo mật thông tin</h1>

			<div className="flex flex-col gap-4">
				<p className="tex-base font-bold text-[#42495b] md:text-lg">I. Chính sách bảo mật thông tin cá nhân</p>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">1. Mục đích và phạm vi thu thập thông tin</p>
					<p className="tex-sm text-[#42495b] md:text-base">Việc thu thập thông tin qua website Parfumerie.vn sẽ giúp chúng tôi:</p>
					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li>Nắm bắt được các nguyện vọng, mong muốn của khách hàng nhằm nâng cao dịch vụ</li>
						<li>Giúp khách hàng cập nhật các chương trình khuyến mại, giảm giá do Parfumerie.vn tổ chức sớm nhất</li>
						<li>Hỗ trợ khách hàng khi có khiếu nại, ý kiến một cách nhanh nhất.</li>
					</ol>

					<p className="tex-sm text-[#42495b] md:text-base">
						Parfumerie.vn thu thập thông tin khách hàng bao gồm: Họ Tên, Địa chỉ email, Điện thoại, Quốc gia, Tỉnh thành, Địa chỉ
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">2. Phạm vi sử dụng thông tin</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Chúng tôi rất coi trọng việc bảo mật thông tin khách hàng nên chúng tôi cam kết sẽ tuyệt đối không tự ý sử dụng thông tin khách hàng với mục đích
						không mang lại lợi ích cho khách hàng, chúng tôi cam kết không buôn bán, trao đổi thông tin bảo mật của khách hàng cho bất cứ bên thứ ba nào.
					</p>
					<p className="tex-sm text-[#42495b] md:text-base">Chúng tôi sử dụng thông tin khách hàng cung cấp để:</p>
					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li> Cung cấp các dịch vụ và sản phẩm cho khách hàng;</li>
						<li> Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách hàng và website Parfumerie.vn;</li>
						<li>Ngăn chặn các hoạt động phá hủy tài khoản người dùng của khách hàng hoặc các hoạt động giả mạo khách hàng;</li>
						<li> Liên hệ và giải quyết cho khách hàng trong những trường hợp đặc biệt.</li>
					</ol>

					<p className="tex-sm text-[#42495b] md:text-base">
						Trong một số trường hợp đặc biệt sau, chúng tôi có thể chia sẻ thông tin khách một cách hợp lý khi:
					</p>
					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li>Được sự đồng ý của khách hàng.</li>
						<li>
							Để bảo vệ quyền lợi của công ty và những đối tác: Chúng tôi chỉ đưa ra những thông tin cá nhân của khách hàng khi chắc chắn rằng những thông tin
							đó có thể bảo vệ được quyền lợi, tài sản của công ty chúng tôi và những đối tác liên quan. Những thông tin này sẽ được tiết lộ một cách hợp pháp
							theo Pháp luật Việt Nam.
						</li>
						<li>Theo yêu cầu của những cơ quan chính phủ khi chúng tôi thấy nó phù hợp với pháp luật Việt Nam.</li>
					</ol>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">3. Thời gian lưu trữ thông tin</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Parfumerie.vn sẽ lưu trữ các thông tin cá nhân do Khách hàng cung cấp trên các hệ thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho
						Khách hàng hoặc cho đến khi hoàn thành mục đích thu thập hoặc khi Khách hàng có yêu cầu hủy các thông tin đã cung cấp. Trong trường hợp thông tin
						nghi ngờ là giả mạo, vi phạm quy định, thông tin đó sẽ bị xóa.
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">4. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Khách hàng có thể thực hiện các quyền trên bằng cách tự truy cập vào website Parfumerie.vn hoặc liên hệ với chúng tôi qua email hoặc địa chỉ liên
						lạc được công bố trên website.
					</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ 3 đến Ban quản trị website. Khi tiếp nhận những phản hồi này, chúng tôi
						sẽ xác nhận lại dữ liệu, đưa ra trả lời lý do và hướng dẫn người dùng khôi phục và bảo mật lại thông tin.
					</p>

					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li>Điện thoại: 0888070308</li>
						<li>Email: info@parfumerie.vn</li>
					</ol>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">5. Những người hoặc tổ chức được phép truy cập dữ liệu</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Thông tin do chúng tôi yêu cầu trong quá trình tư vấn và mua hàng sẽ chỉ được sử dụng với phạm vi đầy đủ như mục 2 của Chính sách này. Bao gồm:
					</p>

					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li>Parfumerie.vn sử dụng để hỗ trợ khách hàng.</li>
						<li>Cơ quan nhà nước khi có yêu cầu cung cấp thông tin thành viên để phục vụ quá trình điều tra.</li>
						<li>
							Ngoài ra, còn có các đối tác thực hiện một phần dịch vụ do chúng tôi cung cấp, như đơn vị vận chuyển. Các đối tác này sẽ nhận được những thông tin
							theo thỏa thuận hợp đồng (có thể một phần hoặc toàn bộ thông tin tùy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do
							chúng tôi cung cấp.
						</li>
					</ol>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">6. Địa chỉ đơn vị thu thập & quản lý thông tin cá nhân</p>
					<p className="tex-sm text-[#42495b] md:text-base">Hộ Kinh doanh Parfumerie</p>
					<p className="tex-sm text-[#42495b] md:text-base">Số ĐKKD 41H8185878 cấp ngày 24/3/2022 tại UBND Quận 8, TPHCM</p>
					<p className="tex-sm text-[#42495b] md:text-base">Địa chỉ: 1F Quốc lộ 50, Phường 5, Quận 8, TP. Hồ Chí Minh</p>
					<p className="tex-sm text-[#42495b] md:text-base">Điện thoại: 0888070308</p>
					<p className="tex-sm text-[#42495b] md:text-base">Email: info@parfumerie.vn</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">7. Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến dữ liệu cá nhân</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Website Parfumerie.vn hiểu rằng quyền lợi của người dùng trong việc bảo vệ thông tin cá nhân cũng chính là trách nhiệm của chúng tôi. Trong bất kỳ
						trường hợp có thắc mắc, góp ý nào liên quan đến chính sách bảo mật của website Parfumerie.vn và liên quan đến việc thông tin cá nhân bị sử dụng sai
						mục đích hoặc phạm vi đã thông báo, việc tiếp nhận và xử lý khiếu nại được thực hiện theo các bước:
					</p>

					<p className="tex-sm text-[#42495b] md:text-base">Bước 1: Khách hàng gửi phản hồi theo phương thức:</p>
					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<li>Điện thoại: 0888070308</li>
						<li>Email: info@parfumerie.vn</li>
					</ol>

					<p className="tex-sm text-[#42495b] md:text-base">Bước 2: Bộ phận Chăm sóc khách hàng tiếp nhận yêu cầu và cùng các bên liên quan giải quyết.</p>

					<p className="tex-sm text-[#42495b] md:text-base">
						Thời gian xử lý khiếu nại/phản ánh liên quan đến thông tin cá nhân khách hàng tối đa là 15 ngày làm việc kể từ ngày nhận được khiếu nại.
					</p>

					<p className="tex-sm text-[#42495b] md:text-base">
						Bước 3: Gửi phản hồi cho Khách hàng về kết quả xử lý đối với khiếu nại liên quan đến dữ liệu cá nhân khách hàng.
					</p>

					<p className="tex-sm text-[#42495b] md:text-base">
						Trong trường hợp không kiểm soát được tình hình, chúng tôi sẽ liên hệ với các cơ quan chức năng để giải quyết.
					</p>

					<p className="tex-sm text-[#42495b] md:text-base">
						Chúng tôi luôn hoan nghênh mọi ý kiến đóng góp, liên hệ và phản hồi từ khách hàng về “Chính sách bảo mật”.
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<p className="tex-base font-bold text-[#42495b] md:text-lg">II. Chính sách bảo mật thông tin thanh toán</p>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">1. Cam kết bảo mật</p>
					<p className="tex-sm text-[#42495b] md:text-base">
						Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp pháp tại Việt Nam.
						Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại website Parfumerie.vn đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<p className="tex-sm font-bold text-[#42495b] md:text-base">2. Quy định bảo mật</p>
					<ol className="list-inside list-disc space-y-1 text-sm text-[#42495b] md:text-base">
						<p className="tex-sm text-[#42495b] md:text-base">
							Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng
							Thanh Toán gồm:
						</p>
						<li>Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer).</li>
						<li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
						<li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</li>
						<li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
						<li>Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.</li>
						<p className="tex-sm text-[#42495b] md:text-base">
							Chính sách bảo mật giao dịch trong thanh toán của website Parfumerie.vn áp dụng với Khách hàng:
						</p>
						<li>
							Chúng tôi không cung cấp tiện ích lưu giữ token - chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp. Chúng tôi không trực tiếp lưu
							trữ thông tin thẻ khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.
						</li>
						<li>
							Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống của website
							Parfumerie.vn. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.
						</li>
						<li>
							Đối với thẻ nội địa (internet banking), chúng tôi chỉ lưu trữ mã đơn hàng, mã giao dịch và tên ngân hàng. Chúng tôi cam kết đảm bảo thực hiện
							nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên website Parfumerie.vn.
						</li>
					</ol>
				</div>
			</div>
		</PageWrapper>
	);
};

export default InformationSecurityPolicyPage;
