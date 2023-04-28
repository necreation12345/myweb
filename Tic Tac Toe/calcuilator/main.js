let disp= document.getElementById("monitor"); //display
let clr=document.getElementById("clr");       //clr btn
let plus=document.getElementById("plus");     //plus btn
let minus=document.getElementById("minus");     //minnus btn
let multiple=document.getElementById("multiple");     //multiple btn
let divide=document.getElementById("divide");     //multiple btn
let equalto=document.getElementById("equalto");     //equalto btn
let one=document.getElementById("one");     //one btn
let four=document.getElementById("four");     //four btn
let seven=document.getElementById("seven");     //seven btn
let zzero=document.getElementById("zzero");     //2 zero btn
let zero=document.getElementById("zero");     //zero btn
let two=document.getElementById("two");     //two btn
let five=document.getElementById("five");     // five btn
let eight=document.getElementById("eight");     //eight btn
let dot=document.getElementById("dot");     //dot btn
let three=document.getElementById("three");     //three btn
let six=document.getElementById("six");     //six btn
let nine=document.getElementById("nine");     //nine btn
//clear screen button
clr.addEventListener("click",clrscr);
function clrscr(){
   disp.innerHTML="  "
}


//starting bug fix
function stt(){
    disp.innerHTML=0+0;
    disp.innerHTML=" ";
}
stt();

// + button
plus.addEventListener("click",pls);
function pls(value){
    value=plus.value;
   disp.innerHTML+=value;
}

// - button
minus.addEventListener("click",min);
function min(value){
    value=minus.value;
   disp.innerHTML+=value;
}

// * button
multiple.addEventListener("click",mul);
function mul(value){
    value=multiple.value;
    disp.innerHTML+=value;
}

// / button
divide.addEventListener("click",div);
function div(value){
    value=divide.value;
   disp.innerHTML+=value;
}

// 1 button
one.addEventListener("click",on);
function on(value){
    value=one.value;
   disp.innerHTML+=value;
}
// 2 button
two.addEventListener("click",tw);
function tw(value){
    value=two.value;
   disp.innerHTML+=value;
}

// 3 button
three.addEventListener("click",th);
function th(value){
    value=three.value;
   disp.innerHTML+=value;
}

// 4 button
four.addEventListener("click",fo);
function fo(value){
    value=four.value;
   disp.innerHTML+=value;
}

// 5 button
five.addEventListener("click",fi);
function fi(value){
    value=five.value;
   disp.innerHTML+=value;
}

// 6 button
six.addEventListener("click",si);
function si(value){
    value=six.value;
   disp.innerHTML+=value;
}

// 7 button
seven.addEventListener("click",sev);
function sev(value){
    value=seven.value;
   disp.innerHTML+=value;
}

// 8 button
eight.addEventListener("click",ei);
function ei(value){
    value=eight.value;
   disp.innerHTML+=value;
}

// 9 button
nine.addEventListener("click",ni);
function ni(value){
    value=nine.value;
   disp.innerHTML+=value;
}


// 00 button
zzero.addEventListener("click",zze);
function zze(value){
    value=zzero.value;
   disp.innerHTML+=value;
}

// 0 button
zero.addEventListener("click",ze);
function ze(value){
    value=zero.value;
   disp.innerHTML+=value;
}

// dot button
dot.addEventListener("click",dt);
function dt(value){
    value=dot.value;
   disp.innerHTML+=value;
}


// = button
equalto.addEventListener("click",eq);
function eq(){    
var p=disp.innerHTML;
var result=eval(p);
disp.innerHTML=result;
}

designermonde=on;