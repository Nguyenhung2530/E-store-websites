const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth Sony WH-1000XM5",
    imageUrl: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_i_xu_ng_67__2_7.png",
    price: 8990000,
    description: "Tai nghe chống ồn cao cấp với thời lượng pin lên đến 30 giờ."
  },
  {
    id: 2,
    name: "Laptop Dell XPS 13",
    imageUrl: "https://product.hstatic.net/200000918979/product/dell-xps-7390-core-i5-10210u-ram-8gb-ssd-256gb-13-fullhd-8608-1_3aa102aad5d3449ca574f572d128cea5.jpg",
    price: 29990000,
    description: "Laptop mỏng nhẹ, màn hình 13 inch cảm ứng, hiệu năng cao."
  },
  {
    id: 3,
    name: "Smartphone Samsung Galaxy S24 Ultra",
    imageUrl: "https://uscom.com.vn/wp-content/uploads/2025/01/S25Ultra-Xanh-titan.jpg",
    price: 26990000,
    description: "Điện thoại cao cấp với camera siêu zoom và pin lâu."
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max 256GB",
    imageUrl: "https://apple.ngocnguyen.vn/cdn/images/202409/goods_img/iphone-15-pro-max-chinh-hang--like-new-99-P15597-1726997326400.png",
    price: 34990000,
    description: "Thiết kế titanium, chip A17 Pro, camera quay ProRes."
  },
  {
    id: 5,
    name: "Tivi LG OLED 55 inch",
    imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/vn/qa55s90dakxxv/gallery/vn-oled-s90d-qa55s90dakxxv-540979313?$684_547_PNG$",
    price: 25990000,
    description: "Màn hình OLED sắc nét, hỗ trợ Dolby Vision và HDR10."
  },
  {
    id: 6,
    name: "Máy ảnh Canon EOS R8",
    imageUrl: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/873eb88b-a092-4cf6-7607-03927aa52200/storedata",
    price: 29900000,
    description: "Máy ảnh không gương lật, quay video 4K, lấy nét nhanh."
  },
  {
    id: 7,
    name: "Loa Bluetooth JBL Charge 5",
    imageUrl: "https://bizweb.dktcdn.net/100/451/485/products/jbl-boombox-3-wifi.jpg?v=1746496129553",
    price: 3790000,
    description: "Loa di động chống nước, âm thanh mạnh mẽ, pin 20 giờ."
  },
  {
    id: 8,
    name: "Bàn phím cơ Logitech G Pro X",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-gaming-khong-day-logitech-g913-tkl-lightspeed-rgb-mechanical-tactile_2__2_1.png",
    price: 3290000,
    description: "Bàn phím cơ chuyên game, switch hot-swap linh hoạt."
  },
  {
    id: 9,
    name: "Chuột không dây Logitech MX Master 3S",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/f/sfeftet466554.jpg",
    price: 2690000,
    description: "Chuột ergonomic, cuộn siêu nhanh, pin hơn 70 ngày."
  },
  {
    id: 10,
    name: "Màn hình Samsung 27 inch 4K",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/5/4/54_1_20.jpg://example.com/images/samsung-4k-27.jpg",
    price: 6990000,
    description: "Màn hình UHD 4K, hỗ trợ HDR10, thiết kế viền mỏng."
  },
{
    id: 11,
    name: "Máy tính bảng Apple iPad Pro 11 inch",
    imageUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwmav802pzo941.webp",
    price: 19990000,
    description: "iPad Pro M2, màn hình Retina 11\", hỗ trợ Apple Pencil."
  },
  {
    id: 12,
    name: "Máy tính bảng Samsung Galaxy Tab S9",
    imageUrl: "https://www.techone.vn/wp-content/uploads/2021/05/ipad-pro-11-2021_2.jpg",
    price: 17990000,
    description: "Galaxy Tab cao cấp, chip Snapdragon, màn hình AMOLED."
  },
  {
    id: 13,
    name: "Smartwatch Apple Watch Series 9",
    imageUrl: "https://www.techone.vn/wp-content/smush-webp/2023/10/apple_watch_series_10_42mm_sport_band_rose_gold_d6b632431b.png.webp",
    price: 10990000,
    description: "Đồng hồ thông minh, theo dõi sức khỏe, GPS, chống nước IP6X."
  },
  {
    id: 14,
    name: "Smartwatch Samsung Galaxy Watch 6",
    imageUrl: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/330159/huawei-watch-gt-5-pro-46mm-day-titanium-hc-1-638751484118424276-750x500.jpg",
    price: 8990000,
    description: "Đồng hồ Android, vòng tuần hoàn giấc ngủ, pin 40 giờ."
  },
  {
    id: 15,
    name: "Máy chơi game Sony PlayStation 5",
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/202/418/products/ps5-slim-2-tay-cam-plus-fc-25ps5-slim-standard.jpg?v=1727673817813",
    price: 14990000,
    description: "Console thế hệ mới, chơi game 4K 120fps."
  },
  {
    id: 16,
    name: "Máy chơi game Microsoft Xbox Series X",
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/202/418/products/tay-cam-xbox-x-den.jpg",
    price: 13990000,
    description: "Console mạnh mẽ, hỗ trợ Dolby Vision & Atmos."
  },
  {
    id: 17,
    name: "Tai nghe gaming Razer Kraken V3 Pro",
    imageUrl: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/ca65fac0-2496-4cb0-c63a-b7b95da96200/storedata",
    price: 3190000,
    description: "Tai nghe không dây, mic thu âm, âm thanh THX."
  },
  {
    id: 18,
    name: "Camera hành trình GoPro Hero12 Black",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/a/camera-hanh-trinh-gopro-hero-12-phu-kien.png",
    price: 10990000,
    description: "Camera 5.3K, chống nước 10m, HyperSmooth 6.0."
  },
  {
    id: 19,
    name: "Robot hút bụi iRobot Roomba Combo j9+",
    imageUrl: "https://product.hstatic.net/200000834079/product/vn-11134207-7ra0g-m7aiza7a2m9f81_e4b53eb1f0ab4e7ab8f9dac89f4cf1b6_master.jpg",
    price: 19990000,
    description: "Robot hút và lau, tự đổ bụi, điều hướng LiDAR."
  },
  {
    id: 20,
    name: "Máy sấy tóc Dyson Supersonic",
    imageUrl: "https://product.hstatic.net/200000661969/product/say-toc-dyson-supersonic-hd03-mau-hong-tang-kem-2-luoc-s1yw9_57f653659a364d4da26da57d7bb5d80c.jpg",
    price: 11990000,
    description: "Máy sấy công nghệ Ion, nhiệt độ kiểm soát thông minh."
  },
  {
    id: 21,
    name: "Loa thông minh Google Nest Audio",
    imageUrl: "https://gucongnghe.com/wp-content/uploads/2020/10/Loa-Google-Nest-Audio-Mau-Den-4-768x768.jpg",
    price: 2490000,
    description: "Loa Google Assistant, âm thanh ấm, hỗ trợ multi-room."
  },
  {
    id: 22,
    name: "Loa thông minh Amazon Echo Studio",
    imageUrl: "https://hdradio.vn/upload/hinhanh/loa-di-dong/bose/Portable-Home-Speaker/anh-thuc-te-Loa-Bose-Portable-Home-Speaker-2.jpg",
    price: 5490000,
    description: "Âm thanh 3D, Alexa tích hợp, hỗ trợ Dolby Atmos."
  },
  {
    id: 23,
    name: "Ổ cứng SSD Samsung T7 1TB",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/-/o-cung-di-dong-ssd-samsung-t7-portable_1_.png",
    price: 2790000,
    description: "SSD di động, USB‑C, tốc độ đọc 1.050 MB/s."
  },
  {
    id: 24,
    name: "Ổ cứng HDD Seagate 4TB",
    imageUrl: "https://lapvip.vn/upload/products/thumb_350x0/o-cung-hdd-seagate-baracuda-4tb-1733297355.jpg",
    price: 2990000,
    description: "HDD 3,5\" 4TB, cache 256MB, chuẩn desktop."
  },
  {
    id: 25,
    name: "Router Wi-Fi 6 Asus RT-AX58U",
    imageUrl: "https://cdn.tgdd.vn/Products/Images/4727/315354/router-wifi-chuan-wifi-6-asus-tuf-gaming-ax4200-1-750x500.jpg",
    price: 3190000,
    description: "Router tốc độ AX3000, MU‑MIMO, AiProtection."
  },
  {
    id: 26,
    name: "Webcam Logitech C920s HD",
    imageUrl: "https://kythuatsovn.net/wp-content/uploads/2022/11/bo-hop-truc-tuyen-c930c-jabra-510ms.jpg",
    price: 2290000,
    description: "Webcam Full HD 1080p, microphone stereo, cover bảo mật."
  },
  {
    id: 27,
    name: "Microphone Blue Yeti USB",
    imageUrl: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/145c26c6-24ae-41d3-023a-62d09c95d300/storedata",
    price: 3390000,
    description: "Mic thu âm đa hướng, plug‑and‑play, chất lượng studio."
  },
  {
    id: 28,
    name: "Smartphone Google Pixel 8 Pro",
    imageUrl: "https://sonpixel.vn/wp-content/uploads/2024/01/Pixel-8-pro-trang-su.png",
    price: 20990000,
    description: "Flagship Google, camera AI, Android thuần."
  },
  {
    id: 29,
    name: "Laptop HP Spectre x360 14",
    imageUrl: "https://uscom.com.vn/wp-content/uploads/2023/01/macvang.jpg",
    price: 33990000,
    description: "Laptop 2‑in‑1, OLED cảm ứng, Intel i7, 16 GB RAM."
  },
  {
    id: 30,
    name: "Màn hình gaming AOC 27\" 165Hz",
    imageUrl: "https://anphat.com.vn/media/product/46668_m__n_h__nh_gaming_lg_ultragear_27gr93u_b__2_.jpg",
    price: 5790000,
    description: "Màn hình Full HD IPS, 165 Hz, FreeSync/G‑Sync."
  }
];