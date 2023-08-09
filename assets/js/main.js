document.addEventListener("DOMContentLoaded", function () {
  const feedbacksSection = document.getElementById("feedbacks");
  const sortDropdown = document.getElementById("sort");
  const menuToggle = document.getElementById('menu__toggle');
  const mainBar = document.querySelector('.main-bar');
  let feedbackData = [];
  let filteredData = []; 

  fetch("./assets/json/feedback.json")
    .then(response => response.json())
    .then(displayFeedbacks)
    .catch(error => console.error("Error fetching data:", error));

  function displayFeedbacks(data) {
    feedbacksSection.innerHTML = "";

    data.forEach(feedback => {
      const feedbackContainer = document.createElement("section");
      feedbackContainer.className = "add-new-feedback rounded-3 w-100 bg-white p-3 d-flex mt-3 gap-4";
      const feedbackCount = document.createElement("div");
      feedbackCount.className = "feedback-count align-self-center justify-content-between";
      
      const currentUpvotes = localStorage.getItem(feedback.id) || feedback.reiting;
      
      feedbackCount.innerHTML = `
        <button class="counter-btn border-0 rounded-3 p-2 pt-0 pb-0 bg-blue">
          <img src="./assets/icons/chevron-up.svg" alt="counter" /> <br />
          ${currentUpvotes}
        </button>
      `;
      
      feedbackCount.querySelector(".counter-btn").addEventListener("click", () => {
        const newUpvotes = parseInt(currentUpvotes) + 1;
        localStorage.setItem(feedback.id, newUpvotes);
        feedbackCount.innerHTML = `
          <button class="counter-btn border-0 rounded-3 p-2 pt-0 pb-0 bg-blue">
            <img src="./assets/icons/chevron-up.svg" alt="counter" /> <br />
            ${newUpvotes}
          </button>
        `;
      });
      
      const textFeedBox = document.createElement("div");
      textFeedBox.className = "text-feed-box d-flex flex-row gap-4 justify-content-between w-100 align-self-center";
      textFeedBox.innerHTML = `
        <div class="text-feed p-3 w-100">
          <h2 class="h5">${feedback.title}</h2>
          <p>${feedback.text}</p>
          <button class="feature-btn border-0 rounded-3 p-4 pt-1 pb-1 small h2 text-primary">${feedback.category}</button>
        </div>
        <div class="feed-comments d-flex align-self-center p-1 gap-2 m-2 justify-content-center">
          <img src="./assets/icons/comment.svg" alt="comment" />
          <span>${feedback.comment}</span>
        </div>
      `;
      feedbackContainer.appendChild(feedbackCount);
      feedbackContainer.appendChild(textFeedBox);
      feedbacksSection.appendChild(feedbackContainer);
    });
  }

  const categoryButtons = document.querySelectorAll(".boxes .btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.parentElement.className;
      if (selectedCategory === 'all') {
        displayFeedbacks(feedbackData); 
      } else {
        filteredData = feedbackData.filter(feedback => feedback.category.toLowerCase() === selectedCategory);
        displayFeedbacks(filteredData);
      }
    });
  });

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      mainBar.style.display = 'block';
    } else {
      mainBar.style.display = 'none';
    }
  });

  sortDropdown.value = "most-up";
});

document.addEventListener("DOMContentLoaded", function () {
  const feedbacksSection = document.getElementById("feedbacks");
  const sortDropdown = document.getElementById("sort");
  const menuToggle = document.getElementById('menu__toggle');
  const mainBar = document.querySelector('.main-bar');
  let feedbackData = [];
  let filteredData = [];

  const addFeedbackButton = document.querySelector('.add-feedback button');
  if (addFeedbackButton) {
    addFeedbackButton.addEventListener('click', () => {
      window.location.href = './assets/pages/create-feedback.html';
    });
  }
  
});
