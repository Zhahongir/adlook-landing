function getTimeFromMinutes(numClock) {
    if (typeof (numClock) !== 'number' || !(Number.isInteger(numClock)) || numClock < 600) {
        return "Ошибка, проверьте данные";
    }
    
    let total;
    
    if (numClock < 120) {
        total = `Это ${Math.trunc(numClock % 60)} час`;
        return console.log(total);
    }
}

getTimeFromMinutes(70);