import { useState } from 'react'
import fancyPlant from './assets/fancy_plant_first_quickcropped.jpg'
import tigerLily from './assets/tiger_lily_quickcropped.jpg'
import waterplaceParkTree from './assets/waterplace_park_tree_japanese_lineart_quickcropped.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={fancyPlant} className="photo fancy" alt="Lineart outline drawing of a plant" />
        <img src={tigerLily} className="photo" alt="Drawing of a tiger lily" />
        <img src={waterplaceParkTree} className="photo fancy" alt="Lineart drawing of a tree" />
      </div>
      <h1>Adrian's Plant Art</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorum <code>more</code> Ipsum
        </p>
      </div>
      <p className="read-the-docs">
        Lorum Ipsum
      </p>
    </>
  )
}

export default App
