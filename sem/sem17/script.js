// const  url = 'https://www.boredapi.com/api/activity/';
// const btnEl = document.querySelector('.btn');
//
// // btnEl.onclick = () => {
// //     fetch(url).then((Response) => Response.json()).then((json) => {
// //         const data = json;
// //         console.log(data);
// //         getActivity(data);
// //     })
// //         .catch((error) => console.log('Something went wrong'))
// // }
// // const getActivity = (data) => {
// //     const divEl = document.createElement('div');
// //     divEl.textContent = data.activity;
// //     document.body.appendChild(divEl);
// // }
//
// async function getActivity(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }
//
// btnEl.onclick = async () => {
//     try {
//         const data = await getActivity(url);
//         console.log(data);
//         const divEl = document.createElement('div');
//         divEl.textContent = data.activity;
//         document.body.appendChild(divEl);
//     } catch (error) {
//         console.log('Something went wrong');
//     }
// }


const demoKey = 'Ux3xoTQ7f5esTEwmlHtCfMJU7yZHQdO79aAzuccI';
const urlNasa = 'https://api.nasa.gov/planetary/apod?api_key=' + demoKey + '&count=10';

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

try {
    const data = await getData(urlNasa);
    const bodyEl = document.querySelector('body');
    data.forEach(el => {
        bodyEl.insertAdjacentHTML('beforeend', `<figure>
    <img src="${el.url}" alt="">
    <figcaption>${el.explanation}</figcaption>
    </figure>`)
    })

    console.log(data);
}catch (error) {
    console.log('no connect')
}