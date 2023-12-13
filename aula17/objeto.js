let amiga = {nome:'Ana',
sexo:'F', 
peso:72.5,
engordar(p) {
    console.log('Engordou')
    this.peso += p
}
}

amiga.engordar(3)
/*console.log (`${amiga.nome} pesa ${amiga.peso}Kg` )*/ 