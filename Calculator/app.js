const h1 = document.getElementById('h1');

let string = '';

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    string = '';
    document.querySelector('input').value = string;
})
// document.body.style.backgroundColor = 'red'

