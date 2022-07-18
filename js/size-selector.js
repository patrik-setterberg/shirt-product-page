/**
 * Sets an --active class to clicked button in the size selector.
 */
const SIZE_SELECTOR_BUTTON_ACTIVE_CLASS = "size-selector__button--active";

const sizeSelector = document.getElementById("size-selector");
const buttons = sizeSelector.querySelectorAll(".size-selector__button");

const clickHandler = (clickedButton) => {
  if (buttons) {
    buttons.forEach((button) => {
      button.classList.remove(SIZE_SELECTOR_BUTTON_ACTIVE_CLASS);
    });
  }

  clickedButton.classList.add(SIZE_SELECTOR_BUTTON_ACTIVE_CLASS);
};

sizeSelector.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    clickHandler(e.target);
  }
});
