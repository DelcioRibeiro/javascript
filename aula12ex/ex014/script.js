function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getUTCHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/foto_manha.png'
        document.body.style.background = '#fcd27b'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/foto_tarde.png'
        document.body.style.background = '#a55234'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto_noite.png'
        document.body.style.background = '#4a3d37'
    }
}