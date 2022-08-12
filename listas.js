console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `Sao Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const destinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
)

destinos.push(`Londrina`)

console.log(`Destinos possíveis: `)
console.log(destinos)

destinos.splice(1,1) //Excluir da lista
console.log(destinos)

console.log(destinos[1], destinos[0])