
const specialOffers = [
  {
    id: "0",
    title: "Snack Nóng Hổi, Vừa Xem Phim Vừa Thổi",
    image: "images/offer1.jpg",
    description: "Menu 4 món ăn vặt chuẩn gu đến từ LC Foods: Da Gà Chiên Giòn, Da Cá Chiên Giòn, Gà Karaage, Lạp Xưởng Đài Loan mang đến trải nghiệm ẩm thực đậm đà, hấp dẫn, cho mỗi khoảnh khắc xem phim thêm phần trọn vẹn và đáng nhớ.",
    time: "Luôn có",
    rule: "Đồng giá 89K món bất kỳ (không kèm Bắp Nước)",
    function: "Ưu đãi khi mua combo: \n159K khi mua 01 Snack (Da Gà / Da Cá) - 01 Bắp -  01 Pepsi \n189K khi mua 01 Snack (Da Gà / Da Cá) - 01 Bắp - 02 Pepsi​"
  },
  {
    id: "1",
    title: "Ưu Đãi Độc Quyền Tại Galaxy Cine+ Gold Coast Nha Trang",
    image: "images/offer2.jpg",
    description: "Khách hàng mang hóa đơn mua hàng từ các thương hiệu áp dụng tại danh sách đính kèm đến Galaxy Cine+ Gold Coast Nha Trang khi giao dịch mua combo bắp nước 2 người trở lên sẽ được đặc quyền 1 lần châm thêm 1 Bắp Ngọt & 1 Pepsi Miễn Phí. ",
    time: "09/05/2025 - 31/05/2025",
    rule: "Áp dụng cho khách hàng có hóa đơn giao dịch từ các thương hiệu hợp tác & giao dịch mua combo bắp nước 2 người trở lên (Combo 2 Big/ Combo 2 Big Extra/ Combo Friends 1/ Combo Friends 2/ Combo Family). \nÁp dụng đổi Bắp vị ngọt; Nước ngọt ly (Pepsi/ Pepsi Black/ 7 Up/ Mirinda cam/ Lipton trà chanh) \nVVui lòng xuất trình hóa đơn giao dịch trong ngày & hóa đơn đối tác kèm hộp bắp/ly nước khi đến yêu cầu refill. \nMỗi cặp hóa đơn được áp dụng 1 lần chương trình. \nChương trình refill áp dụng tối đa đến 22:00 mỗi ngày, khách hàng có nhu cầu refill xin lưu ý đến quầy trước 22:00 để được áp dụng. \nƯu đãi không có giá trị chuyển nhượng, không hoàn lại hay quy đổi thành tiền mặt. ",
    function: "Rạp sẽ thu lại các hóa đơn giao dịch mua bắp nước & hóa đơn đối tác thương hiệu sau khi áp dụng cho khách hàng. "
  },
  {
    id: "2",
    title: "Ưu Đãi Độc Quyền Tại Galaxy Cine+ Thiso Mall Phan Huy Ích",
    image: "images/offer3.jpg",
    description: "Khách hàng mang hóa đơn mua hàng từ các thương hiệu áp dụng tại danh sách đính kèm đến Galaxy Cine+ Thiso Mall Phan Huy Ích khi giao dịch mua combo bắp nước 2 người trở lên sẽ được đặc quyền 1 lần châm thêm 1 Bắp Ngọt & 1 Pepsi Miễn Phí. ",
    time: "09/05/2025 - 31/05/2025",
    rule: "Áp dụng cho khách hàng có hóa đơn giao dịch từ các thương hiệu hợp tác & giao dịch mua combo bắp nước 2 người trở lên (Combo 2 Big/ Combo 2 Big Extra/ Combo Friends 1/ Combo Friends 2/ Combo Family). \nÁp dụng đổi Bắp vị ngọt; Nước ngọt ly (Pepsi/ Pepsi Black/ 7 Up/ Mirinda cam/ Lipton trà chanh) \nKhách hàng vui lòng xuất trình hóa đơn giao dịch trong ngày & hóa đơn đối tác kèm hộp bắp/ly nước khi đến yêu cầu refill. \nMỗi cặp hóa đơn được áp dụng 1 lần chương trình. \nChương trình refill áp dụng tối đa đến 22:00 mỗi ngày, khách hàng có nhu cầu refill xin lưu ý đến quầy trước 22:00 để được áp dụng. \nƯu đãi không có giá trị chuyển nhượng, không hoàn lại hay quy đổi thành tiền mặt. ",
    function: "Rạp sẽ thu lại các hóa đơn giao dịch mua bắp nước & hóa đơn đối tác thương hiệu sau khi áp dụng cho khách hàng."
  },
  {
    id: "3",
    title: "Happy Day - Vé Chỉ Từ 45K",
    image: "images/offer4.jpg",
    description: "Ưu đãi 50.000đ/vé 2D áp dụng tại cụm rạp: Galaxy Linh Trung, Galaxy Quang Trung, Galaxy Long Xuyên, Galaxy GO!Mall Bà Rịa, Galaxy Đà Nẵng, Galaxy Vinh, Galaxy Cà Mau.\nƯu đãi 55.000đ/vé 2D áp dụng tại cụm rạp: Galaxy Tân Bình, Galaxy Nguyễn Du, Galaxy Kinh Dương Vương, Galaxy Trung Chánh, Galaxy Huỳnh Tấn Phát, Galaxy Nguyễn Văn Quá, Galaxy Trường Chinh, Galaxy Mipec Long Biên, Galaxy Bến Tre, Galaxy Hải Phòng, Galaxy Buôn Ma Thuột, Galaxy Nha Trang.\nƯu đãi 70.000đ/vé 2D áp dụng tại rạp: Galaxy Sala.\nƯu đãi 45.000đ/vé 2D áp dụng tại rạp: Galaxy Aeon Huế.\nƯu đãi 60.000đ/vé 2D áp dụng tại rạp: Galaxy Parc Mall Q8, Galaxy Cine+ Gold Coast Nha Trang.\nƯu đãi 65.000đ/vé 2D áp dụng tại rạp: Galaxy Cine+ Thiso Phan Huy Ích.",
    time: "Luôn có",
    rule: "Chỉ áp dụng ở các rạp chỉ định",
    function: "Giá vé Happy Day không áp dụng vào các ngày Lễ/Tết (giá vé Lễ Tết sẽ áp dụng theo bảng giá niêm yết của từng rạp), suất chiếu đặc biệt và định dạng IMAX Laser, phòng chiếu đặc biệt.\nGiá vé Happy Day không áp dụng cho các chương trình giảm giá khác."
  },
  {
    id: "4",
    title: "VNPAY Giảm Đến 10K!",
    image: "images/offer5.jpg",
    description: "Nhập mã VNPAYGALAXY để được giảm tới 10K khi thanh toán bằng VNPAY-QR (với hóa đơn trên 180k)",
    time: "Đến hết 31/07/2025",
    rule: "Mỗi khách hàng được nhập mã khuyến mãi 1 lần/tháng. Các ngày thứ 7 và chủ nhật hàng tuần.",
    function: "Scan mã QR thanh toán bằng Ví VNPAY/App Mobile Banking"
  },
  {
    id: "5",
    title: "Ưu Đãi Thành Viên Galaxy Cinema 2025",
    image: "images/offer6.jpg",
    description: "Khách hàng thành viên có sinh nhật trong tháng sẽ được TẶNG COMBO 2: 01 bắp 02 nước. G-Star và X-Star vừa nhận combo vừa có thêm vé mừng sinh nhật.\nThành viên phải có ít nhất 1 giao dịch (vé/ bắp nước) với chi tiêu > 0 trong vòng 12 tháng trở lại. Áp dụng cho trẻ em có chiều cao dưới 1m3 & ảnh chụp khai sinh/ thẻ học sinh hợp lệ trong tháng sinh nhật trẻ em.",
    time: "Luôn có",
    rule: "Vé sinh nhật có thể sử dụng trong tháng tương ứng.\nKhi đổi quà tặng sinh nhật (vé/ combo bắp nước), quý khách vui lòng mang giấy tờ tùy thân (CCCD/ CMND...)",
    function: "Khách hàng thành viên tích lũy điểm dựa trên giá trị chi tiêu tại Galaxy Cinema (qua ứng dụng Galaxy Cinema & tại rạp), cho cả chi tiêu vé & bắp nước tùy theo hạng thành viên. \nThành viên có thể sử dụng điểm tích lũy để thanh toán vé, bắp nước cho các lần giao dịch kế tiếp."
  },
  {
    id: "6",
    title: "U22 Vui Vẻ - Bắp Nước Siêu Hạt Dẻ",
    image: "images/offer7.jpg",
    description: "Đến Galaxy Cinema, thưởng thức loạt phim hay và mua ngay Combo 1 U22 đủ bắp giòn nước ngọt chỉ từ 49k. Muốn thêm phần nước, hãy chọn Combo 2 U22 chỉ từ 59k.",
    time: "Từ 01.11.2022",
    rule: "Dành cho khách hàng thành viên U22 (độ tuổi 13-22). \nÁp dụng khi mua trực tiếp tại quầy.",
    function: "Vui lòng xuất trình đồng thời giấy tờ tùy thân có ngày sinh hoặc vé U22 kèm thông tin thành viên hợp lệ (thẻ thành viên, app) khi mua combo.\nMỗi khách hàng mua tối đa 01 Combo 1/ Combo 2 U22 mỗi lần."
  },
  {
    id: "7",
    title: "Snack Đủ Vị - Xem Phim Hay Hết Ý",
    image: "images/offer8.jpg",
    description: "Karamucho - Snack khoai tây giòn rụm, chuẩn vị cay dành cho team mê đậm đà. \nKoimucho - Snack bắp giòn tan, ngọt dịu, cực kỳ dễ gây nghiện. \nGokochi - Snack khoai tây tự nhiên, không thêm bột ngọt với 3 vị đặc biệt.",
    time: "Từ 01.04.2025.",
    rule: "Đồng giá 35.000vnđ/bịch lẻ, \nChỉ 25.000vnđ/bịch khi mua kèm Combo Bắp Nước bất kỳ. ",
    function: "Mua trực tiếp"
  },
  {
    id: "8",
    title: "Trọn Vẹn Cảm Giác Điện Ảnh: Từ Rạp Phim Về Đến Nhà",
    image: "images/offer9.jpg",
    description: "Trải nghiệm những bộ phim bom tấn ở mọi nơi, kể cả rạp lẫn ở nhà",
    time: "25.04.2025 - 31.05.2025 ",
    rule: "Chương trình áp dụng tại tất cả các cụm rạp của Galaxy Cinema trên toàn quốc. \nKhách hàng khi mua vé xem phim tại Galaxy Cinema sẽ được tặng 01 voucher Galaxy Play ",
    function: "Áp dụng cho tất cả các khách hàng có giao dịch mua vé xem phim trực tiếp tại quầy và trực tuyến qua website hoặc app Galaxy Cinema. \nÁp dụng cho khách hàng chưa từng đăng ký gói Galaxy Play. \nĐăng ký và sử dụng code tại website https://galaxyplay.vn/"
  },
  {
    id: "9",
    title: "Bánh Phồng Dế Rec Rec – Snack Dế Giàu Đạm Nhiều Dinh Dưỡng",
    image: "images/offer10.jpg",
    description: "Galaxy Cinema mời Stars “đổi gió” với snack Rec Rec ngon mà không nhàm chán!",
    time: "Từ 01.04.2025",
    rule: "Bán lẻ: Đồng giá 35.000vnđ/Bịch. \nChỉ 25.000vnđ/Bịch khi mua kèm Combo Bắp Nước bất kỳ.",
    function: "Mua trực tiếp"
  },
  {
    id: "10",
    title: "Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",
    image: "images/offer11.jpg",
    description: "Các Stars sẽ được xem phim thả ga với giá vé chỉ từ 45.000đ cho tất cả các phim 2D. Ngoài ra, trong Ngày Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi được 01 lần Refill / châm miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.",
    time: "Thứ hai đầu tiên mỗi tháng",
    rule: "Áp dụng cho mọi loại ghế & suất chiếu (Không áp dụng cho suất chiếu đặc biệt & suất chiếu sớm)",
    function: "Vui lòng xuất trình hóa đơn và hộp bắp/ ly nước khi yêu cầu refill, chỉ áp dụng refill bắp nước trước 22:00."
  },
  {
    id: "11",
    title: "Giá Vé U22 - Chỉ Từ 45k",
    image: "images/offer12.jpg",
    description: "Từ 2018, Galaxy Cinema vẫn luôn tiếp sức mùa phim bằng chương trình Giá Vé U22 - Chỉ Từ 45K. Mỗi thẻ HSSV/CMND chỉ áp dụng mua 01 vé U22. Các Stars đi xem phim hãy mang thẻ sinh viên thẻ học sinh để được áp dụng nhé.",
    time: "Từ 2018",
    rule: "Giá vé U22 thay đổi tùy theo rạp phim và ngày mua trong tuần. \nÁp dụng khách hàng thành viên từ 22 tuổi trở xuống và cao trên 1m3",
    function: "Mua trực tiếp"
  },
  {
    id: "12",
    title: "Tiêu Chí Phân Loại Phim Theo Lứa Tuổi",
    image: "images/offer13.jpg",
    description: "P: Phim phổ biến đến người xem ở mọi độ tuổi. \nK: Phim phổ biến đến người xem dưới 13 tuổi với điều kiện xem cùng cha, mẹ hoặc người giám hộ. \nT13: Cấm khán giả dưới 13 tuổi. \nT16: Cấm khán giả dưới 16 tuổi. \nT18: Cấm khán giả dưới 18 tuổi",
    time: "Từ 01/01/2023",
    rule: "Đối với các phim T13, T16, T18, khách hàng vui lòng xuất trình giấy tờ tuỳ thân có ảnh (thẻ học sinh, CMND,...) trước khi mua vé. \nĐối với phim K, khách hàng dưới 13 tuổi vui lòng có cha, mẹ, người giám hộ đi kèm.",
    function: "Vui lòng chứng thực được độ tuổi phù hợp với phim được phân loại như trên."
  }
];
