import './index.css'

function Top (){
    return (
        <>
            <section className="topoPagina">
                <div className="nomeSite">
                    Learn Koi-Koi
                </div>

                <div className="images">
                    <img src="/janeiro/Hanafuda_January_Hikari.svg.png" key='1' className="carta" />
                    <img src="/janeiro/Hanafuda_January_Kasu_1.svg.png" key='2' className="carta" />
                    <img src="/janeiro/Hanafuda_January_Kasu_2.svg.png" key='3' className="carta" />
                    <img src="/janeiro/Hanafuda_January_Tanzaku.svg.png" key='4' className="carta" />
                </div>
            </section>
        </>
    )
}

export default Top;