if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var files = [];

      for (var i = 0; i < data.files.length; i++) {
        if (typeof(data.files[i]) === 'string') {
          files.push(data.files[i]);
        } else {
          var nestedFiles = this.listFiles(data.files[i]);
          for (var j = 0; j < nestedFiles.length; j++) {
            files.push(nestedFiles[j]);
          }
        }
      }

      return files;
    },

    permute: function(arr) {

    }
  };
});
