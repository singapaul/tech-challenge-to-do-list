console.log("hello world");
// DOM elements 
const bodyTag = document.querySelector("body");
const greetingTag = document.querySelector(".greeting");
const staticText = document.querySelector(".staticText");
const bothInputs = document.querySelector(".inputs");
const nameInputField = document.querySelector(".inputField");
const toDoListContents = document.querySelector(".toDoContents")
const toDoListFooter = document.querySelector(".toDoFunctions")
const resetButton = document.querySelector(".resetButton");
const submitTaskButton = document.querySelector(".submitButton");

// delete button to appear in footer later
// const deleteButton =



// adding a keydown function
// So when I press enter I want that box and form to submit and a new one to appear

const addListItem = () => {
  console.log(InputFieldBox.value);
  toDoListContents.innerHTML += `<div class=toDoItem>
  <input type="checkbox">
  <p>Input Text</p>
  <button type="button">@</button>
  </div>`
}

// Get element value
const whatIsYourNameFunction = (evnt) => {
  const arrayOutput = [];
  if (evnt.keyCode === 13) {
    evnt.preventDefault();
    console.log(nameInputField.value)
    userName = nameInputField.value;
    // now we want to 1) update our HTML 2) hides the static text 3) change our input box to a task input box
    greetingTag.innerHTML = `Welcome back ${userName}!`
    staticText.innerHTML = "Let’s enter the tasks we need to complete for this upcoming week. Just use the input below to create a todo.";
    bothInputs.innerHTML = `<div>
    <input class=inputField type="text" placeholder="what are we doing today?"></input> <button class="submitButton">+</button></div>`
    toDoListContents.innerHTML = `
    <div class=allTasks><p>Tasks</p>
    <div class=completedAllTasks>
    <p class=placeholder>All tasks have been completed. Great job! - I will implement this later using a function that counts the number of children in the the todolist - if it is zero this will appear</p>
    </div>
    </div>
    `;
    // There must be a better way to write this?
    const submitTaskButton = document.querySelector(".submitButton");
    arrayOutput.push(submitTaskButton);

    const placeholderText = document.querySelector(".placeholder");
    arrayOutput.push(placeholderText);

    const InputFieldBox = document.querySelector(".inputField");
    arrayOutput.push(InputFieldBox);

    submitTaskButton.addEventListener("click", addListItem);


  } else {
    console.log("no")
    return
  }
  return arrayOutput;
}


const resetHTML = () => {
  bodyTag.innerHTML = `<nav class="navbar">
  <p>MyTodos</p>
  <button class="resetButton">Reset</button>
</nav>
<h1 class="greeting">What is your name?</h1>
<div>
  <p class="staticText">This p tag contains static text which we will toggle on and off as we proceeed throughout the
    test</p>
</div>
<div class="inputs">
  <input class=inputField type="text" placeholder="whats your name?">
</div>
<div class="toDoContents">
  This div contains all the magic Javascript
</div>
<footer>
  <div class="toDoFunctions">we will insert Javascript into this footer when we are in edit mode</div>
</footer>`
}

nameInputField.addEventListener("keyup", whatIsYourNameFunction);

resetButton.addEventListener("click", resetHTML);

// next job is to make the input box have functionality 


