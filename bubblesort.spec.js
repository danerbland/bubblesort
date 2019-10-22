describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, "swap").and.callThrough();
    spyOn(window, "compare").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it("handles single item array", function() {
    let array = [4];
    expect(bubbleSort(array)).toEqual(array);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it("handles multiple items", function() {
    let unsortedArray = [2, 1];
    expect(bubbleSort(unsortedArray)).toEqual([1, 2]);
    expect(window.swap.calls.count()).toEqual(1);
    expect(window.compare.calls.count()).toEqual(2);
  });

  it("handles duplicates", function() {
    let unsortedArray = [3, 3, 2, 2, 1, 4, 0];
    expect(bubbleSort(unsortedArray)).toEqual([0, 1, 2, 2, 3, 3, 4]);
  });
});

// it("handles multiple items", function() {
//   let unsortedArray = [3, 2, 1, 4];
//   expect(bubbleSort(unsortedArray)).toEqual([1, 2, 3, 4]);
// });
