const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {


    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;


    if (r < 100 || g < 100 || b < 100) {
        document.h1.style.backgroundColor = rgb(255, 255, 255);
        h1.innerText = newColor;
        document.body.style.backgroundColor = newColor;
    }
    else {
        h1.innerText = newColor;
        document.body.style.backgroundColor = newColor;
    }
})

// const randomColor = () => {
//     const r = Math.floor(Math.random() *255);
//     const g = Math.floor(Math.random() *255);
//     const b = Math.floor(Math.random() *255);

//     return `rgb(${r},${g},${b})`;
// }

