/**
 * Image carousel.
 * Counts images in carousel and adds a button for each image.
 * Each button gets a numeric data-attribute which is used to transform
 * the carousel's images (translateX) as well as assigning an --active
 * class to the button corresponding to the currently active (shown) image.
 *
 * Includes swipe functionality which could definitely be improved.
 */

const BUTTON_ACTIVE_CLASS = "img-carousel__button--active";

const carousel = document.getElementById("img-carousel");
const controls = document.getElementById("img-carousel-controls");
const overlay = document.getElementById("img-carousel-overlay");
const imgs = carousel.querySelectorAll("img");

if (imgs) {
  // Keep track of currently active (shown) image.
  let activeImg = 1;

  // Create buttons
  for (let i = 0; i < imgs.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("data-img", i + 1);
    button.setAttribute("aria-label", `Click to see image number ${i + 1}`);
    button.classList.add("img-carousel__button");
    i === 0 && button.classList.add(BUTTON_ACTIVE_CLASS);
    controls.appendChild(button);
  }

  // Clear active class from all buttons, then assign active class to
  // the button which has same data-attr value equal to activeImg.
  const updateActiveClass = () => {
    controls.querySelectorAll("button").forEach((button) => {
      button && button.classList.remove(BUTTON_ACTIVE_CLASS);
    });

    const button = controls.querySelector(`button[data-img="${activeImg}"]`);
    button && button.classList.add(BUTTON_ACTIVE_CLASS);
  };

  // Set carousel items' transform: translateX.
  const setCarouselOffset = () => {
    const transformOffset = activeImg > 1 ? (activeImg - 1) * -100 : 0;
    carousel.style.transform = `translateX(${transformOffset}%)`;
  };

  controls.addEventListener("click", (e) => {
    if (
      e.target.tagName === "BUTTON" &&
      !e.target.classList.contains(BUTTON_ACTIVE_CLASS)
    ) {
      // Get clicked button's data-attr value and update activeImg.
      const dataAttrVal = Number(e.target.dataset.img);
      activeImg = dataAttrVal;

      // Then update active class and set carousel offset.
      updateActiveClass();
      setCarouselOffset();
    }
  });

  // Very basic swipe navigation.
  const swipe = (start, end) => {
    if (start > end && activeImg < imgs.length) {
      activeImg += 1;
    } else if (start < end && activeImg > 1) {
      activeImg -= 1;
    } else {
      return;
    }
    updateActiveClass();
    setCarouselOffset();
  };

  let startX = 0;
  let endX = 0;

  overlay.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  overlay.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    swipe(startX, endX);
  });
}
