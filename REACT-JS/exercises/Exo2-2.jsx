import {useState} from 'react'

function App() {
  const [temperature , setTemperature] = useState(25)

  let meteo
  if (temperature < 0) { meteo = 'Temperature negatif '}
  else if(temperature === 0 ) {meteo = 'Temperature est a 0'}
  else {meteo = 'Temperature positif'}

  return (
    <div>
      <h1>Temperature : {temperature}</h1>
      <button onClick={() => setTemperature(temperature - 10 )}>Temperature -10</button>
      <button onClick={() => setTemperature(temperature - 5 )}>Temperature -5</button>
      <button onClick={() => setTemperature(temperature + 5 )}>Temperature +5</button>
      <button onClick={() => setTemperature(temperature + 10 )}>Temperature +10</button>

      <p>{meteo}</p>
    </div>
  )
}

export default App