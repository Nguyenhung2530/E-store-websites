document.addEventListener('DOMContentLoaded', () => {
    
    let allProducts = {
        smartphones: [],
        laptops: [],
        headphones: [],
        ipads: [],
        earphones: []  
    };

    Promise.all([
        fetch('https://dummyjson.com/products/category/smartphones?limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/category/laptops?limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/search?q=headphone&limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/search?q=ipad&limit=4').then(res => res.json()),
        fetch('https://dummyjson.com/products/search?q=earphones&limit=4').then(res => res.json())
    ])
    .then(([smartphones, laptops, headphones, ipads, earphones]) => {
        
        allProducts.smartphones = smartphones.products;
        allProducts.laptops = laptops.products;
        allProducts.headphones = headphones.products;
        allProducts.ipads = ipads.products;
        allProducts.earphones = earphones.products;

        const allProductsArray = [
            ...allProducts.smartphones,
            ...allProducts.laptops,
            ...allProducts.headphones,
            ...allProducts.ipads,
            ...allProducts.earphones
        ];

        // Tạo các mảng sản phẩm hỗn hợp cho từng tab
        const mixedProducts = {
            
            newArrival: [
                ...shuffleArray(allProducts.smartphones).slice(0, 3),
                ...shuffleArray(allProducts.laptops).slice(0, 3),
                ...shuffleArray(allProducts.headphones).slice(0, 3),
                ...shuffleArray(allProducts.ipads).slice(0, 3)
            ],
            
            bestSellers: [
                ...shuffleArray(allProducts.laptops).slice(0, 3),
                ...shuffleArray(allProducts.smartphones).slice(0, 3),
                ...shuffleArray(allProducts.headphones).slice(0, 3),
                ...shuffleArray(allProducts.earphones).slice(0, 3)
            ],
           
            featured: [
                ...shuffleArray(allProducts.ipads).slice(0, 3),
                ...shuffleArray(allProducts.earphones).slice(0, 3),
                ...shuffleArray(allProducts.smartphones).slice(0, 3),
                ...shuffleArray(allProducts.laptops).slice(0, 3)
            ]
        };

        // Xáo trộn sản phẩm trong mỗi tab để thứ tự ngẫu nhiên
        mixedProducts.newArrival = shuffleArray(mixedProducts.newArrival);
        mixedProducts.bestSellers = shuffleArray(mixedProducts.bestSellers);
        mixedProducts.featured = shuffleArray(mixedProducts.featured);

        // Hiển thị tab New Arrival ban đầu
        displayProducts(mixedProducts.newArrival);

        // Xử lý sự kiện chuyển tab
        const tabLinks = document.querySelectorAll('.product-menu-list a');
        tabLinks.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const tabType = e.target.dataset.tab;

                // Xóa class active khỏi tất cả các tab
                tabLinks.forEach(t => t.classList.remove('active'));
                // Thêm class active vào tab được click
                e.target.classList.add('active');

                // Thêm animation slide out
                const productGrid = document.querySelector('.product-section .product-grid');
                productGrid.style.transform = 'translateX(-100%)';
                productGrid.style.opacity = '0';

                // Đợi animation hoàn thành rồi thay đổi sản phẩm
                setTimeout(() => {
                    // Hiển thị sản phẩm dựa trên tab được chọn
                    switch(tabType) {
                        case 'best-sellers':
                            displayProducts(mixedProducts.bestSellers);
                            break;
                        case 'featured':
                            displayProducts(mixedProducts.featured);
                            break;
                        default:
                            displayProducts(mixedProducts.newArrival);
                    }

                    // Thêm animation slide in
                    productGrid.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        productGrid.style.transform = 'translateX(0)';
                        productGrid.style.opacity = '1';
                    }, 50);
                }, 300);
            });
        });

        // Hiển thị sản phẩm giảm giá với mảng sản phẩm đã có
        displayDiscountProducts(allProductsArray);
    })
    .catch(error => console.error('Lỗi khi lấy dữ liệu sản phẩm:', error));

    // Hàm để xáo trộn mảng
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Hàm hiển thị sản phẩm trong grid
    function displayProducts(products) {
        const productGrid = document.querySelector('.product-section .product-grid');
        if (!productGrid) return;

        productGrid.innerHTML = products.map(product => {
            const formattedPrice = product.price.toLocaleString('en-US');
            return `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h4>${product.title}</h4>
                    <p>$${formattedPrice}</p>
                    <button>Buy Now</button>
                </div>
            `;
        }).join('');
    }

    // Hàm hiển thị sản phẩm giảm giá
    function displayDiscountProducts(products) {
        const discountGrid = document.querySelector('.product-discount .product-grid');
        if (!discountGrid) return;

        // Lấy ngẫu nhiên 8 sản phẩm
        const discountProducts = shuffleArray([...products]).slice(0, 8);

        discountGrid.innerHTML = discountProducts.map(product => {
            const discountedPrice = product.price;
            const originalPrice = product.price*2;
            
            return `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h4>${product.title}</h4>
                    <div class="price-info">
                        <span class="current-price">$${discountedPrice.toLocaleString('en-US')}</span>
                        <span class="original-price">$${originalPrice.toLocaleString('en-US')}</span>
                    </div>
                    <button>Buy Now</button>
                </div>
            `;
        }).join('');
    }
});