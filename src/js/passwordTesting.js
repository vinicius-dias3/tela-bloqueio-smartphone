import { getPasswordData } from "./objects/passwordData.js"

const passwordData = getPasswordData()

export function passwordTesting(enteredPassword, deletePassword){
    let smartphone = document.querySelector('.smartphone')
    const screen = document.querySelector('.screen')
    let msgErro = document.querySelector('.msg-erro')
    const savedPasswordUser = passwordData.savedPasswordUser

    if(savedPasswordUser === enteredPassword){
        console.log(`savedPasswordUser (${savedPasswordUser}) é igual a enteredPassword(${enteredPassword})!!!`)
        smartphone.classList.remove('animacao-erro-senha')
        msgErro.classList.remove('show-msg')
        msgErro.classList.add('hide-msg')
        screen.classList.add('desbloqueada')
        while(screen.firstChild) screen.removeChild(screen.firstChild)
    }else{
        console.log(`savedPasswordUser (${savedPasswordUser}) não é igual a enteredPassword(${enteredPassword})!!!`)
        smartphone.classList.add('animacao-erro-senha') //tremer elemento
        msgErro.classList.add('show-msg') //senha incorreta
        setTimeout(()=> {
            let divIcons = document.querySelector('.password')
            
            divIcons.classList.add('incorrect-password')
            msgErro.classList.add('hide-msg')
            msgErro.classList.remove('show-msg')
            smartphone.classList.remove('animacao-erro-senha') //tremer elemento
            
            
            setTimeout(()=>{
                clearIcons(deletePassword)
                divIcons.classList.remove('incorrect-password')
            },200)
        },800)
    }
}


function clearIcons(deletePassword, i = 0){
    if(i < 8) {
        setTimeout(()=>{
            deletePassword()
            clearIcons(deletePassword, i + 1)
        },35)

    }
}