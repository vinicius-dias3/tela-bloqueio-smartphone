import { timeData } from "/src/js/objects/timeData.js"

export function showDateAndTime(){
    let hourElement = document.querySelector('#elemento-hora')
    let minuteElement = document.querySelector('#elemento-minuto')
    let dayElement = document.querySelector('#elemento-dia')
    
    hourElement.innerHTML = timeData.hour
    minuteElement.innerHTML = timeData.minute
    dayElement.innerHTML = `${timeData.week[timeData.weekDay]}, ${timeData.monthDay}/${timeData.yearMonth}`
    setTimeout(showDateAndTime, 1000)
}