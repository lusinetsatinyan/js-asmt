exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {

   let nums = /\d+/g;
   if(str.match(nums)) {
     return true
   }
   return false
  },

  containsRepeatingLetter: function(str) {
    let reg = /([A-Za-z])\1/;
    return reg.test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str)
  },

  captureThreeNumbers: function(str) {
    let matches = (/\d{3}/).exec(str)
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
