import {useState, useEffect} from 'react'


function App() {
    const [recherche, setRecherche] = useState('')
    const [utilisateurs, setUtilisateurs] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUtilisateurs(data))
    }, [])

    const resultatsFiltres = utilisateurs.filter((user) => 
    user.name.toLowerCase().includes(recherche.toLowerCase()))

    return (
        <div>
            <input 
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            />
            <ul>
                {resultatsFiltres.map((users) =>
                <li key={users.name}>
                    {users.name}
                </li> 
                )}
            </ul>
        </div>
    )
}

export default App