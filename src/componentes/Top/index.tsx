import { useState } from 'react';

import './index.css'
import imagens from "../../Imagens"


function Top (){

    const [month, setMonth] = useState(new Date().getMonth());

    return (
        <>
            <section className="topoPagina">
                <div className="nomeSite">
                    Learn Koi-Koi
                </div>

                <div className="images">
                    <img src={imagens[month][0]} key='1' className="carta" />
                    <img src={imagens[month][1]} key='2' className="carta" />
                    <img src={imagens[month][2]} key='3' className="carta" />
                    <img src={imagens[month][3]} key='4' className="carta" />
                </div>
            </section>
        </>
    )
}

export default Top;