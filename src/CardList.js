import React from 'react';
import Card from './Card';

/*map function per ciclare su user e l'indice */
/*key altrimenti il dom di react non riesce a tenere traccia delle img*/
/*return sempre con () in quanto abbiamo più righe di codice*/
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                    );
                })
            }
        </div>
    );
}    

export default CardList;
