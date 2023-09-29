export function testarSenha(senhaUsuarioGravada, senhaDigitada){
    let smartphone = document.querySelector('.smartphone') //
    const tela = document.querySelector('.tela') //CONFERE
    let msgErro = document.querySelector('.msg-erro') //CONFERE
    if(senhaUsuarioGravada === senhaDigitada){
        console.log(senhaUsuarioGravada)
        console.log(senhaDigitada)
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