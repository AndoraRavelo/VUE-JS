import {useState, useEffect} from 'react'

function App(){
    const[posts, setPosts] = useState([])
    const [titre, setTitre] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])


    const ajouterTache = async () => {
        const nouvelleTache ={
            title: titre
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(nouvelleTache)
        })

        if(response.ok) {
            const nouvelObjet = await response.json()
            setPosts([...posts, nouvelObjet])
            setTitre('')
        }
    }

    const supprimerTache = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })

        if(response.ok) {
            const nouvelleListe = posts.filter((u) => u.id !== id)
            setPosts(nouvelleListe)
        }
    } 

    return (
        <div>
            <input
             type="text"
             value={titre}
             onChange= {(e) => setTitre(e.target.value)} 
             />

             <button onClick={ajouterTache}>
                Ajouter
             </button>
            <ul>
                {posts.map((post) => 
                <li key={post.id}>
                    {post.title}
                    <button onClick={() => supprimerTache(post.id)}>Supprimer</button>
                </li>
            )}
            </ul>
        </div>
    )
}

export default App