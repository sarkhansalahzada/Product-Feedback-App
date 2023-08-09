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
      window.location.href = '/assets/pages/create-feedback.html';
    });
  }
  
});

document.addEventListener("DOMContentLoaded", function () {
  const feedbacksSection = document.querySelector(".add-new-feedback .row");

  // Fetch and display feedbacks from JSON data
  function displayFeedbacks(feedbacks) {
    feedbacksSection.innerHTML = '';

    feedbacks.forEach(feedback => {
      const feedbackHTML = `
        <div class="col-md-4 d-flex flex-column align-items-stretch">
          <div class="feedbacks p-4 bg-white rounded-3 border-info " style="border-top: 5px solid ${feedback.statusColor} !important ;">
            <div class="text-feed-box d-flex flex-row gap-4 justify-content-between w-100 align-self-center">
              <div class="text-feed w-100">
                <h2 class="h6 fw-bold">${feedback.title}</h2>
                <p class="text-secondary">${feedback.text}</p>
                <button class="feature-btn border-0 rounded-3 p-4 pt-1 pb-1 small h2 text-primary">${feedback.category}</button>
              </div>
            </div>
            <div class="feedback d-flex justify-content-between pt-2">
              <button class="counter-btn border-0 rounded-3 p-3 align-items-center justify-content-center pt-0 pb-0 bg-blue">
                <img src="../icons/chevron-up.svg" alt="counter">
                ${feedback.reiting}
              </button>
              <div class="feed-comments d-flex align-self-center p-1 gap-2 m-2 justify-content-center">
                <img src="../icons/comment.svg" alt="comment">
                <span>${feedback.comment}</span>
              </div>
            </div>        
          </div>
        </div>
      `;

      feedbacksSection.insertAdjacentHTML("beforeend", feedbackHTML);
    });
        
  }

  

  // Fetch JSON data
  fetch("../json/feedback.json")
    .then(response => response.json())
    .then(data => {
      displayFeedbacks(data);
    })
    .catch(error => {
      console.error("Error fetching feedback data:", error);
    });
});

