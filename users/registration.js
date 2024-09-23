// //allowing user to see their password
// function togglePassword(buttonElement){
//     const passwordInput = buttonElement.previousElementSibling; // Gets password input before the button
//     if(passwordInput.type === "password"){
//         passwordInput.type = "text"
//     } else {
//         passwordInput.type = "password"
//     }
// }


function formCheck(event){
    const email = document.getElementById("email").value.trim;
    const firstPassword = document.getElementById("firstPassword").value;
    const confirmedPassword =document.getElementById("confirmedPass").value;

    //Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //validate email format
    if (!emailPattern,text(email)){
        alert('Please enter a valid email address');
        event.preventDefault()
        return false;
    }

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

