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
    console.log(string)
    string = string.replace(/\s+/g, '');
    console.log(string)
    console.log("BitMap", (bitMap >>> 0).toString(2));
    for (var i = 0; i < string.length; i++) {
      var charKey = (1 << string.charCodeAt(i));
      console.log("Bit posn val ", ((charKey)>>>0).toString(2) + " AND with bitMap "+  ((bitMap & charKey) >>> 0).toString(2));
      console.log("Bit posn val ", charKey + " AND with bitMap "+  ((bitMap & charKey)));
      if ((bitMap & charKey) === charKey) {
        console.log('here')
        bitMap |= (0 << string.charCodeAt(i));
        return {result: false};
      } else {
        console.log("Adding character ", string[i]);
        bitMap |= charKey;
        console.log("After adding character bitMap", (bitMap >>> 0).toString(2));
      }
    }
  }
  return {result:true};
}