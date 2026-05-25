const productList = [

{
    id:1,
    name:"Hạt giống hoa hồng Pháp",
    price:250000,
    image:"../assest/rose.jpg",
    description:`
	Nguồn gốc: Chủ yếu từ Pháp và châu Âu, nổi tiếng với vẻ đẹp sang trọng và hương thơm đậm.
	Đặc điểm: Cánh dày, nhiều lớp, màu sắc đa dạng như đỏ, hồng, trắng, vàng, cam.
	Mùi hương: Thơm ngọt và lâu.
	Ý nghĩa: Tượng trưng cho tình yêu, sự lãng mạn và quý phái.
	Cách trồng: Ưa nắng, đất tơi xốp, cần cắt tỉa thường xuyên.
	Ứng dụng: Trang trí sân vườn, làm hoa bó, quà tặng.`,
    productLink:"detailpage6.html?id=1"
},

{
    id:2,
    name:"Hạt giống hoa hồng Việt Nam",
    price:250000,
    image:"../assest/rose1.jpg",
    description:`
	Nguồn gốc: Được trồng lâu đời tại Việt Nam.
	Đặc điểm: Hoa nhỏ hơn hồng Pháp nhưng rất sai hoa và dễ chăm.
	Màu sắc: Đỏ nhung, hồng, trắng, cam.
	Ưu điểm: Chịu nhiệt tốt, thích hợp khí hậu Việt Nam.
	Ý nghĩa: Tình yêu, sự chân thành và may mắn.
	Cách chăm sóc: Tưới vừa đủ, cần ánh sáng nhiều.`,
    productLink:"detailpage6.html?id=2"
},

{
    id:3,
    name:"Hoa Tulip Hà Lan",
    price:250000,
    image:"../assest/tulip.jpg",
    description:`
	Nguồn gốc: Hà Lan – đất nước nổi tiếng với các cánh đồng tulip.
	Đặc điểm: Hoa hình chiếc chuông úp ngược, thân thẳng.
	Màu sắc: Đỏ, vàng, tím, trắng, hồng…
	Ý nghĩa: Tình yêu hoàn hảo, sự thanh lịch.
	Điều kiện sống: Khí hậu mát lạnh.
	Ứng dụng: Trang trí, lễ hội hoa, quà tặng.`,
    productLink:"detailpage6.html?id=3"
},

{
    id:4,
    name:"Hạt giống hoa hướng dương",
    price:250000,
    image:"../assest/sunflower.jpg",
    description:`
	Đặc điểm: Hoa lớn màu vàng, luôn hướng về phía mặt trời.
	Ý nghĩa: Hy vọng, năng lượng tích cực và lòng trung thành.
	Chiều cao: Có thể từ 1–3m.
	Cách trồng: Ưa nắng mạnh, cần đất thoát nước tốt.
	Ứng dụng: Trang trí, chụp ảnh, lấy hạt.`,

    productLink:"detailpage6.html?id=4"
},

{
    id:5,
    name:"Hạt giống hoa Pansy",
    price:250000,
    image:"../assest/hatgionghoapansy.jpg",
    description:`
	Tên khác: Hoa bướm.
	Đặc điểm: Cánh hoa giống khuôn mặt nhỏ nhiều màu sắc.
	Màu phổ biến: Tím, vàng, trắng, xanh.
	Ý nghĩa: Sự nhớ nhung và tình cảm chân thành.
	Khí hậu: Thích hợp nơi mát mẻ như Đà Lạt.`,

    productLink:"detailpage6.html?id=5"
},

{
    id:6,
    name:"Hạt giống hoa Violet",
    price:250000,
    image:"../assest/hoaviolet.jpg",
    description:`
	Đặc điểm: Hoa nhỏ màu tím dịu dàng.
	Mùi hương: Thơm nhẹ.
	Ý nghĩa: Sự thủy chung, khiêm nhường.
	Cách chăm sóc: Ưa nơi thoáng mát, tránh nắng gắt.
	Ứng dụng: Trang trí bàn học, ban công.`,

    productLink:"detailpage6.html?id=6"
},

{
    id:7,
    name:"Hạt giống hoa Mười Giờ",
    price:250000,
    image:"../assest/hoamuoigio.jpg",
    description:`
	Tên gọi: Nở đẹp nhất vào khoảng 10 giờ sáng.
	Đặc điểm: Cây nhỏ, dễ trồng, hoa nhiều màu.
	Màu sắc: Hồng, đỏ, vàng, cam, trắng.
	Ưu điểm: Chịu nắng tốt, ít sâu bệnh.
	Ý nghĩa: Sự giản dị và mạnh mẽ.
	Ứng dụng: Trồng viền, ban công, sân vườn.`,

    productLink:"detailpage6.html?id=7"
},

{
    id:8,
    name:"Hạt giống hoa Thanh Liễu",
    price:250000,
    image:"../assest/thanhlieu.jpg",
    description:`
	Nguồn gốc: Úc.
	Đặc điểm: Cành dài mềm mại, hoa nhỏ mọc dày.
	Màu sắc: Hồng, trắng, tím, đỏ.
	Ý nghĩa: Tài lộc, may mắn và sự bền bỉ.
	Độ bền: Giữ tươi khá lâu khi cắm bình.
	Ứng dụng: Cắm hoa nghệ thuật, trang trí Tết.`,

    productLink:"detailpage6.html?id=8"
}

];

function addProduct(id,name,price,image,productLink){

    let col = document.createElement("div");

    col.className =
        "col-lg-3 col-md-4 col-sm-6 mb-4";

    col.innerHTML = `

        <div class="product-item">

            <div class="product-image">

                <img src="${image}" alt="${name}">

            </div>

            <div class="product-info">

                <p class="product-name">
                    ${name}
                </p>

                <p class="product-price">
                    ${price.toLocaleString()}đ
                </p>

                <a href="${productLink}">
                    Xem chi tiết
                </a>

            </div>

        </div>

    `;

    document
        .getElementById("product-list")
        .appendChild(col);
}