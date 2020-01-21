function solve(input) {
    let newArr = input
    .sort((firstName, secondName) => firstName.length - secondName.length || 
                                    firstName.localeCompare(secondName));

    console.log(newArr.join('\n'));
}

solve(
    [
        'Isacc', 
        'Theodor', 
        'Jack', 
        'Harrison', 
        'George'
    ]
);