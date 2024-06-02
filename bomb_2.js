//////////////////////////////////////
let game_button_1_bomb2 = document.getElementById("game_button_1_bomb2");
let game_button_2_bomb2 = document.getElementById("game_button_2_bomb2");
let game_button_3_bomb2 = document.getElementById("game_button_3_bomb2");
let game_button_4_bomb2 = document.getElementById("game_button_4_bomb2");
let game_button_5_bomb2 = document.getElementById("game_button_5_bomb2");
let game_button_6_bomb2 = document.getElementById("game_button_6_bomb2");
let game_button_7_bomb2 = document.getElementById("game_button_7_bomb2");
let game_button_8_bomb2 = document.getElementById("game_button_8_bomb2");
let game_button_9_bomb2 = document.getElementById("game_button_9_bomb2");
let game_button_10_bomb2 = document.getElementById("game_button_10_bomb2");
let game_button_11_bomb2 = document.getElementById("game_button_11_bomb2");
let game_button_12bomb2 = document.getElementById("game_button_12_bomb2");
let game_button_13_bomb2 = document.getElementById("game_button_13_bomb2");
let game_button_14_bomb2 = document.getElementById("game_button_14_bomb2");
let game_button_15_bomb2 = document.getElementById("game_button_15_bomb2");
let game_button_16_bomb2 = document.getElementById("game_button_16_bomb2");
let game_button_17_bomb2 = document.getElementById("game_button_17_bomb2");
let game_button_18_bomb2 = document.getElementById("game_button_18_bomb2");
let game_button_19_bomb2 = document.getElementById("game_button_19_bomb2");
let game_button_20_bomb2 = document.getElementById("game_button_20_bomb2");
let game_button_21_bomb2 = document.getElementById("game_button_21_bomb2");
let game_button_22_bomb2 = document.getElementById("game_button_22_bomb2");
let game_button_23_bomb2 = document.getElementById("game_button_23_bomb2");
let game_button_24_bomb2 = document.getElementById("game_button_24_bomb2");
let game_button_25_bomb2 = document.getElementById("game_button_25_bomb2");

let akharbtn = document.getElementById("akharbtn");
let amount_offon = document.getElementById("amount_offon");
let moneygetterhaha = document.getElementById("moneygetterhaha");
let song_error_balance = document.getElementById("song_error_balance");
let level_Shower = document.getElementById("level_Shower");
let song_cashout = document.getElementById("song_cashout");
let money_fakebalance_shower = document.getElementById(
  "money_fakebalance_shower"
);
let start_button = document.getElementById("start_button");
let start_qq = 0;
let balance = localStorage.getItem("balance");
let money_tabdil = balance;
let money_shower = document.getElementById("money_shower");
const cat = localStorage.getItem("myCat");
let alret_show_gg = document.getElementById("alret_show_gg");
let takebtn = document.getElementById("takebtn");
let alret_show_win = document.getElementById("alret_show_win");
let alret_show_error = document.getElementById("alret_show_error");
let alret_show_loss = document.getElementById("alret_show_loss");
let song_click = document.getElementById("song_click");
let song_bomb = document.getElementById("song_bomb");
let loss = -99;
let takeout_ajzae = 0;
let x_gozar = 0;
let hasel = x_gozar / 7;
let addermoney = Math.floor(hasel);
let gemminesshower = document.getElementById("gemminesshower");
let gemminess = 23;
let amonut_kk = 0;
let multyplyer_witchgetter = 0;
let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const multyplyerodd = [
  1.05, 1.15, 1.26, 1.31, 1.47, 1.53, 1.79, 1.96, 2.19, 2.5, 2.9, 3.2, 4.0, 5.0,
  5.8, 6.4, 8.25, 9.8, 11.2, 14.25, 18.95, 24.6, 29.74,
];
let show_all_button;
////////////////////////////////////////////////////////////////////////////

let shuffled = arr.reduce(
  ([a, b]) => (b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]),
  [[...arr], []]
)[1];

////////////////////////////////////////////////////////////////////////////

function hahasubmit() {
  amonut_kk = 1;
  x_gozar = moneygetterhaha.value;

  if (x_gozar > parseInt(balance)) {
    x_gozar = 0;
    alert("error ! not enofgh balance in ur account !");
  }

  if (x_gozar >= 10) {
    amount_offon.classList.add("hidden");
    start_button.classList.remove("hidden");
  }
}

