// modal


modalButton.addEventListener('click', () => {
  modal.classList.remove('hidden')
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden')
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden')
});
