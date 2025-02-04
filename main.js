const mail = document.querySelector('#mail')
const errorMsg = document.querySelector('.error-msg')
const sectionOne = document.querySelector('.section-one')
const sectionTwo = document.querySelector('.section-two')
const sendBtn = document.querySelector('.send-btn')
const closeBtn = document.querySelector('.close-btn')

const isValidEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	return re.test(String(email).toLowerCase())
}

const checkInput = () => {
    const emailValue = mail.value.trim()

	if (isValidEmail(emailValue)) {
		sectionOne.style.opacity = '0'
		sectionTwo.classList.add('active')
        errorMsg.textContent = ''
	} else {
        errorMsg.textContent = 'Valid email requaired!'
        mail.classList.add('error-input')
	}
}

const clearInput = () => {
    mail.value = ''
    mail.classList.remove('error-input')
	sectionOne.style.opacity = '1'
	sectionTwo.classList.remove('active')
}

sendBtn.addEventListener('click', checkInput)
closeBtn.addEventListener('click', clearInput)
