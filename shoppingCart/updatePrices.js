import { subtotal } from "./subtotal.js";
export function updatePriceDisplay() {
  const subtotalAmount = subtotal();
  const subtotalValue = document.getElementById('subtotal-value');
  const estimatedTaxValue = document.getElementById('estimatedTax-Value');
  const totalValue = document.getElementById('totalValue')
  subtotalValue.textContent = subtotalAmount + '$';
  estimatedTaxValue.textContent = subtotalAmount*0.05 + '$';
  totalValue.textContent = subtotalAmount*1.05 + 50 + '$';
} 