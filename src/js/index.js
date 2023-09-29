import {mostrarDataEHora} from "/src/js/mostrarDataEHora.js"
mostrarDataEHora()
import {testarSenha} from "/src/js/testarSenha.js"

const senhaUsuario = document.querySelector('#senha-usuario')
const containerSenha = document.querySelector('.container-senha')
let tamanhoSenhaUsuario
let senhaUsuarioGravada
const numeros = document.querySelectorAll('.numero')
let numeroDigitado = 0
let arrayNumeros = []
let senhaDigitada
let btnVoltarOuExcluir = document.querySelector('button[value="voltar"]')
let iconeRolar = document.querySelector('.icone-rolar')

iconeRolar.addEventListener('scroll', function (){
    console.log(iconeRolar)
    const telaBloqueio = document.querySelector('.tela-bloqueio')
    telaBloqueio.classList.remove('bloquear')
    telaBloqueio.classList.add('desbloquear')
    containerSenha.classList.remove('esconder')
})

document.querySelector('.btn-salvar').addEventListener('click', (configurarSenha))
function configurarSenha(){
    const msgErro = document.querySelector('.span')
    if(senhaUsuario.value.length === 8){
        containerSenha.classList.add('esconder')
        msgErro.classList.remove('mostrar')
        containerSenha.classList.remove('erro')
        senhaUsuarioGravada = senhaUsuario.value
        tamanhoSenhaUsuario = senhaUsuario.value.length
        console.log(senhaUsuarioGravada)
        console.log(tamanhoSenhaUsuario)
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
            testarSenha(senhaUsuarioGravada, senhaDigitada)
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