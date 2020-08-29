describe("Test Case 1", function() {
    it("should determine the finalGrade", function() {
        expect(finalGrade(100, 12)).toEqual(100);;
      });
});
describe("Test Case 2", function() {
  it("should determine the finalGrade", function() {
      expect(finalGrade(85, 5)).toEqual(90);;
    });
});
describe("Test Case 3", function() {
  it("should determine the finalGrade", function() {
      expect(finalGrade(55, 3)).toEqual(75);;
    });
});
describe("Test Case 4", function() {
  it("should determine the finalGrade", function() {
      expect(finalGrade(55, 0)).toEqual(0);;
    });
});
describe("Test Case 5", function() {
  it("should determine the finalGrade", function() {
      expect(finalGrade(10, 15)).toEqual(100);;
    });
});


