let porcentJava = document.getElementById("java")
let num1 = 0;

var contador = setInterval(()=>{
   
    if(num1 < 50){
    num1 ++;
  }
 
   porcentJava.style.width = num1+"%"
   porcentJava.innerHTML = num1+"%";

   if(num1 == 50){
       clearInterval(contador)
   }
},40)




let porcentJavascrip = document.getElementById("javascrip")
let num2 = 0

var contador2 = setInterval(()=>{
   
    if(num2 < 90){
    num2 ++;
  }

   porcentJavascrip.style.width = num2+"%"
   porcentJavascrip.innerHTML = num2+"%";

   if(num2 == 90){
       clearInterval(contador2)
   }
},40)




let porcentFrontEnd = document.getElementById("frontEnd")
let num3 = 0

var contador3 = setInterval(()=>{
   
    if(num3 < 75){
    num3 ++;
  }

   porcentFrontEnd.style.width = num3+"%"
   porcentFrontEnd.innerHTML = num3+"%";

   if(num3 == 75){
       clearInterval(contador3)
   }
},40)




let porcentFrontEnd2 = document.getElementById("frontEnd-2")
let num4 = 0

var contador4 = setInterval(()=>{
   
    if(num4 < 70){
    num4 ++;
  }
 
   porcentFrontEnd2.style.width = num4+"%"
   porcentFrontEnd2.innerHTML = num4+"%";

   if(num4 == 70){
       clearInterval(contador4)
   }
},60)




let sql = document.getElementById("sql")
let num5 = 0

var contador5 = setInterval(()=>{
   
    if(num5 < 30){
    num5 ++;
  }
   sql.style.width = num5+"%"
   sql.innerHTML = num5+"%";

   if(num5 == 30){
       clearInterval(contador5)
   }
},60)









