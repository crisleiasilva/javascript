function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//FullYear 4 dígitos do ano
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bebe-menino1.jpg')
            } else if ( idade < 25) {
                //jovem
                img.setAttribute('src', 'homem-jovem1.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto1.jpg')
            }else {
                // idoso
                img.setAttribute('src', 'homem-velho1.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher' 
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menina1.jpg')
            } else if ( idade < 24) {
                //jovem
                img.setAttribute('src','mulher-jovem1.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta1.jpg')
            }else {
                // idoso
                img.setAttribute('src','mulher-idosa1.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}