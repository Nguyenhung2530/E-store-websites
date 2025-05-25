import { createQuantityControl } from './quantityControl.js';

export function addProduct(name, id, price, url) {
  const product = document.createElement('div');
  product.className = 'product-item';

  const image = document.createElement('img');
  image.src = url;
  image.className = 'imageShoppingList';

  const productDetail = document.createElement('div');
  productDetail.className = 'productDetail';

  const title = document.createElement('p');
  title.textContent = name;
  title.className = 'titleShoppingList';

  const productId = document.createElement('p');
  productId.textContent = `#${id}`;
  productId.className = 'productIdShoppingList';

  const quantityControl = createQuantityControl();

  const priceTag = document.createElement('p');
  priceTag.textContent = `$${price}`;
  priceTag.className = 'priceTagShoppingList';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.className = 'delete-btn';
  deleteButton.addEventListener('click', () => product.remove());

  product.appendChild(image);

  productDetail.appendChild(title);
productDetail.appendChild(productId);

product.appendChild(productDetail);
product.appendChild(quantityControl);
product.appendChild(priceTag);
product.appendChild(deleteButton);


  return product;
}

document.addEventListener('DOMContentLoaded', () => {
  const products = document.getElementById('products');
  products.appendChild(addProduct(
    'Iphone14',
    '938424',
    '50000',
    'https://stcv4.hnammobile.com/downloads/f/tong-hop-50-hinh-anh-iphone-15-moi-nhat-tren-thi-truong-hien-nay-01699258796.jpg'
  ));
});
