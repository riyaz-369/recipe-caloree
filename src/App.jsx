import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCookBtn = (recipes) => {
    const existRecipes = wantToCook.find(recipe => recipe.recipe_id  === recipes.recipe_id);
    if(!existRecipes){
      const newCook = [...wantToCook, recipes];
      setWantToCook(newCook);
    }else{
      toast.warning("Already Exist !");
    }
  }

  return (
    <div className='max-w-[1320px] mx-auto my-8 font-lexend'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes handleWantToCookBtn = {handleWantToCookBtn} wantToCook={wantToCook}></Recipes>
      <ToastContainer />
    </div>
  )
}

export default App
