import {useState} from 'react'

function App() {
  const [nom, setNom] = useState('Andoniaina')
  const [metier, setMetier] = useState('Developpeuse')
  const [passion, setPassion] = useState('Mikajy')

  return (
    <div style={{ color: 'blue', fontSize: '20px' }}>
      <p>Je m'appelle {nom},
        <br />
         je suis {metier},
         <br /> et j'aime {passion}</p>
    </div>
  )

}

export default App



