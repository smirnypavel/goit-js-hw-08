import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector("input[name = 'email']");
const texareaEl = document.querySelector("textarea[name = 'message']");
const btnEl = document.querySelector('button[type = "submit"]');

formEl.addEventListener('input', throttle(onTyping, 500));
formEl.addEventListener('submit', onSubmit);
dataRecovery();

function onTyping() {
  const data = { email: inputEl.value, message: texareaEl.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function dataRecovery() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(data);
  if (data) {
    inputEl.value = parsedData.email;
    texareaEl.value = parsedData.message;
  }
}

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: inputEl.value, message: texareaEl.value });
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}



// import throttle from "lodash.throttle";
// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('.feedback-form input'),
//     textArea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', onFormInput);
// // refs.textArea.addEventListener('input', throttle(onTextAreaInput, 500));
// //  refs.email.addEventListener('input', throttle(onEmailInput, 500));
// feedBackText();
// const formData = {};

// refs.form.addEventListener('input', e => {
    
//     formData[e.target.name] = e.target.value;
//  console.log(formData);
// });

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.target.reset();
//     console.log(formData);
//     localStorage.removeItem(STORAGE_KEY);
    
// }

// function onFormInput(evt){
//     const value = evt.target.value;
// //  console.log(value);
//     localStorage.setItem(STORAGE_KEY, value);
// }


// // function onEmailInput(evt) {
// //     const value = evt.target.value;
// // //  console.log(value);
// //     localStorage.setItem(STORAGE_KEY, value);
// // }
// // function onTextAreaInput(evt) {
// //     const value = evt.target.value;
// //     // console.log(value);
// //     localStorage.setItem(STORAGE_KEY, value);
    
// // };

// function feedBackText(evt) {
//     const savedMassage = localStorage.getItem(STORAGE_KEY)

//     if (savedMassage) {
//         refs.textArea.value = savedMassage;
//         refs.email.value = savedMassage;
//     }
    
// }

