console.log(`Trabalhando com condicionais`)

const destinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18
const acompanhado = true
const cidade = `Sao Paulo`

console.log(`\nDestinos possíveis: `)
console.log(destinos)
const comprarPassagem = idadeComprador >= 18 || acompanhado == true

// let contador = 0
let verificaDestino = false;

// while (contador < destinos.length) {                        Com while
//     if (destinos[contador] == cidade) {
//         console.log(`${cidade} está disponível`)
//         verificaDestino = true
//         break
//     } else {
//         console.log(`Destino não disponível`)
//     }
//     contador++
// }

for(let i = 0; i < destinos.length; i++) {
    if (destinos[i] == cidade) {
        console.log(`${cidade} está disponível`)
        verificaDestino = true        
    } else {
        console.log(`Destino não disponível`)
    }    
}

if(comprarPassagem && verificaDestino){
    console.log(`Boa viagem!!`)
} else {
    console.log(`Desculpa, você não pode viajar.`)
}

