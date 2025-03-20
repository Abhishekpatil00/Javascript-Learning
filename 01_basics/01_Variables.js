const accountId = 1234
let accountEmail = "abhi@gmail.com"
var accountPass = "1234"
let accountState;

/*
we dont prefer to use var 
because its issue with block issue and functional scope
*/
accountCity = "Pune"

// accountId = 212

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
accountEmail = "preet@google.com"
accountPass = "8898"
accountCity = "Mumbai"
accountState = "Maharashtra"

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);