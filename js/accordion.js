/**
 * Whenever a .details element is opened, close all the other ones.
 */
const details = document.querySelectorAll('.details');

details.forEach((thisDetails) => {
  thisDetails.addEventListener("click", () => {
    
    details.forEach((detail) => {
      if (detail !== thisDetails) {
        detail.removeAttribute("open");
      }
    });
  });
});