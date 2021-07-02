exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let arrOfString = [...str];
    let filtered = [];
    let obj = {};
    for (let i = 0; i < arrOfString.length; i++) {
      // obj[arrOfString[i]] =
    }
    arrOfString.forEach((item) => {

    })


    return filtered;
  },

  wordWrap: function(str, cols) {
    let arr = str.split(' ');
    let a = arr.join('\n')
    return a
  },

  reverseString: function(str) {
    let arr = [...str];
    let reversedArr = arr.reverse()
    return reversedArr.join("");
  }
};
