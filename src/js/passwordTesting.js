export function passwordTesting(senhaUsuarioGravada, senhaDigitada){
    let smartphone = document.querySelector('.smartphone')
    const tela = document.querySelector('.tela')
    let msgErro = document.querySelector('.msg-erro')
    if(senhaUsuarioGravada === senhaDigitada){
        console.log(`senha gravada do usuario: ${senhaUsuarioGravada}`)
        console.log(`senha digitada pelo usuário: ${senhaDigitada}`)
        smartphone.classList.remove('animacao-erro-senha')
        msgErro.classList.remove('mostrar-msg')
        msgErro.classList.add('esconder-msg')
        tela.classList.add('desbloqueada')
        while(tela.firstChild) tela.removeChild(tela.firstChild)
    }else{
        console.log('não reconheceu a senha')
        smartphone.classList.add('animacao-erro-senha')
        msgErro.classList.remove('esconder-msg')
        msgErro.classList.add('mostrar-msg')
    }
}