function CheckForUniqueChars (string) {
  var hashmap = {};
  if(string) {
    for (var i = 0; i < string.length; i++) {
      if (hashmap[string[i]] != null) {
        hashmap[string[i]] = 1;
        return {result: false};
      } else {
        hashmap[string[i]] = 0;
      }
    }
  }
  return {result: true};
}