const productTemplate = document.querySelector('#items_sample');
const content = document.querySelector('.items_showcase');
const products = JSON.parse(dataProducts);

products.forEach(product => {
    const baseProduct = productTemplate.content.cloneNode(true);
    baseProduct.querySelector('.items_showcase_item_img').src = product.imageSrc;
    baseProduct.querySelector('.items_showcase_item_img').alt = product.imageAlt;
    baseProduct.querySelector('.items_showcase_item_subtitle').innerHTML = product.subtitle;
    baseProduct.querySelector('.items_showcase_item_dsc').innerHTML = product.dsc;
    baseProduct.querySelector('.items_showcase_item_price').innerHTML = product.price;
    if (baseProduct.querySelector('.items_showcase_item_img').alt === "item_2") {
        baseProduct.querySelector('.items_showcase_item_img').classList.add('items_showcase_item_2_image')
    }
    content.appendChild(baseProduct);
})