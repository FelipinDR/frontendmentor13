const form= document.querySelector('.container01 form')
const email= document.querySelector('.container01 form input[type=email]')
const errorImage= document.getElementById('hiddenImg')
const error=document.getElementById('error')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let emailValue= email.value
    if(validateEmail(emailValue)){
        error.innerHTML='Thank you for your interest'
        error.classList.remove('hidden')
    }else{
        error.classList.remove('hidden')
        errorImage.classList.remove('hidden')
    }
})
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };