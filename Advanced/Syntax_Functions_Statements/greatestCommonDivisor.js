function gcd(a, b) {
    let copyA = a;
    let copyB = b;

    while(copyB !== 0) {
        let tempMod = copyA % copyB;
        copyA = copyB;
        copyB = tempMod;
    }
    return copyA;
}

console.log(gcd(14, 10));
