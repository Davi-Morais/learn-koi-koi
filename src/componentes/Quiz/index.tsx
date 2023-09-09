type opcao = {
    chave: number,
    valor: string
}

type typeQuiz = {
    pergunta: string,
    opcoes: Array<opcao>,
    resposta: string,
}

function Quiz(props:any){

    const quiz:typeQuiz = props.quiz;

    const opcoes:Array<any> = []
    quiz.opcoes.map(o => {
        opcoes.push(<li key={o.chave}>{o.valor}</li>);
    })

    return(
        <>
            <section className="quiz">
                <p className="pergunta">{quiz.pergunta}</p>
                <ul className="opcoes">
                    {opcoes}
                </ul>
                <div className="submit">Submit</div>
            </section>
        </>
    )
}

export default Quiz

