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
        var items = Array.isArray(el) ? flatRecursive(el, flattenedArr): el;
        if(!Array.isArray(el)) {
            flattenedArr.push(el);
        }
    }
    return flattenedArr;
}
