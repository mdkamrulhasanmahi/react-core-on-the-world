
import { Suspense } from 'react'
import './App.css'
import Bottels from './component/Bottles/Bottels'

function App() {
  
  const allbottels=fetch('./water.json')
  .then(res=>res.json())


  

  return (
    <>
    <Suspense fallback={<h1>hello ahi ...................</h1>}>
       <Bottels allbottels={allbottels}></Bottels>
    </Suspense>
     
      <div>
        <h1></h1>
      </div>
  
    </>
  )
}

export default App
