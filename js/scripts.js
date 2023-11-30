function validateForm (){

    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let userError = document.getElementById('userError');
    let emailError = document.getElementById('emailError');
    let errorMessage = document.getElementById('errorMessage');



    userError.innerText = '';
    emailError.innerText = '';
    errorMessage.innerText = '';

    if(user === ''){
        userError.innerText ="Please enter Username! 5 char min!";
    }

    if(email === ''){
        emailError.innerText ="Please enter Email!";
    }

    


    if (password != confirmPassword){
        errorMessage.innerText = "Passwords do not match! 6 char min!";
        return false;
    }

    errorMessage.innerText ='';
    return true;
}