const input = require("readline-sync");

let issuccess = false;
let newPassword = "";
let shownRepeatMessage = false;  // Flag to show the repeat message only once

while(!issuccess) {                     // While loop to keep asking for a new password until it meets the criteria and is not on the blacklist
    newPassword = input.question("\ncreate new password:\n guidelines: at least 10 characters, include uppercase and lowercase letters\n and at least one special character (!, @, #, $, %, ^, &, *): ");

    const blacklist = ["password123!", "admin", "1234567890", "qwerty", "letmein", "welcome", "12345678", "password1" ];    // List of common passwords to check against

let isBadOnBlackList = blacklist.some(word => newPassword.toLowerCase().includes(word.toLowerCase()));   // Check if the new password contains any of the common passwords from the blacklist (case-insensitive)

let secureChecksList = [            
    // Check if the new password is at least 10 characters long
    newPassword.length >= 10,
    // Check if the new password contains at least one special character
    newPassword.includes("!") || newPassword.includes("@") || newPassword.includes("#") || newPassword.includes("$") || newPassword.includes("%") || newPassword.includes("^") || newPassword.includes("&") || newPassword.includes("*"),
    // Check if the new password contains at least one uppercase letter
    /[A-Z]/.test(newPassword),
    // Check if the new password contains at least one lowercase letter
    /[a-z]/.test(newPassword),
    // Check for no repeated characters (no character repeated 2+ times in a row)
    !/(.)\1{2,}/.test(newPassword).
];


let isSecure = secureChecksList.every(check => check);     // Check if all the security criteria are met by using the every() method on the secureChecksList array
if (isBadOnBlackList) {
    console.log("Your password is too common. Please choose a different one.");
}else if (!isSecure) {
    console.log("Your password is weak, please follow the guidelines and try again.");
    if (!shownRepeatMessage && !secureChecksList[4]) {  // Check if the no repeats rule failed and message not shown yet
        console.log("Avoid repeated characters like 'aa' or '11'.");
        shownRepeatMessage = true; // this will ensure the message shows only once ending the while loop when the password is strong and secure.
    }
}else {
    console.log("Your password is strong and secure!");
    issuccess = true;
}       
}