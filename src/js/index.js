// // const phoneRegex = /^\s\d{4}-\d{4}$/;
// const padraoSenha = {n}

// let senhaConfigurada = prompt('configure uma senha de oito dígitos (apenas números)')

// if(senhaConfigurada && padraoSenha.test(senhaConfigurada)){
//     console.log('conseguiu testar, aprovado')
// }else{
//     console.log('nao foi aprovado no teste')
// }
// console.log(senhaConfigurada)
const senhaUsuario = document.querySelector('#senha-usuario')
const btnSalvarSenha = document.querySelector('.btn-salvar')
// console.log(btnSalvarSenha)
let tamanhoSenhaUsuario
let senhaUsuarioGravada

btnSalvarSenha.addEventListener('click', (configurarSenha))
function configurarSenha(){
    // let tamanhoSenhaUsuario = senhaUsuario.value.length
    // let senhaUsuarioGravada = senhaUsuario.value
    // debugger
    const containerSenha = document.querySelector('.container-senha')
    const msgErro = document.querySelector('.span')
    if(senhaUsuario.value.length === 8){
        containerSenha.classList.add('esconder')
        senhaUsuarioGravada = senhaUsuario.value
        tamanhoSenhaUsuario = senhaUsuario.value.length
        console.log(senhaUsuarioGravada)
        console.log(tamanhoSenhaUsuario)
    }
    if(senhaUsuario.value.length < 8 || senhaUsuario.value.length > 8){
        msgErro.classList.add('mostrar-span')
        containerSenha.classList.add('erro')
        if(senhaUsuario.value.length === 8){
            msgErro.classList.remove('mostrar')
            containerSenha.classList.remove('erro')
            senhaUsuarioGravada = senhaUsuario.value
            tamanhoSenhaUsuario = senhaUsuario.value.length
            console.log(senhaUsuarioGravada)
            console.log(tamanhoSenhaUsuario)
        }
    }
}

const numeros = document.querySelectorAll('.numero')
let senhaDigitada = 0
let arrayNumeros = []

numeros.forEach((numero)=> {
    numero.addEventListener('click', ()=> {
        arrayNumeros.push(numero.value)
        console.log(arrayNumeros)
        let iconeSenhas = document.querySelectorAll('.fa-circle')
        if(senhaDigitada < iconeSenhas.length){
            iconeSenhas[senhaDigitada].classList.remove('far')            
            iconeSenhas[senhaDigitada].classList.add('fas')            
            senhaDigitada++
            // console.log(`senha digitada ${senhaDigitada} vezes`)
        }
        if(senhaDigitada > 0){
            // debugger
            let btnVoltarOuExcluir = document.querySelector('.voltar')
            btnVoltarOuExcluir.innerHTML = 'excluir'
            btnVoltarOuExcluir.addEventListener('click', excluirSenha)
        }
    })
})
    
function excluirSenha(){
    let iconeSenhas = document.querySelectorAll('.fa-circle')
    let btnVoltarOuExcluir = document.querySelector('.voltar')
    // debugger
    if (senhaDigitada > 0) {
        senhaDigitada--
        // console.log(`btnVoltarOuExcluir clicado. senhaDigitada:${senhaDigitada}`)
        iconeSenhas[senhaDigitada].classList.remove('fas')
        iconeSenhas[senhaDigitada].classList.add('far')
        arrayNumeros.pop()
        console.log(arrayNumeros)
    }
    if(senhaDigitada === 0){
        // console.log(`senha digitada chegou em 0`)
        btnVoltarOuExcluir.removeEventListener('click', excluirSenha)
        btnVoltarOuExcluir.innerHTML = 'voltar'
    }
}

// function testarSenha(){
//     let iconeSenhas = document.querySelectorAll('.fa-circle')
//     // if(tamanhoSenhaUsuario == iconeSenhas.length && senhaUsuarioGravada == )


//     if(senhaDigitada.length === iconeSenhas.length && senhaUsuario.value === senhaDigitada){
//         console.log('A senha está correta')
//     }else{
//         console.log('A senha digitada está incorreta. Tente novamente')
//     }
// }
// let tamanhoSenhaUsuario
// let senhaUsuarioGravada