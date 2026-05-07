import {useState, useEffect} from 'react'

function CarteTache( {titre, terminee}) {

    let tag 
    if (terminee) {tag = 'Fait'}
    else {tag = 'En cours' }
    return (
        <div>
            <h3>Titre: {titre}</h3>
            <p>{tag}</p>
        </div>

    )
}

export default CarteTache