// Only change code below this line
function rangeOfNumbers(startNum, endNum)  {
    if (startNum === endNum) return [endNum];
    const arr = rangeOfNumbers(startNum+1, endNum);
    arr.unshift(startNum);
    return arr;
}
console.log(rangeOfNumbers(2,5));
// Only change code above this line