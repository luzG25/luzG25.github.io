function show_tamanho() {
    var inTamanho = document.querySelector('[id=tamanho]')
    var outTamanho = document.querySelector('[name=valortamanho]')
    outTamanho.value = inTamanho.value
}

function total() {
    var in_quantidade = document.querySelector("[nome=qtd]")
    var out_total = document.querySelector("#total")

    var preco = document.querySelector("#preco").textContent
    preco = preco.replace("R$ ", "")
    preco = parseFloat(preco)

    var total = in_quantidade.value * preco
    total = "R$ " + total.toFixed(2)
    total = total.replace(".", ",")

    out_total.value = total
}