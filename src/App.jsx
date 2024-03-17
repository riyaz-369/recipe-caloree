import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCookBtn = (recipe) => {
    const newCook = [...wantToCook, recipe];
    setWantToCook(newCook);
  }

  return (
    <div className='max-w-[1320px] mx-auto my-8 font-lexend'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes handleWantToCookBtn = {handleWantToCookBtn} wantToCook={wantToCook}></Recipes>
    </div>
  )
}

export default App
