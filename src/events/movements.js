/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332"
 */
export function mouseMovements() {
  // Write your code here
  const coordinates = document.getElementById("mouse-coordinates")
  const mouseMovement = document.addEventListener("mousemove", (event) => {
    coordinates.innerText = `x: ${event.clientX}, y: ${event.clientY}`
    console.log(coordinates)
  })

}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 */

const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let colorChange = randomRGB()
const changer = document.getElementById("focus-me");
const labels = document.querySelectorAll('label[for="focus-me"]');
let defaultColor = changer.style.borderColor

export function hoverFocusAndBlur() {
  // Code principal

  const originalTexts = [];
  const colorsUsed = []

  // --- 1 - changer le texte --- First, when you hover it, you have to display a message in his label with 
  //                          --- the text "Yes, you hover me !". and remove the message when the hover is loosed.

  for (let i = 0; i < labels.length; i++) {
    originalTexts.push(labels[i].textContent); //stock touts les textes dans le tableau (originalTexts)
  }

  // --- 2 - changer border color --- Second, when you focus the input, you have to change hist border color to a random one, 
  //                              --- but different from all the previously used and different from the original one.

  changer.addEventListener("focus", () => {
    while (colorChange === defaultColor || colorsUsed.includes(colorChange)) {
      colorChange = randomRGB()
    }
    changer.style.borderColor = colorChange
    colorsUsed.push(colorChange)
  })
  // --- 3 - reset to default --- Third, when you loose focus of the field, you need to reset the border color to the default one.

  changer.addEventListener("blur", () => {
    changer.style.borderColor = defaultColor
  })

  // -================ Principal ================-
  changer.addEventListener("mouseover", () => {
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent = "Yes, you hover me !";
    }
  });

  changer.addEventListener("mouseleave", () => {
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent = originalTexts[i];
    }
  });
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  // Write your code here
  changer.addEventListener('input', () => {
    changer.style.borderColor = randomRGB
    defaultColor = randomRGB()
    labels.forEach((labelColor) => {
      labelColor.style.color = defaultColor
    })
  })
}
