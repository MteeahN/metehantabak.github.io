const logo = document.querySelector('#logo')

logo.addEventListener('mouseover', () => {
  logo.style.animationName = "logo"
})

logo.addEventListener('mouseout', () => {
  logo.style.animationName = "mogo"
})