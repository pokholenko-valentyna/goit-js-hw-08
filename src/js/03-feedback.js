import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const user = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const feedbackData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = feedbackData.email;
    form.elements.message.textContent = feedbackData.message;
};
form.addEventListener("input", throttle(saveUser, 500));

function saveUser(evt) { 
    user[evt.target.name] = evt.target.value;
    updateOutput();
};

function updateOutput() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
};

form.addEventListener("submit", logUser);

function logUser(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));  
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();  
};
