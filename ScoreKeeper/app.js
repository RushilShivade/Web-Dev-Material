const p1 = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.querySelector('#p1Disp')
}

const p2 = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.querySelector('#p2Disp')
}

const reset = document.querySelector('#resetButton');
const selectLimit = document.querySelector('#selectLimit');
let limit = 5;
let isGameOver = false;

// document.body.style.backgroundColor = "red";

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === (limit - 1)) {
            alert(`Gamepoint`);
        }
        if (player.score === (limit - 1) && opponent.score === (limit - 1)) {
            alert(`Duece`);
        }

        if (player.score === limit) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})


selectLimit.addEventListener('change', function () {
    limit = parseInt(this.value);
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
})

resetButton.addEventListener('click', () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
)

// function reset() {
//     isGameOver = false;
//     s1 = 0;
//     s2 = 0;
//     p1Disp.textContent = 0;
//     p2Disp.textContent = 0;
// }



