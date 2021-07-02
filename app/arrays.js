exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = -1;
    for(let i = 0; i<=arr.length; i++) {
      if (arr[i] === item) {
        index = i;
      }
    }
    return index;
  },

  sum: function(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i ++) {
      a += arr[i];
    }
    return a;
  },

  remove: function(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    let length = arr.length;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i--;
        length--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item);
        return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
      let count = 0;
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          count++;
        }
      }
      return count;
  },

  duplicates: function(arr) {
    const dups = [];
    for(let i = 0; i < arr.length; i++) {
      const filteredArr = arr.filter((item) => item === arr[i]);
      if (filteredArr.length > 1) {
        !dups.includes(arr[i]) && dups.push(arr[i]);
      }
    }
    return dups.sort();
  },

  square: function(arr) {
    let newArray = arr.map((item) => {
      return item * item;
    })
    return newArray;
  },

  findAllOccurrences: function(arr, target) {
    const indexes = [];
    arr.forEach((item, index) => {
      if(item === target) {
        indexes.push(index);
      }
    });
    return indexes;
  }
};
