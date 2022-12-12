/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
  res =  /^[a-z\d_]{4,16}$/g.test(username);
  return res;
};

validateUsr('asddsa') //true
validateUsr('Hasd_12assssssasasasasasaasasasasas') //false
validateUsr('____') //true