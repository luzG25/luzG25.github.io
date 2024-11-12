var descrip = {
    'miniatura1':'Caixão 10000Km', 
    'miniatura2':'Caixão de Luxo', 
    'miniatura3':'Caixão para Prigosa', 
    'miniatura4':'Caixão de  3ª Mão', 
    'miniatura5':'Caixão para Maconheiro', 
    'miniatura6':'Caixão para Confusent', 
    'miniatura7':'Produto', 
    'miniatura8':'Produto',
    'miniatura9':'Produto',
    'miniatura10':'Produto',
    'miniatura11':'Produto',
    'miniatura12':'Produto',
    'miniatura13':'Produto',
    'miniatura14':'Produto'
}

var values = {'painel_nov_produtos': 7, 'produtos_mais_vendidos': 7}

function load(c, place) {
    let camada1 = document.createElement('li')
    let camada2 = document.createElement('a')
    let camada3 = document.createElement('figure')
    let camada4 = document.createElement('img')
    let camada5 = document.createElement('figcaption')

    let min = `miniatura${c}`
    camada5.innerHTML = `${descrip[min]}` //descrip[`miniatura${c}`]
    camada4.src = `img/produtos/miniatura${c}.jpg`
    camada4.alt =  `miniatura${c}`
    camada2.href = `produto${c}.html`
    
    camada3.appendChild(camada4)
    camada3.appendChild(camada5)
    camada2.appendChild(camada3)
    camada1.appendChild(camada2)
    place.appendChild(camada1)
}

function product_load(local) {
    let place = document.getElementById(local)
    for (let c = 1; c < 7; c++) {load(c, place)}
}

function mostrar_mais(local){

    //console.log('mostar mais')
}