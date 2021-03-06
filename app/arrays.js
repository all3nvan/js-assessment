if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },

    sum : function(arr) {
      var sum = 0;

      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }

      return sum;
    },

    remove : function(arr, item) {
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
          result.push(arr[i]);
        }
      }

      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var itemIndex = arr.indexOf(item);

      while (itemIndex !== -1) {
        arr.splice(itemIndex, 1);
        itemIndex = arr.indexOf(item);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
      }

      return arr1;
    },

    insert : function(arr, item, index) {
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        if (index === i) {
          result.push(item);
        }

        result.push(arr[i]);
      }

      return result;
    },

    count : function(arr, item) {
      var count = 0;

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      var itemCount = {};
      var duplicates = [];

      for (var i = 0; i < arr.length; i++) {
        if (!itemCount[arr[i]]) {
          itemCount[arr[i]] = 0;
        }

        itemCount[arr[i]]++;
      }

      for (var item in itemCount) {
        if (itemCount.hasOwnProperty(item) && itemCount[item] > 1) {
          duplicates.push(item);
        }
      }

      return duplicates;
    },

    square : function(arr) {
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
      }

      return result;
    },

    findAllOccurrences : function(arr, target) {
      var indices = [];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          indices.push(i);
        }
      }

      return indices;
    }
  };
});
