/**
 * Pure Implementation of Binary Search Algorithm
 *
 * Binary insertion sort is a sorting algorithm similar to insertion sort,
 * but instead of using linear search to find the position
 * where the element should be inserted, we use binary search.
 * Thus, we reduce the number of comparisons for inserting one element from O(N)
 * (Time complexity in Insertion Sort) to O(log N).
 *
 */

/**
 * @function binarySearch
 * @description Search the key element in the array from start position to end position.
 * @param {Array} array Array of numbers.
 * @param {Number} key Value to be searched
 * @param {Number} start start index position of array
 * @param {Number} end end index position of array
 * @return {Number} Position of the key element
 */
const findPosbinarySearch = (array: number[], key: number, start: number, end: number): number => {
  if (start === end) {
    if (array[start] > key) {
      return start;
    } else {
      return start + 1;
    }
  }

  if (start > end) {
    return start;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] < key) {
    return findPosbinarySearch(array, key, mid + 1, end);
  } else if (array[mid] > key) {
    return findPosbinarySearch(array, key, start, mid - 1);
  } else {
    return mid;
  }
}

/**
 * @function Binary Insertion Sort
 * @param {Array} list List to be sorted.
 * @return {Array} The sorted list.
 */
export const binaryInsertionSort = (array: number[]): number[] => {
  const totalLength = array.length;
  for (let itr = 1; itr < totalLength; itr += 1) {
    const key = array[itr];
    const indexPosition = findPosbinarySearch(array, key, 0, itr - 1);
    array.splice(itr, 1);
    array.splice(indexPosition, 0, key);
  }
  return array;
}

console.log(binaryInsertionSort([5,4, 3, 1, 2]))