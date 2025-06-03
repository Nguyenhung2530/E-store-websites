import { updatePriceDisplay } from "./updatePrices.js";

export function createQuantityControl() {
  const quantity = document.createElement('div');
  quantity.className = 'quantity-control';
  quantity.innerHTML = `
    <button class="minus-btn">−</button>
    <input type="number" value="1" min="1" class="quantity-input" />
    <button class="plus-btn">+</button>
  `;

  const input = quantity.querySelector('.quantity-input');
  const minusBtn = quantity.querySelector('.minus-btn');
  const plusBtn = quantity.querySelector('.plus-btn');

  minusBtn.addEventListener('click', () => {
    let val = parseInt(input.value);
    if (val > 1) {
      input.value = val - 1;
      updatePriceDisplay();
    }
  });

  plusBtn.addEventListener('click', () => {
    let val = parseInt(input.value);
    input.value = val + 1;
    updatePriceDisplay();
  });

  input.addEventListener('change', () => {
    let val = parseInt(input.value);
    if (isNaN(val) || val < 1) {
      input.value = 1;
    }
    updatePriceDisplay();
  });

  return quantity;
}
