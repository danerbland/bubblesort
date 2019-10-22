describe("Merge Sort", function() {
  beforeEach(function() {
    spyOn(window, "swap").and.callThrough();
    spyOn(window, "compare").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(mergeSort([])).toEqual([]);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it("handles single item array", function() {
    let array = [4];
    expect(mergeSort(array)).toEqual(array);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it("handles two item arrays", function() {
    let unsortedArray = [2, 1];
    expect(mergeSort(unsortedArray)).toEqual([1, 2]);
    expect(window.swap.calls.count()).toEqual(1);
    expect(window.compare.calls.count()).toEqual(1);
  });

  it("handles duplicates", function() {
    let unsortedArray = [3, 3, 2, 2, 1, 4, 0];
    expect(mergeSort(unsortedArray)).toEqual([0, 1, 2, 2, 3, 3, 4]);
  });
  it("handles multiple items", function() {
    let unsortedArray = [3, 2, 1, 4];
    expect(mergeSort(unsortedArray)).toEqual([1, 2, 3, 4]);
    expect(window.swap.calls.count()).toEqual(3);
    expect(window.compare.calls.count()).toEqual(6);
  });
});

