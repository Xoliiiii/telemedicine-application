// //allowing user to see their password
// function togglePassword(buttonElement){
//     const passwordInput = buttonElement.previousElementSibling; // Gets password input before the button
//     if(passwordInput.type === "password"){
//         passwordInput.type = "text"
//     } else {
//         passwordInput.type = "password"
//     }
// }


function passwordCheck(event){
    const firstPassword = document.getElementById("firstPassword").value
    const confirmedPassword =document.getElementById("confirmedPass").value

    if(firstPassword.length !== 8 && confirmedPass.length !==8){
        alert('Password must be exactly 8 characters');
        event.preventDefault();
        return false;
    }

    if (firstPassword !== confirmedPassword){
        alert("Please make sure that passwords match")
        event.preventDefault();
        return false; //Prevents form submissions
    } 

    return true; //Allows form submission
}

