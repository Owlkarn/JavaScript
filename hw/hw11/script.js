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
});

const itemInCartTemplate = document.querySelector('#cart_sample');
const addToCartButtons = document.querySelectorAll('.items_showcase_add_to_cart_btn');
const mainCartBlock = document.querySelector('.main-cart');
addToCartButtons.forEach((button) => {
    button.onclick = (e) => {
        const selectedItem = e.target.closest('.items_showcase_item');
        mainCartBlock.style.display = 'block';
        const itemInCart = itemInCartTemplate.content.cloneNode(true);
        const elId = selectedItem.querySelector('.items_showcase_item_img').src;
        if (document.getElementById(elId)) {
            const existingCartItem = document.getElementById(elId);
            const countOfItem = existingCartItem.querySelector('.cart_left_items_item_desc_input');
            countOfItem.value = parseInt(countOfItem.value, 10) + 1;
        }
        else {
            itemInCart.querySelector('.cart_left_items').id = elId;
            itemInCart.querySelector('.cart_left_items_item_desc_name').innerHTML = selectedItem.querySelector('.items_showcase_item_subtitle').innerHTML;
            itemInCart.querySelector('.cart_left_items_item_desc_input').value = 1;
            itemInCart.querySelector('.cart_left_items_item_img').src = selectedItem.querySelector('.items_showcase_item_img').src
            mainCartBlock.appendChild(itemInCart);

            const itemElsInMainCart = mainCartBlock.querySelectorAll('.cart_left_items');

            itemElsInMainCart.forEach( el => {
                const delEl = el.querySelector('.cart_left_items_item_del');
                delEl.onclick = () => {
                    el.remove();
                    if (!mainCartBlock.querySelector('.cart_left_items')) mainCartBlock.style.display = 'none';
                }
            });
        }
    };
});

if (!mainCartBlock.querySelector('.cart_left_items')) mainCartBlock.style.display = 'none';






