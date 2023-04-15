const input = document.querySelector('#input');

const form = document.querySelector('#form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searched = form.elements.query.value;
    // console.dir(searched);

    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searched}`);
    // console.log(response.data);

    makeImages(response.data);
    form.elements.query.value = '';
    // document.getElementById('imgContainer').removeChild();

})

const makeImages = (shows) => {
    const imgs = document.querySelectorAll('img');
    for (let i of imgs) {
        i.remove();
    }
    for (let result of shows) {
        if (result.show.image) {

            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.getElementById('imgContainer').appendChild(img);
        }
    }
}