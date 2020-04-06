function cooking(params) {
    let n = parseInt(params[0]);
    let functions = {
        chop:  (x) => x / 2,
        dice:  (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake:  (x) => x * 3,
        fillet: (x) => 0.8 * x
    }

    for (let i = 1; i < params.length; i++) {
        n = functions[params[i]](n)
        console.log(n);
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);