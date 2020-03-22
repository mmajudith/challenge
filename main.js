'use strict';

// Variables Declarations

const nameVal = document.getElementById('name-val').style.display = 'none';
const mail = document.getElementById('mail').style.display = 'none';
const pass = document.getElementById('pass').style.display = 'none';

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


// Regx object patterns 

const patterns = {
    nRegx: /^[a-z]{3, 15}\s[a-z]{3, 15}$/i,
    eRegx: /^[\w.]+@\w+\.(com|net|org)$/,
    pRegx: /^[\w@-]{6, 20}$/
};

// Function

form.addEventListener('submit', function(e){

});
