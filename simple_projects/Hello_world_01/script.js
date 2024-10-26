// select all the elements we need
const btnElement = document.querySelector('button');
const spanElement = document.querySelector('span');


// create event listener for clicking button
// => means asking for user input
btnElement.addEventListener('click', () =>{
   const yourName = prompt('please enter your name:')
   spanElement.textContent = yourName;
})
