// complete the given function

function palindrome(str){

      const len = str.length;

       for (let i = 0; i < len / 2; i++) {

           if (str[i] !== str[len - 1 - i]) {
               console.log(false);
           }
       }
       return console.log(true);
}
module.exports = palindrome
