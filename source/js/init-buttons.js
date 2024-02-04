const cardBtns = document.querySelectorAll('.intro__card-btn');

cardBtns.forEach((el) => {
  el.addEventListener('click', () => {
    if (el.dataset.checked !== 'is-active') {
      el.dataset.checked = 'is-active'
      el.textContent = 'Get Started';
    } else {
      delete el.dataset.checked;
      el.textContent = 'Start Free Trial';
    };
  })
})