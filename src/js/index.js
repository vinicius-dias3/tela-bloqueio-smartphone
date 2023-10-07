import { showDateAndTime } from "./showDateAndTime.js"
import { passwordData } from "./passwordData.js"
import {passwordTesting} from "./passwordTesting.js"

showDateAndTime()

const senhaUsuario = passwordData.senhaUsuario
const containerSenha = document.querySelector('.container-senha')
const numeros = document.querySelectorAll('.numero')
let arrayNumeros = []
let senhaDigitada = ''
let btnVoltarOuExcluir = document.querySelector('button[value="voltar"]')
let iconeRolar = document.querySelector('.icone-rolar')
let numeroDigitado = 0

iconeRolar.addEventListener('scroll', function () {
    console.log(iconeRolar)
    const telaBloqueio = document.querySelector('.tela-bloqueio')
    telaBloqueio.classList.remove('bloquear')
    telaBloqueio.classList.add('desbloquear')
    containerSenha.classList.remove('esconder')
})

senhaUsuario.addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode
    const isEnterPressed = key === 13

    if (isEnterPressed) passwordData.setPassword()
})

document.querySelector('.btn-salvar').addEventListener('click', ()=> {
    passwordData.setPassword()
})

numeros.forEach((numero) => {
    numero.addEventListener('click', () => {
        let iconeSenhas = document.querySelectorAll('.fa-circle')
        if (arrayNumeros.length < 8) {
            arrayNumeros.push(numero.value)
            iconeSenhas[numeroDigitado].classList.remove('far')
            iconeSenhas[numeroDigitado].classList.add('fas')
            numeroDigitado++
        }
        if (arrayNumeros.length === 8) {
            senhaDigitada = arrayNumeros.join('')
            passwordTesting(senhaDigitada)
        }
        if (arrayNumeros.length > 0) {
            btnVoltarOuExcluir.innerHTML = 'excluir'
        }
    })
})

btnVoltarOuExcluir.addEventListener('click', ()=> excluirSenha())

function excluirSenha() {
    let iconeSenhas = document.querySelectorAll('.fa-circle')
    if(numeroDigitado > 0){
        numeroDigitado--
        arrayNumeros.pop()

        if(iconeSenhas[numeroDigitado]){
        iconeSenhas[numeroDigitado].classList.remove('fas')
        iconeSenhas[numeroDigitado].classList.add('far')
        }
    }
    if (numeroDigitado === 0) {
        btnVoltarOuExcluir.innerHTML = 'voltar'
        btnVoltarOuExcluir.removeEventListener('click', excluirSenha)
    }
}