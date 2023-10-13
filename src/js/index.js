import { showDateAndTime } from "./showDateAndTime.js"
import { passwordData } from "./objects/passwordData.js"
import {passwordTesting} from "./passwordTesting.js"
showDateAndTime()

const passwordUser = passwordData.passwordUser
const containerSenha = document.querySelector('.container-senha')
const numeros = document.querySelectorAll('.numero')
let digitSequence = []
let enteredPassword = ''
let btnVoltarOuExcluir = document.querySelector('button[value="voltar"]')
let iconeRolar = document.querySelector('.icone-rolar')
let numeroDigitado = 0

iconeRolar.addEventListener('scroll', function () {
    const telaBloqueio = document.querySelector('.lock-screen')
    telaBloqueio.classList.remove('lock')
    telaBloqueio.classList.add('unlock')
    containerSenha.classList.remove('esconder')
})

passwordUser.addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode
    const isEnterPressed = key === 13

    if (isEnterPressed) passwordData.setPassword()
    .then(()=> typePassword())
})

document.querySelector('.btn-salvar').addEventListener('click', ()=> {
    passwordData.setPassword()
    .then(()=> typePassword())
})

function typePassword(){
    numeros.forEach((numero) => {
        numero.addEventListener('click', () => {
            let iconeSenhas = document.querySelectorAll('.fa-circle')
            if (digitSequence.length < 8) {
                digitSequence.push(numero.value)
                iconeSenhas[numeroDigitado].classList.remove('far')
                iconeSenhas[numeroDigitado].classList.add('fas')
                numeroDigitado++
                console.log(`digitSequence = ${digitSequence}`)
            }
            if (digitSequence.length === 8) {
                enteredPassword = digitSequence.join('')
                console.log(`enteredPassword= ${enteredPassword}`)
                passwordTesting(enteredPassword, deletePassword)
            }
            if (digitSequence.length > 0) {
                btnVoltarOuExcluir.innerHTML = 'excluir'
            }
        })
    })
}

btnVoltarOuExcluir.addEventListener('click', ()=> deletePassword())

function deletePassword() {
    let iconeSenhas = document.querySelectorAll('.fa-circle')
    if(numeroDigitado > 0){
        numeroDigitado--
        digitSequence.pop()
        console.log(`digitSequence = ${digitSequence}`)

        if(iconeSenhas[numeroDigitado]){
        iconeSenhas[numeroDigitado].classList.remove('fas')
        iconeSenhas[numeroDigitado].classList.add('far')
        }
    }
    if (numeroDigitado === 0) {
        btnVoltarOuExcluir.innerHTML = 'voltar'
        btnVoltarOuExcluir.removeEventListener('click', deletePassword)
    }
}