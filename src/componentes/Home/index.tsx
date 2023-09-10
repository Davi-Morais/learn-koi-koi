import Quiz from "../Quiz";

import dados from "./Home.json" //importar o arquivo json correspondente

function Home () {

    return (
        <>
            <article>
                <h1>Aprenda a jogar Koi Koi</h1>

                <p>Primeiramente, eu gostaria de informar que este site foi feito com apenas dois objetivos em mente:</p>
                <ul>
                <li>Desenvolver as minhas skills como programador.</li>
                <li>Testar os meus conhecimentos sobre esse jogo de cartas que talvez você esteja interessado.</li>
                </ul>

                <p>Sobre o primeiro ponto, bom, este é o meu primeiro projeto pessoal que eu realmente quero que vá para frente. </p>

                <p>Talvez ninguém na face da terra precise usar esse site para aprender a jogar Koi-Koi. Na verdade, o melhor jeito de aprender é jogando, claro. Mesmo assim, planejo dar continuidade a esse site sempre que tiver tempo livre, quero entregar para mim mesmo o melhor resultado possível, além de aprender com todos os erros e más escolhas que eu fizer por aqui.</p>

                <p>Sobre o segundo ponto, também não sou especialista em Koi-Koi, na verdade, comecei a jogar a pouco tempo(2023), em um app da Play Store. Não sei o nome de todas as cartas e combinações possíveis, muito menos das melhores estratégias (que eu vou ter que pesquisar muito daqui pra frente, lol), mas pretendo mudar essa realidade enquanto desenvolvo.</p>

                <p>A minha ideia inicial é construir uma página para cada tópico que eu achei mais importante para o jogo. Vou tentar colocar alguns quizes no final de cada página, como uma espécie de teste, para isto não ser uma experiência de somente leitura. Na verdade, os quizes são mais para me desafiar em conseguir fazê-los.</p>

                <p>Por último, se você também for desenvolvedor, e não tiver absolutamente nada melhor para fazer, considere apoiar este projetinho dando sugestões de como seria uma melhor forma de fazer tal coisa, ou mesmo fazendo um pull request!</p>

                <p>Acho que é só isso por enquanto, "Stop"!</p>
            </article>

            <Quiz quiz={dados} />

        </>
    )
}

export default Home;