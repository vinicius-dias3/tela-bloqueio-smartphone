import {showDateAndTime} from "/src/js/showDateAndTime.js"
// import { setPassword } from "/src/js/setPassword.js"
import {passwordTesting} from "/src/js/passwordTesting.js"

showDateAndTime()

const senhaUsuario = document.querySelector('#senha-usuario')
const containerSenha = document.querySelector('.container-senha')
let tamanhoSenhaUsuario = ''
let senhaUsuarioGravada = ''
const numeros = document.querySelectorAll('.numero')
let numeroDigitado = 0
let arrayNumeros = []
let senhaDigitada = ''
let btnVoltarOuExcluir = document.querySelector('button[value="voltar"]')
let iconeRolar = document.querySelector('.icone-rolar')

iconeRolar.addEventListener('scroll', function (){
    console.log(iconeRolar)
    const telaBloqueio = document.querySelector('.tela-bloqueio')
    telaBloqueio.classList.remove('bloquear')
    telaBloqueio.classList.add('desbloquear')
    containerSenha.classList.remove('esconder')
})

document.querySelector('#senha-usuario').addEventListener('keyup',(e) => {
    const key = e.which || e.keyCode
    const isEnterPressed = key === 13

    if(isEnterPressed) setPassword()
})

// document.querySelector('.btn-salvar').addEventListener('click', ()=> {
//     setPassword(senhaUsuario, containerSenha, senhaUsuarioGravada, tamanhoSenhaUsuario)
// })
document.querySelector('.btn-salvar').addEventListener('click', (setPassword))

//CONFIRMAR SE FUNCIONA CORRETAMENTE SE PASSAR A FUNCAO SETPASSWORD PARA OUTRO ARQUIVO E IMPORTA-LA

function setPassword(){
    let msgErro = document.querySelector('.span')
    if(senhaUsuario.value.length === 8){
        containerSenha.classList.add('esconder')
        msgErro.classList.remove('mostrar')
        containerSenha.classList.remove('erro')
        senhaUsuarioGravada = senhaUsuario.value
        tamanhoSenhaUsuario = senhaUsuario.value.length
        console.log(`senha gravada do usuario: ${senhaUsuarioGravada}`)
        console.log(`tamanho da senha registrada pelo usuário: ${tamanhoSenhaUsuario}`)
    }
    if(senhaUsuario.value.length < 8 || senhaUsuario.value.length > 8){
        msgErro.classList.add('mostrar-span')
        containerSenha.classList.add('erro')
    }
}

numeros.forEach((numero)=> {
    numero.addEventListener('click', ()=> {
        let iconeSenhas = document.querySelectorAll('.fa-circle')
        if(arrayNumeros.length < 8){
            arrayNumeros.push(numero.value)
            console.log(arrayNumeros)
        }
        if(arrayNumeros.length === 8){
            senhaDigitada = arrayNumeros.join('')
            console.log(senhaDigitada)
            passwordTesting(senhaUsuarioGravada, senhaDigitada)
        }
        if(numeroDigitado < iconeSenhas.length){
            iconeSenhas[numeroDigitado].classList.remove('far')            
            iconeSenhas[numeroDigitado].classList.add('fas')            
            numeroDigitado++
        }
        if(numeroDigitado > 0){
            btnVoltarOuExcluir.innerHTML = 'excluir'
            btnVoltarOuExcluir.addEventListener('click', excluirSenha)
        }
    })
})
    
function excluirSenha(){
    let iconeSenhas = document.querySelectorAll('.fa-circle')
        numeroDigitado--
        iconeSenhas[numeroDigitado].classList.remove('fas')
        iconeSenhas[numeroDigitado].classList.add('far')
        arrayNumeros.pop()
        console.log(arrayNumeros)

    if(numeroDigitado === 0){
        btnVoltarOuExcluir.removeEventListener('click', excluirSenha)
        btnVoltarOuExcluir.innerHTML = 'voltar'
    }
}