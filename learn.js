// Only change code below this line
function countdown(n) {
    if (n < 1) return [];
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
}
console.log(countdown(1));
// Only change code above this line