function start_game() {
  if (balance > 0) {
    start_qq = 1;
    start_button.classList.add("hidden");
    akharbtn.classList.add("hidden");

    idk();
  } else if (balance < 1) {
    start_qq = 2;

    idk();
  }
}
let xxx = 0;
function ttlooptt() {
  console.log(xxx);
  addermoney = multyplyerodd[xxx];
}
function okloopttok() {
  setInterval(ttlooptt, 50);
}
okloopttok();

function moneygive() {
  balance = money_tabdil;
  localStorage.removeItem("balance", balance);
  localStorage.removeItem("money_tabdil", money_tabdil);
  localStorage.setItem("balance", 100);
  localStorage.setItem("money_tabdil", 100);
  location.reload();
}

function idk() {
  if (start_qq === 0) {
    disabeler();
    takebtn.disabled = true;
  } else if (start_qq === 1) {
    money_tabdil = x_gozar;
    balance -= moneygetterhaha.value;
    Enabeler();
    takebtn.disabled = false;
  } else if (start_qq === 2) {
    song_error_balance.play();
    alert("no money   !!! widrew more money so u can play !!!");
  }
}

idk();

function reoldepage() {
  location.reload();
}

function mainmoneyshower() {
  money_shower.innerHTML = balance;
}

function moneyspammer() {
  setInterval(mainmoneyshower, 50);
}
moneyspammer();
bugfixer = 0;
function takeout() {
  if (takeout_ajzae > 4 && takeout_ajzae < 30 && bugfixer === 0) {
    bugfixer = 1;
    alret_show_win.classList.remove("hidden");
    song_cashout.play();
    disabeler();
    showingallnomoney();
    kam();
    setTimeout(reoldepage, 5000);
  } else if (takeout_ajzae < 5) {
    alret_show_error.classList.remove("hidden");
    disabeler();
    setTimeout(fixer, 3000);
  } else if (takeout_ajzae > 30) {
    alret_show_loss.classList.remove("hidden");
    disabeler();
    bakht();
    setTimeout(fixer, 3000);
    setTimeout(reoldepage, 5000);
  }
}

function kam() {
  balance += Math.floor(money_tabdil);
  localStorage.removeItem("balance", balance);
  localStorage.removeItem("money_tabdil", money_tabdil);
  localStorage.setItem("balance", balance);
  localStorage.setItem("money_tabdil", money_tabdil);
}
function bakht() {
  money_tabdil = 0;
  localStorage.removeItem("balance", balance);
  localStorage.removeItem("money_tabdil", money_tabdil);
  localStorage.setItem("balance", balance);
  localStorage.setItem("money_tabdil", money_tabdil);
}

//////////////////////////////////////

