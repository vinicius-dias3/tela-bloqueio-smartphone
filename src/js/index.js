// let senhaConfigurada = prompt('configure uma senha de seis dígitos')
// console.log(senhaConfigurada)


const numeros = document.querySelectorAll('.numero')
let senhaDigitada = 0
let iconeSenhas = document.querySelectorAll('.fa-circle')
// let btnVoltarOuExcluir

numeros.forEach((numero)=> {
    numero.addEventListener('click', ()=> {
        // let iconeSenhas = document.querySelectorAll('.fa-circle')
        // console.log(`senha digitada ${senhaDigitada} vezes`)
        if(senhaDigitada < iconeSenhas.length){
            iconeSenhas[senhaDigitada].classList.add('fas')            
            senhaDigitada++
            console.log(`senhaDigitada:${senhaDigitada}`)
        }
        if(senhaDigitada > 0){
            let btnVoltarOuExcluir = document.querySelector('.voltar')
            btnVoltarOuExcluir.innerHTML = 'excluir'
            btnVoltarOuExcluir.addEventListener('click', excluirSenha)
        } //ATÉ AQUI TUDO CERTO
        else{
            btnVoltarOuExcluir.removeEventListener('click', excluirSenha)
            btnVoltarOuExcluir.innerHTML = 'voltar'
            btnVoltarOuExcluir.removeEventListener('click', excluirSenha)
        }
    })
})

function excluirSenha(){
    // let iconeSenhas = document.querySelectorAll('.fa-circle')
        senhaDigitada--
        console.log(`btnVoltarOuExcluir clicado. senhaDigitada:${senhaDigitada}`)
        iconeSenhas[senhaDigitada].classList.remove('fas')
}