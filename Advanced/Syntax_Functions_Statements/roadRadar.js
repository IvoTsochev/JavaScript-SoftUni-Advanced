function speedCheck(arr) {
    
    let motorowayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    
    let [speed, area] = arr;

    if (area === 'motorway') {
        let diff = speed - motorowayLimit;
        if (diff > 40) {
            console.log('reckless driving')
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff >= 1 && diff <= 20) {
            console.log('speeding');
        }
    } else if (area === 'interstate') {
        let diff = speed - interstateLimit;
        if (diff > 40) {
            console.log('reckless driving')
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff >= 1 && diff <= 20) {
            console.log('speeding');
        }
    } else if (area === 'city') {
        let diff = speed - cityLimit;
        if (diff > 40) {
            console.log('reckless driving')
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff >= 1 && diff <= 20) {
            console.log('speeding');
        }
    } else if (area === 'residential') {
        let diff = speed - residentialLimit;
        if (diff > 40) {
            console.log('reckless driving')
        } else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        } else if (diff >= 1 && diff <= 20) {
            console.log('speeding');
        }
    }
}

speedCheck([200, 'motorway']);
