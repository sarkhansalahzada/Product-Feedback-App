document.addEventListener("DOMContentLoaded", function () {
  const sortDropdown = document.getElementById("sort");
  sortDropdown.value = "most-up";
});

const menuToggle = document.getElementById('menu__toggle');
  const mainBar = document.querySelector('.main-bar');

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      mainBar.style.display = 'block';
    } else {
      mainBar.style.display = 'none';
    }
  });

// document.addEventListener("DOMContentLoaded", function () {
//   const sortDropdown = document.getElementById("sort");
//   sortDropdown.value = "most-up";
// });

// const menuToggle = document.getElementById('menu__toggle');
// const mainBar = document.querySelector('.main-bar');

// menuToggle.addEventListener('change', () => {
//   if (menuToggle.checked) {
//     mainBar.style.right = '0'; // Slide in from the right
//   } else {
//     mainBar.style.right = '-250px'; // Slide out to the right
//   }
// });
