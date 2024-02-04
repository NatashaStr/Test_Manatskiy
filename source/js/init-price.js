const priceWrappers = document.querySelectorAll('.intro__card-price-wrapper');
const currencyElements = document.querySelectorAll('.intro__card-currency');
const sumElements = document.querySelectorAll('.intro__card-sum');
const periodElements = document.querySelectorAll('.intro__card-period');

const initPrice = () => {
  priceWrappers.forEach((el) => {
    el.style.opacity = '1';
  })
}



const changeCurrency = () => {
  currencyElements.forEach((el) => {
    el.addEventListener('click', () => {
      el.textContent = 'P';
    })
  })
}

export { initPrice, changeCurrency }