const form = document.querySelector('#newForm');
const input = document.querySelector('#input')
const ul = document.querySelector('#ul');


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('FORM SUBMITTED SUCCESSFULLY!');
    const inputVal = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = inputVal;
    ul.append(newLi);
    input.value = "";
});