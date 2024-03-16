import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className='max-w-[1320px] mx-auto my-8 font-lexend'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  )
}

export default App
