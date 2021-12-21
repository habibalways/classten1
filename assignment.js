
//  An Email pattern

let email = 'developer.habib1@gmail.com';
let emailpattern = /^[a-z0-9_\.]*[a-z0-9-]*.[a-z]{2,5}/;
console.log(emailpattern.test(email));



//user name pattern

let username = 'alwayshabib@habib2659';
let usepattern = /[a-zA-Z0-9!@#$&*_]*/;
console.log(usepattern.test(username));

 


// Bangladeshi phone number pattern

let number = '01879972105';
let numpattern = /^(01|8801|\+8801)[0-9]{9}$/;
console.log(numpattern.test(number));



//password pattern

let password = 'alwayshabib@habib2659';
let passpattern = /[a-zA-Z0-9!@#$&*_]*/;
console.log(passpattern.test(password));



 //zipcode pattern
 
let zipcode = '4949';
let zippattern = /[0-9]{2,5}/;
console.log(zippattern.test(zipcode));
