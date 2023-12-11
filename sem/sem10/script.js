console.log(JSON.parse(dataInfo));

const content = document.querySelector('.content');

const images = JSON.parse(dataInfo);
// Если приходит объект - то map или Object.entries, если массив - map или forEach
// images.map( image => {
//     let img = document.createElement('img');
//     img.id = image.id;
//     img.src = image.url;
//     img.width = image.width;
//     img.height = image.height;
//     content.appendChild(img);
// })

images.forEach(image => {
    let img = document.createElement('img');
    img.id = image.id;
    img.src = image.url;
    img.width = image.width;
    img.height = image.height;
    content.appendChild(img);
})