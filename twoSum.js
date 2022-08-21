// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.
// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.
// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

//Sample newArr = [3, 5, -4, 8, 11, 1, -1, 6]
//target = 10 
//sample output = [-1, 11] 

// function twoSum (arr, target) {
//   let map = {};

//   for (let i = 0; i < arr.length;i++){
//     let comp = target - arr[i]
//     if (map[comp] !== undefined) {
//       return [comp, arr[i]]
//     }else {
//       map[arr[i]] = i
//       console.log('map', map)
//     }
//   }
// }
// //map[key] = value;
// var newArr = [3, 5, -4, 8, 11, 1, -1, 6];
// var target1 = 5 
// console.log(twoSum (newArr, target1));


function twoSum(array, target) {
    let hashMap = {};

    for (let nums of array) {
        console.log(hashMap)
        let potenNums = target - nums;
        if (potenNums in hashMap) {
            return [potenNums, nums]
        } else {
            hashMap[nums] = 'nope'
        }
    }
    return [];
}
var newArr = [3, 5, -4, 8, 11, 1, -1, 5];
var target1 = 10
console.log(twoSum(newArr, target1));
// testing testing testingadadasd
//jhbakjsdbkjasbdksdfdfsf