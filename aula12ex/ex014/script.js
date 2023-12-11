function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 9
    msg.innerHTML =`Agora são ${hora} horas.`
    if(hora > 0 && hora < 12) {
        //Bom dia
        img.src = 'manhãok.jpg.jpg'
        document.body.style.background = '#e9cc4a'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tardeok.jpg.jpg'
        document.body.style.background ='#e98722'
    } else {
        //Boa noite
        img.src = 'noite.okjpg.jpg'
        document.body.style.background ='#1962af'
    }
}
