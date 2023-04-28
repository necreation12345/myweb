var player=true;
const b=document.getElementById("b");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let reset=document.getElementById("reset");




reset.addEventListener("click",re);
b.addEventListener("click",val1,{once:true});
b1.addEventListener("click",val2,{once:true});
b2.addEventListener("click",val3,{once:true});
b3.addEventListener("click",val4,{once:true});
b4.addEventListener("click",val5,{once:true});
b5.addEventListener("click",val6,{once:true});
b6.addEventListener("click",val7,{once:true});
b7.addEventListener("click",val8,{once:true});
b8.addEventListener("click",val9,{once:true});

var drawmessage=document.getElementById("draw");

var clicks=0;
var end=false;

function re(){
    window.location.reload();  //reload web button
}

// b
function val1(){
    if(player==true){
        player=false;
        b.value="X";
        b.name="X";
        var count=1;
        clicks=clicks+1;
        
    }
    else{
        bx=false;
        player=true
        b.value="O";
        b.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val2(){
    if(player==true){
        b1.value="X";
        player=false;
        b1.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b1.value="O";
        player=true;
        b1.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b2
function val3(){
    if(player==true){
        b2.value="X";
        player=false;
        b2.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b2.value="O";
        player=true;
        b2.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b3
function val4(){
    if(player==true){
        b3.value="X";
        player=false;
        b3.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b3.value="O";
        player=true;
        b3.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val5(){
    if(player==true){
        b4.value="X";
        player=false;
        b4.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b4.value="O";
        player=true;
        b4.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val6(){
    if(player==true){
        b5.value="X";
        player=false;
        b5.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b5.value="O";
        player=true;
        b5.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val7(){
    if(player==true){
        b6.value="X";
        player=false;
        b6.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b6.value="O";
        player=true;
        b6.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val8(){
    if(player==true){
        b7.value="X";
        player=false;
        b7.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b7.value="O";
        player=true;
        b7.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
// b1
function val9(){
    if(player==true){
        b8.value="X";
        player=false;
        b8.name="X";
        var count=1;
        clicks=clicks+1;
    }
    else{
        b8.value="O";
        player=true;
        b8.name="O";
        var count=0;
        clicks=clicks+1;
    }
}
console.log(b.name==b1.name)

function win(){
    while(b.name==b1.name && b1.name==b2.name ||b3.name==b4.name && b4.name==b5.name||b6.name==b7.name && b7.name==b8.name ||b.name==b3.name && b3.name==b6.name ||b1.name==b4.name && b4.name==b7.name||b2.name==b5.name && b5.name==b8.name ||b.name==b4.name && b4.name==b8.name||b2.name==b4.name && b4.name==b6.name ){
        drawmessage.innerHTML="<h1>Game &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Over</h1>";
        end=true;
        clearTimeout(intid);
        break;
    }
    if(clicks===9){
        if(end==false);
        clearTimeout(intid);
       drawmessage.innerHTML="<h1>Game &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Draw</h1>";
    }
}
var intid=setInterval(win,1);
win();