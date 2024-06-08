let topheader_beffor_login = document.getElementById('topheader_beffor_login');
let topheader_after_login =document.getElementById('topheader_after_login');















function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function topheader_login_class_chenger(){
    topheader_beffor_login.classList.add('hidden')
    topheader_after_login.classList.remove('hidden')

  }