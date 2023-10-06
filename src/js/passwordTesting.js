import { getPasswordData } from "/src/js/passwordData.js"

const passwordData = getPasswordData()

export function passwordTesting(senhaDigitada){
    let smartphone = document.querySelector('.smartphone')
    const tela = document.querySelector('.tela')
    let msgErro = document.querySelector('.msg-erro')
    const senhaUsuarioGravada = passwordData.senhaUsuarioGravada

    if(senhaUsuarioGravada === senhaDigitada){
        console.log(`${senhaUsuarioGravada} é igual a ${senhaDigitada}!!!`)
        smartphone.classList.remove('animacao-erro-senha')
        msgErro.classList.remove('mostrar-msg')
        msgErro.classList.add('esconder-msg')
        tela.classList.add('desbloqueada')
        while(tela.firstChild) tela.removeChild(tela.firstChild)
    }else{
        console.log(`${senhaUsuarioGravada} não é igual a ${senhaDigitada}!!!`)
        smartphone.classList.add('animacao-erro-senha')
        msgErro.classList.remove('esconder-msg')
        msgErro.classList.add('mostrar-msg')
    }
}