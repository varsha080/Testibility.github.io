const signinpopup=document.getElementById('show-pop-up-signin')
const signinpopcontent= document.getElementById('pop-up-signin')
const closesigninpopup= document.getElementById('close-pop-up-signin')
const signupbody= document.getElementById('sign-up-body')
const signupname= document.getElementById('sign-up-name')
const signupemail= document.getElementById('sign-up-email')
const signuppassword= document.getElementById('sign-up-password')
const signupcond = document.getElementById('cond')
signinpopup.addEventListener("click",(e)=>{


  if((signupname.value.length == 0) || (signupemail.value.length == 0) || (signuppassword.value.length == 0) || (signupcond.checked == false)){
    console.log(signupemail.value)
  
  }
  else{
  e.preventDefault();
  signinpopcontent.classList.toggle('active-pop-up');
        signupbody.classList.add('is-blurred');
        closesigninpopup.classList.add('active-pop-up')
        signupname.value=""
        signupemail.value=""
        signuppassword.value=""
        signupcond.checked=false
        signinpopup.disabled="true"
        signinpopup.style.cursor="not-allowed"
        signinpopup.style.backgroundColor="lightgrey";
        signinpopup.style.color="black"
        

  }
})

closesigninpopup.onclick= function(){
  signinpopcontent.classList.remove('active-pop-up');
  signupbody.classList.remove('is-blurred');
}
