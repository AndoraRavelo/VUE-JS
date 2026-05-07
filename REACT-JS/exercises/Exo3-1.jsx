import {useState, useEffect} from 'react'
import CarteTache from './components/CarteTache'

function App() {
    const [taches, setTaches] = useState([
        {id:1, titre:"Apprendre React", terminee: true},
        {id:2, titre:"Faire des boucles", terminee: false},
        {id:3, titre:"Creer un composant", terminee: true}
    ])

    return(
        <ul>
             {taches.map((tache) => (
                <li key={tache.id}>
                    <CarteTache 
                    titre={tache.titre}
                    terminee={tache.terminee}
                    />
                </li>
             ))}
        </ul>

    )
}

export default App