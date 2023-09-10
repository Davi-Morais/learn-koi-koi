import { useState } from "react";
import "./index.css"

type opcao = {
    chave: number,
    valor: string,
    correta?: string
}

type typeQuiz = {
    pergunta: string,
    opcoes: Array<opcao>,
    resposta: number,
}

interface QuizOpcoes {
    opcoes: Array<opcao>,
    onOptionClick: (o:opcao) => void;
}

interface QuizProps {
    quiz: typeQuiz
}


function Opcoes({opcoes, onOptionClick}:QuizOpcoes) {

    function retornarOpcoes(opcoes:Array<opcao>) {
        return opcoes.map((o) => {
            return (
                <div className={`divOpcoes ${o.correta}`} key={o.chave} >
                    <li onClick={() => onOptionClick(o)} >
                        {o.valor}
                    </li>
                </div>
            )
        })
    }

    return (
        <>
            {retornarOpcoes(opcoes)}
        </>
    )
}


function Quiz({quiz}:QuizProps){

    const [opcoes, setOpcoes] = useState(quiz.opcoes);

    function handleOptionClick(o:opcao) {
        let resultado = (o.chave === quiz.resposta) ? "correta" : "errada";

        let copyOpcoes = quiz.opcoes.slice();

        setOpcoes(copyOpcoes.map((e) => {
            if (e.chave === o.chave) {
                return {
                    ...e, correta: resultado
                }
            }
            return e
        }))
        
        console.log(resultado)
    }

    return (
        <>
            <div className="quiz">
                <h3 className="quiz_pergunta">{quiz.pergunta}</h3>
                <ul className="opcoes">
                    <Opcoes opcoes={opcoes} onOptionClick={handleOptionClick} />
                </ul>
            </div>
        </>
    )
}

export default Quiz

