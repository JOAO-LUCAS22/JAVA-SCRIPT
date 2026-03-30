import { useState } from 'react'
import './style.css'

function InfoCurso() {
    const [nome, setNome] = useState("Programação de Aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState("Senai Dendezeiros")
    

    return (
        <div className='InfoCurso'>
            <h2>Dados do Curso:</h2>
            <p><strong>Curso:</strong>{nome}</p>
            <p><strong>Carga Horária:</strong>{cargaHoraria}</p>
            <p><strong>Local:</strong>{local}</p>
        </div>
    )
}

export default InfoCurso