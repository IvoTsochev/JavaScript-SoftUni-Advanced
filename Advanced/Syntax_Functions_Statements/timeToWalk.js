// speed * time = v
// 4000, 0.60, 5

function timeToWalk(steps, stepLenght, speed) {
    let lenght = (steps * stepLenght);
    
    let totalRestsInMinutes = Math.floor(lenght / 500);

    let totalTime = (lenght / speed) / 1000 * 60;

    let totalTimeInSeconds = Math.ceil((totalRestsInMinutes + totalTime) * 60);

    let result = new Date(null, null, null, null, null, totalTimeInSeconds);

    return result.toString().split(' ')[4];
    
}

console.log(timeToWalk(4000, 0.60, 5));