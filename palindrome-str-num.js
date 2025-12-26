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


// two pointer method(best for interveiws)

function isPalindrome(str){
    str = str.toLowerCase();
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
isPalindrome(madam)