let message;
// message now takes the type 'any' and does not have access to string functions per value set below

message = 'abc'

// using type assertions to strongly type the variable thus getting access to type functions

// 1st method
let endsWithC = (<string>message).endsWith('c');

// 2nd method
let alternativeWay = (message as string).endsWith('c');

// note that type assertions does not change the structure of the variable at runtime
// this is purely used to enance codeing in compile time for accessing features like intellisence