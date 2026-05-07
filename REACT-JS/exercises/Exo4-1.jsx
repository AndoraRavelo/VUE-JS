import {useState, useEffect} from 'react'


function App() {
    const [recherche, setRecherche] = useState('')

    return (
        <div>
            <input
             type="text"
             value= {recherche}
             onChange={(e) => setRecherche(e.target.value)}
             />

             <p>Vous rechercher l'utilisateur: {recherche}</p>
        </div>
    )
}

export default App