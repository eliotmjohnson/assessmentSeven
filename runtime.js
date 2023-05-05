const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/* Results

Very Large Array:
1) Append: 1.56 ms
2) Insert: 776.44 ms

Large Array:
1) Append: 497.38 us
2) Insert: 7.18 ms

Medium Array:
1) Append: 109.75 us
2) Insert: 156.08 us

Small Array:
1) Append: 64.83 us
2) Insert: 28.83 us

Tiny Array:
1) Append: 61.38 us
2) Insert: 21.96 us

Findings:

    At the smallest array length it seems that the unshift method is actually a faster method to use, but only by literally micro seconds. But as soon as you start scaling things up to the medium sized array and beyond, the push method (which is O(1) by itself) stays relatively quick to execute even up to the largest array and is a linear increase in time [O(n)] with the for loop, while the unshift method (O(n) by itself) is a very quick and steep quadratic move to the upside in terms of how long it takes to run [O(n^2)] with the for loop. For large scale projects push will certainly be best bet in terms of run time. For small scale, either would be okay, maybe using unshift from a data persepctive, but really not a big difference. Unshift could even break your app at really large scales if computing power isn't taken into consideration.

    .unshift is O(n) because adding an element at the beginning of an array means the new element will have an index of 0. Which means that the index of every other element must be incremented by 1. So, depending on the size the array you're working with, it is going to determin how long that incrementation will take.
*/
