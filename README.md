# DreamAPP-Consuella-T
Password Analyzer 
Psuedocode  

This app will identify strong and weak passwords to fight against attacks 
How?
Uses set rules to identify if a password is strong or weak with if else statements.

Uses a black list of weak passwords it wont allow ex:12345 or ABCDE with using strings and array methods to search for case sensitivites.

Checks to make sure passwords include !@#$&? As well as uppercase and lowercase
Checks for max characters 8 by using An array of boolean expressions validation checks


START Password Analyzer

INPUT password from user

SET weakPasswords list to:
  12345, ABCDE, password, admin, qwerty

SET specialCharacters to: ! @ # $ & ?

CONVERT password to lowercase for comparison

CREATE a list of checks:
  CHECK password length is 8 characters or less
  CHECK password contains at least one uppercase letter
  CHECK password contains at least one lowercase letter
  CHECK password contains at least one special character
  CHECK password is NOT in weakPasswords list

IF all checks are true THEN
    DISPLAY "Strong password"
ELSE
    DISPLAY "Weak password"
    DISPLAY rules user failed

END Password Analyzer

 