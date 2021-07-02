exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (str1) {
      return str + ', ' + str1;
    };
  },

  makeClosures: function(arr, fn) {
    let array = [];
    let func = function(a) {
      return function() {
        return fn(a)
      }
    }

    for(let i = 0; i < arr.length; i++) {
      array.push(func(arr[i]));
    }

    return array;
  },

  partial: function(fn, str1, str2) {
    return function(x) {
      return fn(str1, str2, x)
    };
  },

  useArguments: function(...args) {
    let count = 0;
      if(args.length === 1) {
        return args[0];
      } else {
        for(let i = 0; i < args.length; i++){
          count += args[i];
        }
        return count;
      }

  },

  callIt: function(fn, ...args) {
    return fn(...args)
  },

  partialUsingArguments: function(fn, ...args) {
    return function (...args2) {
      return fn(...args, ...args2)
    }
  },

  curryIt: function(fn) {
    return function (x) {
      return function (y) {
        return function (z) {
          return fn(x,y,z)
        }
      }
    }
  }
};
