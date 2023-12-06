function calcular() {
    var tnome = window.document.querySelector('')
    var tsald = window.document.getElementById('txsal')
    var dep = window.document.getElementById('txdep')
    var res = window.document.getElementById('res')
    var s1 = Number (tsald.value)
    var s2 = Number(dep.value)
    var total = s1 + s2
    res.innerHTML = `${txtnome} Seu Saldo Atual é de <strong> ${total}</strong>`
    
    
   

}