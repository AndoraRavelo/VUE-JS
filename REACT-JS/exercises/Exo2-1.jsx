import {useState} from 'react'

function App() {
  const [compteur, setCompteur] = useState(0)

  function incrementer(){
    setCompteur (compteur + 1)
  }

  function reinitialiser(){
    setCompteur(0)
  }

  function decrementer(){
    if (compteur === 0) return
      setCompteur (compteur - 1)
  }

  let message 
  if(compteur === 0) {message = 'Commence a cliquer'}
  else if (compteur >= 10) {message = 'Bravo, tu as atteint 10!'}
  else { message= 'Continue...'}

  return(
    <div>
      <h1>Compteur: {compteur}</h1>
      <button onClick={incrementer}>Ajouter</button>
      <button onClick={decrementer}>Retirer</button>
      <button onClick={reinitialiser}>Reinitialiser</button>

      <p>{message}</p>
    </div>
  )
}

export default App