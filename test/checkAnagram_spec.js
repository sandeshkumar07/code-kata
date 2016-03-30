/**
 * Created by sandeshkumar on 3/30/16.
 */
describe("checkAnagram", function () {
    it("check map for empty string", function() {
        var res = buildCharMap();
        expect(JSON.stringify(res)).toBe('{}');
    });
    it("check map for momma", function() {
        var res = buildCharMap('momma');
        expect(JSON.stringify(res)).toBe('{"m":3,"o":1,"a":1}');
    });
    it("check sorting for empty map", function() {
        var res = sortMap();
        expect(JSON.stringify(res)).toBe('{}');
    });
    it("check map for string", function() {
        var res = sortMap('momma');
        expect(JSON.stringify(res)).toBe('{}');
    });
    it("check map for momma map", function() {
        var res = sortMap(JSON.parse('{"a":1,"m":3,"o":1}'));
        expect(JSON.stringify(res)).toBe('{"a":1,"m":3,"o":1}');
    });
    it("compare maps for moma and a mom", function() {
        var res = compareMaps(JSON.parse('{"m":2,"o":1,"a":1}'), JSON.parse('{"a":1,"m":2,"o":1}'));
        expect(res).toBe(true);
    });
    it("compare maps for rame and a more", function() {
        var res = compareMaps(JSON.parse('{"r":1,"a":1,"m":1,"e":1}'), JSON.parse('{"m":1,"o":1,"r":1,"e":1}'));
        expect(res).toBe(false);
    });
    it("anagrmas with no repeated letters", function() {
        var res = checkAnagram('ram','mar');
        expect(res).toBe(true);
    });
    it("anagrams with repeated letters", function() {
        var res = checkAnagram('rama','mara');
        expect(res).toBe(true);
    });
    it("not anagrams", function() {
        var res = checkAnagram('rama','shyam');
        expect(res).toBe(false);
    });
    it("anagrams with spaces", function() {
        var res = checkAnagram('anagram','nag a ram');
        expect(res).toBe(true);
    });
    it("s1 empty", function() {
        var res = checkAnagram('','san');
        expect(res).toBe(false);
    });
    it("s2 empty", function() {
        var res = checkAnagram('san', '');
        expect(res).toBe(false);
    });
    it("s1 and s2 noth empty", function() {
        var res = checkAnagram('','');
        expect(res).toBe(true);
    });
});