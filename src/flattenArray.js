/**
 * Created by sandeshkumar on 4/5/16.
 */
function flattenArray(arr) {
    if(Array.isArray(arr)) {
        //return flatIterative(arr);
        //return flatRecursive(arr, []);
        return flatFunctional(arr);
    } 
    return [];
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

function flatIterative(arr) {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        if(Array.isArray(el)) {
            for(var j = 0; j < el.length; j++) {
                var elm = el[j];
                flat.push(elm);
            }
        } else {
            flat.push(el);
        }
    }
    return flat;
}

function flatFunctional(arr) {
    var flattened = arr.reduce(function(memo, el) {
        return memo.concat(el);
    }, []);
    return flattened;
}