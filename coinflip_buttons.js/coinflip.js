let balance = localStorage.getItem("balance");
let money_tabdil = balance;
let money_shower = document.getElementById("money_shower");
let money_fakebalance_shower = document.getElementById(
  "money_fakebalance_shower"
);
let sound_hosh = document.getElementById('sound_hosh');
let sound_win = document.getElementById('sound_win');
let sound_loss = document.getElementById('sound_loss');
let sound_noch = document.getElementById('sound_noch');
let input_money_getter = document.getElementById("input_money_getter");
let box_moneygetter = document.getElementById('box_moneygetter');
let box_maingame = document.getElementById('box_maingame');
let box_coin_select = document.getElementById('box_coin_select');
let box_game_usercoinshower = document.getElementById('box_game_usercoinshower');
let if_hidebox = 0;
let coin_selected = 0;
let arr = [1,2]
let sound_Coindrop = document.getElementById('sound_Coindrop')
function mainmoneyshower() {
  money_shower.innerHTML = balance;
  money_fakebalance_shower.innerHTML = parseInt(money_tabdil);
}

function moneyspammer() {
  setInterval(mainmoneyshower, 50);
}
moneyspammer();

function jamblaance() {
  input_money_getter.value = Number(input_money_getter.value) + 1;
  highorminuesinputvaluecheaker();
}
function menhablaance() {
  input_money_getter.value -= 1;
  highorminuesinputvaluecheaker();
}

function zarbblaance() {
  input_money_getter.value *= 2;
  highorminuesinputvaluecheaker();
}

function taghsimbalance() {
  floori = input_money_getter.value /= 2;
  Math.floor(floori);
  input_money_getter.value = Math.floor(floori);
  highorminuesinputvaluecheaker();
}

function allinbalance() {
  if (balance > 1000) {
    input_money_getter.value = 1000;
  }
  if (balance < 1000) {
    input_money_getter.value = balance;
  }
}

function highorminuesinputvaluecheaker() {
  if (input_money_getter.value < 0) {
    input_money_getter.value = 0;
  }
  if (input_money_getter.value > 1000) {
    input_money_getter.value = 50;
  }
}

function valueputtereveryriesetpage() {
  x = balance / 2;
  xfix = parseInt(x);
  if (xfix > 10) {
    input_money_getter.value = 50;
  }
  if (xfix < 1000) {
    input_money_getter.value = 50;
  }
}
valueputtereveryriesetpage();






function start(){
  sound_noch.play()
    x_gozar = input_money_getter.value;
  if(x_gozar > 1000){
    x_gozar = 0;
    moneygetterhaha.value = 50;
    alert("u cannot put more than 1000$ for each game");
  }
    if (x_gozar > parseInt(balance)) {
      x_gozar = 0;
      valueputtereveryriesetpage()
      alert("error ! not enofgh balance in ur account !");
    }
  
    if (x_gozar >= 10) {
     if_hidebox = 1;
     hide_moneygetter_box()
    }
  }


function hide_moneygetter_box(){
  if(if_hidebox === 1){
    startfees()
    
    box_moneygetter.classList.add('hidden');
    box_coin_select.classList.remove('hidden');
  
    
  }


}


function  win_side(){

  if(arr[random] === arr[0]){
    coin_head_winshower()
    
  }
  else if (arr[random] === arr[1]){
    coin_tail_winshower()

  }

}


function win_cal(){

if(coin_selected === arr[random]){
  localStorage.removeItem("balance", balance);
  sound_win.play()
  money_tabdil *= 2;
  balance +=money_tabdil
  localStorage.setItem("balance", balance);
}else{
  money_tabdil = 0;
  sound_loss.play()
}



}

function startfees() {
  balance -= input_money_getter.value;
  money_tabdil = input_money_getter.value;
  localStorage.removeItem("balance", balance);
  localStorage.removeItem("money_tabdil", money_tabdil);
  localStorage.setItem("balance", balance);
  localStorage.setItem("money_tabdil", money_tabdil);
  

}

function coin_head(){
   random = Math.floor(Math.random() * (arr.length))
   console.log(arr[random])
coin_selected = 1;
box_game_usercoinshower.innerHTML = '<img class="box_main_coinpic flipercoin" src="photo-coinflip/coin_head.png" >'
box_coin_select.classList.add('hidden');
box_maingame.classList.remove('hidden');
sound_Coindrop.play()
setTimeout(win_side,3800)
setTimeout(win_cal,4000)
setTimeout( relode,6000)
}

function coin_tail(){
  random = Math.floor(Math.random() * (arr.length))
  console.log(arr[random])
  box_game_usercoinshower.innerHTML = '<img class="box_main_coinpic flipercoin" src="photo-coinflip/coin_tail.png" >"'
  coin_selected = 2;
  box_coin_select.classList.add('hidden');
  box_maingame.classList.remove('hidden');

  setTimeout(win_side,3800)
  setTimeout(win_cal,4000)
  setTimeout( relode,6000)
}


function coin_head_winshower(){

box_game_usercoinshower.innerHTML = '<img class="box_main_coinpic coinwinshower" src="photo-coinflip/coin_head.png" >'

}
function coin_tail_winshower(){

  box_game_usercoinshower.innerHTML = '<img class="box_main_coinpic coinwinshower" src="photo-coinflip/coin_tail.png" >'
  
  }


  function moneygive() {
    balance = money_tabdil;
    localStorage.removeItem("balance", balance);
    localStorage.removeItem("money_tabdil", money_tabdil);
    localStorage.setItem("balance", 100);
    localStorage.setItem("money_tabdil", 100);
    location.reload();
    localStorage.setItem("welcuner",2);
  }


  function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

checkSession();

function checkSession(){
   var c = getCookie("visited");
   if (c === "yes") {
  
   } else {
    moneygive()
   }
   setCookie("visited", "yes", 365); 
}


function relode(){
  location.reload()
}

function keydowninputcheaker(){

  if(input_money_getter.value >= 1000){
  
    input_money_getter.value = parseInt(1000)
  
  }
  if(input_money_getter.value < 1){
  
    input_money_getter.value = parseInt(0)
  
  }
  
  
  }


