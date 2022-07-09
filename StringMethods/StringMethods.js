const text = "Hello Mohammed Azharuddin";
// total characters are -- 14
// length -- 14
// index -- 13 

// console.log(text.length);
// console.log(text.concat(", how are you?"));
// iss method me text ko jo assign kiya huva hai uske sath merge karke terminal me dikhayega
// console.log(text + ", how are you doing?");
// console.log(text.trim());
//iss method me space ko trim (cut) kardega phr bina space ke terminal me show karega
// console.log(text.trimleft());
// iss method me space ko left se trim (cut) kardega phr bina space ke terminal me show karega
// console.log(text.replace("Hello", "Good Bye!"));
// console.log(text.includes("Hello"));
//match hoga to terminal me true aayega, agar match ni hoga to false aayega
// console.log(text.startsWith("Hello"));
// iss case me space bhi count hota hai, 
// console.log(text.endsWith("Everyone"));
// agar last ke spells as it is match honge to hi terminal me true aayega, agar spell wrong honge to match ni hoga aur false aayga
// console.log(text.toLowerCase());
// sab letters small case me hojayega terminal me
// console.log(text.toLocaleUpperCase());
// sab capital letters hojayenge
// console.log(text.indexOf("E"));
// index me counting 0 se start hoti hai, iss liye E ka number 6 batayega terminal me
// console.log(text.charAt(6));
// console.log(text.split("-")[1]);
// iss method me terminal me aise dikhayega, agar () me kuch bhi nahi likhoge to
    // 'H', 'e', 'l', 'l',
    // 'o', ' ', 'E', 'v',
    // 'e', 'r', 'y', 'o',
    // 'n', 'e'
//
// console.log(text.slice(-12, -3));
// iss method me 2 arguments hona zaruri hai, hum plus ya minus me bhi ise use karte hain, ye wahi dikhayega jo index number aap enter karte ho
// console.log(text.substring(2, 10));
// console.log(text.substr(6, 2));
// const num = 502;
// 000050
// console.log(num.toString().padStart(6, 0));
const num = 12;
// 120000, 12aaaa, 
// console.log(num.toString().padEnd(6, "ABCD"));