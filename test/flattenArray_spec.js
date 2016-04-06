/**
 * Created by sandeshkumar on 4/5/16.
 */
describe("Flatten multi dimensional arrays", function () {
    it("if array has many arrays", function () {
        var res = flattenArray([1, [2, 3], 4, [5, 6, 7]]);
        expect(res).toEqual([1, 2, 3, 4 , 5, 6, 7]);
    });
    it("if array is a single array", function () {
        var res = flattenArray([1, 2, 3]);
        expect(res).toEqual([1, 2, 3]);
    });
    it("if array has many arrays", function () {
        var res = flattenArray(['a', 'b', ['c', 'd'], ['e',['f','g']], 'h', 'i' , ['j','k','l','m']]);
        expect(res).toEqual(['a','b','c','d','e','f','g','h','i','j','k','l','m']);
    });
});