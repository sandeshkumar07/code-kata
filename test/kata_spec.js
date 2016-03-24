describe("Check unique characters", function () {
  it("if string with duplicate", function() {
    var check = new CheckForUniqueChars('Hi mom');
    expect(check.result).toBe(false);
  });
  it("if string with duplicate but different cases", function() {
    var check = new CheckForUniqueChars('Hi Mom');
    expect(check.result).toBe(true);
  });
  it("if no duplicate", function() {
    var check = new CheckForUniqueChars('Hey pa');
    expect(check.result).toBe(true);
  });
  it("if empty string", function() {
    var check = new CheckForUniqueChars('');
    expect(check.result).toBe(true);
  });
  it("if undefined", function() {
    var check = new CheckForUniqueChars();
    expect(check.result).toBe(true);
  });
});
