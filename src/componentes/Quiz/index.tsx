//import "./index.css"
type opcao = {
    chave: number,
    valor: string
}

type typeQuiz = {
    pergunta: string,
    opcoes: Array<opcao>,
    resposta: number,
}


interface QuizOpcoes {
    opcoes: Array<opcao>
}
function Opcoes({opcoes}:QuizOpcoes) {

    function retornarOpcoes(opcoes:Array<opcao>) {
        return opcoes.map((o) => {
            return <li key={o.chave}>{o.valor}</li>
        })
    }

    return (
        <>
            {retornarOpcoes(opcoes)}
        </>
    )
}



interface QuizProps {
    quiz: typeQuiz
}
function Quiz({quiz}:QuizProps){

    return (
        <>
            <div className="quiz">
                <h3 className="quiz_pergunta">{quiz.pergunta}</h3>
                <ul className="opcoes">
                    <Opcoes opcoes={quiz.opcoes} />
                </ul>
            </div>
        </>
    )
}

export default Quiz

