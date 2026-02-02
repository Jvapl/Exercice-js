/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  // Write your code here
  const textInput = document.getElementById("write-some-text")

  textInput.addEventListener("keydown", (event) => {
    const content = textInput
    if (event.key === "Enter" || textInput === "string" || textInput !== ""){
      alert(textInput.value)
    }
  })
}
/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
//  */  
export function addElementsInListOnEnterKey() {
//   // Write your code here
  const inputList = document.getElementById("list-input")
  const nameList = document.getElementById("list")

  const addElement = () => {
    const text = inputList.value.trim();

    if (text !== "") {
      const newLi = document.createElement("li")
      newLi.textContent = text;
      nameList.appendChild(newLi)
      inputList.value = ""
    }
  }
  inputList.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addElement()
    }
  });
  inputList.addEventListener("blur", () => {
    addElement();
  })
}


/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  // Write your code here
  const inputList = document.getElementById("list-input")
  const nameList = document.getElementById("list")

  const addElement = () => {
    const text = inputList.value.trim();

    if (text !== "") {
      const newLi = document.createElement("li")
      newLi.textContent = text;
      nameList.appendChild(newLi)
      inputList.value = ""
    }
  }
  inputList.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addElement()
    }
  });
  inputList.addEventListener("blur", () => {
    addElement();
  })
  nameList.addEventListener("click", (event ) => {
    if (event.target.tagName === "LI"){
      event.target.remove()
    }
  })
}