const checkbox = document.getElementById('hamburger-checkbox');
const menuLists = document.querySelectorAll('.main-menu__list');

const LARGEST_TABLET_WIDTH = 1023 // px

const showLists = () => {
  menuLists.forEach(list => {
    list.classList.add('visible');
  });
}

const hideLists = () => {
  menuLists.forEach(list => {
    list.classList.remove('visible');
  });
}

/**
 * Toggle a 'visible' class for main-menu ul elements depending on
 * checkbox's checked state.
 */
window.onload = () => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      showLists();
    } else {
      hideLists();
    }
  });

  /**
   * Hide lists and uncheck checkbox if resizing up to desktop because it feels
   * weird/wrong if user then resizes back down to mobile/tablet and the menu
   * appears already opened.
   */
  window.addEventListener('resize', () => {
    if (window.innerWidth > LARGEST_TABLET_WIDTH) {
      checkbox.checked = false;
      hideLists();
    }
  })
}