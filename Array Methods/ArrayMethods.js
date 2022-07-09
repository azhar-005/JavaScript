const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
];
const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const products = [
{category: "shoes", size:7, color: "Black", brand: "Adidas", id:1, price:2000},
{category: "shoes", size:8, color: "Black", brand: "Puma", id:2, price:4000},
{category: "shoes", size:9, color: "White", brand: "puma", id:3, price:3000},
{category: "shoes", size:8, color: "Red", brand: "Nike", id:4, price:4000},
{category: "flipper", size:9, color: "White", brand: "adidas", id:5, price:6000},
{category: "shoes", size:7, color: "Red", brand: "nike", id:6, price:7000},
]

// const output = products.filter(
//     (item)=> item.price >= 2000 && item.price <= 5000
// );
// console.log(output);
// console.log(letters.pop(), "-->", letters);
// console.log(letters.push(), "-->", letters); 
// ye method me agar () isme kuch bhi add karoge to ye apko array ke end me add karega aur iski total length batayega
// console.log(letters.shift(), "-->", letters);
// ye method me array ke first element ko remove karke return karega aur sath hi sath array ko modified karega.
// console.log(letters.unshift("1000", "500", "100", "10"), "-->", letters);
// ye method bina argument ke array ki length batayega, agar argument me aap jitne bhi elements likhoge, ye total length aur jo bhe element hai usko array ke pehle add hojayega
// console.log(letters.find((dhundre)=> dhundre === "l" ));
// console.log(letters.findIndex((dhundre) => dhundre === "f"));
// console.log(letters.includes("6"));
// ye method me boolean ki tarah return karega agar wo argument match hogi to true aayega ya phr false ayega
// console.log(letters.indexOf("k"));
// console.log(nums.every((check) => check % 2 === 0));
// console.log(letters.slice(5, 10));
// console.log(letters.splice(5, 5, "Azhar"), "--->", letters);

// console.log(products.filter((item) => item.color === "Black" && item.brand === "Puma"));
// ye method call back function use krke item ko show karega, agar boht sare elements honge to ye sabko show karega
// console.log(products.filter((item) => item.id !==5));
// ye method me call back function use krke item ko minus krke baqi ke bache huve objects ko show krega
// console.log(products.map((item) => item.id * 10));
// ye method object ke har ek element ko code execute karega aur generate karke show karega

// const arr1 = ["a", "b"];
// const arr2 = ["c", "d"];
// console.log(arr1.concat(arr2));
// ye method do arrays ko concat(milana) krdega

// const output = products.sort((itemOne, itemTwo) => 
// (itemOne.brand.toLowerCase() > itemTwo.brand.toLowerCase() ? -1 : 1)
// );
// console.log(output);

// const output = products.reduce((gadha, ghoda)=> gadha + ghoda.price *2, 0);
// console.log(output);
// console.log(products.reverse());
// console.log(Array.from("ABCDEFG"));
// console.log(nums.fill("Azhar", 2, 5));
// console.log(nums.join());
// console.log(Array.isArray(nums));
// console.log(nums.toString());
// console.log(letters.forEach(item, index) => )

const numbers = [2,3,5,6,8,9,13,15,20];
const output = nums.filter((item)=> item >= 8)
.map((item)=> item * 2)
.reduce((acc, cur)=> acc + cur, 0)

console.log(output);
