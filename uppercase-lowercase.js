// convert string to uppercase (without .toUpperCase())
function toUpperCase(str){
    let result="";
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i); //ASCII code of character
        // if char is 'a' (97) to 'z' (122), convert to 'A'-'Z'
        if(code>=97 && code<=122){
            result += String.fromCharCode(code - 32);
        }else{
            result += str[i]; // leave unchanged
        }
    }
    return result;
}
console.log(toUpperCase("Hello World"));

// convert string to lowercase (without .toLowerCase())
function toLowerCase(str){
    let result="";
    for(i=0; i<str.length; i++){
        let code = str.charCodeAt(i)
         // if char is 'A' (65) to 'Z' (90), convert to 'a'-'z'
         if(code>=65 && code<=90){
            result += String.fromCharCode(code + 32);
         }else{
            result += str[i];
         }
    }
    return result;
}
console.log(toLowerCase("Hello World"));