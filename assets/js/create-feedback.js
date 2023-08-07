const titleInput = document.querySelector('.value-text input[type="text"]');
const categorySelect = document.getElementById('category');
const detailInput = document.querySelector('.value-text.text-area input[type="text"]');
const addFeedbackBtn = document.querySelector('.add-btn button');

// Add event listener to the "Add Feedback" button
addFeedbackBtn.addEventListener('click', () => {
  const feedback = {
    title: titleInput.value,
    category: categorySelect.value,
    detail: detailInput.value,
  };
  
  // Get existing feedback data from local storage (if any)
  let existingFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];
  
  // Add the new feedback to the existing data
  existingFeedback.push(feedback);
  
  // Store the updated feedback data in local storage
  localStorage.setItem('feedbackData', JSON.stringify(existingFeedback));
  
  // Clear form inputs
  titleInput.value = '';
  categorySelect.value = 'Feature'; // Reset to default value
  detailInput.value = '';
  
  Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'Feedback added successfully!',
  });
});