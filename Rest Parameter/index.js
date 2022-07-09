// console.log("This is JS file for the parameter");
// // Rest Parameter//
// // A rest parameter allows a function to accept indefinite parameter and stores in an array
// // It must be in the last // isko last me hi likh skte hain
// // It introduced in ECMA 6 (ES-6)
// const RestParameter = (a, b, ...data) => {
// console.log(data);
// }
// RestParameter(10,20,30,40,50,60,70);

// Template Literal//
// It came in ES6
//in this function we dont use to \n, spaces, + sign, to break the line or make spaces between the line
const TemplateLiteral = (name, age) => {
console.log(
    "This"+" "+"is"+" "+ name +" " + age +" "+"year"+" "+"old.");
    // console.log(`This is ${name} ${age} year  \n old.`); // agar line ko break karna ho to \n karke neeche ki line me ke skte hain
    console.log(`This is
     ${name} ${age}
      year  \n old.`);
}
TemplateLiteral("Tasin", 100);
TemplateLiteral("Yaser", 200);
TemplateLiteral("Yaseen", 300);