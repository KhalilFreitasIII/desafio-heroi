function rankeamentoJogador (vitorias,derrotas){
    let saldoVitorias = vitorias-derrotas
    let dados = ["",saldoVitorias]
    if (saldoVitorias<10)
        dados[0]="Ferro"
    else if (saldoVitorias<=20)
        dados[0] = "Bronze"
    else if (saldoVitorias<=50)
        dados[0] = "Prata"
    else if (saldoVitorias<=80)
        dados[0] = "Ouro"
    else if (saldoVitorias<=90)
        dados[0] = "Diamante"
    else if (saldoVitorias<=100)
        dados[0] = "Lendário"
    else
        dados[0] = "Imortal"
    return dados
}

let heroi = rankeamentoJogador(140,30)
let nivel = heroi[0]
let saldoVitorias = heroi[1]
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)