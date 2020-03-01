const displayCard = function(id) {
  element = document.getElementById(id)
  if (element.classList.value == 'card hidden') {
    element.classList.value = 'card'
  } else {
    element.classList.value = 'card hidden'
  }
}