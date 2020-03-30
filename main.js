'use strict';

// Variables Declarations

const nameVal = document.querySelector('#name-val').style.display = 'none';
const mail = document.querySelector('#mail').style.display = 'none';
const pass = document.querySelector('#pass').style.display = 'none';

// const fullName = document.querySelector('#fullName');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
const form = document.querySelector('#form');

// Regx object patterns 

const patterns = {
    nRegx: /^[a-z]{3,15}\s[a-z]{3,15}$/gi,
    eRegx: /^[\w.]+@\w+\.(com|net|org)$/,
    pRegx: /^[\w@.-]{6,20}$/
};

// Function

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.fullName.value);
});
    
    

