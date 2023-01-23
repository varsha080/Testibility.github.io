
        
        
        
        
        
        const showpop= document.getElementById('show-pop-up')
        const closepop= document.getElementById('close-pop-up')
        const signinbody= document.getElementById('sign-in-body')
        const popupcontent=document.getElementById('pop-up-content')
        var signinemail=document.querySelector("#sign-in-email")
        var signinpass=document.querySelector("#sign-in-pass")


        

        showpop.onclick = function(e) { 
        // console.log(signinpass)
          
        if((signinemail.value.length == 0) || (signinpass.value.length == 0)){
          console.log(signinemail.value)
        
        }
        else{
          e.preventDefault();
        
        
        popupcontent.classList.toggle('active-pop-up');
        signinbody.classList.add('is-blurred');
        closepop.classList.add('active-pop-up')
        signinemail.value="";
        signinpass.value="";
        showpop.disabled="true"
        showpop.style.cursor="not-allowed"
        showpop.style.backgroundColor="lightgrey";
        showpop.style.color="black"
        }
      }
      // }

        closepop.onclick= function(){
          popupcontent.classList.remove('active-pop-up');
          signinbody.classList.remove('is-blurred');
        }



// const signinpopup=document.getElementById('show-pop-up-signin')
// signinpopup.addEventListener("click",(e)=>{
//   e.preventDefault();
//   alert("heyy")
//   console.log(20)
// })

