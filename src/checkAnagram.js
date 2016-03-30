/**
 * Created by sandeshkumar on 3/30/16.
 */
/**
 * Builds a map with key as character of the string and value as the recurrence count of the character 
 * @param string {String} A string whose character map needs to be formed
 * @returns {Object} An object map of character to its count within a string
 */
function buildCharMap(string) {
    var charMapString = {};
    if(string) {
        string = string.replace(/\s+/g, '');
        for (var i = 0; i < string.length; i++) {
            if (charMapString[string[i]] != null) {
                charMapString[string[i]] += 1;
            } else {
                charMapString[string[i]] = 1;
            }
        }
    }
    return charMapString;
}

/**
 * Sorts the input object and returns a new sorted object
 * @param o {Obejct} Object to be sorted
 * @returns {Object} New sorted object
 */
function sortMap(o) {
    var n = {};
    //Check if o is an object 
    if((o !== null) && ((typeof o === 'function') || (typeof o === 'object'))) {
        var keys = Object.keys(o).sort();
        for (i = 0; i < keys.length; i++) {
            k = keys[i];
            n[k] = o[k];
        }
    }
    return n;
}

/**
 * Compares the two given key-value pair maps 
 * @param m1 {Object} One of the two maps to be compared
 * @param m2 {Object} One of the two maps to be compared
 * @returns {boolean} true if the maps are equal; false otherwise
 */
function compareMaps(m1, m2) {
    var sortedMap1 = sortMap(m1);
    var sortedMap2 = sortMap(m2);
    return (JSON.stringify(sortedMap1) === JSON.stringify(sortedMap2));
}

/**
 * Checks whether the two given strings are anagrams of each other
 * @param string1 {String}  One of the two strings to be checked
 * @param string2 {String} One of the two strings to be checked
 * @returns {boolean} true if the strings are nagram of each other;false otherwise
 */
function checkAnagram(string1, string2) {
    if(string1 && string2) {
        var charMapString1 = buildCharMap(string1);
        var charMapString2 = buildCharMap(string2);
        var res = ((Object.keys(charMapString1).length === Object.keys(charMapString2).length) && compareMaps(charMapString1, charMapString2));
        return res;
    } else if (!string1 && !string2) {
        return true;
    } else {
        return false;
    }

}