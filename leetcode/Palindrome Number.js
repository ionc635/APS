/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const string = x.toString();
  
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] !== string[string.length - i - 1]) {
        return false;
      }
    }
    return true;
  };