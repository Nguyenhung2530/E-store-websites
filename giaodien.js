const gallery = document.getElementById('gallery');

const colorImages = {
    black: ["den1.jpg", "den2.jpg", "den3.jpg", "den4.jpg"],
    purple: ["tim1.jpg", "tim2.jpg", "tim3.jpg", "tim4.jpg"],
    white: ["trang1.jpg", "trang2.jpg", "trang3.jpg", "trang4.jpg"],
    gold: ["vang1.jpg", "vang2.jpg", "vang3.jpg", "vang4.jpg"]
};

function changeImage(color, element) {
    document.getElementById('mainImage').src = `ảnh/${color}.png`;
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    updateGallery(color);
}

function updateGallery(color) {
    gallery.innerHTML = "";
    const imgs = colorImages[color];
    imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = `ảnh/${src}`;
        img.alt = 'Preview';
        img.addEventListener('click', () => {
            document.getElementById('mainImage').src = `ảnh/${src}`;
        });
        gallery.appendChild(img);
    });
}

function changeStorage(storage, price, element) {
    document.getElementById('priceDisplay').innerHTML = `$${price}`;
    document.querySelectorAll('.storage-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}


function toggleReviews() {
    const hiddenReviews = document.querySelectorAll(".review-box.hidden");
    const extraReviews = document.querySelectorAll(".review-box:not(:nth-child(-n+2))");
    const button = document.getElementById("viewMoreBtn");

    const isCollapsed = button.textContent.includes("View More");

    if (isCollapsed) {

        extraReviews.forEach((review) => review.classList.remove("hidden"));
        button.textContent = "View Less ▲";
    } else {

        extraReviews.forEach((review) => review.classList.add("hidden"));
        button.textContent = "View More ▼";
    }
}
window.addEventListener('DOMContentLoaded', () => {
    changeImage('black', document.querySelector('.color-btn.black'));
});