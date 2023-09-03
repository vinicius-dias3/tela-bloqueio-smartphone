export function mostrarDataEHora(){
    let data = new Date()
    let elementoHora = document.querySelector('#elemento-hora')
    let elementoMinuto = document.querySelector('#elemento-minuto')
    let elementoDia = document.querySelector('#elemento-dia')
    let hora = data.getHours().toString().padStart(2,'0')
    let minuto = data.getMinutes().toString().padStart(2,'0')
    const semana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
    let diaSemana = data.getDay()
    let mesDoAno = (data.getMonth()+1).toString().padStart(2,'0')
    elementoHora.innerHTML = hora
    elementoMinuto.innerHTML = minuto
    let diaDoMes = data.getDate().toString().padStart(2,'0')
    elementoDia.innerHTML = `${semana[diaSemana]}, ${diaDoMes}/${mesDoAno}`
    setTimeout(mostrarDataEHora, 1000)
}