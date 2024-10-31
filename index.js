function mostrarMenu() {
    document.getElementById("menu").style.display = 'none'
    document.getElementById("close").style.display = 'block'
    document.getElementById("opcoesMenu").style.position = 'fixed'
    document.getElementById("opcoesMenu").style.zIndex = '40'
    document.getElementById("opcoesMenu").style.width = '100%'
    document.getElementById("opcoesMenu").style.height = '300px'
    document.getElementById("opcoesMenu").style.display = 'flex'
    document.getElementById("opcoesMenu").style.flexDirection = 'column'
    document.getElementById("opcoesMenu").style.alignItems = 'start'
    document.getElementById("opcoesMenu").style.justifyContent = 'self-start'
}

function fecharMenu() {
    document.getElementById("main").style.overflow = 'auto'
    document.getElementById("close").style.display = 'none'
    document.getElementById("menu").style.display = 'block'
    document.getElementById("opcoesMenu").style.width = '0px'
    document.getElementById("opcoesMenu").style.height = '0px'
    document.getElementById("opcoesMenu").style.display = 'none'
}
