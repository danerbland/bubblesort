describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles single item array", function() {
    let array = [4];
    expect(bubbleSort(array)).toEqual(array);
  });

  it("handles multiple items", function() {
    let unsortedArray = [3, 2, 1, 4];
    expect(bubbleSort(unsortedArray)).toEqual([1, 2, 3, 4]);
  });

  it("handles duplicates", function() {
    let unsortedArray = [3, 3, 2, 2, 1, 4, 0];
    expect(bubbleSort(unsortedArray)).toEqual([0, 1, 2, 2, 3, 3, 4]);
  });
});
