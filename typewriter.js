"use strict";

const text = document.querySelector('.typewritten')

const sprog = text.textContent

let n;
n=0;

const length = text.textContent.length;
console.log(length)

setInterval(write, 100)
console.log(text.textContent.length)

 
function write(){
    
    text.textContent = sprog.substring(0,n)
    
    n++;
    
    console.log(text.textContent.length)
    
    if(n > length){
        n = 1;
    }
    
}