const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

const addToList = async () => {
    const joke = await getDadJoke();
    const newLi = document.createElement("li");
    newLi.append(joke);
    list.append(newLi);

}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (e) {
        return "No jokes available :( try looking at your life.";
    }
}

btn.addEventListener("click", addToList);