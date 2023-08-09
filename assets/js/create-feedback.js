const titleInput = document.querySelector('.value-text input[type="text"]');
const categorySelect = document.getElementById('category');
const detailInput = document.querySelector('.value-text.text-area input[type="text"]');
const addFeedbackBtn = document.querySelector('.add-btn button');

addFeedbackBtn.addEventListener('click', () => {
  const feedback = {
    title: titleInput.value,
    category: categorySelect.value,
    detail: detailInput.value,
  };
  
  let existingFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];
  
  existingFeedback.push(feedback);
  
  localStorage.setItem('feedbackData', JSON.stringify(existingFeedback));
  
  titleInput.value = '';
  categorySelect.value = 'Feature'; 
  detailInput.value = '';
  
  Swal.fire({
    icon: 'success',
    text: 'Feedback added successfully!',
  });
});