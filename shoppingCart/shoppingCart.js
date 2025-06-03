import { createQuantityControl } from './quantityControl.js';
import { updatePriceDisplay } from './updatePrices.js';

export function addProduct(name, id, price, url) {
  const shoppingList = document.querySelector('.shoppingList');
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

  shoppingList.appendChild(product);
}

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')




addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')

addProduct('Iphone14','#981389','5000','https://kenh14cdn.com/203336854389633024/2022/9/6/iphone-14-pro-1662448116247403396683.jpg')



updatePriceDisplay();