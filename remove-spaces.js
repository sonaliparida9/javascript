// using split + join
function removeSpace(str){
    return str.split(" ").join("");
}
console.log(removeSpace("I Love JavaScript"));

// using replaceAll
function removeSpace(str){
    return str.replaceAll(" ","");
}
console.log(removeSpace("I Love  JavaScript"));

// using loop
function removeSpace(str){
    let result = "";
    for(let char of str){
        if(char !== " "){
            result += char;
        }
    }
    return result;
}
console.log(removeSpace("I Love  JavaScript "))