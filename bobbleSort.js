const arr = [3, 4, 2, 6, 8, 1, 10, 9, 7, 5];
const arr2 = [
  23, 45, 12, 5, 782, 34, 123, 56, 23, 15, 4, 0, 2, 34, 52, 212, 53,
];

const bobbleSort = (arr) => {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
console.log('arr', bobbleSort(arr));
console.log('arr2', bobbleSort(arr2));
