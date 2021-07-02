exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let newArr = [];
    for(let o in obj) {
      newArr.push(`${o}: ${obj[o]}`);
    }
    newArr.pop()
    return newArr
  }
};
