describe("Split", function() {

  it("splits an array", function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

});

describe("Merge", function() {

  it("merges two arrays", function() {
    expect(merge([2,5,9],[1,3,6,8])).toEqual([1,2,3,5,6,8,9]);
  });

});


