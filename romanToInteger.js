
const romanToInt = (str) => {
    let romArray = str.split('')
    for (let i = 0; i < romArray.length; i++) {
        console.log(romArray)
        if (romArray[i] === 'I') {
            if (romArray[romArray.indexOf(romArray[i]) + 1] === 'X' || romArray[romArray.indexOf(romArray[i]) + 1] === 'V') {
                romArray.splice(romArray.indexOf(romArray[i]), 1, -1)
                console.log(typeof(romArray[romArray.indexOf(romArray[i]) + 1]))
            } else {
                romArray.splice(romArray.indexOf(romArray[i]), 1, 1)
            }
        }
        if (romArray[i] === 'X') {
            if (romArray[romArray.indexOf(romArray[i]) + 1] === 'L' || romArray[romArray.indexOf(romArray[i]) + 1] === 'C') {
                romArray.splice(romArray.indexOf(romArray[i]), 1, -10)
            } else {
                romArray.splice(romArray.indexOf(romArray[i]), 1, 10)
            }
        }
        if (romArray[i] === 'C') {
            if (romArray[romArray.indexOf(romArray[i]) + 1] === 'D' || romArray[romArray.indexOf(romArray[i]) + 1] === 'M') {
                console.log(typeof(romArray[romArray.indexOf(romArray[i]) + 1]))
                romArray.splice(romArray.indexOf(romArray[i]), 1, -100)
                console.log(romArray)
            } else {
                romArray.splice(romArray.indexOf(romArray[i]), 1, 100)
            }

        }
        if (romArray[i] === 'V') {
            romArray.splice(romArray.indexOf(romArray[i]), 1, 5)
        }
        if (romArray[i] === 'L') {
            romArray.splice(romArray.indexOf(romArray[i]), 1, 50)
        }
        if (romArray[i] === 'D') {
            romArray.splice(romArray.indexOf(romArray[i]), 1, 500)
        }
        if (romArray[i] === 'M') {
            romArray.splice(romArray.indexOf(romArray[i]), 1, 1000)
        } 

    }
    const sum = romArray.reduce((runningTotal, a) => runningTotal + a, 0)
    console.log(romArray)
    console.log(sum)

};

romanToInt('MMMCMXCIX')