const stepTwo = document.querySelector('.step-two')
const radioChecked = document.querySelector('INPUT[type = "radio"]:checked')

function findCheckedRadio() {
  if(radioChecked) {
    radioChecked.parentElement.classList.add('checked')
  }
}

function addBorderStyle(event) {
  const checkedLabel = document.querySelector('.step-two .checked')
  const target = event.target
  if(target.matches('LABEL')) {
    if (checkedLabel) {
      checkedLabel.classList.remove('checked')
    }
    target.classList.add('checked')
  }
}

findCheckedRadio()
stepTwo.addEventListener('click', addBorderStyle)