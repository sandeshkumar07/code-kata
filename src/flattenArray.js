/**
 * Created by sandeshkumar on 4/5/16.
 */
function flattenArray(arr) {
    if(Array.isArray(arr)) {
        return flatRecursive(arr, []);
    } 
    return false;
}

function flatRecursive(arr, arr2) {
    var flattenedArr = arr2;
    for( var i = 0;  i < arr.length; i++) {        
        var el = arr[i];
        if(!Array.isArray(el)) {
            flattenedArr.push(el);
        } else {
            flatRecursive(el, flattenedArr)
        }
    }
    return flattenedArr;
}