const validateSignUpInput = (firstName='',lastName,email,password,confirmPassword)=>{
   
    let response = {
        state : true,
        messages : []
    }


    if(firstName === '' || lastName ==='' || firstName.length < 3 || lastName.length < 3){
        response.state = false;
        response.messages.push('firstName & lastName are required (3 chars at least)');
    }

    if(password !== confirmPassword){
        response.state = false;
        response.messages.push('password and the confirm password must match');
    }
    if(email ===""){
        response.state = false;
        response.messages.push('email is required');
    }


    return response;

}

export {validateSignUpInput}