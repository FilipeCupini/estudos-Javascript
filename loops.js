console.log(`Trabalhando com condicionais`)

const destinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18
const acompanhado = true
const cidade = `Salvador`
let contador = 0

console.log(`\nDestinos possíveis: `)
console.log(destinos)

const comprarPassagem = idadeComprador >= 18 || acompanhado == true

while (contador < destinos.length) {
    if (destinos[contador] == cidade){
        console.log(`O destino está disponível ${cidade}`)
        break
    } else {
        console.log(`Destino não disponível`)
    }
        


}