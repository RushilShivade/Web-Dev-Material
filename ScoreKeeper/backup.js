const reset = document.querySelector('#resetButton');
const p1Disp = document.querySelector('#p1Disp');
const p2Disp = document.querySelector('#p2Disp');
const p1Button = document.getElementById('p1Button');
const p2Button = document.querySelector('#p2Button');
const selectLimit = document.querySelector('#selectLimit');

let s1 = 0;
let s2 = 0;
let limit = 5;
let isGameOver = false;

// document.body.style.backgroundColor = "red";

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        s1 += 1;
        if (s1 === limit) {
            isGameOver = true;
            p1Disp.classList.add('has-text-success');
            p2Disp.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p1Disp.textContent = s1;
    }

    // document.body.style.backgroundColor = "red";
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        s2 += 1;
        if (s2 === limit) {
            isGameOver = true;
            p2Disp.classList.add('has-text-success');
            p1Disp.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Disp.textContent = s2;
    }
})


selectLimit.addEventListener('change', function () {
    limit = parseInt(this.value);
    isGameOver = false;
    s1 = 0;
    s2 = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Disp.classList.remove('has-text-success' , 'has-text-danger');
    p2Disp.classList.remove('has-text-success' , 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
})

resetButton.addEventListener('click', ()=>{
    isGameOver = false;
    s1 = 0;
    s2 = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Disp.classList.remove('has-text-success' , 'has-text-danger');
    p2Disp.classList.remove('has-text-success' , 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
)

// function reset() {
//     isGameOver = false;
//     s1 = 0;
//     s2 = 0;
//     p1Disp.textContent = 0;
//     p2Disp.textContent = 0;
// }



