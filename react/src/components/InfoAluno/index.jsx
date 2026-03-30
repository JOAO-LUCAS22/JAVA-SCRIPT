import './style.css'

function InfoAluno() {
    const nome = "João Lucas"
    const idade = 23
    const curso = "Desenvolvimento de sistemas"

    return (
        <div className='InfoAluno'>
            <h2>Informações do aluno: </h2>
            <p><strong>Nome:</strong>{nome}</p>
            <p><strong>Idade:</strong>{idade}</p>
            <p><strong>Curso:</strong>{curso}</p>
        </div>
    )
}

export default InfoAluno