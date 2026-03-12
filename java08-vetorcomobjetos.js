//vetor com nomes
const listadenomes = [{nome: "Ana"}, {nome: "Bruna"}, {nome: "Luiza"}, {nome: "Antony"}, {nome: "Marcos"}]

//vetor com numeros
const listadenumeros = [1, 2, 3, 4, 5]

const listadeusuarios = [
    {nome: "Ana", idade: 14},
    {nome: "Bruna", idade: 35},
    {nome: "Luiza", idade: 15},
    {nome: "Antony", idade: 45},
    {nome: "Marcos", idade: 17}]

console.log("Exibindo dados dos usuários do vetor.")
listadeusuarios.forEach(u => (
    console.log(`${u.nome} tem ${u.idade} anos.`),
    console.log("senai")
))

//como os antigos
for(let i = 0; i < listadeusuarios.length; i++) {
    console.log(`${listadeusuarios[i].nome} tem ${listadeusuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listadeusuarios.filter(u => u.idade >= 18)
maioridade.forEach(u =>
    console.log(`${u.nome} tem ${u.idade} anos.`),
    console.log("É maior de idade:")
)

console.log("\nFiltrando menores de 18")
const menoridade = listadeusuarios.filter(u => u.idade <= 18)
menoridade.forEach(u =>
    console.log(`${u.nome} tem ${u.idade} anos.`),
    console.log("É menor de idade:")
)

console.log("\nFiltrando lista de numeros.")
const pares = listadenumeros.filter( n => n % 2 === 0)
pares.forEach(n => {
    console.log(n)
})

console.log("\nFiltrando de nome, mostre apenas os nomes")
const nome =  listadenomes.map(u => u.nome)
nome.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nFiltrando usuários, mostre apenas o usuario desejado")
const usuarioencontrado = listadeusuarios.find(u => u.nome === "Bruna")
console.log(`Nome: ${usuarioencontrado.nome} \nIdade: ${usuarioencontrado.idade}`)

console.log("\nFiltrando usuários, mostre apenas o usuario desejado")
const usuarioidade = listadeusuarios.find(i => i.idade === 45)
console.log(`Nome: ${usuarioidade.nome} \nIdade: ${usuarioidade.idade}`)