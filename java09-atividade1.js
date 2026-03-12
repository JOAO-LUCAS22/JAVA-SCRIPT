const listadealunos = [
    {nome: "João", nota: 10.0},
    {nome: "Davi", nota: 9.5},
    {nome: "Maria", nota: 2.0},
    {nome: "Ariane", nota: 3.0},
    {nome: "Kaue", nota: 0.0}
]

console.log("\nFiltrando alunos e encontrando o aluno Davi.")
const alunoencontrado = listadealunos.find(u => u.nome === "Davi")
console.log(`Nome: ${alunoencontrado.nome} \nNota: ${alunoencontrado.nota}`)

console.log("\nSomando as notas dos alunos e tirando a media.")
const somanota = listadealunos.reduce((total, u) => total + u.nota, 0)
console.log(`Total: ${somanota}`)
console.log(`Média: ${(somanota) / 5}`)

console.log("\nFiltrando alunos e notas abaixo de 7.0.")
const menornota= listadealunos.filter(u => u.nota <= 7)
menornota.forEach(u =>
    console.log(`O aluno ${u.nome} tirou: ${u.nota}`),
    console.log("Abaixo da média:")
)

console.log("\nFiltrando alunos e notas abaixo de 7.0.")
const maiornota= listadealunos.filter(u => u.nota >= 7)
maiornota.forEach(u =>
    console.log(`O aluno ${u.nome} tirou: ${u.nota}`),
    console.log("Acima da média:")
)