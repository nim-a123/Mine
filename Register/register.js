let password = document.getElementById("password");
let namee = document.getElementById("name");
let email = document.getElementById("email");
let error_shower = document.getElementById("error_shower");
let rejister_shower = document.getElementById('rejister_shower');
let btn = document.getElementById('btn');
let massge_keeper ;
let  rejisterspam = 0;
function submit() {
  btn.disabled = true;
  setTimeout(()=>{
    btn.disabled = false;
},6000);

  
  if (password.value.length < 9) {
    massge_keeper = "password to short";
    navigator.vibrate(1000); 
    rejister_shower.innerHTML = "";
    
toaster()
  }

  if (password.value.length > 30) {
    massge_keeper = "password to big";
    rejister_shower.innerHTML = "";
    navigator.vibrate(1000); 
    
toaster()
  }
  if (password.value.length === "") {
    massge_keeper = "password input empty";
    navigator.vibrate(1000); 
    rejister_shower.innerHTML = "";
    
toaster()
  }


  if (namee.value.length < 4) {
    massge_keeper = "namee to short";
    rejister_shower.innerHTML = "";
    navigator.vibrate(1000); 
    
toaster()
  }

  if (namee.value.length > 30) {
    massge_keeper = "namee to big";
    rejister_shower.innerHTML = "";
    navigator.vibrate(1000); 
    
toaster()
  }
  if (namee.value.length === "") {
    massge_keeper = "namee input empty";
    rejister_shower.innerHTML = "";
    navigator.vibrate(1000); 
    
toaster()
  }
  


  if (password.value === "" || namee.value === "" || email.value === "") {
    massge_keeper= "fill the input !";
    rejister_shower.innerHTML = "";
    navigator.vibrate(1000); 
    
toaster()
  }



  if(password.value.length > 8 && password.value.length < 30 && password.value !== '' && namee.value.length > 3 && namee.value.length < 30 && namee.value !== '' && email.value !== "" ){
    massge_keeper= " You succefully Registerd";
    rejister_shower.innerHTML = "";

   
    if(rejisterspam === 1){
      massge_keeper= " You already registered !";
      toaster_win()
    }else{
      toaster_win()
    }
    rejisterspam = 1;
    
  }
    
}





let divestor = document.getElementById('divestor');


function toaster(){

    let toast = document.createElement('div');
    toast.classList.add('baby');
    toast.innerHTML = '<img src="/toater/error.png" class="svg" >' + massge_keeper;
    divestor.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },6000);
}
function toaster_win(){

  let toast = document.createElement('div');
  toast.classList.add('baby_green');
  toast.innerHTML = '<img src="/toater/correct.svg" class="svg" >' + massge_keeper;
  divestor.appendChild(toast);
  setTimeout(()=>{
      toast.remove();
  },6000);
}


