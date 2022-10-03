// set data
const products = {
  product_01: {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    quantity: 15,
    image: './public/image/product_01@2x.png'
  },
  product_02: {
    id: 2,
    name: '刷色直筒牛仔褲',
    price: 1299,
    quanty: 8,
    image: './public/image/product_02@2x.png'
  }
}

const stepTwo = document.querySelector('.step-two')
const radioChecked = document.querySelector('INPUT[type = "radio"]:checked')
const formPart = document.querySelector('.form-part')
const forms = formPart.querySelectorAll('.part')
const btnContainer = document.querySelector('.btn-container')
const stepContainer = document.querySelector('.stepper-container')
const steps = stepContainer.querySelectorAll('.step')
const backBtn = btnContainer.querySelector('.btn-back')
const primaryBtn = btnContainer.querySelector('.btn-primary')

let step = 0

// function control pages
function handleBtnControlClicked(e) {
  e.preventDefault()
  const target = e.target
  const nowStep = steps[step]
  if (target.matches('.btn-primary') && target.innerHTML === '下一步 →') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('done')
    nextStep.classList.add('active')
    forms[step].classList.toggle('d-none')
    forms[step + 1].classList.toggle('d-none')
    step += 1
  } else if (target.matches('.btn-back') && target.innerHTML === '← 上一步') {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('done')
    prevStep.classList.add('active')
    forms[step].classList.toggle('d-none')
    forms[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}

function setBtnDisabled() {
  if (step === 0) {
    backBtn.innerHTML = ''
    backBtn.setAttribute('disabled', 'disabled')
  } else {
    backBtn.innerHTML = '&larr; 上一步'
    backBtn.removeAttribute('disabled')
  }
  if (step === 2) {
    primaryBtn.innerHTML = '確認下單'
  } else {
    primaryBtn.innerHTML = '下一步 &rarr;'
  }
}

// function control input-radio's style
function findCheckedRadio() {
  if(radioChecked) {
    radioChecked.parentElement.classList.add('checked')
  }
}

function addBorderStyle(e) {
  const checkedLabel = document.querySelector('.step-two .checked')
  const target = e.target
  if(target.matches('LABEL')) {
    if (checkedLabel) {
      checkedLabel.classList.remove('checked')
    }
    target.classList.add('checked')
  }
}

findCheckedRadio()
stepTwo.addEventListener('click', addBorderStyle)
btnContainer.addEventListener('click', handleBtnControlClicked)