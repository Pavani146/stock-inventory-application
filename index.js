const inventoryTable = document.getElementById("inventory-table");
const productNameInput = document.getElementById("product-name");
const productQuantityInput = document.getElementById("product-quantity");
const productPriceInput = document.getElementById("product-price");

function addProduct() {
  const productName = productNameInput.value;
  const productQuantity = productQuantityInput.value;
  const productPrice = productPriceInput.value;

  if (productName && productQuantity && productPrice) {
    const row = inventoryTable.insertRow(-1);
    const productNameCell = row.insertCell(0);
    const productQuantityCell = row.insertCell(1);
    const productPriceCell = row.insertCell(2);

    productNameCell.innerHTML = productName;
    productQuantityCell.innerHTML = productQuantity;
    productPriceCell.innerHTML = productPrice;

    productNameInput.value = "";
    productQuantityInput.value = "";
    productPriceInput.value = "";
  }
}