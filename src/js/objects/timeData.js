let date = new Date()
const timeData = {
    hour:   date.getHours()
            .toString()
            .padStart(2,'0'),
    minute: date.getMinutes()
            .toString()
            .padStart(2,'0'),
    week: ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],
    weekDay: date.getDay(),
    monthDay:   date.getDate()
                .toString()
                .padStart(2,'0'),
    yearMonth: (date.getMonth()+1)
                .toString()
                .padStart(2,'0')
}

export{timeData}