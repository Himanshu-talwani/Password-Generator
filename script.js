

// clickboard API  hai ye  navigator.clipboard.writeText

// document.getElementById("CO").addEventListener("click", function() {
//     var passwordField = document.getElementById("password");

//     // Check if the password field is empty
//     if (passwordField.value === "") {
//         alert("Empty field can't copy");
//         return; // Exit the function if the field is empty
//     }

//     // Use the Clipboard API to copy the text
//     navigator.clipboard.writeText(passwordField.value)
//         .then(() => {
//             alert("Password copied to clipboard!");
//         })
//         .catch((error) => {
//             console.error("Error copying text: ", error);
//             alert("Failed to copy password");
//         });
// }); 


// Function to generate a random password based on user selections

function generatePassword() {
  var length = parseInt(document.getElementById("length").value);
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;

    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    
    var charSet = "";
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    //  password generate karne ka code hai ye
    if (charSet === "") {
        alert("Please select at least one character type.");
        return;
    }
    
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    // Display the generated password in the input field
    document.getElementById("password").value = password;
}
