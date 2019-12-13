// Ask the user how many characters (8-128)
var askLength = prompt("How long will your password be (8-128)");
if (askLength > 128 || askLength < 8) {
    alert("Must be within 8-128 characters.");
    var askLength = prompt("How long will your password be (8-128)");
}
// Ask the user what special characters (yes/no)
var askChar = confirm("Special Characters?")

// Ask the user for numbers (yes/no)
var askNumber = confirm("Numbers?")

// Ask the user for uppercase (yes/no)
var askUpper = confirm("Uppercase letters?")

// Ask the user for lowercase (yes/no)
var askLower = confirm("Lowercase letters?")


// create random password when generate button clicked
var generatePass = document.querySelector("#generate");
function createPass() {
    var char = "";
    var number = "01234567890"
    var upperAl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var LowerAl = "abcdefghijklmnopqrstuvwxyz"
    var specialAl = "!@#$%^&*()"
    if (askChar === true) {
        char = char.concat(specialAl)
    };
    if (askNumber === true) {
        char = char.concat(number)
    };
    if (askUpper === true) {
        char = char.concat(upperAl)
    };
    if (askLower === true) {
        char = char.concat(LowerAl)
    };

    var charList = "";
    for (var i = 0; i < askLength; i++) {
        charList += char[Math.floor(Math.random() * char.length)];
    }
    console.log("IT WORKED")
    document.getElementById("password").value = charList
}

generatePass.addEventListener("click", createPass);
// Clipboard button copy text area

function copy() {
    document.getElementById("password").select()
    document.execCommand("copy")
}

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copy)

