/*Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:*/

function sortedArrayToBST(nums) {
  function createTree(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    return {
      val: nums[mid],
      left: createTree(left, mid - 1),
      right: createTree(mid + 1, right)
    };
  }

  return createTree(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

