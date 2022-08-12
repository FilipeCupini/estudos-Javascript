const destino = new Array(
    `Londrina`,
    `Curitiba`,
    `Maceió`,
    `Sao Paulo`
)

let cidade = `Rio de Janeiro`
console.log(destino)
console.log(`Adicionar ${cidade } a destinos `)
destino.push(`${cidade}`)
console.log(destino)
console.log(`Remover ` + destino.splice(1,1) +  ` dos destinos`)
console.log(destino)