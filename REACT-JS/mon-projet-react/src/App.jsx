import {useState, useEffect} from 'react'
import axios from 'axios'

function App(){
    const [posts, setPosts] = useState([])
    const [titre, setTitre] = useState('')

    const [editIf, setEditId] = 

    useEffect(() => {

        axios
            .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((response) => {
                setPosts((response.data))
            })
    }, [])

    const ajouterTache = async () => {

        const nouvelleTache = {
            title: titre
        }

        const response = await axios.post (
            'https://jsonplaceholder.typicode.com/posts',
            nouvelleTache
        )

        setPosts([...posts,
            {
                ...response.data,
                id: Date.now()
            } 
        ])

        setTitre('')
    }

    const supprimerTache = async (id) => {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        )
        const nouvelleListe = posts.filter(
            (post) => post.id !== id
        )

        setPosts(nouvelleListe)
    }

        const modifierTache = (id) => {

        const nouvelleListe = posts.map((post) =>
            post.id === id
                ? { ...post, title: 'Nouveau titre' }
                : post
        )

        setPosts(nouvelleListe)
    }
//     const modifierTache = async (id) => {

//         const objetModifiee = {
//             title: 'Nouveau titre'
//         }

//         const response = await axios.put(
//             `https://jsonplaceholder.typicode.com/posts/${id}`,
//             objetModifiee
//         )

//         const nouvelleListe = posts.map((post) => 
//             post.id === id
//                 ? response.data 
//                 : post
//         )
//         setPosts(nouvelleListe)
// }
    return (
        <div>

            <input
             type="text"
             value={titre}
             onChange={(e) => setTitre(e.target.value)}
            />
            <button onClick={ajouterTache}>
                Ajouter
            </button>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}

                        <button onClick={() => supprimerTache(post.id)}>
                            Supprimer
                        </button>
                        <button onClick={() => modifierTache(post.id)}>
                             Modifier 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App