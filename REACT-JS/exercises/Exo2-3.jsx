import {useState} from 'react'

function App(){
const[estConnecte, setEstConnecte] = useState(true)
const[prenom, setPrenom] = useState('Andoniaina')
const[role, setRole] = useState('admin')

function SeConnecter(){
  setEstConnecte(true) 
}

function seDeconnecter(){
  setEstConnecte(false)
}

return (
  <div>
    {estConnecte ? (
      <div>
        <p>Bienvenue {prenom}, vous etes {role}</p>
        <button onClick={seDeconnecter}>Se deconnecter</button>
      </div>
    ) : (
      <div>
        <p>Acces refuse</p>
        <button onClick={SeConnecter}>Se connecter</button>
      </div>
    )}
  </div>
)
}

export default App