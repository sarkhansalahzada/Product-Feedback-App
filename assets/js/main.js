document.addEventListener("DOMContentLoaded", function () {
  const feedbacksSection = document.getElementById("feedbacks");
  const sortDropdown = document.getElementById("sort");
  const menuToggle = document.getElementById('menu__toggle');
  const mainBar = document.querySelector('.main-bar');
  let feedbackData = [];
  let filteredData = []; // Declare filteredData variable

  // Fetch data from JSON file
  fetch("./assets/json/feedback.json")
    .then(response => response.json())
    .then(data => {
      feedbackData = data;
      displayFeedbacks(feedbackData);
    })
    .catch(error => console.error("Error fetching data:", error));

  function displayFeedbacks(data) {
    feedbacksSection.innerHTML = "";

    data.forEach(feedback => {
      const feedbackContainer = document.createElement("section");
      feedbackContainer.className = "add-new-feedback rounded-3 w-100 bg-white p-3 d-flex mt-3 gap-4";
      // Create and populate elements for feedback information
      const feedbackCount = document.createElement("div");
      feedbackCount.className = "feedback-count align-self-center justify-content-between";
      
      // Get current upvote count from local storage or use feedback.reiting if not available
      const currentUpvotes = localStorage.getItem(feedback.id) || feedback.reiting;
      
      feedbackCount.innerHTML = `
        <button class="counter-btn border-0 rounded-3 p-2 pt-0 pb-0 bg-blue">
          <img src="./assets/icons/chevron-up.svg" alt="counter" /> <br />
          ${currentUpvotes}
        </button>
      `;
      
      feedbackCount.querySelector(".counter-btn").addEventListener("click", () => {
        // Increment the upvote count in local storage and update the display
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
      // Append elements to feedback container
      feedbackContainer.appendChild(feedbackCount);
      feedbackContainer.appendChild(textFeedBox);
      // Append feedback container to feedbacks section
      feedbacksSection.appendChild(feedbackContainer);
    });
  }

  const categoryButtons = document.querySelectorAll(".boxes .btn");
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.parentElement.className;
      if (selectedCategory === 'all') {
        displayFeedbacks(feedbackData); // Show all feedbacks
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

// Add Feedback Open window loc
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
