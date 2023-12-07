
function calcular() {

    var nome = window.document.getElementById('txtnome').value
    var tsald = window.document.getElementById('txsal')
    var dep = window.document.getElementById('txdep')
    var res = window.document.querySelector('div#res')
    var s1 = Number.parseFloat (tsald.value)
    var s2 = Number.parseFloat(dep.value)
    var total = s1 + s2
    res.innerHTML += ` Olá, ${nome} seu SALDO é de <strong> R$ ${total.toFixed(2)}</strong>`
    if (total < 400) {
        res.innerHTML += `<strong> SALDO BAIXO</strong> deposite valor maior`
   } else if (total > 400 && total <= 10000) {
       res.innerHTML += 'SALDO ALTO faça um investimento'
   // } else  {
      //  res.innerHTML = '<strong>CONTA BLOQUEADA</strong>'
    }  

    

        }


