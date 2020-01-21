function solve(input) {

    let rotations = (+input.slice(input.length - 1)[0]) % (input.length - 1);
    let arr = input.slice(0, input.length - 1);

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(  
    [
    'Banana', 
    'Orange', 
    'Coconut', 
    'Apple', 
    '15'
    ]
    );