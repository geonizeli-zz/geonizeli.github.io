const displayCard = function(id) {
  element = document.getElementById(id)
  if (element.classList.value == 'card hidden') {
    element.classList.value = 'card animated zoomIn'
  } else {
    element.classList.value = 'card hidden'
  }
}