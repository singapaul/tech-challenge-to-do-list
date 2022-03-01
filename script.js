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
const inputFieldTAsk = document.querySelector(".inputFieldTask");


// make field invisible and not in html:
inputFieldTAsk.style.visibility = "hidden";
inputFieldTAsk.style.display = "none";
submitTaskButton.style.visibility = "hidden";
submitTaskButton.style.display = "none";


let textString = ""
// adding a keydown function
// So when I press enter I want that box and form to submit and a new one to appear

const addListItem = (evnt) => {
  const Task = inputFieldTAsk.value;
  //  alert(InputFieldBox.innerHTML)

  toDoListContents.innerHTML += `<div class=toDoItem>
  <input type="checkbox">
  <p>${Task}</p>
  <button type="button">@</button>
  </div>`
  inputFieldTAsk.value = "";
}

// Get element value
const whatIsYourNameFunction = (evnt) => {
  if (evnt.keyCode === 13) {
    evnt.preventDefault();
    console.log(nameInputField.value)
    userName = nameInputField.value;
    // now we want to 1) update our HTML 2) hides the static text 3) change our input box to a task input box
    greetingTag.innerHTML = `Welcome back ${userName}!`
    staticText.innerHTML = "Let’s enter the tasks we need to complete for this upcoming week. Just use the input below to create a todo.";
    // The element should now remove itself
    // We should also be changing the class on the to do list inputs so that it appears when previusly hidden
    nameInputField.remove();
    inputFieldTAsk.style.visibility = "visible";
    inputFieldTAsk.style.display = "inline-block";
    submitTaskButton.style.visibility = "visible";
    submitTaskButton.style.display = "contents";
  } else {
    console.log("no")
    return
  }

  // const submitTaskButton = document.querySelector(".submitButton");
  // const InputFieldBox = document.querySelector(".inputField");
  // console.log(InputFieldBox.innerHTML)
  // submitTaskButton.addEventListener("click", addListItem(InputFieldBox.innerHTML))
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
submitTaskButton.addEventListener("click", addListItem);

// next job is to make the input box have functionality 