function sameNumbers(num) {
    let number = num.toString().split('');
    let allTrue = true;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        if (allTrue) {
            allTrue = number[i] === number[0];
        }

        sum = sum + +number[i];
    }

    console.log(allTrue);
    console.log(sum);
    
}

sameNumbers(2222222);