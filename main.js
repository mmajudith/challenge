'use strict';

// Variables Declarations

let fullName = document.querySelector('#fullName').value;
let email = document.querySelector('#email').value;
let submit = document.querySelector('submit');

// Function Declaration 

function formValidation(){
    let nameRegx = /^judith$/;
    // let mailRegx = //;

    if(nameRegx.test(fullName)){
        console.log("am Happly");
     }else{
         console.log("why na");
    }
}

formValidation();