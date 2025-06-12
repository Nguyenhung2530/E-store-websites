function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function handleShopNow(product) {
  window.location.href = `product.html?product=${encodeURIComponent(product)}`;
}

console.log("Footer script loaded.");
