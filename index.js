// Função que recebe como parâmetros as vitórias e derrotas do jogador para definir o nível dele
function calculoDeNivel(vitorias=0, derrotas=0) {
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

// Chamada de função passando os argumentos referentes a vitórias e derrotas do jogador (argumentos podem ser alterados)
calculoDeNivel(209, 104)