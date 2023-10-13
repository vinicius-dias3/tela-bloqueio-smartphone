const passwordData = {
    msgErro: document.querySelector('.span'),
    passwordUser: document.querySelector('#password-user'),
    containerSenha: document.querySelector('.container-senha'),
    setPassword() {
        return new Promise((resolve, reject)=>{
            const savedPasswordUser = this.passwordUser.value
            const tamanhoSenhaUsuario = this.passwordUser.value.length
            if (tamanhoSenhaUsuario === 8) {
                this.containerSenha.classList.add('esconder')
                this.msgErro.classList.remove('mostrar')
                this.containerSenha.classList.remove('erro')
                console.log(`senha gravada do usuario: ${savedPasswordUser}`)
                console.log(`senha registrada pelo usuário com ${tamanhoSenhaUsuario} dígitos`)
                resolve()
            }
            if (tamanhoSenhaUsuario < 8 || tamanhoSenhaUsuario > 8) {
                this.msgErro.classList.add('mostrar-span')
                this.containerSenha.classList.add('erro')
                reject()
            }
            this.savedPasswordUser = savedPasswordUser
        })
    }
}

function getPasswordData(){
    return passwordData
}

export { passwordData, getPasswordData }