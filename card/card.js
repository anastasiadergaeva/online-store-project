import './card.scss'

const button = document.querySelector('.reviews__button');
const container = document.querySelector('.reviews__result');
let username;

function createUserComment() {
    const result = document.createElement('div');
    result.className = 'post-container';
    result.innerHTML = `
    <div class="review-info">
        <p class="username">${sendName()}</p>
        <p class="datetime">${addDate()}</p>
    </div>
    <p class="comment">${sendComment()}</p>`;
    console.log(result);
    container.append(result);
    cleanInputs();
}

function cleanInputs() {
    document.getElementById('username').value = '';
    document.querySelector('#review').value = '';
}

function sendName() {
    username = document.getElementById('username').value;
    let user = username.substr(0, 1).toUpperCase() + username.slice(1).toLowerCase();
    console.log(user);
    return user;
}

function sendComment() {
    const comment = document.querySelector('#review').value;
    console.log(comment)
    return comment;
}

function addDate() {
    let dayNumber = new Date().getDay();
    let day =
        (dayNumber === 0) ? 'ВС' :
            (dayNumber === 1) ? 'ПН' :
                (dayNumber === 2) ? 'ВТ' :
                    (dayNumber === 3) ? 'СР' :
                        (dayNumber === 4) ? 'ЧТ' :
                            (dayNumber === 5) ? 'ПТ' :
                                (dayNumber === 6) ? 'СБ' : 'Такого дня недели не существует';
    let currentDate = new Date();
    currentDate = `${day}, ${currentDate.getDate()}.0${currentDate.getMonth() + 1}.${currentDate.getFullYear()} в ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log(currentDate);
    return currentDate;
}

button.addEventListener('click', createUserComment);