//===================================================
// 1. Arithmatic Operators //
// const ArithmaticOperators=(a, b, c)=>{
    //Addition --- first method of operator====>
    // console.log("jama hoja be====> ", a + b + c);
    //2. Substraction ----- second method of operator===============>
    // console.log("Minus hoja be====> ", a - b);
    //3. Multiplication - third method of Airthmatic Operator =========>
    // console.log("Zarab hoja be====> ", a * b);
    // 4. Division - fouth method of 
    // console.log("division hoja be====> ", a / b);
    //5. Modulus -- (Reminder)
    // console.log("hasil ka bacha huva bata be====> ", a % b);
    // 6. Increment --- ye increase karega
    // console.log("increase kar be====> ", a++); // a=a+1
    // 6. Decrement --- ye decrease karega
    // console.log("decrease kar be====> ", a--); // a=a-1
    
// }
// ArithmaticOperators(15, 10);


//Assignment Operators=======================>
// const assignmentOperator=(a, b)=>{
// Equal to
// let data ="Exaltech";
// console.log(data);
// addition assignment
// console.log("Addition", a +=b);// a= a+b
// substraction assignment 
// console.log("substraction", a -=b); //a= a-b
//division assignment
// console.log("division", a /=b);// a= a/b
// modulus assignment
// console.log("modulus", a %=b); // a= a % b
//Multiplication assignment
// console.log("multiplication", a *=b); // a= a*b
// Exponentiation assignment
// console.log("exponentiation", a **=3); // a= a*b

// }
// assignmentOperator(2, 10);


//Comparison Operator ======================================> ye hamesha true aur false me result dikhayega
// const comparisonOperator=(a, b)=>{
// Equality Check ----- Equal to
// console.log(a == b);
// Not Equal to
// console.log(a!=b);
// Strict Equality Check
// console.log(a === b); // this will strictly check the data type and as well as values
// Strictly not equality check
// console.log(a !== b); // 
//Greater than
// console.log(a > b);
// greater then equal to
// console.log(a >= b);
// less than 
// console.log(a < b);
//less than equal to
// console.log(a <= b);



// Logical Operators
// ye true or false print karega, true aur true rahega to hi ye result true print karega, and true aur false rahega to result false print karega
const LogicalOperators =(a, b) => {
// Logical && 
console.log(10 >= 10 && 20 > 10); //true && true = true
console.log(5 >= 10 && 9 > 10); //false && false = false
console.log(10 >= 10 && 9 > 10); //ture && false = false
console.log(5 >= 10 && 20 > 10); //false && true = false
// Logical || // pehli condition true hai aur dusri condition true hai to ye true dikhayega, and agar pehli condition false ho aur dusri condition true hogi to ye true dikhayega
// isko koi bhi ek condition true hogi to ye true ko hi dikhayega,  aur agar dono condition false hai to ye false dikhayga
console.log(a <= b || a < b); // true || true = true
console.log(5 <= 10 || 20 < 10); // true || false = true
console.log(20 <= 10 || 5 < 10); // false || true = true
console.log(20 <= 10 || 20 < 10); // false || false = false
};
LogicalOperators(5, 11);