function game_1_bomb2() {
  if (shuffled[0] !== 2 && shuffled[0] !== 7) {
    xxx += 1;

    money_tabdil = moneygetterhaha.value * addermoney;
    money_tabdil.innerHTML;
    game_button_1_bomb2.disabled = true;
    song_click.play();
    gemminess -= 1;
    game_button_1_bomb2.classList.add("mainchildnew");
    game_button_1_bomb2.classList.remove("mainchild");
    game_button_1_bomb2.classList.add("backgroundchenger");

    takeout_ajzae += 1;
    game_button_1_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[0] === 2 || shuffled[0] === 7) {
    game_button_1_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_2_bomb2() {
  if (shuffled[1] !== 2 && shuffled[1] !== 7) {
    xxx += 1;
    gemminess -= 1;
    song_click.play();
    game_button_2_bomb2.classList.add("mainchildnew");
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_2_bomb2.classList.remove("mainchild");
    game_button_2_bomb2.classList.add("backgroundchenger");
    takeout_ajzae += 1;
    game_button_2_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_2_bomb2.disabled = true;
  } else if (shuffled[1] === 2 || shuffled[1] === 7) {
    game_button_2_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_3_bomb2() {
  if (shuffled[2] !== 2 && shuffled[2] !== 7) {
    xxx += 1;
    gemminess -= 1;
    takeout_ajzae += 1;
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_3_bomb2.disabled = true;
    game_button_3_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_3_bomb2.classList.add("mainchildnew");
    game_button_3_bomb2.classList.remove("mainchild");
    game_button_3_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[2] === 2 || shuffled[2] === 7) {
    game_button_3_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_4_bomb2() {
  if (shuffled[3] !== 2 && shuffled[3] !== 7) {
    gemminess -= 1;
    song_click.play();
    xxx += 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_4_bomb2.classList.add("mainchildnew");
    game_button_4_bomb2.classList.remove("mainchild");
    game_button_4_bomb2.classList.add("backgroundchenger");
    game_button_4_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_4_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[3] === 2 || shuffled[3] === 7) {
    game_button_4_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_5_bomb2() {
  if (shuffled[4] !== 2 && shuffled[4] !== 7) {
    xxx += 1;
    gemminess -= 1;
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_5_bomb2.classList.add("mainchildnew");
    game_button_5_bomb2.classList.remove("mainchild");
    game_button_5_bomb2.classList.add("backgroundchenger");
    game_button_5_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_5_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[4] === 2 || shuffled[4] === 7) {
    game_button_5_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_6_bomb2() {
  if (shuffled[5] !== 2 && shuffled[5] !== 7) {
    song_click.play();
    xxx += 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    game_button_6_bomb2.classList.add("mainchildnew");
    game_button_6_bomb2.classList.remove("mainchild");
    game_button_6_bomb2.classList.add("backgroundchenger");
    game_button_6_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_6_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[5] === 2 || shuffled[5] === 7) {
    takeout_ajzae += 100;
    game_button_6_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_7_bomb2() {
  if (shuffled[6] !== 2 && shuffled[6] !== 7) {
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    xxx += 1;
    game_button_7_bomb2.classList.add("mainchildnew");
    game_button_7_bomb2.classList.remove("mainchild");
    game_button_7_bomb2.classList.add("backgroundchenger");
    gemminess -= 1;
    game_button_7_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_7_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[6] === 2 || shuffled[6] === 7) {
    takeout_ajzae += 100;
    game_button_7_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_8_bomb2() {
  if (shuffled[7] !== 2 && shuffled[7] !== 7) {
    gemminess -= 1;
    song_click.play();
    xxx += 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_8_bomb2.classList.add("mainchildnew");
    game_button_8_bomb2.classList.remove("mainchild");
    game_button_8_bomb2.classList.add("backgroundchenger");
    game_button_8_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_8_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[7] === 2 || shuffled[7] === 7) {
    game_button_8_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_9_bomb2() {
  if (shuffled[8] !== 2 && shuffled[8] !== 7) {
    money_tabdil = moneygetterhaha.value * addermoney;
    song_click.play();
    gemminess -= 1;
    xxx += 1;
    game_button_9_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_9_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_9_bomb2.classList.add("mainchildnew");
    game_button_9_bomb2.classList.remove("mainchild");
    game_button_9_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[8] === 2 || shuffled[8] === 7) {
    game_button_9_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_10_bomb2() {
  if (shuffled[9] !== 2 && shuffled[9] !== 7) {
    xxx += 1;
    song_click.play();
    game_button_10_bomb2.disabled = true;
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    takeout_ajzae += 1;
    game_button_10_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_10_bomb2.classList.add("mainchildnew");
    game_button_10_bomb2.classList.remove("mainchild");
    game_button_10_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[9] === 2 || shuffled[9] === 7) {
    game_button_10_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_11_bomb2() {
  if (shuffled[10] !== 2 && shuffled[10] !== 7) {
    xxx += 1;
    song_click.play();
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_11_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_11_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_11_bomb2.classList.add("mainchildnew");
    game_button_11_bomb2.classList.remove("mainchild");
    game_button_11_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[10] === 2 || shuffled[10] === 7) {
    game_button_11_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_12_bomb2() {
  if (shuffled[11] !== 2 && shuffled[11] !== 7) {
    song_click.play();
    xxx += 1;
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_12_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_12_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_12_bomb2.classList.add("mainchildnew");
    game_button_12_bomb2.classList.remove("mainchild");
    game_button_12_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[11] === 2 || shuffled[11] === 7) {
    game_button_12_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_13_bomb2() {
  if (shuffled[12] !== 2 && shuffled[12] !== 7) {
    song_click.play();
    game_button_13_bomb2.disabled = true;
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    takeout_ajzae += 1;
    xxx += 1;
    game_button_13_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_13_bomb2.classList.add("mainchildnew");
    game_button_13_bomb2.classList.remove("mainchild");
    game_button_13_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[12] === 2 || shuffled[12] === 7) {
    game_button_13_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    takeout_ajzae += 100;
    song_bomb.play();
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_14_bomb2() {
  if (shuffled[13] !== 2 && shuffled[13] !== 7) {
    xxx += 1;
    song_click.play();
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_14_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_14_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_14_bomb2.classList.add("mainchildnew");
    game_button_14_bomb2.classList.remove("mainchild");
    game_button_14_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[13] === 2 || shuffled[13] === 7) {
    game_button_14_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_15_bomb2() {
  if (shuffled[14] !== 2 && shuffled[14] !== 7) {
    money_tabdil = moneygetterhaha.value * addermoney;
    xxx += 1;
    gemminess -= 1;
    song_click.play();
    game_button_15_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_15_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_15_bomb2.classList.add("mainchildnew");
    game_button_15_bomb2.classList.remove("mainchild");
    game_button_15_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[14] === 2 || shuffled[14] === 7) {
    game_button_15_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_16_bomb2() {
  if (shuffled[15] !== 2 && shuffled[15] !== 7) {
    xxx += 1;
    song_click.play();
    game_button_16_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    takeout_ajzae += 1;
    game_button_16_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_16_bomb2.classList.add("mainchildnew");
    game_button_16_bomb2.classList.remove("mainchild");
    game_button_16_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[15] === 2 || shuffled[15] === 7) {
    game_button_16_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_17_bomb2() {
  if (shuffled[16] !== 2 && shuffled[16] !== 7) {
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_17_bomb2.disabled = true;
    gemminess -= 1;
    xxx += 1;
    takeout_ajzae += 1;
    game_button_17_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_17_bomb2.classList.add("mainchildnew");
    game_button_17_bomb2.classList.remove("mainchild");
    game_button_17_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[16] === 2 || shuffled[16] === 7) {
    game_button_17_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_18_bomb2() {
  if (shuffled[17] !== 2 && shuffled[17] !== 7) {
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    xxx += 1;
    game_button_18_bomb2.disabled = true;
    takeout_ajzae += 1;
    game_button_18_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_18_bomb2.classList.add("mainchildnew");
    game_button_18_bomb2.classList.remove("mainchild");
    game_button_18_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[17] === 2 || shuffled[17] === 7) {
    game_button_18_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_19_bomb2() {
  if (shuffled[18] !== 2 && shuffled[18] !== 7) {
    song_click.play();
    game_button_19_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;
    xxx += 1;
    takeout_ajzae += 1;
    gemminess -= 1;
    game_button_19_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_19_bomb2.classList.add("mainchildnew");
    game_button_19_bomb2.classList.remove("mainchild");
    game_button_19_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[18] === 2 || shuffled[18] === 7) {
    game_button_19_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_20_bomb2() {
  if (shuffled[19] !== 2 && shuffled[19] !== 7) {
    song_click.play();
    xxx += 1;
    game_button_20_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    takeout_ajzae += 1;
    game_button_20_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_20_bomb2.classList.add("mainchildnew");
    game_button_20_bomb2.classList.remove("mainchild");
    game_button_20_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[19] === 2 || shuffled[19] === 7) {
    game_button_20_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_21_bomb2() {
  if (shuffled[20] !== 2 && shuffled[20] !== 7) {
    song_click.play();
    gemminess -= 1;
    xxx += 1;
    game_button_21_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;

    takeout_ajzae += 1;
    game_button_21_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_21_bomb2.classList.add("mainchildnew");
    game_button_21_bomb2.classList.remove("mainchild");
    game_button_21_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[20] === 2 || shuffled[20] === 7) {
    game_button_21_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_22_bomb2() {
  if (shuffled[21] !== 2 && shuffled[21] !== 7) {
    xxx += 1;
    song_click.play();
    game_button_22_bomb2.disabled = true;
    takeout_ajzae += 1;
    gemminess -= 1;
    money_tabdil = moneygetterhaha.value * addermoney;
    game_button_22_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_22_bomb2.classList.add("mainchildnew");
    game_button_22_bomb2.classList.remove("mainchild");
    game_button_22_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[21] === 2 || shuffled[21] === 7) {
    game_button_22_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_23_bomb2() {
  if (shuffled[22] !== 2 && shuffled[22] !== 7) {
    xxx += 1;
    song_click.play();
    game_button_23_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;
    takeout_ajzae += 1;
    gemminess -= 1;
    game_button_23_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_23_bomb2.classList.add("mainchildnew");
    game_button_23_bomb2.classList.remove("mainchild");
    game_button_23_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[22] === 2 || shuffled[22] === 7) {
    game_button_23_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_24_bomb2() {
  if (shuffled[23] !== 2 && shuffled[23] !== 7) {
    song_click.play();
    game_button_24_bomb2.disabled = true;
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    takeout_ajzae += 1;
    xxx += 1;
    game_button_24_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_24_bomb2.classList.add("mainchildnew");
    game_button_24_bomb2.classList.remove("mainchild");
    game_button_24_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[23] === 2 || shuffled[23] === 7) {
    game_button_24_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function game_25_bomb2() {
  if (shuffled[24] !== 2 && shuffled[24] !== 7) {
    song_click.play();
    money_tabdil = moneygetterhaha.value * addermoney;
    gemminess -= 1;
    game_button_25_bomb2.disabled = true;
    takeout_ajzae += 1;
    xxx += 1;
    game_button_25_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
    game_button_25_bomb2.classList.add("mainchildnew");
    game_button_25_bomb2.classList.remove("mainchild");
    game_button_25_bomb2.classList.add("backgroundchenger");
  } else if (shuffled[24] === 2 || shuffled[24] === 7) {
    game_button_25_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
    song_bomb.play();
    takeout_ajzae += 100;
    money_tabdil = balance;
    bakht();
    setTimeout(reoldepage, 5000);
  }
}

//////////////////////////////////////
function shower_time_200() {
  setTimeout(shower, 200);
}
//////////////////////////////////////
function shower() {
  game_1_bomb2();
  game_2_bomb2();
  game_3_bomb2();
  game_4_bomb2();
  game_5_bomb2();
  game_6_bomb2();
  game_7_bomb2();
  game_8_bomb2();
  game_9_bomb2();
  game_10_bomb2();
  game_11_bomb2();
  game_12_bomb2();
  game_13_bomb2();
  game_14_bomb2();
  game_15_bomb2();
  game_16_bomb2();
  game_17_bomb2();
  game_18_bomb2();
  game_19_bomb2();
  game_20_bomb2();
  game_21_bomb2();
  game_22_bomb2();
  game_23_bomb2();
  game_24_bomb2();
  game_25_bomb2();
}
//////////////////////////////////////
function disabeler() {
  game_button_1_bomb2.disabled = true;
  game_button_2_bomb2.disabled = true;
  game_button_3_bomb2.disabled = true;
  game_button_4_bomb2.disabled = true;
  game_button_5_bomb2.disabled = true;
  game_button_6_bomb2.disabled = true;
  game_button_7_bomb2.disabled = true;
  game_button_8_bomb2.disabled = true;
  game_button_9_bomb2.disabled = true;
  game_button_10_bomb2.disabled = true;
  game_button_11_bomb2.disabled = true;
  game_button_12_bomb2.disabled = true;
  game_button_13_bomb2.disabled = true;
  game_button_14_bomb2.disabled = true;
  game_button_15_bomb2.disabled = true;
  game_button_16_bomb2.disabled = true;
  game_button_17_bomb2.disabled = true;
  game_button_18_bomb2.disabled = true;
  game_button_19_bomb2.disabled = true;
  game_button_20_bomb2.disabled = true;
  game_button_21_bomb2.disabled = true;
  game_button_22_bomb2.disabled = true;
  game_button_23_bomb2.disabled = true;
  game_button_24_bomb2.disabled = true;
  game_button_25_bomb2.disabled = true;
}
//////////////////////////////////////
function Enabeler() {
  game_button_1_bomb2.disabled = false;
  game_button_2_bomb2.disabled = false;
  game_button_3_bomb2.disabled = false;
  game_button_4_bomb2.disabled = false;
  game_button_5_bomb2.disabled = false;

  game_button_6_bomb2.disabled = false;
  game_button_7_bomb2.disabled = false;
  game_button_8_bomb2.disabled = false;
  game_button_9_bomb2.disabled = false;
  game_button_10_bomb2.disabled = false;

  game_button_11_bomb2.disabled = false;
  game_button_12_bomb2.disabled = false;
  game_button_13_bomb2.disabled = false;
  game_button_14_bomb2.disabled = false;
  game_button_15_bomb2.disabled = false;

  game_button_16_bomb2.disabled = false;
  game_button_17_bomb2.disabled = false;
  game_button_18_bomb2.disabled = false;
  game_button_19_bomb2.disabled = false;
  game_button_20_bomb2.disabled = false;

  game_button_21_bomb2.disabled = false;
  game_button_22_bomb2.disabled = false;
  game_button_23_bomb2.disabled = false;
  game_button_24_bomb2.disabled = false;
  game_button_25_bomb2.disabled = false;
}
//////////////////////////////////////
function fixer() {
  Enabeler();
  alret_show_error.classList.add("hidden");
}
//////////////////////////////////////
allwinalltime();
function allwinalltime() {
  setInterval(allwin, 50);
}
//////////////////////////////////////
function allwin() {
  gemminesshower.innerHTML = gemminess;
  money_fakebalance_shower.innerHTML = parseInt(money_tabdil);
  if (takeout_ajzae === 23) {
    kam();
    alret_show_gg.classList.remove("hidden");
    takebtn.disabled = true;
    shower_time_200();
  }
}
//////////////////////////////////////

//////////////////////////////////////

function showingallnomoney() {
  notmoneygettingshower_1();
  notmoneygettingshower_2();
  notmoneygettingshower_3();
  notmoneygettingshower_4();
  notmoneygettingshower_5();
  notmoneygettingshower_6();
  notmoneygettingshower_7();
  notmoneygettingshower_8();
  notmoneygettingshower_9();
  notmoneygettingshower_10();
  notmoneygettingshower_11();
  notmoneygettingshower_12();
  notmoneygettingshower_13();
  notmoneygettingshower_14();
  notmoneygettingshower_15();
  notmoneygettingshower_16();
  notmoneygettingshower_17();
  notmoneygettingshower_18();
  notmoneygettingshower_19();
  notmoneygettingshower_20();
  notmoneygettingshower_21();
  notmoneygettingshower_22();
  notmoneygettingshower_23();
  notmoneygettingshower_24();
  notmoneygettingshower_25();
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function notmoneygettingshower_1() {
  if (shuffled[0] !== 2 && shuffled[0] !== 7) {
    game_button_1_bomb2.disabled = true;
    game_button_1_bomb2.classList.add("mainchildnew");
    game_button_1_bomb2.classList.remove("mainchild");
    game_button_1_bomb2.classList.add("backgroundchenger");

    game_button_1_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[0] === 2 || shuffled[0] === 7) {
    game_button_1_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_2() {
  if (shuffled[1] !== 2 && shuffled[1] !== 7) {
    game_button_2_bomb2.disabled = true;
    game_button_2_bomb2.classList.add("mainchildnew");
    game_button_2_bomb2.classList.remove("mainchild");
    game_button_2_bomb2.classList.add("backgroundchenger");

    game_button_2_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[1] === 2 || shuffled[1] === 7) {
    game_button_2_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_3() {
  if (shuffled[2] !== 2 && shuffled[2] !== 7) {
    game_button_3_bomb2.disabled = true;
    game_button_3_bomb2.classList.add("mainchildnew");
    game_button_3_bomb2.classList.remove("mainchild");
    game_button_3_bomb2.classList.add("backgroundchenger");

    game_button_3_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[2] === 2 || shuffled[2] === 7) {
    game_button_3_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_4() {
  if (shuffled[3] !== 2 && shuffled[3] !== 7) {
    game_button_4_bomb2.disabled = true;
    game_button_4_bomb2.classList.add("mainchildnew");
    game_button_4_bomb2.classList.remove("mainchild");
    game_button_4_bomb2.classList.add("backgroundchenger");

    game_button_4_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[3] === 2 || shuffled[3] === 7) {
    game_button_4_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_5() {
  if (shuffled[4] !== 2 && shuffled[4] !== 7) {
    game_button_5_bomb2.disabled = true;
    game_button_5_bomb2.classList.add("mainchildnew");
    game_button_5_bomb2.classList.remove("mainchild");
    game_button_5_bomb2.classList.add("backgroundchenger");

    game_button_5_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[4] === 2 || shuffled[4] === 7) {
    game_button_5_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_6() {
  if (shuffled[5] !== 2 && shuffled[5] !== 7) {
    game_button_6_bomb2.disabled = true;
    game_button_6_bomb2.classList.add("mainchildnew");
    game_button_6_bomb2.classList.remove("mainchild");
    game_button_6_bomb2.classList.add("backgroundchenger");

    game_button_6_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[5] === 2 || shuffled[5] === 7) {
    game_button_6_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_7() {
  if (shuffled[6] !== 2 && shuffled[6] !== 7) {
    game_button_7_bomb2.disabled = true;
    game_button_7_bomb2.classList.add("mainchildnew");
    game_button_7_bomb2.classList.remove("mainchild");
    game_button_7_bomb2.classList.add("backgroundchenger");

    game_button_7_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[6] === 2 || shuffled[6] === 7) {
    game_button_7_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_8() {
  if (shuffled[7] !== 2 && shuffled[7] !== 7) {
    game_button_8_bomb2.disabled = true;
    game_button_8_bomb2.classList.add("mainchildnew");
    game_button_8_bomb2.classList.remove("mainchild");
    game_button_8_bomb2.classList.add("backgroundchenger");

    game_button_8_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[7] === 2 || shuffled[7] === 7) {
    game_button_8_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_9() {
  if (shuffled[8] !== 2 && shuffled[8] !== 7) {
    game_button_9_bomb2.disabled = true;
    game_button_9_bomb2.classList.add("mainchildnew");
    game_button_9_bomb2.classList.remove("mainchild");
    game_button_9_bomb2.classList.add("backgroundchenger");

    game_button_9_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[8] === 2 || shuffled[8] === 7) {
    game_button_9_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_10() {
  if (shuffled[9] !== 2 && shuffled[9] !== 7) {
    game_button_10_bomb2.disabled = true;
    game_button_10_bomb2.classList.add("mainchildnew");
    game_button_10_bomb2.classList.remove("mainchild");
    game_button_10_bomb2.classList.add("backgroundchenger");

    game_button_10_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[9] === 2 || shuffled[9] === 7) {
    game_button_10_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_11() {
  if (shuffled[10] !== 2 && shuffled[10] !== 7) {
    game_button_11_bomb2.disabled = true;
    game_button_11_bomb2.classList.add("mainchildnew");
    game_button_11_bomb2.classList.remove("mainchild");
    game_button_11_bomb2.classList.add("backgroundchenger");

    game_button_11_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[10] === 2 || shuffled[10] === 7) {
    game_button_11_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_12() {
  if (shuffled[11] !== 2 && shuffled[11] !== 7) {
    game_button_12_bomb2.disabled = true;
    game_button_12_bomb2.classList.add("mainchildnew");
    game_button_12_bomb2.classList.remove("mainchild");
    game_button_12_bomb2.classList.add("backgroundchenger");

    game_button_12_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[11] === 2 || shuffled[11] === 7) {
    game_button_12_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_13() {
  if (shuffled[12] !== 2 && shuffled[12] !== 7) {
    game_button_13_bomb2.disabled = true;
    game_button_13_bomb2.classList.add("mainchildnew");
    game_button_13_bomb2.classList.remove("mainchild");
    game_button_13_bomb2.classList.add("backgroundchenger");

    game_button_13_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[12] === 2 || shuffled[12] === 7) {
    game_button_13_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_14() {
  if (shuffled[13] !== 2 && shuffled[13] !== 7) {
    game_button_14_bomb2.disabled = true;
    game_button_14_bomb2.classList.add("mainchildnew");
    game_button_14_bomb2.classList.remove("mainchild");
    game_button_14_bomb2.classList.add("backgroundchenger");

    game_button_14_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[13] === 2 || shuffled[13] === 7) {
    game_button_14_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

function notmoneygettingshower_15() {
  if (shuffled[14] !== 2 && shuffled[14] !== 7) {
    game_button_15_bomb2.disabled = true;
    game_button_15_bomb2.classList.add("mainchildnew");
    game_button_15_bomb2.classList.remove("mainchild");
    game_button_15_bomb2.classList.add("backgroundchenger");

    game_button_15_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[14] === 2 || shuffled[14] === 7) {
    game_button_15_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_16() {
  if (shuffled[15] !== 2 && shuffled[15] !== 7) {
    game_button_16_bomb2.disabled = true;
    game_button_16_bomb2.classList.add("mainchildnew");
    game_button_16_bomb2.classList.remove("mainchild");
    game_button_16_bomb2.classList.add("backgroundchenger");

    game_button_16_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[15] === 2 || shuffled[15] === 7) {
    game_button_16_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_17() {
  if (shuffled[16] !== 2 && shuffled[16] !== 7) {
    game_button_17_bomb2.disabled = true;
    game_button_17_bomb2.classList.add("mainchildnew");
    game_button_17_bomb2.classList.remove("mainchild");
    game_button_17_bomb2.classList.add("backgroundchenger");

    game_button_17_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[16] === 2 || shuffled[16] === 7) {
    game_button_17_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_18() {
  if (shuffled[17] !== 2 && shuffled[17] !== 7) {
    game_button_18_bomb2.disabled = true;
    game_button_18_bomb2.classList.add("mainchildnew");
    game_button_18_bomb2.classList.remove("mainchild");
    game_button_18_bomb2.classList.add("backgroundchenger");

    game_button_18_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[17] === 2 || shuffled[17] === 7) {
    game_button_18_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_19() {
  if (shuffled[18] !== 2 && shuffled[18] !== 7) {
    game_button_19_bomb2.disabled = true;
    game_button_19_bomb2.classList.add("mainchildnew");
    game_button_19_bomb2.classList.remove("mainchild");
    game_button_19_bomb2.classList.add("backgroundchenger");

    game_button_19_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[18] === 2 || shuffled[18] === 7) {
    game_button_19_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_20() {
  if (shuffled[19] !== 2 && shuffled[19] !== 7) {
    game_button_20_bomb2.disabled = true;
    game_button_20_bomb2.classList.add("mainchildnew");
    game_button_20_bomb2.classList.remove("mainchild");
    game_button_20_bomb2.classList.add("backgroundchenger");

    game_button_20_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[19] === 2 || shuffled[19] === 7) {
    game_button_20_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_21() {
  if (shuffled[20] !== 2 && shuffled[20] !== 7) {
    game_button_21_bomb2.disabled = true;
    game_button_21_bomb2.classList.add("mainchildnew");
    game_button_21_bomb2.classList.remove("mainchild");
    game_button_21_bomb2.classList.add("backgroundchenger");

    game_button_21_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[20] === 2 || shuffled[20] === 7) {
    game_button_21_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_22() {
  if (shuffled[21] !== 2 && shuffled[21] !== 7) {
    game_button_22_bomb2.disabled = true;
    game_button_22_bomb2.classList.add("mainchildnew");
    game_button_22_bomb2.classList.remove("mainchild");
    game_button_22_bomb2.classList.add("backgroundchenger");

    game_button_22_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[21] === 2 || shuffled[21] === 7) {
    game_button_22_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_23() {
  if (shuffled[22] !== 2 && shuffled[22] !== 7) {
    game_button_23_bomb2.disabled = true;
    game_button_23_bomb2.classList.add("mainchildnew");
    game_button_23_bomb2.classList.remove("mainchild");
    game_button_23_bomb2.classList.add("backgroundchenger");

    game_button_23_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[22] === 2 || shuffled[22] === 7) {
    game_button_23_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_24() {
  if (shuffled[23] !== 2 && shuffled[23] !== 7) {
    game_button_24_bomb2.disabled = true;
    game_button_24_bomb2.classList.add("mainchildnew");
    game_button_24_bomb2.classList.remove("mainchild");
    game_button_24_bomb2.classList.add("backgroundchenger");

    game_button_24_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[23] === 2 || shuffled[23] === 7) {
    game_button_24_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}
function notmoneygettingshower_25() {
  if (shuffled[24] !== 2 && shuffled[24] !== 7) {
    game_button_25_bomb2.disabled = true;
    game_button_25_bomb2.classList.add("mainchildnew");
    game_button_25_bomb2.classList.remove("mainchild");
    game_button_25_bomb2.classList.add("backgroundchenger");

    game_button_25_bomb2.innerHTML =
      '<img class="gem"src="photo/gem.png"alt="gem_icon">';
  } else if (shuffled[24] === 2 || shuffled[24] === 7) {
    game_button_25_bomb2.innerHTML =
      '<img class="bomb bombanimetion"src="photo/bomb.png"alt="bomb_icon">';
    disabeler();
  }
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function loopmaker() {
  for (let i = 1; i <= 25; i++) {
    let button = "s";
  }
}

function jamblaance() {
  moneygetterhaha.value = Number(moneygetterhaha.value) + 1;
}
function menhablaance() {
  moneygetterhaha.value -= 1;
}

function zarbblaance() {
  moneygetterhaha.value *= 2;
}

function taghsimbalance() {
  floori = moneygetterhaha.value /= 2;
  Math.floor(floori);
  moneygetterhaha.value = Math.floor(floori);
}

function allinbalance() {
  moneygetterhaha.value = balance;
}
