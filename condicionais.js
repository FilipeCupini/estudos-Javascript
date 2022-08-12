console.log(`Trabalhando com condicionais`)

const destinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)

// destinos.push(`Londrina`)
const idadeComprador = 18
const acompanhado = true

console.log(`Destinos possíveis: `)
console.log(destinos)

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade!!`)
//     destinos.splice(1, 1)
// } else if (acompanhado) {
//     console.log(`Comprador está acompanhado!!`)
//     destinos.splice(1, 1)
// } else {
//     console.log(`Não podemos vender para menor de idade sem acompanhantes`)
// }

if (idadeComprador >= 18 || acompanhado) {
    console.log(`Comprador maior de idade ou acompanhado!!`)
    destinos.splice(1, 1)
} else {
    console.log(`Não podemos vender para menor de idade sem acompanhantes`)
}
console.log(destinos)


const passagem = false


console.log(`Embarque: \n`)
if(idadeComprador >= 18 && passagem || acompanhado && passagem) {
    console.log(`Boa viagem!`)
}else {
    console.log(`Você não pode embarcar`)
}



// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)