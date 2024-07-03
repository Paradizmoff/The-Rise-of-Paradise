let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

document.getElementById('guessButton').addEventListener('click', function() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('gameMessage');
    secretNumber=2

    if (guess === secretNumber) {
        message.textContent = 'Поздравляем! Вы угадали число!';
        document.getElementById('codeSection').style.display = 'block';
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Неверно. У вас осталось ${attempts} попыток.`;
        } else {
            message.textContent = 'К сожалению, вы проиграли..';
            document.getElementById('guessButton').disabled = true;
        }
    }
});

document.getElementById('accessButton').addEventListener('click', function() {
    let code = document.getElementById('accessCode').value;
    let accessMessage = document.getElementById('accessMessage');

    if (code === 'ASAKURA') {
        accessMessage.textContent = 'Мои поздравления, ты уже у финиша. Последний этап находится у самого автора. Чтобы получить доступ, нужно сказать ключевую фразу "Парадизма"';
        accessMessage.style.color = 'green';
    } else {
        accessMessage.textContent = 'Неверный код. Попробуйте снова.';
        accessMessage.style.color = 'red';
    }
});