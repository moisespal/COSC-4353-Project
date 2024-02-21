
function validationCheck(event) {
    var username = document.getElementById("username");
    var password = document.getElementById("password");    
  
    // Example validation: Checking if both username and password are not empty
    if (username.value.trim() === "") {
        document.getElementById("errorMessage").textContent = "Please enter a username"
        
    }

    if (password.value.trim() === "") {
        document.getElementById("errorPassword").textContent = "Please enter a password"
        
    }
        event.preventDefault();
}


function revert(element){
    element.style.borderColor = "black";

}

document.getElementById("username").addEventListener("input", function() {
    document.getElementById("errorMessage").textContent = "";
});

document.getElementById("password").addEventListener("input", function() {
    document.getElementById("errorPassword").textContent = "";
});
