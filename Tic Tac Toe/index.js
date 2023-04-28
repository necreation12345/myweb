let tic=document.getElementById("tic");
let cal=document.getElementById("cal");
let sin=document.getElementById("sign");
let logdiv=document.getElementById("loginpage");
logdiv.style.display='none';
let sub=document.getElementById("sub");
barmenu.style.display='none';
let navbtn=document.getElementById("navbtn");


cal.addEventListener("click",pro2);
tic.addEventListener("click",pro1);
sin.addEventListener("click",sign);
sub.addEventListener("click",arr);
navbtn.addEventListener("click",brm)


function brm(){
    if(barmenu.style.display==='none'){
        barmenu.style.display='block';
        }
        else{
            barmenu.style.display='none';
        }
}



function arr(){
  logdiv.style.display='none';
  alert("Welcome to NR creations");
}




function sign(){
    if(logdiv.style.display==='none'){
    logdiv.style.display='block';
    }
    else{
        logdiv.style.display='none';
    }
    
}


function pro2(){
    window.open("/calcuilator/index.html");
}

function pro1(){
    window.open("/tictactoy/tic.html");
}