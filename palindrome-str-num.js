function palindromeNumber(num){
   let original_num = num;
   let reversed_num = 0;

    while (num > 0)
        { 
            let digit = num%10;
            reversed_num=(reversed_num*10)+digit;
            num = Math.floor(num/10);
        }
        return original_num == reversed_num
}
console.log(palindromeNumber(1221))