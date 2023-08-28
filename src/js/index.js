data = new Date
let hora = document.querySelector('#hora')
let minuto = document.querySelector('#minuto')
hora.innerHTML = data.getHours()
minuto.innerHTML = data.getMinutes()

const senhaUsuario = document.querySelector('#senha-usuario')
const btnSalvarSenha = document.querySelector('.btn-salvar')
const containerSenha = document.querySelector('.container-senha')
let tamanhoSenhaUsuario
let senhaUsuarioGravada
const numeros = document.querySelectorAll('.numero')
let numeroDigitado = 0
let arrayNumeros = []
let senhaDigitada
let btnVoltarOuExcluir = document.querySelector('button[value="voltar"]')

function desbloquearTela(){
    const telaBloqueio = document.querySelector('.tela-bloqueio')
    telaBloqueio.classList.remove('bloquear')
    telaBloqueio.classList.add('desbloquear')
    containerSenha.classList.remove('esconder')
}

btnSalvarSenha.addEventListener('click', (configurarSenha))
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
            testarSenha()
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

function testarSenha(){
    let smartphone = document.querySelector('.smartphone')
    const tela = document.querySelector('.tela')
    let msgErro = document.querySelector('.msg-erro')
    if(senhaUsuarioGravada === senhaDigitada){
        smartphone.classList.remove('animacao-erro-senha')
        msgErro.classList.remove('mostrar-msg')
        msgErro.classList.add('esconder-msg')
        tela.classList.add('desbloqueada')
        while(tela.firstChild){
            tela.removeChild(tela.firstChild)
        }
    }else{
        smartphone.classList.add('animacao-erro-senha')
        msgErro.classList.remove('esconder-msg')
        msgErro.classList.add('mostrar-msg')
    }
}