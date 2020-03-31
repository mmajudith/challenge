'use strict';

// Variables Declarations

let nameVal = document.querySelector('#name-val');
let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass');
const form = document.querySelector('#form');

// Regx object patterns 

const patterns = {
    nRegx: /^[a-z]{3,15}\s[a-z]{3,15}$/gi,
    eRegx: /^[\w.]+@\w+\.(com|net|org)$/,
    pRegx: /^[\w@.-]{6,20}$/
};

// Event Function

form.addEventListener('submit', (e) =>{

    if(patterns.nRegx.test(form.fullName.value)){
        console.log(form.fullName.value);
    }else{
         nameVal.style.display = 'block';  
     }

    if(patterns.eRegx.test(form.email.value)){
        console.log(form.email.value);
    }else{
        mail.style.display = 'block';  
    }

    if(patterns.pRegx.test(form.password.value)){
        console.log(form.password.value);
    }else{
        pass.style.display = 'block';
    }   
    
    e.preventDefault();
    
});
   

