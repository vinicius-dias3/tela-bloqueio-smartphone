const passwordData = {
    msgErro: document.querySelector('.span'),
    senhaUsuario: document.querySelector('#senha-usuario'),
    containerSenha: document.querySelector('.container-senha'),
    setPassword() {
        const senhaUsuarioGravada = this.senhaUsuario.value
        const tamanhoSenhaUsuario = this.senhaUsuario.value.length
        if (tamanhoSenhaUsuario === 8) {
            this.containerSenha.classList.add('esconder')
            this.msgErro.classList.remove('mostrar')
            this.containerSenha.classList.remove('erro')
            console.log(`senha gravada do usuario: ${senhaUsuarioGravada}`)
            console.log(`senha registrada pelo usuário com ${tamanhoSenhaUsuario} dígitos`)
        }
        if (tamanhoSenhaUsuario < 8 || tamanhoSenhaUsuario > 8) {
            this.msgErro.classList.add('mostrar-span')
            this.containerSenha.classList.add('erro')
        }
        this.senhaUsuarioGravada = senhaUsuarioGravada
    }
}

function getPasswordData(){
    return passwordData
}

export { passwordData, getPasswordData }