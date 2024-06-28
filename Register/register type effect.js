
let title_text = document.getElementById('title_text');
let khali  = '';
let text = 'Register'
let i = 0;
let h = 4;


function notloop(){
    t1 = text[i];
    tedad = text.length;

        i +=1;

    khali +=t1
    title_text.innerHTML = khali ;
    

    if(i === tedad){
        clearInterval(loopestan)
        i = 0;
        chookestan = setInterval(ok,250)

    }
}
let chookestan
let loopestan ;
onclickbut()
function onclickbut(){
    loopestan = setInterval(notloop,250);

}
function ok(){
    let result = text.substring(i);
    i += 1;
    title_text.innerHTML =result; 
    if(i === tedad){
        khali = ''
        clearInterval(chookestan)
        i = 0;
        loopestan = setInterval(notloop,100);
        

    }

}



