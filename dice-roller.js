window.onload = function meudado() {
let valor = [0,0,0,0,0,0,0,0,0,0,0];
let comdado;
let comdado1;
let comdado2;
let min = Math.ceil(1);
let max = Math.floor(6);

for(let cont =0;cont<1000;cont++){  
    comdado1= Math.floor(Math.random() * (max - min + 1)) + min; 
    console.log("dado1: "+comdado1);
    comdado2= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("dado2: "+comdado2);
    comdado=comdado1+comdado2;
    valor[comdado-2]+=1;
}
let dads2 =document.createElement("div");
document.body.appendChild(dads2);
dads2.innerHTML="2:  "+valor[0];

let dads3 =document.createElement("div");
document.body.appendChild(dads3);
dads3.innerHTML="3:  "+valor[1];

let dads4 =document.createElement("div");
document.body.appendChild(dads4);
dads4.innerHTML="4:  "+valor[2];

let dads5 =document.createElement("div");
document.body.appendChild(dads5);
dads5.innerHTML="5:  "+valor[3];

let dads6 =document.createElement("div");
document.body.appendChild(dads6);
dads6.innerHTML="6:  "+valor[4];

let dads7 =document.createElement("div");
document.body.appendChild(dads7);
dads7.innerHTML="7:  "+valor[5];

let dads8 =document.createElement("div");
document.body.appendChild(dads8);
dads8.innerHTML="8:  "+valor[6];

let dads9 =document.createElement("div");
document.body.appendChild(dads9);
dads9.innerHTML="9:  "+valor[7];

let dads10 =document.createElement("div");
document.body.appendChild(dads10);
dads10.innerHTML="10:  "+valor[8];

let dads11 =document.createElement("div");
document.body.appendChild(dads11);
dads11.innerHTML="11:  "+valor[9];

let dads12 =document.createElement("div");
document.body.appendChild(dads12);
dads12.innerHTML="11:  "+valor[10];


}
