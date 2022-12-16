// complete the given function

function palindrome(str){

    var nstr=str.split("").reverse().join("");

    return str==nstr;
}
module.exports = palindrome
