import React from "react";

/* className= stili css con tachyons 
nella dichiarazioni delle variabili nella funzione Card
destrutturizziamo le props.*/

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt ='robots' src={`https://robohash.org/${id}?size=200x200`} /> {/*utlizzare `*/}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

/*se nella parte di "HTML" dobbiamo utilizzare del codice
JavaScript, lo racchiudiamo in {}*/