function CheckForUniqueChars (string) {
  //var hashmap = {};
  //if(string) {
  //  for (var i = 0; i < string.length; i++) {
  //    if (hashmap[string[i]] != null) {
  //      hashmap[string[i]] = 1;
  //      return {result: false};
  //    } else {
  //      hashmap[string[i]] = 0;
  //    }
  //  }
  //}
  //return {result: true};
  var bitMap = 0;
  if(string) {
    string = string.replace(/\s+/g, '');
    for (var i = 0; i < string.length; i++) {
      var charKey = (1 << string.charCodeAt(i));
      if ((bitMap & charKey) === charKey) {
        bitMap |= (0 << string.charCodeAt(i));
        return {result: false};
      } else {
        bitMap |= charKey;
      }
    }
  }
  return {result:true};
}