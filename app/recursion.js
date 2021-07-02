exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const files = [];
    const dirs = [];

    function getFiles(data) {
      const dir = data.dir;
      dirs.push(dir);
      data.files.forEach((item) => {
        if (typeof item === 'string') {
          if (!dirName || dirs.includes(dirName)) {
            files.push(item);
          }
        } else {
          getFiles(item);
        }
      })
      dirs.pop();
    }

    getFiles(data, dirName)
    return files;
  },

  permute: function(arr) {
    const permArr = [];
    const usedChars = [];

    function getInputs(input) {
      let char;
      for (let i = 0; i < input.length; i++) {
        char = input.splice(i, 1)[0];
        usedChars.push(char);
        if (input.length === 0) {
          permArr.push(usedChars.slice());
        }
        getInputs(input);
        input.splice(i, 0, char);
        usedChars.pop();
      }
      return permArr
    }

    return getInputs(arr)
  },

  fibonacci: function(n) {
    const numbers = [];

    function f(num) {
      if(num < 2) {
        return num;
      }
      else {
        return f(num-1) + f(num - 2);
      }
    }
    for(let i = 0; i <= n; i++) {
      numbers.push(f(i));
    }

    return numbers[n];
  },

  validParentheses: function(n) {
    let res = [];
    function generate(left, right, result){
      if(left === n && right === n){
        res.push(result);
        return;
      }
      if(left < n){
        generate(left + 1, right, result + "(" );
      }
      if(left > right && right < n) generate(left, right + 1, result + ")");
    }
    generate(0, 0, "");
    return res;
  }
};