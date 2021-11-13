// Setup
function phoneticLookup(val) {
    let result = "";
    const lookup ={
        "alpha" :"Adams",
        "bravo" :"Boston",
        "charlie" :"Chicago",
        "delta" :"Denver",
        "echo" :"Easy",
        "foxtrot" :"Frank",
    }

    // Only change code above this line
    result = lookup[val];
    return result;
}

phoneticLookup("charlie");