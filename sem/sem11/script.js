const productTemplate = document.querySelector('#productTemplate .product');
const content = document.querySelector('.content');
const products = JSON.parse(dataProducts);

products.forEach(product => {
    const baseProduct = productTemplate.cloneNode(true);
    baseProduct.querySelector('.product__image img').src = product.image;
    baseProduct.querySelector('.product__info .product__title').innerHTML = product.title;
    baseProduct.querySelector('.product__info .product__price').innerHTML += product.price;
    baseProduct.querySelector('.product__info .product__color').innerHTML += product.color;
    baseProduct.querySelector('.product__info .product__size').innerHTML += product.size;
    baseProduct.querySelector('.product__info .product__quantity').innerHTML += product.quantity;
    content.appendChild(baseProduct);
})