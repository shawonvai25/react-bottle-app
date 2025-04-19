
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const watches = [
    {id:1, name:'apple watch', price:200},
    {id:1, name:'samsung',price:200},
    {id:1, name:'MI watch', price : 200},

  ]


  return (
    <>
    <h2>
  The react Project
    </h2>

  {
    watches.map(watch => <Watch key={watch.id} watch={watch} ></Watch>)
  }
   
    </>
  ) 
}

export default App
