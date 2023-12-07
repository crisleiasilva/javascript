function calcular() {
    var tnome = window.document.getElementById('txtnome')
    var tsald = window.document.getElementById('txsal')
    var dep = window.document.getElementById('txdep')
    var res = window.document.querySelector('div#res')
    var s1 = Number (tsald.value)
    var s2 = Number(dep.value)
    var total = s1 + s2
    res.innerHTML = `Olá, ${tnome} Seu Saldo Atual é de <strong> ${total}</strong>`
    
    
   

}