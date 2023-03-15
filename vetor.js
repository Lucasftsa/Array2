let nome_cidade = []
let res = document.getElementById('res').innerHTML

function inserir(){
    let cidade = document.getElementById('cidade').innerHTML
    nome_cidade.push(cidade)
    console.log(nome_cidade)

}

function excluir(){
    let cidade = document.getElementById('cidade').innerHTML
    nome_cidade.pop(cidade)
    console.log(nome_cidade)

}