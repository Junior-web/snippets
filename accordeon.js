// accordeon

accordeonButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    accordeonButtons.forEach(button => {
      button.classList.remove('active');
      button.nextElementSibling.classList.add('hidden');
    });
    
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toogle('hidden');
  });
});
