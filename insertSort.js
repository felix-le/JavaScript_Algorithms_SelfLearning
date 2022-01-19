const arr = [3, 4, 2, 6, 8, 1, 10, 9, 7, 5];
const arr2 = [
  23, 45, 12, 5, 782, 34, 123, 56, 23, 15, 4, 0, 2, 34, 52, 212, 53,
];

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > numberToInsert; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

console.log('arr', insertSort(arr));
